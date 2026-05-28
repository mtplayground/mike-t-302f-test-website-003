# Self-Hosted Static Deployment

This app builds to static files in `dist/`. It has no server-side runtime, API
process, database, or router dependency.

## Build

```bash
npm ci
VITE_CTA_URL="https://example.com/start" npm run build
npm run verify:static
```

`VITE_CTA_URL` is optional. When omitted or invalid, the CTA falls back to the
in-page `#final-cta` target. Supported values are absolute `http:`/`https:`
URLs, `mailto:` URLs, and in-page anchors.

## Serve From A Directory

Serve the `dist/` directory over HTTP. Do not deploy `node_modules/`, source
files, `.env` files, `.gh_token`, or other workspace state.

Examples:

```bash
npm run preview
```

```bash
python3 -m http.server 8080 --bind 0.0.0.0 --directory dist
```

The Vite build uses relative asset paths, so the same `dist/` directory can be
served from a domain root or a subdirectory such as `/myclawteam/`.

## Static Host Checklist

- Upload the complete `dist/` directory, including `dist/index.html` and every
  file in `dist/assets/`.
- Configure the host to serve `index.html` as the default document for the
  directory.
- Keep long-lived cache headers for hashed files in `dist/assets/`; use a
  shorter cache lifetime for `dist/index.html`.
- Rebuild when changing `VITE_CTA_URL`, because the value is read at build time.
