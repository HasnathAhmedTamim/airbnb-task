# Airbnb-style homepage (React + Vite)

This repository is a small React app (Vite) implementing an Airbnb-like homepage UI: responsive search pill, city carousels, inspiration section, and a footer. It's intended as a UI exercise and demo.

For recruiters (TL;DR)
- Elevator pitch: A responsive, componentized Airbnb-like homepage built with React and Vite demonstrating search UI, date selection, responsive carousels and accessible components.
- Tech stack: React, Vite, react-day-picker, Swiper, react-icons, axios, Tailwind-style utility classes.
- What I built / my role:
	- Implemented the full homepage layout and responsive behavior (mobile-first).
	- Built a reusable SearchPill component with Where / Dates / Guests workflows and a two-month desktop calendar + mobile modal.
	- Implemented City carousels (responsive Swiper) and a reusable CitySection component.
	- Wired client-side demo data (`public/listings.json`) and graceful loading/error UI states.
	- Created accessible UI elements (aria attributes, keyboard-friendly controls) and composed modular components.
- Quick evaluation for reviewers:
	1. Clone the repo and run `npm install` → `npm run dev`.
	2. Open `src/components/SearchPill.jsx` to review date/guest logic and accessibility choices.
	3. Inspect `src/components/CitySection.jsx` for responsive card sizing and Swiper integration.
	4. Check `public/listings.json` and `src/pages/Home.jsx` to see data flow and rendering.
	5. See `src/components/Footer.jsx` and `src/components/InspirationSection.jsx` for layout and componentization.


Contents and goals
- Responsive homepage-only UI inspired by Airbnb (search pill, city sections, inspiration grid).
- Uses React (18+), Vite, Tailwind-style utility classes, and react-day-picker for date selection.
- Demo data in `public/listings.json` (used by `Home.jsx`).

Quickstart
1. Install dependencies:

```powershell
npm install
```

2. Start the dev server:

```powershell
npm run dev
```

3. Open the app at the URL shown by Vite (typically `http://localhost:5173`).

Useful scripts (from `package.json`)
- `npm run dev` — start Vite dev server
- `npm run build` — build production bundle
- `npm run preview` — serve the production build locally
- `npm run lint` — run ESLint (config present in `eslint.config.js`)

Project structure (important files)
- `public/listings.json` — demo listing data consumed by the homepage
- `src/main.jsx` — app entry (uses `BrowserRouter`)
- `src/App.jsx` — top-level layout and routes
- `src/pages/Home.jsx` — homepage, loads listings and renders `CitySection`
- `src/components/SearchPill.jsx` — main search UI with date picker
- `src/components/CitySection.jsx` — responsive listing card grid / Swiper carousel
- `src/components/InspirationSection.jsx` — inspiration grid and tabs
- `src/components/Footer.jsx` — footer and social icons

Home page (quick)
- `src/pages/Home.jsx` loads demo listings from `public/listings.json` using `axios`. It shows loading / error / no-data states and renders one `CitySection` per city. Visual order: Listings → InspirationSection → Footer.

Notes & gotchas
- BrowserRouter vs HashRouter:
	- The app currently uses `BrowserRouter` (clean URLs, no `#`). When deploying to a static host you must configure the server to return `index.html` for all SPA routes. Example for Netlify: create `public/_redirects` with `/* /index.html 200`.
	- If you prefer no server config, switch to `HashRouter` in `src/main.jsx` and URLs will use `#/`.

- Icons: uses `react-icons`. If you add or update icon packages, restart the dev server so Vite picks up new modules.

Recommended next steps (professionalizing)
- Add `CONTRIBUTING.md`, `LICENSE` (MIT), and an explicit `CODE_OF_CONDUCT.md`.
- Add a CI workflow (`.github/workflows/ci.yml`) to run lint and build.
- Add unit tests (Vitest or Jest) and a small set of smoke tests for key components.
- Consider extracting shared UI primitives (Button, Icon, Modal) to `src/components/ui/`.

Troubleshooting
- If an icon import fails after installing `react-icons`, stop the dev server and restart it: `npm run dev`.
- If `public/listings.json` fails to load, check DevTools → Network for `GET /listings.json` 404 errors.

Contact & authoring
- This repo was prepared as a UI exercise. If you'd like me to add CI, tests, or polish styles, tell me which change you'd like next and I’ll implement it.
