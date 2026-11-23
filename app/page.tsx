import { AmbientPointer } from "@/components/ambient-pointer";
import { BackToTop } from "@/components/back-to-top";
import { FAQ } from "@/components/faq";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { MediaStage } from "@/components/media-stage";
import { MotionOrchestrator } from "@/components/motion-orchestrator";
import { Nav } from "@/components/nav";
import { PolicyBlock } from "@/components/policy-block";
import { PrivacyBento } from "@/components/privacy-bento";

export default function Home() {
  return (
    <>
      <MotionOrchestrator />
      <AmbientPointer />
      <Nav />
      <main id="main-content">
        <div className="page-shell">
          <Hero />
          <MediaStage />
        </div>
        <PrivacyBento />
        <PolicyBlock />
        <FAQ />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
