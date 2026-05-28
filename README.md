# mike-t-302f-test-website-003

Vite + React + TypeScript frontend scaffold.

## Scripts

- `npm run dev` starts Vite on `0.0.0.0:8080`.
- `npm run build` type-checks and builds the app.
- `npm run preview` serves the production build on `0.0.0.0:8080`.
- `npm run verify:static` checks the generated `dist/` directory.
- `npm run test:e2e` runs the Playwright smoke test.
- `npm run lint` runs ESLint.
- `npm run format` formats the project with Prettier.
- `npm run format:check` checks formatting without writing changes.

## Deployment

Run `npm run build` and `npm run verify:static`, then serve the generated
`dist/` directory over HTTP. See [DEPLOYMENT.md](./DEPLOYMENT.md) for
self-hosted static serving details.
