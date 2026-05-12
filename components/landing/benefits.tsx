import { ShieldCheck, Leaf, Scale, Receipt } from "lucide-react";
import Reveal from "@/components/Reveal";

const BENEFITS = [
  {
    title: "Safe & Regulated Access",
    body: "Access cannabis products sold through licensed California dispensaries — every product must comply with state testing, labeling, and safety requirements.",
    icon: ShieldCheck,
  },
  {
    title: "Access to a Variety of Products",
    body: "Qualified patients may access a wide range of cannabis products, including flower, edibles, tinctures, concentrates, oils, vape products, capsules, and topicals.",
    icon: Leaf,
  },
  {
    title: "Legal Protections",
    body: "A California medical marijuana recommendation may provide certain legal protections and medical cannabis access benefits under California law.",
    icon: Scale,
  },
  {
    title: "Tax Savings",
    body: "MMIC holders are exempt from state and local sales and use taxes (typically 7.25%–10.25%) on medicinal cannabis products at licensed California dispensaries.",
    icon: Receipt,
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
            Benefits of Your Card
          </span>
          <h2 id="benefits-heading" className="heading-secondary mt-2">
            Benefits of Your Medical Marijuana Card in Bakersfield, California
          </h2>
          <p className="text-body mt-4">
            With a valid California medical marijuana recommendation, eligible
            patients in Bakersfield can access medical cannabis through
            California&rsquo;s regulated cannabis system.
          </p>
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
                          ? "linear-gradient(135deg, rgba(82,183,136,0.18), rgba(149,213,178,0.32))"
                          : "linear-gradient(135deg, rgba(233,196,106,0.22), rgba(149,213,178,0.32))",
                    }}
                    aria-hidden="true"
                  >
                    <div className="flex h-full w-full items-center justify-center">
                      <Icon
                        className="h-24 w-24 anim-float"
                        style={{ color: "var(--g2)" }}
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
