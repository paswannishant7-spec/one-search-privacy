import { Braces, Fingerprint, ScanFace, ServerCog, TimerReset } from "lucide-react";

const journeys = [
  { label: "You choose", value: "Prompt + media", icon: Fingerprint },
  { label: "App prepares", value: "Purpose-limited request", icon: Braces },
  { label: "Provider processes", value: "Verified vendor only", icon: ServerCog },
  { label: "Lifecycle ends", value: "Documented deletion", icon: TimerReset },
];

export function PrivacyBento() {
  return (
    <section className="privacy-bento section-shell" aria-labelledby="journey-title">
      <div className="section-heading" data-reveal>
        <span className="kicker">A better disclosure model</span>
        <h2 id="journey-title">Follow the data—not the marketing.</h2>
        <p>
          Every product claim should connect to a purpose, a system, a provider, a retention rule,
          and a user control.
        </p>
      </div>
      <div className="journey-grid">
        <article className="journey-map" data-reveal>
          <div className="journey-map__line" aria-hidden />
          {journeys.map((item) => {
            const Icon = item.icon;
            return (
              <div className="journey-step" key={item.label}>
                <span className="journey-step__icon">
                  <Icon aria-hidden />
                </span>
                <div>
                  <small>{item.label}</small>
                  <strong>{item.value}</strong>
                </div>
              </div>
            );
          })}
        </article>

        <article className="face-card" data-reveal>
          <div className="face-card__visual" aria-hidden>
            <ScanFace />
            <span className="scan-line" />
          </div>
          <div>
            <span className="kicker">Likeness deserves clarity</span>
            <h3>Detection is not automatically identification.</h3>
            <p>
              Face features need a technical classification, explicit purpose, retention evidence,
              and safeguards against impersonation.
            </p>
          </div>
        </article>

        <article className="truth-card" data-reveal>
          <span className="truth-card__glyph" aria-hidden>
            ?
          </span>
          <p>
            Unknown facts are <strong>release blockers</strong>, not copywriting opportunities.
          </p>
        </article>
      </div>
    </section>
  );
}
