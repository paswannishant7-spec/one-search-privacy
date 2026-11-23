const assetBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const siteConfig = {
  productName: "One Search",
  legalEntityName: null as string | null,
  privacyEmail: null as string | null,
  grievanceOfficer: null as string | null,
  registeredAddress: null as string | null,
  productionUrl: process.env.NEXT_PUBLIC_SITE_URL || null,
  policyVersion: "Draft 0.1",
  effectiveDate: null as string | null,
  lastReviewed: "23 November 2026",
  publicationReady: false,
  video: {
    enabled: false,
    webm: `${assetBasePath}/media/privacy-loop.webm`,
    mp4: `${assetBasePath}/media/privacy-loop.mp4`,
    poster: `${assetBasePath}/media/privacy-poster.svg`,
  },
} as const;

export type PolicySection = {
  id: string;
  eyebrow: string;
  title: string;
  summary: string;
  paragraphs: string[];
  bullets?: string[];
  blocker?: string;
};

export const policySections: PolicySection[] = [
  {
    id: "introduction",
    eyebrow: "01 / Foundation",
    title: "Introduction and privacy commitment",
    summary: "What this policy is for and why accuracy comes before publication.",
    paragraphs: [
      "This draft describes the privacy disclosures that One Search expects to provide for its mobile application and related services. It is intentionally not presented as an effective policy until the operator, data flows, vendors, retention periods, and user-request channels have been verified.",
      "The final policy will explain personal data practices in clear language and will be kept consistent with the app, backend, third-party services, Google Play Data safety answers, and Apple App Privacy responses.",
    ],
    blocker:
      "Confirm the legal entity that operates One Search and approve the final publication date.",
  },
  {
    id: "scope",
    eyebrow: "02 / Coverage",
    title: "Scope",
    summary: "Products, people, and processing activities covered by the notice.",
    paragraphs: [
      "The final policy should apply to the One Search mobile app, this privacy website, and any directly connected services operated by the same legal entity. Separate products or third-party websites should be identified and linked to their own notices.",
      "The launch countries, supported age groups, and whether the app is offered to users in the European Economic Area, United Kingdom, California, or other regulated markets must be confirmed before this section becomes effective.",
    ],
    blocker:
      "Confirm launch regions, platforms, age rating, and all services controlled by the operator.",
  },
  {
    id: "information-users-provide",
    eyebrow: "03 / Inputs",
    title: "Information users provide",
    summary: "The information a person chooses to enter, upload, or send.",
    paragraphs: [
      "Depending on implemented features, user-provided data may include prompts, captions, template selections, feedback, support messages, and files selected for processing. The final inventory must name each input and identify whether it is required or optional.",
      "One Search should collect only information needed for a stated purpose. Users should not upload content they do not have the right or permission to use.",
    ],
    blocker: "Inspect every input screen and backend field; confirm required and optional inputs.",
  },
  {
    id: "accounts",
    eyebrow: "04 / Identity",
    title: "Account and authentication information",
    summary: "How sign-in data is created, used, and protected.",
    paragraphs: [
      "If accounts are implemented, the final policy must identify the identifiers used for registration or sign-in, such as an email address, phone number, username, provider identifier, or authentication token. Passwords should never be described as readable by the operator unless that is factually true.",
      "If social sign-in is used, the exact provider and fields returned by that provider must be disclosed. If the app has no accounts, this section should be replaced with a clear statement to that effect.",
    ],
    blocker: "Confirm whether accounts exist and document every authentication provider and field.",
  },
  {
    id: "device-information",
    eyebrow: "05 / Device",
    title: "Automatically collected device information",
    summary: "Technical signals generated when the app or site is used.",
    paragraphs: [
      "The final policy must identify any automatically collected details, which may include device model, operating system and version, app version, language, time zone, IP address, network information, or device and advertising identifiers. No category should be listed merely because it is common in mobile apps.",
      "Collection by embedded SDKs counts as collection from the app and must be included in platform disclosures even when the operator does not directly view the raw data.",
    ],
    blocker:
      "Run an SDK inventory and network-traffic review on production builds for Android and iOS.",
  },
  {
    id: "usage-diagnostics",
    eyebrow: "06 / Reliability",
    title: "Usage and diagnostic information",
    summary: "Events, logs, crashes, and performance data.",
    paragraphs: [
      "If collected, usage data may include feature interactions, generation events, subscription state, error logs, crash reports, and performance measurements. The final policy must distinguish service-operation logs from product analytics and advertising measurement.",
      "Diagnostic data should be limited, access-controlled, and retained for a documented period that matches actual log and vendor settings.",
    ],
    blocker:
      "Confirm analytics, crash-reporting, observability, and server-log vendors plus retention settings.",
  },
  {
    id: "uploads",
    eyebrow: "07 / Media",
    title: "Images, videos, and uploaded files",
    summary: "How creative source material moves through the service.",
    paragraphs: [
      "If media upload features are live, the final policy must explain what is uploaded, the purpose of processing, whether files are processed on-device or on remote servers, the regions and providers involved, who can access them, the resulting outputs, and the deletion schedule.",
      "The app should provide notice before an upload begins and request only the photo-library, camera, microphone, or storage access needed for the selected action. Permission text must describe the real purpose in context.",
    ],
    blocker:
      "Verify storage locations, subprocessors, access controls, backup behavior, and input/output retention periods.",
  },
  {
    id: "ai-processing",
    eyebrow: "08 / Generation",
    title: "AI-generated content and processing",
    summary: "What is sent to a model and how generated results are handled.",
    paragraphs: [
      "If AI generation is enabled, the final notice must name the categories of prompts and media sent for inference, whether processing is first-party or performed by an external provider, whether the provider stores inputs or outputs, and whether any content may be used for model training or service improvement.",
      "Generated results may be inaccurate, unexpected, or resemble existing people or works. Product disclosures and safeguards should address responsible use without suggesting that a privacy notice alone controls harmful content.",
    ],
    blocker:
      "Confirm each model/provider, API terms, training settings, moderation path, and data-flow region.",
  },
  {
    id: "facial-processing",
    eyebrow: "09 / Likeness",
    title: "Facial image processing and face swapping",
    summary: "A separate disclosure for high-sensitivity likeness features.",
    paragraphs: [
      "If face-based features are live, the final policy must explain whether software detects, aligns, segments, embeds, transforms, or compares faces; whether templates or vectors are created; where processing occurs; and when source images, derived data, and outputs are deleted.",
      "Ordinary face detection or transformation should not be called biometric identification unless the system is used to identify or verify a person. The classification must be based on an engineering and legal review, not marketing language.",
      "Users must be required to have permission to use another person’s likeness. Product safeguards, reporting, and enforcement are needed for impersonation, non-consensual intimate material, scams, and other harmful synthetic media.",
    ],
    blocker:
      "Complete a facial-processing technical review and a jurisdiction-specific biometric/privacy assessment.",
  },
  {
    id: "purposes",
    eyebrow: "10 / Use",
    title: "Purposes for processing",
    summary: "Why each category of personal data is processed.",
    paragraphs: [
      "The final policy should map each verified data category to a specific purpose: providing a requested feature, authenticating a user, delivering generated media, processing a purchase, maintaining security, diagnosing faults, supporting users, or meeting legal obligations.",
      "Data should not be reused for a materially different purpose without an appropriate notice and, where required, consent.",
    ],
    blocker:
      "Approve a purpose-by-purpose data map with product, engineering, security, and legal owners.",
  },
  {
    id: "legal-bases",
    eyebrow: "11 / Authority",
    title: "Legal bases and consent",
    summary: "The lawful justification for processing where required.",
    paragraphs: [
      "Where laws such as the GDPR or UK GDPR apply, the final policy must identify the relevant legal basis for each purpose, such as performance of a contract, consent, compliance with law, or a legitimate interest supported by an assessment. Sensitive or biometric processing may require additional conditions.",
      "Consent must be specific, informed, freely given where required, and as easy to withdraw as to give. Mobile permission prompts do not automatically satisfy every privacy-consent requirement.",
    ],
    blocker:
      "Confirm applicable laws and complete a legal-basis and consent assessment for every processing purpose.",
  },
  {
    id: "providers-sdks",
    eyebrow: "12 / Supply chain",
    title: "Third-party AI providers and SDKs",
    summary: "External code and infrastructure that may receive user data.",
    paragraphs: [
      "The final policy must identify material categories of service provider and, where transparency or law requires, the provider names. This includes cloud hosting, authentication, payment, analytics, crash reporting, customer support, content moderation, and AI inference services.",
      "Provider documentation alone is not evidence of app behavior. Contracts, SDK configuration, network traffic, retention controls, and onward-transfer terms should be reviewed before publication.",
    ],
    blocker: "Create and approve a complete vendor, SDK, subprocessor, and data-transfer register.",
  },
  {
    id: "sharing",
    eyebrow: "13 / Disclosure",
    title: "Data sharing and service providers",
    summary: "When information leaves the operator’s direct control.",
    paragraphs: [
      "The final policy must describe verified sharing with processors, affiliates, professional advisers, transaction counterparties, authorities, or other recipients. It must distinguish a provider acting only on instructions from an independent third party using data for its own purposes.",
      "The operator should not state that personal data is never sold or shared for targeted advertising until SDK behavior and applicable statutory definitions have been reviewed.",
    ],
    blocker:
      "Confirm recipients, purposes, contractual roles, and whether any practice is a sale or statutory sharing.",
  },
  {
    id: "payments",
    eyebrow: "14 / Commerce",
    title: "Payments and subscriptions",
    summary: "Purchase records and app-store billing data.",
    paragraphs: [
      "If paid features are offered, purchases may be processed by Apple, Google, or another verified payment provider. The final policy must state what transaction, subscription, receipt, tax, or fraud-prevention data the app receives and retains.",
      "The app should not claim to store full card details unless engineering confirms that it actually does. Store billing and refund practices must remain consistent with platform rules.",
    ],
    blocker:
      "Confirm monetization, billing providers, receipt-validation services, and retained payment fields.",
  },
  {
    id: "analytics-advertising-cookies",
    eyebrow: "15 / Measurement",
    title: "Analytics, advertising, and cookies",
    summary: "Measurement technology in the app and on this website.",
    paragraphs: [
      "This website is designed without analytics, advertising, or non-essential cookies by default. If any are added, the policy and consent mechanism must be updated before activation.",
      "For the mobile app, analytics and advertising practices remain unverified. Any advertising identifier, cross-app tracking, attribution SDK, personalized advertising, or consent platform must be disclosed consistently in the app and store submissions.",
    ],
    blocker:
      "Verify the released mobile binaries and confirm whether tracking, advertising, or analytics is enabled.",
  },
  {
    id: "security",
    eyebrow: "16 / Safeguards",
    title: "Data security",
    summary: "Organizational and technical controls without absolute promises.",
    paragraphs: [
      "The operator should maintain safeguards appropriate to the nature and risk of the verified processing. Relevant controls may include access restrictions, secure transport, secret management, logging, vulnerability management, vendor review, backups, and incident response, but only implemented controls should be described publicly.",
      "No system is completely secure. The final policy must avoid guarantees and should provide a genuine channel for reporting privacy or security concerns.",
    ],
    blocker:
      "Complete a security-control review and approve the controls that may be described publicly.",
  },
  {
    id: "retention-deletion",
    eyebrow: "17 / Lifecycle",
    title: "Data retention and deletion",
    summary: "How long information remains and what happens after deletion.",
    paragraphs: [
      "The final policy must state concrete retention periods or clear criteria for each data class, including uploads, generated results, account records, support requests, logs, backups, and legally required transaction records.",
      "Deletion should propagate to active systems and contracted processors, subject to documented legal, security, fraud-prevention, dispute, and backup exceptions. Backup expiry and de-identification must not be described until technically verified.",
    ],
    blocker:
      "Approve a retention schedule and verify deletion jobs, backups, caches, model providers, and logs.",
  },
  {
    id: "rights",
    eyebrow: "18 / Control",
    title: "User privacy rights",
    summary: "Access, correction, deletion, objection, and other applicable rights.",
    paragraphs: [
      "Depending on location and processing, users may have rights to receive information, access personal data, correct inaccuracies, request deletion, withdraw consent, object or restrict processing, request portability, or complain to a regulator. The final wording and response periods must match the laws that apply.",
      "Requests may require proportionate identity verification. The operator should not collect more verification data than necessary and should document any refusal or exception.",
    ],
    blocker:
      "Establish an authenticated request workflow, response owners, service levels, and appeal or grievance process.",
  },
  {
    id: "account-deletion",
    eyebrow: "19 / Exit",
    title: "Account deletion",
    summary: "A real deletion path—not a simulated form.",
    paragraphs: [
      "If users can create accounts, One Search must provide an in-app account-deletion path and a functional web resource for deletion requests where platform rules require it. The dedicated deletion page on this site documents the integration contract but does not pretend to submit a request while no verified backend or contact channel is connected.",
      "The final page must state what is deleted, what is retained, why, for how long, the expected completion time, and how identity is verified.",
    ],
    blocker:
      "Confirm account creation and connect the in-app and web deletion flows to a verified operational backend.",
  },
  {
    id: "children",
    eyebrow: "20 / Age",
    title: "Children’s privacy and age restrictions",
    summary: "Age design, parental consent, and child-safety obligations.",
    paragraphs: [
      "The final age threshold must match the product audience, store rating, launch regions, and applicable laws. If the service is not directed to children, the app still needs proportionate age assurance and a process for handling discovered child data.",
      "If children are permitted, parental notice and consent, restricted profiling and advertising, heightened default privacy, content safeguards, and age-appropriate design requirements may apply.",
    ],
    blocker:
      "Confirm the intended audience, age-gating design, store ratings, and child-safety compliance position.",
  },
  {
    id: "international-transfers",
    eyebrow: "21 / Borders",
    title: "International data transfers",
    summary: "Where data is processed and which transfer safeguards apply.",
    paragraphs: [
      "If personal data is processed outside a user’s country, the final policy should identify the relevant destinations or regional framework and explain applicable safeguards. These may include adequacy decisions, contractual clauses, or other recognized transfer mechanisms.",
      "Cloud region names, vendor headquarters, support access, and onward subprocessors all need review; residency should never be inferred from a marketing page alone.",
    ],
    blocker:
      "Map storage, inference, support, analytics, and backup regions and approve transfer mechanisms.",
  },
  {
    id: "legal-disclosures",
    eyebrow: "22 / Requests",
    title: "Legal disclosures and government requests",
    summary: "Narrowly scoped disclosure when law or safety requires it.",
    paragraphs: [
      "The final policy may explain that information can be preserved or disclosed when required by applicable law, valid legal process, or a necessary and proportionate response to protect rights, safety, and service integrity. This is not permission for unrelated sharing.",
      "The operator should establish a review and logging process for requests, challenge overbroad demands where lawful, and notify affected users when permitted and appropriate.",
    ],
    blocker:
      "Approve a law-enforcement and legal-request procedure with authorized decision-makers.",
  },
  {
    id: "policy-changes",
    eyebrow: "23 / Evolution",
    title: "Policy changes",
    summary: "How material updates will be communicated.",
    paragraphs: [
      "The final policy should display its effective date and explain how material changes will be communicated before or when they take effect, as required. Notice may be provided in the app, by email, or through another verified channel appropriate to the change.",
      "Archived versions should remain available where practical. Product or vendor changes must trigger a privacy review before release rather than relying on a later policy edit.",
    ],
    blocker:
      "Define the change-notice channel, archive location, review cadence, and internal release gate.",
  },
  {
    id: "contact",
    eyebrow: "24 / Reach us",
    title: "Contact and grievance redressal",
    summary: "A verifiable way to reach the responsible organization.",
    paragraphs: [
      "Before publication, this section must name the legal entity, a monitored privacy contact, the registered or service address required by applicable law, and any designated grievance officer or data protection officer. Fake or unmonitored contact details are not acceptable.",
      "The contact route should be accessible from the app and this website, supported by a documented intake process, and tested end to end before store submission.",
    ],
    blocker:
      "Provide and verify the legal entity, privacy email, address, grievance officer, and escalation process.",
  },
];

