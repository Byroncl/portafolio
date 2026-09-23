# Byron Calderón — Portfolio

Personal portfolio built with Astro. Monochrome (black & white) design with light/dark themes, scroll-reveal animations, and accessible, responsive markup.

## Stack

- [Astro 5](https://astro.build) — static site, zero JS by default
- [astro-icon](https://www.astroicon.dev/) with Simple Icons + Lucide sets
- Vanilla CSS with design tokens (no framework)
- Fonts: Space Grotesk (display), Inter (body), JetBrains Mono (accents)

## Structure

```
src/
  i18n/ui.ts           # Locale dictionary (es/en) and helpers
  data/cv.ts           # All CV content, bilingual (single source of truth)
  data/flows.ts        # Interactive system-flow diagram definitions
  styles/global.css    # Design tokens, themes, reset, shared utilities
  layouts/Base.astro   # HTML shell, theme bootstrap, scroll-direction reveals
  components/          # One component per section, scoped styles
  pages/index.astro    # Spanish page (default locale)
  pages/en/index.astro # English page
```

## Commands

| Command           | Action                       |
| ----------------- | ---------------------------- |
| `npm install`     | Install dependencies         |
| `npm run dev`     | Dev server at localhost:4321 |
| `npm run build`   | Production build to `dist/`  |
| `npm run preview` | Preview the production build |

## Features

- Spanish (`/`) and English (`/en/`) with a header language switch
- Light/dark theme with system-preference detection, persisted in localStorage, no flash on load
- Interactive "Systems in action" section: tabbed SVG flow diagrams with animated edges and traveling dots; hovering a step highlights its node
- Bidirectional scroll reveals that follow the scroll direction, plus a scroll progress bar
- Tech-stack chips with brand icons (Simple Icons / Lucide via astro-icon)
- All animations respect `prefers-reduced-motion`
- Semantic HTML, skip link, focus-visible styles, localized ARIA labels
- Fully responsive down to 320px

## Editing content

All text lives in `src/data/cv.ts` (both locales) and UI strings in `src/i18n/ui.ts`. Flow diagrams are defined in `src/data/flows.ts` — nodes are positioned on an 860x320 viewBox and edges reference node ids.
