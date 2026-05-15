import Image from "next/image";
import FormWrapper from "./formwrapper";

const BADGES = [
  {
    label: "HIPAA-Compliant",
    src: "/assets/hero/hippa.svg",
  },
  {
    label: "Money-Back Guarantee",
    src: "/assets/hero/moneyback.svg",
  },
  {
    label: "Licensed CA Physicians",
    src: "/assets/hero/licensed.svg",
  },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative isolate overflow-hidden pt-28 lg:pt-32 pb-16 lg:pb-24"
      style={{ background: "var(--grad-hero)" }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: "url(/assets/hero/palm-pattern.svg)",
          backgroundRepeat: "repeat",
          backgroundSize: "320px 320px",
        }}
        aria-hidden="true"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -right-32 h-[520px] w-[520px] rounded-full blur-3xl opacity-40"
        style={{
          background:
            "radial-gradient(closest-side, rgba(82,183,136,0.45), transparent 70%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-32 h-[520px] w-[520px] rounded-full blur-3xl opacity-40"
        style={{
          background:
            "radial-gradient(closest-side, rgba(233,196,106,0.45), transparent 70%)",
        }}
      />

      <div className="container-px relative mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="order-2 lg:order-1 flex justify-center lg:justify-start anim-fade-up anim-delay-2">
            <FormWrapper />
          </div>

          <div className="order-1 lg:order-2 text-white">
            <span className="anim-fade-up inline-flex items-center gap-2 rounded-full bg-white/20 backdrop-blur px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-white ring-1 ring-white/40 shadow-sm">
              <span
                className="h-1.5 w-1.5 rounded-full anim-pulse-ring"
                style={{ backgroundColor: "var(--g5)" }}
                aria-hidden="true"
              />
              Bakersfield · Kern County · Prop 215 + SB 94
            </span>
            <h1 className="heading-primary anim-fade-up anim-delay-1 mt-5 text-white hero-text-shadow">
              Apply for a California Medical Marijuana Card{" "}
              <span className="accent-underline">Online in Bakersfield</span>
            </h1>
            <p className="anim-fade-up anim-delay-2 mt-5 max-w-xl text-base sm:text-lg text-white hero-soft-shadow">
              Getting a Bakersfield medical marijuana card online is now easier
              for eligible California patients. Our secure telemedicine platform
              connects you with licensed physicians for a California-compliant
              evaluation — all from the comfort of home.
            </p>

            <ul
              role="list"
              className="mt-7 flex flex-wrap gap-3"
              aria-label="Trust signals"
            >
              {BADGES.map((badge, i) => (
                <li
                  key={badge.label}
                  className={`anim-fade-up anim-delay-${i + 3}`}
                >
                  <span className="pill-badge">
                    <Image
                      src={badge.src}
                      alt={`${badge.label} badge for Bakersfield medical marijuana card evaluation`}
                      title={badge.label}
                      width={20}
                      height={20}
                      priority
                    />
                    {badge.label}
                  </span>
                </li>
              ))}
            </ul>

            <dl className="anim-fade-up anim-delay-6 mt-8 grid max-w-md grid-cols-3 gap-4 text-white">
              <div className="rounded-2xl bg-white/10 backdrop-blur-sm px-3 py-3 ring-1 ring-white/25">
                <dt className="text-[11px] font-semibold uppercase tracking-wider text-white/90">
                  Patients
                </dt>
                <dd className="font-serif text-2xl font-bold text-white hero-soft-shadow">
                  120k+
                </dd>
              </div>
              <div className="rounded-2xl bg-white/10 backdrop-blur-sm px-3 py-3 ring-1 ring-white/25">
                <dt className="text-[11px] font-semibold uppercase tracking-wider text-white/90">
                  Rating
                </dt>
                <dd className="font-serif text-2xl font-bold text-white hero-soft-shadow">
                  4.9★
                </dd>
              </div>
              <div className="rounded-2xl bg-white/10 backdrop-blur-sm px-3 py-3 ring-1 ring-white/25">
                <dt className="text-[11px] font-semibold uppercase tracking-wider text-white/90">
                  Avg. Visit
                </dt>
                <dd className="font-serif text-2xl font-bold text-white hero-soft-shadow">
                  12 min
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
