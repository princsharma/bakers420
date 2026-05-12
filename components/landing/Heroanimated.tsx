import Image from "next/image";
import FormWrapper from "./formwrapper";

const BADGES = [
  { label: "HIPAA-Compliant", src: "/assets/hero/hippa.svg" },
  { label: "Money-Back Guarantee", src: "/assets/hero/moneyback.svg" },
  { label: "Licensed CA Physicians", src: "/assets/hero/licensed.svg" },
];

export default function HeroAnimated() {
  return (
    <section
      id="hero"
      className="relative isolate overflow-hidden pt-28 lg:pt-32 pb-16 lg:pb-24 hero-animated-bg"
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

      <div className="container-px relative mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
            <FormWrapper />
          </div>

          <div className="order-1 lg:order-2 text-white">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-white ring-1 ring-white/30">
              California Residents · Prop 215 + SB 420
            </span>
            <h1 className="heading-primary mt-5 text-white">
              Get Your California Medical Marijuana Card —{" "}
              <span style={{ color: "#FACC15" }}>100% Online</span>
            </h1>
            <p className="mt-5 max-w-xl text-base sm:text-lg text-white/95">
              Connect with a California-licensed physician in minutes. Secure
              telehealth evaluation, same-day digital recommendation, and an
              optional county MMIC application — all from your couch.
            </p>

            <ul className="mt-7 flex flex-wrap gap-3" aria-label="Trust signals">
              {BADGES.map((badge) => (
                <li key={badge.label}>
                  <span className="pill-badge">
                    <Image
                      src={badge.src}
                      alt=""
                      width={20}
                      height={20}
                      aria-hidden="true"
                    />
                    {badge.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
