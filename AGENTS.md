# Pelak — notes for AI coding tools

A link page on one Cloudflare Worker with static assets. No framework, no build step.

**License:** PolyForm Strict with `LICENSE-PERMISSIONS.md`. For someone's own page edit only `site.config.js`, `wrangler.jsonc`, `public/logo.png`, `public/og.png` and `public/tips.js`. Change other files only for a pull request to this repository or with permission from PDNC. Keep the license files.

| Path | What |
|---|---|
| `site.config.js` | All personal settings. Public, so no secrets here |
| `src/worker.js` | Routes, API, KV, cron, Telegram bot. Fills the HTML templates from the config |
| `src/home.html`, `src/overlay.html`, `src/404.html` | Templates with `{{key}}` placeholders (see `renderHome` / `handleOverlay` / `fill`) |
| `public/` | Served as is: `style.css`, `app.js`, `grid.js`, `tips.js`, `world-map.js`, `logo.png`, `og.png` |
| `wrangler.jsonc` | KV binding `STATS_KV`, cron every minute, assets folder |

- The browser gets its settings from `window.SITE` (`clientSite()` in the worker). `off('part')` in `app.js` tells if a part is off; CSS hides it with `.off-<part>` on `<body>`.
- Values put into HTML go through `escHtml`, values put into a script go through `scriptJson`.
- Texts exist in `fa` and `en` (`I18N` in `app.js`). Add both. The page is RTL in Persian: use logical CSS properties (`inset-inline-start`, `margin-inline-end`).
- KV free plan: 1,000 writes a day. Do not write on every request; see `trackClick`.
- Workers: never share a promise between requests. `memo()` caches values only.
- Bot texts are in Persian.
- Before finishing: `npm run check`, then `npm run dev` and look at `/`, `/?lang=en` and `/overlay?demo=1`.
