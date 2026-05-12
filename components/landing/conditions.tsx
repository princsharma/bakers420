import {
  Activity,
  Brain,
  HeartPulse,
  Bone,
  Eye,
  Pill,
  Zap,
  Flame,
  Apple,
  ShieldAlert,
  Stethoscope,
  Sparkles,
} from "lucide-react";
import Reveal from "@/components/Reveal";

const CONDITIONS = [
  { name: "AIDS", icon: ShieldAlert },
  { name: "Anorexia", icon: Apple },
  { name: "Arthritis", icon: Bone },
  { name: "Cachexia", icon: Activity },
  { name: "Cancer", icon: HeartPulse },
  { name: "Chronic Pain", icon: Flame },
  { name: "Glaucoma", icon: Eye },
  { name: "Migraine", icon: Brain },
  { name: "Persistent Muscle Spasms (incl. MS)", icon: Zap },
  { name: "Seizures (incl. epilepsy)", icon: Sparkles },
  { name: "Severe Nausea", icon: Pill },
  {
    name: "Any other chronic or persistent symptom that substantially limits major life activities, or that, if not alleviated, could cause serious harm to physical or mental health.",
    icon: Stethoscope,
    long: true,
  },
];

export default function Conditions() {
  return (
    <section
      id="conditions"
      aria-labelledby="conditions-heading"
      className="section-py"
      style={{ backgroundColor: "var(--color-surface-alt)" }}
    >
      <div className="container-px mx-auto max-w-7xl">
        <Reveal className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-primary)]">
            California Qualifying Conditions
          </span>
          <h2
            id="conditions-heading"
            className="heading-secondary mt-2"
          >
            Conditions covered under Prop 215
          </h2>
          <p className="text-body mt-4">
            California&rsquo;s Compassionate Use Act recognizes a broad set of
            qualifying conditions. If you experience any of the following, you
            may qualify for a physician&rsquo;s recommendation.
          </p>
        </Reveal>

        <div
          className="mt-10"
          style={{ columnGap: "1.25rem" }}
        >
          <div
            className="conditions-masonry"
            style={{
              columnCount: 1,
              columnGap: "1.25rem",
            }}
          >
            <style>{`
              @media (min-width: 640px) {
                .conditions-masonry { column-count: 2 !important; }
              }
              @media (min-width: 1024px) {
                .conditions-masonry { column-count: 3 !important; }
              }
            `}</style>
            {CONDITIONS.map((c, i) => {
              const Icon = c.icon;
              return (
                <Reveal
                  key={c.name}
                  as="article"
                  delay={(i % 6) * 70}
                  className="condition-card mb-5 break-inside-avoid rounded-2xl bg-white p-5 shadow-sm card-hover"
                >
                  <Icon
                    className="h-6 w-6 text-[var(--color-primary)]"
                    aria-hidden="true"
                  />
                  <h3
                    className={`mt-3 font-serif font-semibold text-[var(--color-heading)] ${
                      c.long ? "text-base" : "text-lg"
                    }`}
                  >
                    {c.name}
                  </h3>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
