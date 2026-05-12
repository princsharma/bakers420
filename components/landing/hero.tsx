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
      style={{
        background:
          "linear-gradient(135deg, #C2410C 0%, #EA580C 35%, #F59E0B 70%, #FACC15 100%)",
      }}
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
            "radial-gradient(closest-side, rgba(250,204,21,0.7), transparent 70%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-32 h-[520px] w-[520px] rounded-full blur-3xl opacity-40"
        style={{
          background:
            "radial-gradient(closest-side, rgba(194,65,12,0.65), transparent 70%)",
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
                className="h-1.5 w-1.5 rounded-full bg-[#FACC15] anim-pulse-ring"
                aria-hidden="true"
              />
              California Residents · Prop 215 + SB 420
            </span>
            <h1 className="heading-primary anim-fade-up anim-delay-1 mt-5 text-white hero-text-shadow">
              Get Your California Medical Marijuana Card —{" "}
              <span className="accent-underline">100% Online</span>
            </h1>
            <p className="anim-fade-up anim-delay-2 mt-5 max-w-xl text-base sm:text-lg text-white hero-soft-shadow">
              Connect with a California-licensed physician in minutes. Secure
              telehealth evaluation, same-day digital recommendation, and an
              optional county MMIC application — all from your couch.
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
                      alt=""
                      width={20}
                      height={20}
                      priority
                      aria-hidden="true"
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
