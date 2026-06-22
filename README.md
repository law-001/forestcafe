# Forest Cafe PH Arena

A single-page, mobile-first site for **Forest Cafe PH Arena** — a forest-themed café in
Bocaue, Bulacan (beside the Philippine Arena). Built with **Vite + React + Tailwind CSS v4**.

Re-implemented from a static design concept into a real, componentized, accessible build.
Same brand soul — pine + olive seating, terracotta wordmark, woven rattan-lantern glow,
moss-wall identity — now as maintainable engineering.

## Run it

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build → dist/
npm run preview    # preview the production build
```

## Stack

- **Vite 5** — dev server + build
- **React 18** — component model, local state for the carousel / menu modal / branch tabs
- **Tailwind CSS v4** — `@tailwindcss/vite` plugin; brand tokens live in `src/index.css` (`@theme`)

## Structure

```
public/assets/        real brand photos + logos
src/
  index.css           Tailwind import + brand tokens (@theme) + keyframes
  data.js             menu, branches, gallery, press, nav content
  hooks/
    useReveal.js       fade + slide-up on scroll (IntersectionObserver)
    useParallax.js     scroll-linked Y parallax (rAF-batched)
  components/
    primitives.jsx     Icon set, Lantern, Eyebrow, Reveal wrapper
    Nav, Hero, About, Features, Menu, MenuModal,
    Gallery, Branches, Press, Visit, Reserve, Footer
```

## Brand tokens

Defined once in `src/index.css` under `@theme`, used as Tailwind utilities
(`bg-pine`, `text-terracotta`, `bg-bulb/20`, …):

| Token | Hex | Use |
|-------|-----|-----|
| pine | `#1F3D2B` | primary green, dark sections, footer |
| canopy | `#3E6B3A` | mid foliage |
| olive | `#8B9A3C` | signature seating accent |
| terracotta | `#E2641F` | primary CTA + wordmark base |
| ember | `#F4882B` | gradient highlight / glow |
| rattan | `#C79A5B` | cane / warm wood |
| bulb | `#F2C679` | warm lantern light |
| greige | `#E7E0D2` | warm page canvas (not white) |
| charcoal | `#15140F` | night chrome |
| cream | `#F4EFE7` | text on dark |

## Accessibility & motion

- All animation respects `prefers-reduced-motion` (parallax, reveals, sways, autoplay all disabled).
- Menu modal: focus trap, `Esc` to close, scroll-lock, focus restore.
- Carousel: keyboard (←/→), drag/swipe, autoplay that pauses on hover/focus/off-screen/hidden-tab.
- Visible focus rings (bulb-glow), labelled icon buttons, descriptive `alt` text.

## Placeholders to swap for real content

- **Branch 2** details (name, address, hours, phone) — marked `placeholder — edit`.
- **Menu** items and ₱ prices, and the per-category "Dish photo" tiles.
- **Press** quotes (currently sample guest reviews).
- Facebook / Instagram footer links (`href="#"`).
- Google Maps embeds use generic queries until exact pins are added.
