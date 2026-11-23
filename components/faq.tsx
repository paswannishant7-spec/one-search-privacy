"use client";

import { Plus } from "lucide-react";
import { useState } from "react";
import { faqItems } from "@/data/site";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="faq section-shell" aria-labelledby="faq-title">
      <div className="section-heading" data-reveal>
        <span className="kicker">Straight answers</span>
        <h2 id="faq-title">Privacy questions, without the fog.</h2>
      </div>
      <div className="faq-list" data-reveal>
        {faqItems.map((item, index) => {
          const expanded = open === index;
          return (
            <div className={`faq-item${expanded ? " is-open" : ""}`} key={item.question}>
              <h3>
                <button
                  type="button"
                  aria-expanded={expanded}
                  aria-controls={`faq-answer-${index}`}
                  onClick={() => setOpen(expanded ? null : index)}
                >
                  <span>{item.question}</span>
                  <Plus aria-hidden />
                </button>
              </h3>
              <div id={`faq-answer-${index}`} className="faq-answer" hidden={!expanded}>
                <p>{item.answer}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
