import { custom } from 'viem';
import { henesys } from './chain';

/**
 * Henesys through Routescan's Etherscan-compatible API — for the server-side reads
 * only, the build and the daily snapshot. The browser keeps reading the public RPC.
 *
 * The public RPC turns away automated clients on cloud networks, which is where CI
 * runs. Routescan forwards eth_call and eth_getBlockByNumber to a Henesys node:
 * checked 2026-11-24, both return the same head and the same balances as the public RPC.
 *
 * Its constraints, measured 2026-11-24:
 * - GET only. A POST is answered with "Invalid querystring request".
 * - The query string has a ceiling: 12,000 characters of calldata pass, 16,000 get
 *   HTTP 431. ROUTESCAN_CHUNK keeps an aggregate3 under it.
 * - Responses are cached at the edge by URL, for minutes to hours (eth_blockNumber
 *   came back 6,104 seconds old). Every request carries a unique `nonce` parameter,
 *   so a daily read is never served an earlier answer.
 * - eth_call takes `latest` only; a block number is rejected.
 */
export const ROUTESCAN_API = 'https://api.routescan.io/v2/network/mainnet/evm/68414/etherscan/api';

/**
 * aggregate3 entries per request. An entry encodes to about 448 hex characters, so
 * 20 lands near 9,000 — under the ceiling above with room to spare.
 */
export const ROUTESCAN_CHUNK = 20;

/** Spacing between requests, to stay well inside the free tier. */
const GAP_MS = 500;
const TRIES = 4;

let last = 0;
let seq = 0;

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

async function get(params: Record<string, string>): Promise<unknown> {
  let err: unknown;
  for (let i = 0; i < TRIES; i++) {
    const wait = last + GAP_MS - Date.now();
    if (wait > 0) await sleep(wait);
    last = Date.now();

    const query = new URLSearchParams({ ...params, nonce: `${Date.now()}-${seq++}` });
    try {
      const res = await fetch(`${ROUTESCAN_API}?${query}`, { signal: AbortSignal.timeout(20_000) });
      const text = await res.text();
      let body: { result?: unknown; error?: { message?: string }; status?: string; message?: string } = {};
      try {
        body = JSON.parse(text);
      } catch {
        // not JSON — an HTTP error page; the status below says what happened
      }
      // A proxy call answers in JSON-RPC shape; an API-level refusal comes as status "0".
      if (res.ok && body.error === undefined && body.status !== '0' && body.result !== undefined) {
        return body.result;
      }
      const detail = body.error?.message ?? (typeof body.result === 'string' ? body.result : text.slice(0, 120));
      err = new Error(`routescan ${params.action}: HTTP ${res.status} ${detail}`);
    } catch (e) {
      err = e;
    }
    if (i < TRIES - 1) await sleep(1000 * 2 ** i);
  }
  throw err;
}

/** viem transport over the API above. Answers only what the server-side reads send. */
export const routescan = () =>
  custom(
    {
      async request({ method, params }) {
        const p = (params ?? []) as unknown[];
        switch (method) {
          // The API path names chain 68414, so the answer is fixed by the URL.
          case 'eth_chainId':
            return `0x${henesys.id.toString(16)}`;
          case 'eth_call': {
            const [tx, tag] = p as [{ to: string; data: string }, string | undefined];
            if (tag !== undefined && tag !== 'latest') {
              throw new Error(`routescan: eth_call at ${tag} is not supported`);
            }
            return get({ module: 'proxy', action: 'eth_call', to: tx.to, data: tx.data, tag: 'latest' });
          }
          case 'eth_getBlockByNumber': {
            const [tag, full] = p as [string, boolean | undefined];
            return get({ module: 'proxy', action: 'eth_getBlockByNumber', tag, boolean: String(Boolean(full)) });
          }
          default:
            throw new Error(`routescan: ${method} is not supported`);
        }
      },
    },
    { retryCount: 0 },
  );
