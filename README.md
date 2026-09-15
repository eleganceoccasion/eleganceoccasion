# Elegance Occasion

Standalone React + Vite website for Vercel. Enquiries open WhatsApp or email;
there is no account system, payment processing or backend submission.

## Local development

Use Node.js 24 and npm.

```sh
npm ci
npm run dev
npm run build
npm run preview
```

No Base44 credentials or environment variables are needed. The exported visual
style, services, prices, enquiry selections and contact numbers are retained.
Original media is in `public/gallery`, `public/brand` and `public/videos`.
Additional images selected in the Base44 design are copied into `public/media`.
Older original media and legacy video paths omitted from the export are retained.

## Vercel

Deploy the repository root, not a `redesign` subfolder. `vercel.json` sets:

- Framework: Vite
- Install: `npm ci`
- Build: `npm run build`
- Output: `dist`
- Node.js: 24.x (package.json)

Create a preview from `migration/base44-to-vercel` first. If the existing Vercel
project retains Next.js settings or a different root directory, update those
settings to the values above. Keep the production branch as main until reviewed.

Check the homepage, service links and refreshes, gallery images/videos, mobile
menu, enquiry selection persistence, WhatsApp destination and telephone link.
`/build-info.json` identifies the deployed Git commit when Vercel exposes
VERCEL_GIT_COMMIT_SHA; local builds use `eo-vercel-migration-local`.

After preview approval, merge to main and verify the production Vercel deployment.
Only then update the apex and www DNS to the exact records Vercel supplies.
Leave all email DNS records unchanged. Previous website code remains in Git history.

SPA routing follows https://vercel.com/docs/frameworks/frontend/vite with media
paths excluded so missing media returns a real 404 instead of the app HTML.

## Checks

```sh
npm run lint
npm run typecheck
npm run build
```
