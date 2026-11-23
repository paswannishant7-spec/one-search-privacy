import type { Metadata } from "next";
import { AmbientPointer } from "@/components/ambient-pointer";
import { BackToTop } from "@/components/back-to-top";
import { Footer } from "@/components/footer";
import { MotionOrchestrator } from "@/components/motion-orchestrator";
import { Nav } from "@/components/nav";
import { PolicyBlock } from "@/components/policy-block";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "The complete One Search privacy policy publication draft and verification status.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <MotionOrchestrator />
      <AmbientPointer />
      <Nav />
      <main id="main-content" className="subpage-main">
        <header className="subpage-hero section-shell">
          <span className="kicker">One Search / legal</span>
          <h1>
            Privacy policy
            <span>draft.</span>
          </h1>
          <p>
            The complete disclosure framework, with every unverified product fact exposed as a
            release blocker.
          </p>
        </header>
        <PolicyBlock standalone />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
