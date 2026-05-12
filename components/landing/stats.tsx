import { Users, Star, Clock, ShieldCheck } from "lucide-react";
import Reveal from "@/components/Reveal";

const STATS = [
  {
    icon: Users,
    value: "120k+",
    label: "California patients served",
  },
  {
    icon: Star,
    value: "4.9 / 5",
    label: "Average patient rating",
  },
  {
    icon: Clock,
    value: "12 min",
    label: "Average evaluation length",
  },
  {
    icon: ShieldCheck,
    value: "100%",
    label: "HIPAA-secure telehealth",
  },
];

export default function Stats() {
  return (
    <section
      id="stats"
      aria-labelledby="stats-heading"
      className="section-py"
      style={{ backgroundColor: "var(--color-background)" }}
    >
      <div className="container-px mx-auto max-w-7xl">
        <h2 id="stats-heading" className="sr-only">
          Baker420 California by the numbers
        </h2>

        <div className="hidden md:grid grid-cols-2 md:grid-cols-4 gap-5">
          {STATS.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <Reveal
                key={stat.label}
                delay={i * 90}
                className="card-soft card-hover p-6 text-center"
              >
                <Icon
                  className="mx-auto h-7 w-7 text-[var(--color-primary)]"
                  aria-hidden="true"
                />
                <p
                  className="mt-3 font-serif text-3xl font-bold"
                  style={{ color: "#A16207" }}
                >
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-[var(--color-muted)]">
                  {stat.label}
                </p>
              </Reveal>
            );
          })}
        </div>

        <div className="md:hidden overflow-x-auto scrollbar-hide -mx-4 px-4">
          <ul className="flex gap-4 snap-x snap-mandatory">
            {STATS.map((stat) => {
              const Icon = stat.icon;
              return (
                <li
                  key={stat.label}
                  className="card-soft min-w-[70%] snap-start p-6 text-center"
                >
                  <Icon
                    className="mx-auto h-7 w-7 text-[var(--color-primary)]"
                    aria-hidden="true"
                  />
                  <p
                    className="mt-3 font-serif text-3xl font-bold"
                    style={{ color: "#A16207" }}
                  >
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm text-[var(--color-muted)]">
                    {stat.label}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
