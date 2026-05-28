# Product Contract

## What This Project Is

`mike-t-302f-test-website-003` is a Vite, React, TypeScript, and Tailwind CSS
single-page landing site for ZeroClaw, an autonomous software delivery agent for
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
- Uses smooth in-page anchor navigation.
- Reads the CTA destination from `VITE_CTA_URL` at build time, falling back to
  `#final-cta`.
- Supports local development and preview on `0.0.0.0:8080`.
- Produces a production build with TypeScript type-checking followed by Vite
  bundling.

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
- `src/config/content.ts` holds typed page copy, section ids, nav links, FAQ
  content, and section data.
- `src/config/env.ts` adapts build-time Vite environment values.
- `src/index.css` imports Tailwind CSS, defines design tokens, and holds global
  base styles.
- `vite.config.ts` configures React, Tailwind, and dev/preview server binding.

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

## Conventions

- Use npm scripts for common workflows:
  - `npm run dev`
  - `npm run build`
  - `npm run preview`
  - `npm run lint`
  - `npm run format`
  - `npm run format:check`
- Document CTA configuration in `.env.example`; local `.env*` files stay out of
  version control.
- Keep generated output, dependencies, secrets, and workspace state out of
  version control.
- Keep future changes section-scoped unless shared primitives or typed content
  need to evolve.
