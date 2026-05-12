import Reveal from "@/components/Reveal";

const STEPS = [
  {
    title: "Book Your Appointment",
    body: "Schedule an online consultation with a licensed Bakersfield MMJ doctor at your convenience — from anywhere in California.",
  },
  {
    title: "Attend Your Online Consultation",
    body: "Speak with a certified practitioner who will review your medical history and discuss whether medical cannabis may be appropriate for your condition.",
  },
  {
    title: "Receive Your Recommendation",
    body: "If approved, many patients receive their California medical marijuana recommendation shortly after completing their appointment.",
  },
  {
    title: "Access Licensed Dispensaries",
    body: "Use your recommendation to legally purchase cannabis products from licensed dispensaries throughout California.",
  },
];

export default function Steps() {
  return (
    <section
      id="steps"
      aria-labelledby="steps-heading"
      className="section-py"
      style={{ backgroundColor: "var(--color-background)" }}
    >
      <div className="container-px mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-primary)]">
            How it works
          </span>
          <h2 id="steps-heading" className="heading-secondary mt-2">
            How to Get a Medical Marijuana Card in Bakersfield, California
          </h2>
          <p className="text-body mt-4">
            Follow these simple steps to connect with a licensed practitioner
            and begin your medical cannabis journey. Complete your online
            evaluation through a secure process aligned with California
            Department of Public Health (CDPH) guidelines.
          </p>
        </Reveal>

        <ol className="relative mt-14 mx-auto max-w-4xl" aria-label="Process steps">
          <span
            aria-hidden="true"
            className="absolute left-1/2 top-3 hidden h-[calc(100%-1.5rem)] w-px -translate-x-1/2 border-l-2 border-dashed border-[var(--color-primary)]/40 md:block"
          />

          {STEPS.map((step, idx) => {
            const isLeft = idx % 2 === 0;
            return (
              <li
                key={step.title}
                className="relative mb-10 md:mb-14 last:mb-0"
              >
                <div className="md:grid md:grid-cols-2 md:gap-12 md:items-center">
                  {isLeft ? (
                    <>
                      <Reveal className="md:pr-12 md:text-right">
                        <StepCard
                          index={idx + 1}
                          title={step.title}
                          body={step.body}
                          alignRight
                        />
                      </Reveal>
                      <div className="hidden md:block" aria-hidden="true" />
                    </>
                  ) : (
                    <>
                      <div className="hidden md:block" aria-hidden="true" />
                      <Reveal className="md:pl-12" delay={80}>
                        <StepCard
                          index={idx + 1}
                          title={step.title}
                          body={step.body}
                        />
                      </Reveal>
                    </>
                  )}
                </div>

                <span
                  aria-hidden="true"
                  className="absolute left-1/2 top-6 hidden h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full font-serif text-base font-bold shadow md:flex"
                  style={{
                    background: "var(--grad-gold)",
                    color: "var(--white)",
                  }}
                >
                  {idx + 1}
                </span>
              </li>
            );
          })}
        </ol>

        <Reveal className="mx-auto mt-10 max-w-3xl text-center">
          <p className="text-muted text-sm">
            <strong className="text-[var(--color-heading)]">Note:</strong>{" "}
            Medical marijuana recommendations in California are governed by the
            California Department of Public Health (CDPH), while optional MMIC
            cards are processed through the{" "}
            <strong className="text-[var(--color-heading)]">
              Kern County Public Health Services Department
            </strong>{" "}
            for Bakersfield residents.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function StepCard({
  index,
  title,
  body,
  alignRight = false,
}: {
  index: number;
  title: string;
  body: string;
  alignRight?: boolean;
}) {
  return (
    <article className="card-soft card-hover p-6 sm:p-7">
      <div
        className={`flex items-center gap-3 md:hidden ${
          alignRight ? "" : ""
        }`}
      >
        <span
          className="flex h-9 w-9 items-center justify-center rounded-full font-serif text-sm font-bold"
          style={{ background: "var(--grad-gold)", color: "var(--white)" }}
          aria-hidden="true"
        >
          {index}
        </span>
        <span className="text-xs font-semibold uppercase tracking-wider text-[var(--color-muted)]">
          Step {index}
        </span>
      </div>
      <h3 className="heading-tertiary mt-3 md:mt-0">{title}</h3>
      <p className="text-body mt-2">{body}</p>
    </article>
  );
}
