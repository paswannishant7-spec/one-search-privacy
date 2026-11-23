# Test results

Final verification date: **23 November 2026**

## Automated checks

| Check                               | Result                       | Evidence                                                                              |
| ----------------------------------- | ---------------------------- | ------------------------------------------------------------------------------------- |
| TypeScript strict validation        | Passed                       | `npm run typecheck` exited 0                                                          |
| ESLint                              | Passed                       | `npm run lint` exited 0 with no warnings                                              |
| Prettier                            | Passed                       | `npm run format` exited 0                                                             |
| Production build                    | Passed                       | All app routes statically prerendered                                                 |
| Playwright E2E and responsive suite | Passed                       | **16/16 tests** passed                                                                |
| Axe automated WCAG A/AA scan        | Passed                       | Home, policy, deletion, contact, and mobile home returned no selected A/AA violations |
| Internal link check                 | Passed                       | Every internal route returned status below 400                                        |
| Responsive overflow                 | Passed                       | 320, 375, 430, 768, 1024, 1440, and 1920 px                                           |
| Reduced motion                      | Passed                       | Core content remains visible with motion reduction enabled                            |
| Screenshots                         | Passed and visually reviewed | `artifacts/screenshots/home-desktop-1440.png`, `home-mobile-375.png`                  |

The interaction suite covers navigation, policy search and clear, FAQ expansion/collapse, video/fallback pause and play, deletion-route behavior, contact-route behavior, and the absence of a fake deletion form.

## Lighthouse production audit

Audit target: local optimized production build at `http://127.0.0.1:3000`.

| Category / metric        |     Result |
| ------------------------ | ---------: |
| Performance              |     **88** |
| Accessibility            |    **100** |
| Best practices           |     **96** |
| SEO                      |     **66** |
| First Contentful Paint   |  **1.7 s** |
| Largest Contentful Paint |  **1.7 s** |
| Total Blocking Time      | **460 ms** |
| Cumulative Layout Shift  |      **0** |
| Speed Index              |  **1.8 s** |

Reports: `artifacts/lighthouse/report.report.html` and `report.report.json`.

The SEO score is intentionally limited because the unverified draft is `noindex` and no production domain/canonical URL was invented. Performance is constrained by the intentionally complete 24-section policy on the landing page. A repeat audit was required because the throttled local Windows runner varied materially (65–88 performance); the saved final report is the 88 run shown above. Main-thread work was reduced by deferring GSAP/ScrollTrigger until user scroll and server-rendering the legal body without hydrating it. This remains a measured optimization opportunity, not a claimed perfect score.

## Manual visual review

- Desktop and mobile hero composition, logo proportions, Bento cards, policy text, sticky/scrollable navigation, FAQs, footer, and controls were inspected from full-page screenshots.
- No horizontal clipping or overlapping controls was observed at the tested widths.
- The legal body remains present as server-rendered HTML and print styles force every section visible.

## Not tested because inputs were not supplied

- Real mobile app/backend data flows, SDK traffic, permission prompts, store-console declarations, authenticated account deletion, vendor deletion, incident response, and privacy-contact delivery.
- Real MP4/WebM playback. The complete component and poster are present, but the delivered build intentionally uses the animated fallback because no licensed or generated loop was available locally.
- A real production domain, public indexing, or public store-submission URL.
