# Product Contract

## What This Project Is

`mike-t-302f-test-website-003` is a frontend web application scaffold built with Vite, React, and TypeScript. It currently provides the baseline app shell and development tooling for future website features.

## Current Functionality

- Renders a minimal React landing shell identifying the project and stack.
- Supports local development through Vite on `0.0.0.0:8080`.
- Produces a production build with TypeScript type-checking followed by Vite bundling.
- Includes linting and formatting commands for consistent code quality.

## Architecture

- `index.html` is the Vite HTML entry point.
- `src/main.tsx` mounts the React app into `#root` with `StrictMode`.
- `src/App.tsx` contains the current app shell.
- `src/index.css` holds global browser and typography defaults.
- `src/App.css` holds app-specific layout and presentation styles.
- `vite.config.ts` configures React support and binds dev/preview servers to port `8080`.
- TypeScript config is split between app code and tooling config with `tsconfig.app.json` and `tsconfig.node.json`.

## Conventions

- Use npm scripts for common workflows:
  - `npm run dev`
  - `npm run build`
  - `npm run preview`
  - `npm run lint`
  - `npm run format`
  - `npm run format:check`
- Keep generated output, dependencies, secrets, and workspace state out of version control.
- Avoid adding routing, state management, API clients, or UI frameworks until a feature requires them.
