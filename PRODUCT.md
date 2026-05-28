# Product Contract

## What This Project Is

`mike-t-302f-test-website-003` is a Vite, React, TypeScript, and Tailwind CSS
single-page landing site for myClawTeam, an autonomous software delivery agent for
founder-led products.

## Current Functionality

- Renders a complete responsive landing page with:
  - Sticky navigation with section anchor links, primary CTA, and mobile menu.
  - Hero section with product positioning and CTA.
  - How It Works SDLC loop: Plan, Build, Deploy, Operate.
  - Features/value-props grid.
  - Why Founders narrative with time, cost, and momentum benefits.
  - Accessible FAQ accordion.
  - Final CTA band.
  - Footer with section links, contact links, and copyright.
- Uses smooth in-page anchor navigation.
- Adds restrained scroll-reveal and hover polish with Motion while respecting
  reduced-motion preferences.
- Reads the CTA destination from `VITE_CTA_URL` at build time, falling back to
  `#final-cta`.
- Supports local development and preview on `0.0.0.0:8080`.
- Produces a production build with TypeScript type-checking followed by Vite
  bundling.
- Verifies static production output with `npm run verify:static`.
- Includes a Playwright smoke test that checks the rendered page, key sections,
  FAQ, footer, and CTA.

## Architecture

- `index.html` is the Vite HTML entry point.
- `src/main.tsx` mounts the React app into `#root` with `StrictMode`.
- `src/App.tsx` composes the page sections in order.
- `src/sections/` contains the landing page sections:
  - `Hero`
  - `HowItWorks`
  - `Features`
  - `WhyFounders`
  - `FAQ`
  - `FinalCTA`
- `src/components/` contains shared layout and UI primitives:
  - `PageShell`
  - `Container`
  - `Section`
  - `Button`
  - `NavBar`
  - `Footer`
- `src/components/motion/Reveal.tsx` contains shared Motion wrappers for
  reveal and hover interactions.
- `src/config/content.ts` holds typed page copy, section ids, nav links, FAQ
  content, and section data.
- `src/config/env.ts` adapts build-time Vite environment values.
- `src/index.css` imports Tailwind CSS, defines design tokens, and holds global
  base styles.
- `vite.config.ts` configures React, Tailwind, and dev/preview server binding.
- `tests/e2e/smoke.spec.ts` contains the Playwright smoke test.
- `scripts/verify-static-build.mjs` validates `dist/` after production builds.
- `DEPLOYMENT.md` documents self-hosted static deployment from `dist/`.

## Design Decisions

- The site is a static single-page app; no router, global state library, API
  client, or backend is present.
- Section ids are typed and reused by nav links to keep anchors consistent.
- Copy is centralized in typed config rather than hard-coded throughout section
  components.
- Tailwind tokens define the visual system: neutral paper/ink base, restrained
  accent colors, signal CTA color, compact radii, and shared spacing.
- The FAQ uses explicit button controls with `aria-expanded`, `aria-controls`,
  and labelled regions.
- Motion is limited to presentational reveal/hover behavior and disabled for
  users who prefer reduced motion.
- Production assets use relative paths so `dist/` can be hosted at a domain root
  or under a subdirectory.

## Conventions

- Use npm scripts for common workflows:
  - `npm run dev`
  - `npm run build`
  - `npm run preview`
  - `npm run verify:static`
  - `npm run test:e2e`
  - `npm run lint`
  - `npm run format`
  - `npm run format:check`
- Document CTA configuration in `.env.example`; local `.env*` files stay out of
  version control.
- Run `npm run build` before `npm run verify:static`; the verifier expects a
  fresh `dist/` directory.
- Keep generated output, dependencies, secrets, and workspace state out of
  version control.
- Keep future changes section-scoped unless shared primitives or typed content
  need to evolve.
