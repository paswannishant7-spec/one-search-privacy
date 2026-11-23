# One Search privacy and data inventory

Status: **Not publication-ready**  
Last reviewed: **23 November 2026**

The machine-readable source of truth is [`data/privacy-inventory.ts`](data/privacy-inventory.ts). Null values are intentional release blockers. Replace them only with evidence from production code, Android and iOS binaries, backend schemas, live network traces, vendor contracts and settings, and operational deletion tests.

## Required evidence for every row

| Field                   | Evidence expected                                                                            |
| ----------------------- | -------------------------------------------------------------------------------------------- |
| Collection              | Screen/input inventory, permission flow, SDK configuration, or network trace                 |
| Purpose                 | Approved product requirement and lawful-purpose assessment                                   |
| Processor               | Executed contract, data-processing terms, subprocessor list, and exact product configuration |
| Storage/transfer region | Cloud resource configuration and vendor region settings, including support access            |
| Retention               | Enforced lifecycle rule, database job, object-store rule, log setting, and backup expiry     |
| Deletion                | End-to-end test evidence for primary systems, processors, caches, and backups                |
| Training/secondary use  | Contract terms plus account/project setting screenshot or API configuration                  |
| Store disclosure        | Matching Google Play Data safety and Apple App Privacy answers                               |

## Current inventory summary

| Data class                     | Plausible feature                | Verified status                       | Publication blocker                                         |
| ------------------------------ | -------------------------------- | ------------------------------------- | ----------------------------------------------------------- |
| Account identifiers            | Sign-in and authentication       | Requires engineering                  | Confirm whether accounts exist and inspect providers/fields |
| Prompts and creative inputs    | AI generation                    | Requires engineering                  | Trace every request, log, provider, and output              |
| Uploaded and generated media   | Image/video features             | Requires engineering                  | Verify storage, access, provider, region, and deletion      |
| Facial images and derived data | Face swap/personalization        | Requires legal and engineering review | Classify processing and verify derived artifacts/retention  |
| Device, usage, and diagnostics | Reliability, analytics, security | Requires engineering                  | Audit SDKs and released-binary network traffic              |
| Purchase/subscription records  | Paid features                    | Requires business and engineering     | Confirm monetization and retained receipt fields            |
| Support and privacy requests   | Rights and grievance handling    | Requires business                     | Select a secure, monitored intake system                    |

## Mobile-app inspection procedure

1. Enumerate Android Gradle and iOS package dependencies, manifests, permissions, privacy manifests, URL schemes, entitlements, and build-time environment flags.
2. Inspect every screen and API call that creates, reads, updates, uploads, shares, exports, or deletes personal data.
3. Capture traffic from production-equivalent Android and iOS builds for first launch, sign-in, generation, upload, face features, purchase, diagnostics, consent, and deletion.
4. Match each destination to a vendor, contract, purpose, region, retention setting, and store-disclosure category.
5. Run deletion tests with uniquely traceable test records and verify primary databases, object stores, queues, logs, caches, vendors, and backup-expiry behavior.
6. Reconcile the resulting inventory with the website, in-app notices, permission prompts, Google Play Data safety, and Apple App Privacy.

## Website-specific inventory

The delivered website adds no analytics, advertising, tracking pixels, chat widgets, consent SDKs, or non-essential cookies. It uses local assets and client-side UI code. The selected production host’s access logs, CDN logs, security services, deployment telemetry, and retention still require review before publication.
