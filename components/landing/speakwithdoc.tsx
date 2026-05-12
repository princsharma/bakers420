import Link from "next/link";
import { PhoneCall, MessageCircle } from "lucide-react";
import Reveal from "@/components/Reveal";

export default function SpeakWithDoc() {
  return (
    <section
      id="speak-with-doc"
      aria-labelledby="speak-heading"
      className="section-py text-white"
      style={{ backgroundColor: "#1E3A8A" }}
    >
      <div className="container-px mx-auto max-w-4xl">
        <div className="grid items-center gap-8 md:grid-cols-[1fr_auto] md:gap-12">
          <Reveal>
            <span
              className="text-xs font-bold uppercase tracking-wider"
              style={{ color: "#FACC15" }}
            >
              Still have questions?
            </span>
            <h2
              id="speak-heading"
              className="heading-secondary mt-3 text-white text-balance"
            >
              Speak with a California-licensed physician today
            </h2>
            <p className="mt-4 max-w-xl text-white/90">
              Our care team is standing by 7 days a week, 8am–10pm PT, to help
              you get evaluated, approved, and on your way to your medical
              cannabis recommendation.
            </p>
          </Reveal>

          <Reveal
            delay={120}
            className="flex flex-col gap-3 sm:flex-row md:flex-col"
          >
            <a
              href="tel:18004202254"
              className="btn-gold inline-flex items-center gap-2"
            >
              <PhoneCall className="h-4 w-4" aria-hidden="true" />
              Call 1-800-420-CALI
            </a>
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Message support
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
