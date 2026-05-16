# iyasin.com — Astro

Static-first personal site. The whole page is server-rendered HTML; only the
live clock, cursor readout, and ⌘K palette ship JS (React islands).

## Run

```sh
npm install
npm run dev          # http://localhost:4321
npm run build        # → dist/
npm run preview      # serve the built site
```

## Where things live

```
src/
├── content/site.ts        ← all copy, links, work, writing — edit here
├── layouts/Base.astro     ← <html> shell, fonts, global CSS
├── pages/index.astro      ← the whole layout, server-rendered
├── styles/global.css      ← palette tokens (--ink, --accent, ...) + reset
└── components/
    ├── SectionH.astro     ← "# bio", "# work" headers
    ├── WorkItem.astro     ← one work row
    ├── BioParagraph.astro ← bio paragraph with inline links
    ├── Ticker.tsx         ← live location · time (React island)
    ├── Cursor.tsx         ← live mouse coords (React island)
    └── CmdK.tsx           ← ⌘K command palette (React island)
```

## Re-theming

The palette is CSS custom properties in `src/styles/global.css`. Change
`--accent` (currently cobalt `#1e4eea`) to retheme the whole site.

## Deploy

Static site — drop `dist/` on Cloudflare Pages / Vercel / Netlify / GitHub
Pages. No server needed.
