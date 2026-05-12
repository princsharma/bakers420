import Link from "next/link";
import { Check } from "lucide-react";
import Reveal from "@/components/Reveal";

const INCLUDED = [
  "Live video evaluation with a California-licensed physician",
  "Same-day digital physician's recommendation if approved",
  "Verification line for dispensaries — open 7 days a week",
  "Help filing an optional county MMIC application",
  "Money-back guarantee if you are not approved",
  "Free 1-year follow-up support",
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      aria-labelledby="pricing-heading"
      className="section-py"
      style={{ backgroundColor: "var(--color-surface-alt)" }}
    >
      <div className="container-px mx-auto max-w-3xl">
        <Reveal className="text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-primary)]">
            Simple, Transparent Pricing
          </span>
          <h2 id="pricing-heading" className="heading-secondary mt-2">
            One flat fee — pay only if approved
          </h2>
        </Reveal>

        <Reveal delay={120} className="mt-10">
          <div
            className="relative overflow-hidden rounded-3xl bg-white card-hover"
            style={{
              border: "1px solid var(--color-border)",
              boxShadow: "var(--shadow-card)",
            }}
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-12 top-7 rotate-45 px-16 py-1.5 text-xs font-bold uppercase tracking-wider text-white shadow-md"
              style={{ backgroundColor: "#C2410C" }}
            >
              CA Resident Special
            </div>

            <div className="grid gap-8 p-8 sm:p-10 md:grid-cols-5">
              <div className="md:col-span-3">
                <h3 className="font-serif text-2xl font-bold text-[var(--color-heading)]">
                  California Resident Special
                </h3>
                <p className="text-muted mt-2">
                  A complete telehealth MMJ evaluation by a California-licensed
                  physician — backed by a 100% money-back guarantee.
                </p>

                <ul className="mt-6 space-y-3">
                  {INCLUDED.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span
                        className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
                        style={{ backgroundColor: "#FACC15", color: "#1E3A8A" }}
                        aria-hidden="true"
                      >
                        <Check className="h-3 w-3" />
                      </span>
                      <span className="text-sm text-[var(--color-body)]">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="md:col-span-2 flex flex-col items-center justify-center rounded-2xl bg-[var(--color-surface-alt)] p-6 text-center">
                <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-muted)]">
                  One-time fee
                </p>
                <p
                  className="mt-2 font-serif text-5xl font-extrabold leading-none"
                  style={{ color: "#C2410C" }}
                >
                  $59
                </p>
                <p className="text-xs text-[var(--color-muted)] mt-1">
                  + optional $44 county MMIC fee
                </p>
                <Link href="/#hero" className="btn-primary mt-5 w-full">
                  Start My Evaluation
                </Link>
                <p className="mt-3 text-[11px] text-[var(--color-muted)]">
                  No charge if not approved.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
