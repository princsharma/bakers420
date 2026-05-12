import { Wallet, BadgeCheck, Lock, Leaf } from "lucide-react";
import Reveal from "@/components/Reveal";

const BENEFITS = [
  {
    title: "Lower out-of-pocket costs",
    body: "MMIC cardholders are exempt from California sales and use tax on medical cannabis purchases — a meaningful savings on every refill.",
    icon: Wallet,
  },
  {
    title: "Verified by California-licensed physicians",
    body: "Every recommendation is signed by a CA-licensed M.D. or D.O. and verifiable directly with the California Medical Board.",
    icon: BadgeCheck,
  },
  {
    title: "HIPAA-secure end to end",
    body: "Encrypted intake, encrypted video, encrypted records. Your evaluation never leaves a HIPAA-compliant environment.",
    icon: Lock,
  },
  {
    title: "Same-day digital recommendation",
    body: "Most approved patients receive their physician's recommendation within the same hour — ready to use at any licensed CA dispensary.",
    icon: Leaf,
  },
];

export default function Benefits() {
  return (
    <section
      id="benefits"
      aria-labelledby="benefits-heading"
      className="section-py"
      style={{ backgroundColor: "var(--color-surface-alt)" }}
    >
      <div className="container-px mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-primary)]">
            Why Baker420 California
          </span>
          <h2 id="benefits-heading" className="heading-secondary mt-2">
            The benefits of holding a California recommendation
          </h2>
        </Reveal>

        <div className="mt-12 space-y-12 md:space-y-16">
          {BENEFITS.map((benefit, idx) => {
            const Icon = benefit.icon;
            const isReversed = idx % 2 === 1;
            return (
              <article
                key={benefit.title}
                className="grid items-center gap-8 md:grid-cols-2 md:gap-12"
              >
                <Reveal className={isReversed ? "md:order-2" : ""}>
                  <div
                    className="aspect-[4/3] w-full overflow-hidden rounded-3xl card-hover transition-transform"
                    style={{
                      background:
                        idx % 2 === 0
                          ? "linear-gradient(135deg, #FFEDD5, #FACC15)"
                          : "linear-gradient(135deg, #DBEAFE, #FACC15)",
                    }}
                    aria-hidden="true"
                  >
                    <div className="flex h-full w-full items-center justify-center">
                      <Icon
                        className="h-24 w-24 anim-float"
                        style={{ color: "#1E3A8A" }}
                        strokeWidth={1.5}
                      />
                    </div>
                  </div>
                </Reveal>
                <Reveal
                  className={isReversed ? "md:order-1" : ""}
                  delay={120}
                >
                  <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-primary)]">
                    Benefit 0{idx + 1}
                  </span>
                  <h3 className="heading-secondary mt-2 text-[1.5rem] sm:text-[1.75rem]">
                    {benefit.title}
                  </h3>
                  <p className="text-body mt-4">{benefit.body}</p>
                </Reveal>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
