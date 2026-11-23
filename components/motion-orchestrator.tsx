"use client";

import { useEffect } from "react";

export function MotionOrchestrator() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduced.matches) return;

    document.documentElement.dataset.motion = "ready";

    let cancelled = false;
    let cleanup: () => void = () => {};
    const activateScrollMotion = () => {
      window.removeEventListener("scroll", activateScrollMotion);
      void Promise.all([import("gsap"), import("gsap/ScrollTrigger")]).then(
        ([{ gsap }, { ScrollTrigger }]) => {
          if (cancelled) return;
          gsap.registerPlugin(ScrollTrigger);
          const context = gsap.context(() => {
            gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((element) => {
              gsap.from(element, {
                y: 44,
                opacity: 0,
                duration: 0.85,
                ease: "power3.out",
                scrollTrigger: { trigger: element, start: "top 88%", once: true },
              });
            });

            gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((element) => {
              gsap.to(element, {
                yPercent: -10,
                ease: "none",
                scrollTrigger: {
                  trigger: element.parentElement,
                  start: "top bottom",
                  end: "bottom top",
                  scrub: 0.8,
                },
              });
            });
          });
          cleanup = () => context.revert();
        },
      );
    };

    window.addEventListener("scroll", activateScrollMotion, { passive: true, once: true });
    if (window.scrollY > 0) activateScrollMotion();

    return () => {
      cancelled = true;
      window.removeEventListener("scroll", activateScrollMotion);
      cleanup();
      delete document.documentElement.dataset.motion;
    };
  }, []);

  return null;
}
