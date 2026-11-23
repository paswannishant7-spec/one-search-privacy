import Link from "next/link";
import { Logo } from "./logo";
import { siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div>
          <Logo />
          <p>Clear about data. Honest about what still needs proof.</p>
        </div>
        <nav aria-label="Footer navigation">
          <Link href="/privacy-policy">Privacy policy</Link>
          <Link href="/delete-account">Account deletion</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
      <div className="footer__bottom">
        <span>© {new Date().getFullYear()} One Search</span>
        <span>
          {siteConfig.policyVersion} · Last reviewed {siteConfig.lastReviewed}
        </span>
      </div>
    </footer>
  );
}
