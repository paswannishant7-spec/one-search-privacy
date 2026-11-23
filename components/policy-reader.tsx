import { AlertTriangle, Search } from "lucide-react";
import type { PolicySection } from "@/data/site";
import { PolicyControls } from "./policy-controls";

export function PolicyReader({ sections }: { sections: PolicySection[] }) {
  return (
    <div className="policy-reader">
      <aside className="policy-sidebar" aria-label="Policy contents">
        <PolicyControls />
        <nav aria-label="Policy sections">
          {sections.map((section, index) => (
            <a
              href={`#${section.id}`}
              key={section.id}
              className={index === 0 ? "is-active" : undefined}
            >
              {section.title}
            </a>
          ))}
        </nav>
      </aside>

      <div className="policy-content">
        <div className="policy-empty" hidden>
          <Search aria-hidden />
          <h3>No matching section</h3>
          <p>Try a broader term such as “photos”, “deletion”, “AI”, or “security”.</p>
        </div>
        {sections.map((section) => (
          <article id={section.id} className="policy-section" key={section.id}>
            <a
              className="policy-section__anchor"
              href={`#${section.id}`}
              aria-label={`Link to ${section.title}`}
            >
              #
            </a>
            <span className="policy-section__eyebrow">{section.eyebrow}</span>
            <h3>{section.title}</h3>
            <p className="policy-section__summary">{section.summary}</p>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            {section.bullets && (
              <ul>
                {section.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            )}
            {section.blocker && (
              <div className="blocker-note">
                <AlertTriangle aria-hidden />
                <div>
                  <strong>Release blocker</strong>
                  <p>{section.blocker}</p>
                </div>
              </div>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}
