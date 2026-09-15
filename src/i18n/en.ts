/**
 * Default locale. Other locales have to match the type of this object, so a
 * missing key fails the build (see src/i18n/ko.ts).
 *
 * No sentences here. Labels, units and table headings only — if something needs
 * explaining, make it a table or a legend, not a paragraph.
 */
export const en = {
  htmlLang: 'en',
  /** Open Graph locale tag for this dictionary. */
  ogLocale: 'en_US',
  /** BCP-47 tag handed to Intl.NumberFormat. */
  numberLocale: 'en-US',
  /**
   * Ladder used to shorten numbers on axis ticks and bar labels, largest
   * threshold first. Locales group digits differently — a Korean dictionary
   * would list eok (1e8) and man (1e4) here instead.
   */
  compactScale: [
    { at: 1_000_000_000, suffix: 'B' },
    { at: 1_000_000, suffix: 'M' },
    { at: 1_000, suffix: 'K' },
  ] as { at: number; suffix: string }[],
  title: 'NXPC circulation',
  description: 'NXPC circulating supply and bridged amount, read from public RPCs on every load.',
  brand: 'NXPC Supply',

  langName: 'English',
  themeLabel: { light: 'Theme: light', dark: 'Theme: dark' },

  notice: {
    badge: 'Placeholder',
    wallets: 'wallets',
    history: 'history.csv',
  },

  nav: { supply: 'Supply', addresses: 'Addresses' },

  seg: {
    items: 'Includes',
    addresses: 'Addresses',
    attributed: 'Known holders',
    chainNote: 'Route',
    live: 'live',
    fromDoc: 'doc',
    ofTotal: 'of max supply',
    ofCirculating: 'of circulating supply',
    holder: 'Holder',
    status: 'Status',
    chain: 'Chain',
  },

  addr: {
    title: 'Contract & wallet addresses',
    description: 'Contract and wallet addresses with their on-chain balances.',
    count: 'entries',
    countLabel: 'Entries',
    summary: '{n} entries · {c} contracts · {e} EOAs',
    perCat: 'Entries',
    contracts: 'contracts',
    eoas: 'EOAs',
    totalHeld: 'Total balance',
    colLabel: 'Label',
    colType: 'Type',
    colChain: 'Chain',
    colAddress: 'Address',
    colBalance: 'Balance (NXPC)',
    colToken: 'Token',
    typeContract: 'contract',
    typeEoa: 'EOA',
    filterAll: 'All',
    filterContract: 'Contracts',
    filterEoa: 'EOAs',
    copy: 'Copy',
    copied: 'Copied',
    excludeNonCirc: 'Exclude non-circulating',
    notCounted: '* not in the total',
    notCountedWhy: 'Collateral behind a token that circulates elsewhere — counting both would count the same supply twice',
    notRead: 'no read',
    notReadWhy: 'the RPC for this chain did not answer',
    cat: {
      bridge: 'Bridge',
      vault: 'Vault',
      treasury: 'Treasury',
      ops: 'Ops',
      token: 'Token',
      infra: 'Infra',
    },
    sortBalance: 'Balance',
    sortLabel: 'Label',
  },

  rpc: { connecting: 'connecting', failed: 'RPC failed', behind: 'behind baked', latest: 'latest', live: 'live' },

  page: {
    title: 'NXPC circulation',
    lede:
      "NXPC is the native token of the MapleStory Universe ecosystem. It is used to pay network fees, is exchangeable with NFT collections through NXPC Fission and Item Fusion, and is distributed to contributors on a gradually decreasing schedule (inspired by Bitcoin's halving model). Maximum supply is capped at 1 billion.",
  },

  learn: {
    heading: 'Learn more about',
    /**
     * Wordmarks, no captions — the marks are the label. `label` is still carried for
     * the accessible name, since an image-only link is otherwise unreadable to a
     * screen reader. `logo` names a pair of files in public/logos (…svg and …-inv.svg)
     * and `ratio` is that artwork's own aspect, which lets all three sit at one height.
     */
    links: [
      { label: 'NEXPACE', href: 'https://nexpace.io/', logo: 'nexpace', ratio: 5.583 },
      { label: 'MapleStory Universe', href: 'https://msu.io/', logo: 'msu', ratio: 3.104 },
      { label: 'MapleStory N', href: 'https://msu.io/maplestoryn', logo: 'msn', ratio: 4.667 },
    ],
  },

  hero: {
    eyebrow: 'Circulating supply',
    unit: 'NXPC',
    ofTotal: 'of max supply',
    exVault: 'ex. NXPCRecycleVault',
  },


  tier: {
    burn: 'Burned',
    locked: 'Reward pool · undistributed',
    vesting: 'Vesting · IP, team & advisors',
    fusion: 'Fusion reserve',
    bridge: 'Bridged via Warp',
    treasury: 'Treasury',
    wrapper: 'Wrapped collateral',
    ecosystem: 'Ecosystem fund',
    ops: 'Operational wallets',
    circulating: 'Circulating',
  },
  term: {
    freeFloatHenesys: 'Free float · Henesys',
    freeFloat: 'Free float',
    maxSupply: 'Max supply',
    burned: 'Burned',
    nonCirculating: 'Non-circulating',
    circulating: 'Circulating supply',
  },

  tile: { fixedCap: 'Fixed cap' },

  pieMode: {
    label: 'Scope',
    all: 'All',
    byChain: 'By chain',
    circOnly: 'Circulating',
  },
  section: {
    breakdown: 'Supply distribution',
    barCaption: 'Full width = max supply',
    trend: 'Circulating supply history',
    bridge: 'Bridged NXPC',
    method: 'Methodology',
  },

  chart: {
    totalIssuedLine: 'Max supply',
    gapLabel: 'Non-circulating',
    clamped: '<1%, enlarged',
    handoverRight: 'daily snapshot →',
    handoverLeft: '← daily snapshot',
    legendCirculating: 'Circulating',
    legendCap: 'Max supply',
    legendGap: 'Non-circulating',
    /* The two halves of the line differ by where the point came from, not how often
       it was taken — both sides are one point a day. Dashed is reconstructed from
       archive reads, solid is what the cron measured on the day. */
    uploaded: 'Reconstructed',
    daily: 'Daily snapshot',
    days: 'd',
    handoverAt: 'daily snapshots since',
    gapWarn: 'missing days',
  },



  range: { d30: '30D', d90: '90D', y1: '1Y', all: 'All' },

  bridge: {
    current: 'Bridged now',
    ofCirculating: 'of circulating supply',
    spark: 'last 180d',
    l1: 'Henesys L1',
    l1Sub: 'native gas token',
    cchain: 'Avalanche C-Chain',
    cchainSub: 'C_NXPC ERC-20 · 18',
  },

  table: {
    category: 'Category',
    holder: 'Holder',
    address: 'Address',
    balance: 'Balance (NXPC)',
    share: 'Share',
    inPolicy: 'Policy',
    inStrict: 'Strict',
    counted: 'Circulating',
    tagCounted: 'counted',
    tagExcluded: 'excluded',
    tagBurned: 'burned',
    filterAll: 'All',
    filterCounted: 'Counted',
    filterExcluded: 'Excluded',
    summary: '{shown} rows · {counted} counted · {excluded} excluded · {burned} burned',
    readFailed: 'read failed',
  },

  method: {
    formula: 'Circulating supply = Max supply − Burned − Reward pool − Vesting',
    formulaStrict:
      'Free float = Circulating supply − Fusion reserve − Bridged via Warp − Treasury − Wrapped collateral − Ecosystem fund − Ops',
    endpoint: 'Endpoint',
    chainId: 'Chain ID',
    multicall: 'Multicall3',
    call: 'Call',
    callValue: 'aggregate3 · one eth_call',
    maxSupplyNote: 'fixed constant · no totalSupply() (native gas token)',
    scopeHead: { bucket: 'Deduction', inTotal: 'In circulating', inCirculating: 'In free float' },
    scope: {
      reserve: 'Foundation · vesting · vault · ops',
      bridge: 'Bridged via Warp',
      burned: 'Burned (zero address)',
    },
    seriesHead: { part: 'Segment', source: 'Source', by: 'By' },
    series: {
      past: 'Past',
      pastSource: 'history.csv',
      pastBy: 'manual upload',
      now: 'Present',
      nowSource: 'daily 00:00 UTC',
      nowBy: 'GitHub Actions',
      future: 'Future',
      futureSource: 'snapshots/*.json',
      futureBy: 'accumulates',
    },
  },

  foot: {
    snapshot: 'Snapshot',
    block: 'block',
    freshness: 'Freshness',
    build: 'BUILD',
    fresh: 'FRESH',
    liveNow: 'LIVE',
    bakedAge: 'built',
    stale: 'STALE',
    ago: 'ago',
    min: 'm',
    hour: 'h',
    rpcCheckFailed: 'RPC check failed',
    disclaimerK: 'Disclaimer',
    disclaimer: [
      'This page is for informational purposes only and is not investment, financial, legal or tax advice, or an offer or recommendation regarding NXPC. Nothing here is a statement about the price or value of NXPC.',
      'Figures are read from on-chain data when the page is loaded and may differ from those shown by exchanges or data providers. Wallet categories are based on the NXPC Whitepaper, but this page does not amend it.',
      'Listed addresses are not exhaustive. Tokens in any listed address, including non-circulating ones, may be transferred, sold or otherwise used in line with the Whitepaper, and may be reclassified.',
      'The methodology, classifications and figures may change without notice. All information is provided "as is" without warranty, and NEXPACE accepts no liability for any reliance on it, to the fullest extent permitted by law.',
    ],
  },
};

export type Dict = typeof en;