export const faqItems = [
  {
    question: "Is this the final published Privacy Policy?",
    answer:
      "No. It is a complete disclosure framework and publication draft, but it remains intentionally marked as not effective until the operator, app behavior, vendors, retention periods, and request channels are verified.",
  },
  {
    question: "Does One Search use uploaded photos to train AI models?",
    answer:
      "That has not been verified. The final policy must state the actual practice for every first- and third-party AI provider after contracts, settings, and data flows are reviewed.",
  },
  {
    question: "Is face swapping the same as biometric identification?",
    answer:
      "Not necessarily. Face detection or transformation can differ from identifying or verifying a person, but the technical implementation and applicable law must be reviewed before making that classification.",
  },
  {
    question: "Can I delete an account from this website now?",
    answer:
      "Not yet. The deletion route documents the required experience, but no backend or verified privacy contact was supplied. It deliberately does not display a fake submission success state.",
  },
  {
    question: "Does this website track visitors?",
    answer:
      "The delivered website includes no analytics, advertising, trackers, or non-essential cookies by default. Hosting-level logs, if any, must still be reviewed for the selected production host.",
  },
  {
    question: "What must happen before store submission?",
    answer:
      "Complete the data inventory, verify released binaries and network traffic, approve vendor and retention records, connect real privacy and deletion channels, align store disclosures, complete legal review, and remove draft status only after evidence is recorded.",
  },
] as const;
