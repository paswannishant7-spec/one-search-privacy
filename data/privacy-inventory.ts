export type VerificationStatus =
  "verified" | "requires-engineering" | "requires-business" | "requires-legal" | "not-applicable";

export type DataInventoryItem = {
  id: string;
  category: string;
  examples: string[];
  feature: string;
  source: string;
  purpose: string | null;
  processor: string | null;
  storageRegion: string | null;
  retention: string | null;
  deletionMethod: string | null;
  trainingUse: string | null;
  linkedToIdentity: boolean | null;
  shared: boolean | null;
  status: VerificationStatus;
  evidence: string[];
  blocker: string;
};

/**
 * Publication source of truth. Replace nulls only with reviewable evidence from
 * production code, released binaries, vendor contracts/settings, and operational systems.
 */
export const dataInventory: DataInventoryItem[] = [
  {
    id: "account-identifiers",
    category: "Contact and account identifiers",
    examples: ["email address", "phone number", "username", "provider user ID"],
    feature: "Account creation and authentication",
    source: "User and authentication provider",
    purpose: null,
    processor: null,
    storageRegion: null,
    retention: null,
    deletionMethod: null,
    trainingUse: null,
    linkedToIdentity: null,
    shared: null,
    status: "requires-engineering",
    evidence: [],
    blocker: "Confirm whether accounts exist and inspect the authentication implementation.",
  },
  {
    id: "creative-inputs",
    category: "User content",
    examples: ["prompts", "captions", "template choices"],
    feature: "AI content generation",
    source: "User",
    purpose: null,
    processor: null,
    storageRegion: null,
    retention: null,
    deletionMethod: null,
    trainingUse: null,
    linkedToIdentity: null,
    shared: null,
    status: "requires-engineering",
    evidence: [],
    blocker:
      "Trace each generation request through client, API, model provider, logs, and output storage.",
  },
  {
    id: "uploaded-media",
    category: "Photos, videos, and files",
    examples: ["source photo", "source video", "audio", "generated output"],
    feature: "Upload, image-to-video, and media generation",
    source: "User device",
    purpose: null,
    processor: null,
    storageRegion: null,
    retention: null,
    deletionMethod: null,
    trainingUse: null,
    linkedToIdentity: null,
    shared: null,
    status: "requires-engineering",
    evidence: [],
    blocker: "Verify upload paths, object stores, temporary files, caches, providers, and backups.",
  },
  {
    id: "facial-data",
    category: "Facial images and derived data",
    examples: ["face crop", "landmarks", "embedding", "mask", "transformed likeness"],
    feature: "Face swapping or face personalization",
    source: "Uploaded media and processing pipeline",
    purpose: null,
    processor: null,
    storageRegion: null,
    retention: null,
    deletionMethod: null,
    trainingUse: null,
    linkedToIdentity: null,
    shared: null,
    status: "requires-legal",
    evidence: [],
    blocker: "Confirm implementation and classify biometric implications in every launch region.",
  },
  {
    id: "device-diagnostics",
    category: "Device, usage, and diagnostics",
    examples: ["device model", "OS version", "IP address", "crash log", "feature event"],
    feature: "Service operation, analytics, reliability, or security",
    source: "App, backend, and embedded SDKs",
    purpose: null,
    processor: null,
    storageRegion: null,
    retention: null,
    deletionMethod: null,
    trainingUse: "Not ordinarily applicable; verify vendor secondary use",
    linkedToIdentity: null,
    shared: null,
    status: "requires-engineering",
    evidence: [],
    blocker:
      "Review dependency manifests, SDK initialization, consent settings, and live network traffic.",
  },
  {
    id: "payments",
    category: "Purchase and subscription records",
    examples: ["store receipt", "product ID", "subscription status", "transaction ID"],
    feature: "Paid features",
    source: "Apple, Google, or other payment provider",
    purpose: null,
    processor: null,
    storageRegion: null,
    retention: null,
    deletionMethod: null,
    trainingUse: "Not applicable unless a provider contract states otherwise",
    linkedToIdentity: null,
    shared: null,
    status: "requires-business",
    evidence: [],
    blocker: "Confirm monetization design and receipt-validation architecture.",
  },
  {
    id: "support",
    category: "Support and privacy requests",
    examples: ["message", "request type", "identity evidence", "resolution record"],
    feature: "Customer support, rights requests, and grievances",
    source: "User",
    purpose: "Respond to the request and maintain an accountable resolution record",
    processor: null,
    storageRegion: null,
    retention: null,
    deletionMethod: null,
    trainingUse: null,
    linkedToIdentity: true,
    shared: null,
    status: "requires-business",
    evidence: [],
    blocker: "Select and configure a monitored intake system before enabling the contact flow.",
  },
];
