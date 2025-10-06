# Airbnb-style homepage (React + Vite)

This repository is a small React app (Vite) implementing an Airbnb-like homepage UI: responsive search pill, city carousels, inspiration section, and a footer. It's intended as a UI exercise and demo.

## Project explanation & use

This repository is a frontend demo (React + Vite) that recreates an Airbnb-style homepage to showcase responsive component design, date/guest selection UX, and carousel layouts. It's intended for reviewers to inspect UI patterns and component structure — there is no backend; demo data is served from `public/listings.json`.

Run locally:

```powershell
npm install
npm run dev
```

- A responsive, componentized Airbnb-like homepage built with React and Vite demonstrating search UI, date selection, responsive carousels and accessible components.
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

