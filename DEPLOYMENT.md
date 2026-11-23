# Deployment

## Recommended production path: Vercel

1. Complete every release blocker in `DATA_INVENTORY.md`, `BUSINESS_INFORMATION_CHECKLIST.md`, and `STORE_COMPLIANCE_CHECKLIST.md`.
2. Update `data/site.ts` with verified legal/contact facts and an effective date.
3. Set `publicationReady: true` only after approval. This changes robots metadata from `noindex, nofollow` to indexable.
4. Add a verified `NEXT_PUBLIC_SITE_URL` environment value in the host. Do not invent a domain.
5. If licensed loop media is supplied, place optimized files at `public/media/privacy-loop.webm` and `public/media/privacy-loop.mp4`, retain the poster, and set `video.enabled` to `true`.
6. Run the full quality gate locally:

   ```powershell
   npm ci
   npm run typecheck
   npm run lint
   npm run build
   npx playwright install chromium
   npm run test:e2e
   ```

7. Import the Git repository into Vercel, use the Next.js preset, and deploy a protected preview first.
8. Re-run navigation, accessibility, deletion-route, print and responsive checks against the deployed preview.
9. Connect the approved production domain, then enter the exact policy and deletion URLs in Google Play Console and App Store Connect.

## Hosting review

Before publication, document host/CDN access logging, regions, retention, subprocessors, security services, and any analytics enabled by account defaults. The site code itself does not add analytics, advertising, or non-essential cookies.

## Rollback

Use immutable deployments. Retain the last approved version and its policy archive so a broken release can be rolled back without silently changing the legal text.
