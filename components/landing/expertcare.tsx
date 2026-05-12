import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";

export default function ExpertCare() {
  return (
    <section
      id="expert-care"
      aria-labelledby="expert-heading"
      className="section-py text-white"
      style={{ backgroundColor: "#1E3A8A" }}
    >
      <Reveal className="container-px mx-auto max-w-5xl text-center">
        <span
          className="text-xs font-bold uppercase tracking-wider"
          style={{ color: "#FACC15" }}
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
          team that answers when you have questions.
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href="/#hero" className="btn-gold">
            Start My Evaluation
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <Link
            href="/contact-us"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Talk to support
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
