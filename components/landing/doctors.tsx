import Image from "next/image";
import Reveal from "@/components/Reveal";

const DOCTORS = [
  {
    name: "Dr. Elena Martinez, M.D.",
    image: "/assets/doctors/doc-1.svg",
    specialty: "Internal Medicine",
    years: "14 yrs",
    license: "CA Medical License #A102443",
  },
  {
    name: "Dr. Marcus Tran, D.O.",
    image: "/assets/doctors/doc-2.svg",
    specialty: "Pain Management",
    years: "11 yrs",
    license: "CA Medical License #A129881",
  },
  {
    name: "Dr. Priya Shankar, M.D.",
    image: "/assets/doctors/doc-3.svg",
    specialty: "Family Medicine",
    years: "9 yrs",
    license: "CA Medical License #A148720",
  },
  {
    name: "Dr. David Okonkwo, M.D.",
    image: "/assets/doctors/doc-4.svg",
    specialty: "Neurology",
    years: "17 yrs",
    license: "CA Medical License #A096514",
  },
];

export default function Doctors() {
  return (
    <section
      id="doctors"
      aria-labelledby="doctors-heading"
      className="section-py"
      style={{ backgroundColor: "var(--color-background)" }}
    >
      <div className="container-px mx-auto max-w-7xl">
        <Reveal className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-primary)]">
              Meet your physicians
            </span>
            <h2 id="doctors-heading" className="heading-secondary mt-2">
              California-licensed doctors — vetted and verifiable
            </h2>
            <p className="text-body mt-4">
              Every physician on our network holds an active California medical
              license and is trained to evaluate qualifying conditions under
              Prop 215 and SB 420.
            </p>
          </div>
        </Reveal>

        <div className="mt-10">
          <ul
            className="-mx-4 flex gap-5 overflow-x-auto px-4 pb-4 scrollbar-hide snap-x snap-mandatory"
            aria-label="Our California-licensed physicians"
          >
            {DOCTORS.map((doc, i) => (
              <Reveal
                key={doc.name}
                as="li"
                delay={i * 90}
                className="snap-start min-w-[260px] sm:min-w-[280px] card-soft card-hover p-6 text-center"
              >
                <div className="mx-auto h-28 w-28 overflow-hidden rounded-full ring-4 ring-[var(--color-secondary)]/40">
                  <Image
                    src={doc.image}
                    alt={`Portrait of ${doc.name}`}
                    width={160}
                    height={160}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="mt-4 font-serif text-lg font-semibold text-[var(--color-heading)]">
                  {doc.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-[var(--color-primary)]">
                  {doc.specialty}
                </p>
                <p className="mt-2 text-xs text-[var(--color-muted)]">
                  {doc.years} experience
                </p>
                <p className="mt-1 text-[11px] uppercase tracking-wider text-[var(--color-accent)]">
                  {doc.license}
                </p>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
