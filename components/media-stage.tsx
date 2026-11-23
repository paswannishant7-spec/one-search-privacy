"use client";

import { Pause, Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { siteConfig } from "@/data/site";

export function MediaStage() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(true);
  const [failed, setFailed] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
    if (!siteConfig.video.enabled) return;
    void videoRef.current?.play().catch(() => setPlaying(false));
  }, []);

  const showFallback = !siteConfig.video.enabled || failed;

  const toggle = () => {
    if (showFallback) {
      setPlaying((value) => !value);
      return;
    }
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      void video.play();
      setPlaying(true);
    } else {
      video.pause();
      setPlaying(false);
    }
  };

  return (
    <section
      className="media-stage"
      aria-labelledby="media-title"
      data-reveal
      data-hydrated={hydrated}
    >
      <div className="media-stage__copy">
        <span className="kicker">Signal / consent / control</span>
        <h2 id="media-title">Privacy should move at the speed of the product.</h2>
        <p>
          A living system of notices, choices, deletion, and evidence—not a static paragraph added
          after launch.
        </p>
      </div>
      <div className={`media-stage__visual${playing ? " is-playing" : " is-paused"}`}>
        {!showFallback && (
          <video
            ref={videoRef}
            muted
            loop
            playsInline
            preload="metadata"
            poster={siteConfig.video.poster}
            onError={() => setFailed(true)}
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
          >
            <source src={siteConfig.video.webm} type="video/webm" />
            <source src={siteConfig.video.mp4} type="video/mp4" />
          </video>
        )}
        {showFallback && (
          <div className="media-fallback" role="img" aria-label="Animated abstract privacy network">
            <div className="orb orb--one" />
            <div className="orb orb--two" />
            <div className="orb orb--three" />
            <svg viewBox="0 0 900 600" aria-hidden>
              <path d="M90 310C240 95 350 510 500 270S750 80 830 300" />
              <path d="M60 430C250 540 290 120 480 360s260 170 360-20" />
            </svg>
            <span className="media-fallback__label">Live generative fallback</span>
          </div>
        )}
        <button className="media-control" type="button" onClick={toggle}>
          {playing ? <Pause aria-hidden /> : <Play aria-hidden />}
          <span>{playing ? "Pause motion" : "Play motion"}</span>
        </button>
      </div>
    </section>
  );
}
