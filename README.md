# One Search privacy center

A production-oriented Next.js privacy landing page and legal reading experience for One Search. It includes an original responsive Bento composition, GSAP scroll choreography, a searchable 24-section publication draft, accessible FAQs, a real video component with a pause/play-capable animated fallback, account-deletion integration contract, compliance evidence pack, and automated browser/accessibility tests.

> Publication status: **draft / noindex**. The app/backend, business identity, providers, retention, deletion, contact channel, and regional scope were not supplied. The site therefore exposes release blockers instead of inventing claims.

## Stack

- Next.js App Router, React, strict TypeScript
- Tailwind CSS runtime plus a custom tokenized design layer
- GSAP + ScrollTrigger for progressive animation
- Lucide icons
- Playwright and axe-core for E2E/responsive/accessibility testing

No analytics, ads, tracking pixels, non-essential cookies, remote fonts, or third-party media are included.

## Run locally

Requirements: Node.js 22 or newer and npm 10 or newer.

```powershell
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Quality commands

```powershell
npm run typecheck
npm run lint
npm run format
npm run build
npx playwright install chromium
npm run test:e2e
npm run test:a11y
```

For Lighthouse, run `npm start` in one terminal after `npm run build`, then run
`npm run audit:lighthouse` in another terminal.

## Routes

- `/` — premium privacy landing experience plus full crawlable draft
- `/privacy-policy` — dedicated full policy route
- `/delete-account` — deletion status and secure backend integration contract
- `/contact` — verified-contact readiness page; no fake form
- `/robots.txt` — disallows indexing while `publicationReady` is false

## Configuration

Central product/legal configuration lives in `data/site.ts`. The structured processing inventory lives in `data/privacy-inventory.ts`. Do not replace null values or blockers without evidence.

Set a real canonical domain only after selection:

```powershell
$env:NEXT_PUBLIC_SITE_URL = "https://privacy.your-verified-domain.example"
```

The example above is illustrative only; it is not a suggested production domain.

## Video asset contract

The environment did not provide a local video renderer during the initial implementation. The website therefore uses the implemented, accessible animated fallback and does **not** pretend that a video file exists. To add licensed or original optimized media:

1. Add `public/media/privacy-loop.webm` and `public/media/privacy-loop.mp4`.
2. Retain or replace `public/media/privacy-poster.svg`.
3. Set `siteConfig.video.enabled` to `true` in `data/site.ts`.
4. Confirm muted autoplay, manual pause/play, fallback, mobile `playsinline`, file size, and reduced-motion behavior in Playwright and real devices.

Suggested delivery targets are 1440×900 or 1600×900, 8–12 seconds, seamless loop, no audio, VP9 WebM plus H.264 MP4, and a combined payload appropriate for mobile networks.

## Legal and store release gate

Read these before publishing:

- `DATA_INVENTORY.md`
- `BUSINESS_INFORMATION_CHECKLIST.md`
- `STORE_COMPLIANCE_CHECKLIST.md`
- `DEPLOYMENT.md`

The documents distinguish website implementation from mobile-app, backend, business, and legal obligations. They do not guarantee store approval or legal compliance.

## Production build and deploy

```powershell
npm ci
npm run typecheck
npm run lint
npm run build
npm start
```

The recommended hosting workflow is documented in `DEPLOYMENT.md`. No public deployment is claimed by this repository.
