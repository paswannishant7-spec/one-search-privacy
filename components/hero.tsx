import { ArrowDown, CircleCheck, Search, ShieldCheck, Sparkles } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/data/site";

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__wash" aria-hidden />
      <div className="hero__main bento-card bento-card--ink">
        <div className="hero__meta">
          <span className="status-chip">
            <span aria-hidden /> {siteConfig.policyVersion}
          </span>
          <span>Reviewed {siteConfig.lastReviewed}</span>
        </div>
        <h1 id="hero-title">
          <span className="hero-line">
            <span data-hero-line>Privacy, made</span>
          </span>
          <span className="hero-line hero-line--accent">
            <span data-hero-line>visible.</span>
          </span>
        </h1>
        <p data-hero-line>
          A clear, evidence-led privacy center for creative AI—built to explain the data journey
          without hiding uncertainty behind polished words.
        </p>
        <div className="hero__actions" data-hero-line>
          <Link className="button button--light" href="#policy">
            Read the draft
          </Link>
          <Link className="text-link" href="/delete-account">
            Account deletion <ArrowDown aria-hidden />
          </Link>
        </div>
      </div>

      <div className="hero__principle bento-card bento-card--orange" data-parallax>
        <ShieldCheck aria-hidden />
        <span>Principle one</span>
        <h2>Say only what the evidence proves.</h2>
        <div className="signal-ring" aria-hidden>
          <i />
          <i />
          <i />
        </div>
      </div>

      <div className="hero__search bento-card" data-hero-line>
        <div className="hero__search-icon">
          <Search aria-hidden />
        </div>
        <div>
          <span>Policy search</span>
          <strong>Find any topic in seconds</strong>
        </div>
        <CircleCheck aria-label="Available" />
      </div>

      <div className="hero__proof bento-card" data-hero-line>
        <Sparkles aria-hidden />
        <strong>24</strong>
        <span>disclosure areas mapped before release</span>
      </div>
    </section>
  );
}
