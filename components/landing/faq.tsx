"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { FAQS, FAQ_CATEGORIES, type FaqCategory } from "@/lib/content";

export default function Faq() {
  const [activeCategory, setActiveCategory] =
    useState<FaqCategory>("Eligibility");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const items = FAQS.filter((f) => f.category === activeCategory);

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="section-py"
      style={{ backgroundColor: "var(--color-surface-alt)" }}
    >
      <div className="container-px mx-auto max-w-4xl">
        <div className="text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-primary)]">
            Frequently Asked Questions
          </span>
          <h2 id="faq-heading" className="heading-secondary mt-2">
            Bakersfield patients ask, we answer
          </h2>
        </div>

        <div
          role="tablist"
          aria-label="FAQ categories"
          className="mt-8 flex flex-wrap justify-center gap-2"
        >
          {FAQ_CATEGORIES.map((cat) => {
            const isActive = cat === activeCategory;
            return (
              <button
                key={cat}
                role="tab"
                type="button"
                aria-selected={isActive}
                aria-controls={`faq-panel-${cat}`}
                id={`faq-tab-${cat}`}
                onClick={() => {
                  setActiveCategory(cat);
                  setOpenIndex(0);
                }}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  isActive
                    ? "bg-[var(--color-primary)] text-white shadow"
                    : "bg-white text-[var(--color-heading)] border border-[var(--color-border)] hover:bg-[var(--color-background)]"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        <div
          id={`faq-panel-${activeCategory}`}
          role="tabpanel"
          aria-labelledby={`faq-tab-${activeCategory}`}
          className="mt-8 space-y-3"
        >
          {items.map((item, idx) => {
            const isOpen = openIndex === idx;
            const buttonId = `faq-question-${activeCategory}-${idx}`;
            const regionId = `faq-answer-${activeCategory}-${idx}`;
            return (
              <div
                key={item.question}
                className="card-soft overflow-hidden"
              >
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={regionId}
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="flex w-full items-start justify-between gap-4 px-5 py-4 text-left"
                  >
                    <span className="font-serif text-base sm:text-lg font-semibold text-[var(--color-heading)]">
                      {item.question}
                    </span>
                    <ChevronDown
                      aria-hidden="true"
                      className={`mt-1 h-5 w-5 shrink-0 text-[var(--color-primary)] transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </h3>
                <div
                  id={regionId}
                  role="region"
                  aria-labelledby={buttonId}
                  hidden={!isOpen}
                  className="px-5 pb-5 text-[var(--color-body)] text-sm sm:text-base leading-relaxed"
                >
                  {item.answer}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
