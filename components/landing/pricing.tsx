import Link from "next/link";
import { Check, RefreshCcw } from "lucide-react";
import Reveal from "@/components/Reveal";

const INCLUDED = [
  "Live video consultation with a California-licensed physician",
  "Same-day digital physician recommendation if approved",
  "Dispensary verification support line available 7 days a week",
  "Guidance for optional county MMIC application filing",
  "Money-back guarantee if you are not approved",
  "Free 1-year follow-up support for continued assistance",
];

const RENEWAL_INCLUDED = [
  "Fast renewal consultation",
  "Updated medical cannabis recommendation",
  "Same-day appointments available",
  "Continued patient guidance and support",
  "Secure and HIPAA-compliant process",
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
          <span className="eyebrow">Our Transparent Pricing</span>
          <h2 id="pricing-heading" className="heading-secondary mt-2">
            One flat fee — pay only if approved
          </h2>
          <p className="text-body mt-4">
            Get a complete telehealth medical marijuana evaluation from a
            California-licensed physician with a simple, transparent pricing
            model — no charge if you are not approved.
          </p>
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
              style={{ background: "var(--grad-gold)" }}
            >
              Bakersfield Patient Special
            </div>

            <div className="grid gap-8 p-8 sm:p-10 md:grid-cols-5">
              <div className="md:col-span-3">
                <h3 className="font-serif text-2xl font-bold text-[var(--color-heading)]">
                  Bakersfield&rsquo;s Patient Special
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
                        style={{ background: "var(--grad-primary)", color: "var(--white)" }}
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
                  style={{ color: "var(--g3)" }}
                >
                  $55
                </p>
                <p className="text-xs text-[var(--color-muted)] mt-1">
                  + optional county MMIC fee
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

        <Reveal delay={200} className="mt-6">
          <div
            className="relative overflow-hidden rounded-3xl card-hover"
            style={{
              border: "1px solid var(--color-border)",
              background:
                "linear-gradient(135deg, rgba(82,183,136,0.08), rgba(149,213,178,0.18))",
            }}
          >
            <div className="grid gap-6 p-7 sm:p-8 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <div className="flex items-center gap-3">
                  <span
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full"
                    style={{
                      background: "var(--grad-primary)",
                      color: "var(--white)",
                    }}
                    aria-hidden="true"
                  >
                    <RefreshCcw className="h-5 w-5" />
                  </span>
                  <h3 className="font-serif text-xl font-bold text-[var(--color-heading)]">
                    MMIC Renewal — <span style={{ color: "var(--g3)" }}>$99</span>
                  </h3>
                </div>
                <p className="text-body mt-3">
                  Renew your California medical marijuana recommendation quickly
                  and conveniently online.
                </p>
                <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                  {RENEWAL_INCLUDED.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <Check
                        className="mt-0.5 h-4 w-4 shrink-0"
                        style={{ color: "var(--g3)" }}
                        aria-hidden="true"
                      />
                      <span className="text-sm text-[var(--color-body)]">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                href="/#hero"
                className="btn-secondary whitespace-nowrap"
              >
                Renew Your CA MMJ Card
              </Link>
            </div>
          </div>
        </Reveal>

        <Reveal delay={260} className="mt-6">
          <p className="text-xs text-center text-[var(--color-muted)]">
            California medical marijuana laws and county requirements may
            change over time. Patients should always follow current state
            regulations and dispensary policies.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
