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
  Sparkles,
} from "lucide-react";
import Reveal from "@/components/Reveal";

const CONDITIONS = [
  { name: "AIDS", icon: ShieldAlert },
  { name: "Anorexia", icon: Apple },
  { name: "Arthritis", icon: Bone },
  { name: "Cachexia (wasting syndrome)", icon: Activity },
  { name: "Cancer", icon: HeartPulse },
  { name: "Chronic Pain", icon: Flame },
  { name: "Glaucoma", icon: Eye },
  { name: "Migraine", icon: Brain },
  {
    name: "Persistent Muscle Spasms (incl. multiple sclerosis)",
    icon: Zap,
  },
  { name: "Seizures (including epileptic seizures)", icon: Sparkles },
  { name: "Severe Nausea", icon: Pill },
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
            Bakersfield Qualifying Conditions
          </span>
          <h2
            id="conditions-heading"
            className="heading-secondary mt-2"
          >
            Qualifying Conditions for a Medical Marijuana Card in Bakersfield
          </h2>
          <p className="text-body mt-4">
            Under California&rsquo;s Compassionate Use Act (Prop 215) and Senate
            Bill 94, a &ldquo;serious medical condition&rdquo; may qualify a
            Bakersfield patient for a medical marijuana recommendation when
            evaluated and approved by a licensed physician.
          </p>
        </Reveal>

        <div className="mt-10">
          <div className="conditions-masonry">
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
                  <h3 className="mt-3 font-serif text-lg font-semibold text-[var(--color-heading)]">
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
