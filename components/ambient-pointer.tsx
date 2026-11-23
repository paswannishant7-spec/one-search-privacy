"use client";

import { useEffect, useRef } from "react";

export function AmbientPointer() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    const onMove = (event: PointerEvent) => {
      ref.current?.style.setProperty("--pointer-x", `${event.clientX}px`);
      ref.current?.style.setProperty("--pointer-y", `${event.clientY}px`);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return <div className="ambient-pointer" ref={ref} aria-hidden />;
}
