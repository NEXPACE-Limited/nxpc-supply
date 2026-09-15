// @ts-check
import { defineConfig } from 'astro/config';

// GitHub Pages project page: https://nexpace-limited.github.io/nxpc-supply
// Changing base drags every internal link and asset path along with it.
export default defineConfig({
  site: 'https://nexpace-limited.github.io',
  base: '/nxpc-supply',
  // The default locale sits at the root with no prefix; the rest go under /ko/.
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ko'],
    routing: { prefixDefaultLocale: false },
  },
  trailingSlash: 'ignore',
  build: { format: 'directory' },
  devToolbar: { enabled: false },
});
