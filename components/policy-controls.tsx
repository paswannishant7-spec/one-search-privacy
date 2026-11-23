"use client";

import { Search, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function PolicyControls() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState("");
  const [resultCount, setResultCount] = useState(24);

  const filter = (value: string) => {
    setQuery(value);
    const needle = value.trim().toLocaleLowerCase();
    const articles = Array.from(document.querySelectorAll<HTMLElement>(".policy-section"));
    let matches = 0;
    articles.forEach((article) => {
      const visible = !needle || article.textContent?.toLocaleLowerCase().includes(needle) === true;
      article.hidden = !visible;
      if (visible) matches += 1;
    });
    const empty = document.querySelector<HTMLElement>(".policy-empty");
    if (empty) empty.hidden = matches !== 0;
    setResultCount(matches);
  };

  useEffect(() => {
    inputRef.current?.setAttribute("data-hydrated", "true");
    let observer: IntersectionObserver | undefined;
    const start = () => {
      window.removeEventListener("scroll", start);
      const elements = Array.from(document.querySelectorAll<HTMLElement>(".policy-section"));
      const links = Array.from(
        document.querySelectorAll<HTMLAnchorElement>(".policy-sidebar nav a"),
      );
      observer = new IntersectionObserver(
        (entries) => {
          const visible = entries
            .filter((entry) => entry.isIntersecting && !(entry.target as HTMLElement).hidden)
            .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
          if (!visible) return;
          links.forEach((link) =>
            link.classList.toggle("is-active", link.hash === `#${visible.target.id}`),
          );
        },
        { rootMargin: "-18% 0px -68%", threshold: [0, 0.2, 0.6] },
      );
      elements.forEach((element) => observer?.observe(element));
    };
    window.addEventListener("scroll", start, { passive: true, once: true });
    if (window.scrollY > 0) start();
    return () => {
      inputRef.current?.removeAttribute("data-hydrated");
      window.removeEventListener("scroll", start);
      observer?.disconnect();
    };
  }, []);

  return (
    <div className="policy-search">
      <Search aria-hidden />
      <label htmlFor="policy-query" className="sr-only">
        Search the policy
      </label>
      <input
        ref={inputRef}
        id="policy-query"
        type="search"
        value={query}
        placeholder="Search policy"
        onChange={(event) => filter(event.target.value)}
      />
      {query && (
        <button
          type="button"
          aria-label="Clear policy search"
          onClick={() => {
            filter("");
            inputRef.current?.focus();
          }}
        >
          <X aria-hidden />
        </button>
      )}
      <span className="sr-only" role="status" aria-live="polite">
        {resultCount} policy sections shown
      </span>
    </div>
  );
}
