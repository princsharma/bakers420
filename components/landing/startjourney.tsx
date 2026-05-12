import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";

export default function StartJourney() {
  return (
    <section
      id="start-journey"
      aria-labelledby="start-heading"
      className="section-py relative overflow-hidden"
      style={{
        background:
          "linear-gradient(120deg, #FFFBF5 0%, #FFFBF5 50%, #FED7AA 50%, #C2410C 100%)",
      }}
    >
      <Reveal className="container-px mx-auto max-w-4xl text-center">
        <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-primary)]">
          Ready when you are
        </span>
        <h2 id="start-heading" className="heading-secondary mt-3 text-balance">
          Start your California MMJ journey today
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-body">
          Most patients are evaluated, approved, and shopping at a California
          dispensary the very same day. No paperwork, no clinic waiting rooms —
          just secure video, a licensed physician, and your recommendation.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href="/#hero" className="btn-primary">
            Apply Now — $59
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <Link href="/#pricing" className="btn-secondary">
            See what&rsquo;s included
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
