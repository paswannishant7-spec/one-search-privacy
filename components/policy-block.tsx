import { FileCheck2, LockKeyhole } from "lucide-react";
import { PolicyReader } from "./policy-reader";
import { policySections, siteConfig } from "@/data/site";

export function PolicyBlock({ standalone = false }: { standalone?: boolean }) {
  return (
    <section id="policy" className={`policy-block${standalone ? " policy-block--standalone" : ""}`}>
      <div className="policy-intro section-shell">
        <div className="section-heading" data-reveal>
          <span className="kicker">Full policy draft</span>
          <h2>Readable first. Verifiable always.</h2>
          <p>
            Every section is visible as crawlable HTML. Search narrows what you see; direct links,
            print styles, keyboard navigation, and the complete source remain intact.
          </p>
        </div>
        <div className="policy-readiness" data-reveal>
          <div>
            <LockKeyhole aria-hidden />
            <span>Publication status</span>
            <strong>Not effective</strong>
          </div>
          <div>
            <FileCheck2 aria-hidden />
            <span>Verification</span>
            <strong>Business evidence required</strong>
          </div>
          <p>
            This draft is deliberately excluded from search indexing until the blockers in the data
            inventory and compliance checklist are resolved.
          </p>
        </div>
      </div>
      <div className="section-shell">
        <div className="policy-meta" aria-label="Policy metadata">
          <span>{siteConfig.policyVersion}</span>
          <span>Effective date: not assigned</span>
          <span>Last reviewed: {siteConfig.lastReviewed}</span>
        </div>
        <PolicyReader sections={policySections} />
      </div>
    </section>
  );
}
