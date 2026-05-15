import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";

export default function ExpertCare() {
  return (
    <section
      id="expert-care"
      aria-labelledby="expert-heading"
      className="section-py text-white"
      style={{ background: "var(--grad-dark)" }}
    >
      <Reveal className="container-px mx-auto max-w-5xl text-center">
        <span
          className="text-xs font-bold uppercase tracking-wider"
          style={{ color: "var(--g5)", letterSpacing: "0.14em" }}
        >
          Expert care, on demand
        </span>
        <h2
          id="expert-heading"
          className="heading-secondary mt-3 text-white text-balance"
        >
          98% of California patients are evaluated in under 15 minutes
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base sm:text-lg text-white/90">
          Our network of California-licensed physicians is built for speed
          without cutting corners — secure video, signed recommendations, and a
          team that answers whenever you have questions.
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/#hero"
            title="Start your Bakersfield medical marijuana card evaluation"
            className="btn-gold"
          >
            Start My Evaluation
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <Link
            href="/contact-us"
            title="Talk to Baker420 California medical marijuana card support"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Talk to support
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
