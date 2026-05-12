import Reveal from "@/components/Reveal";

const STEPS = [
  {
    title: "Create Your Account",
    body: "Provide basic information to start your California MMJ evaluation — name, date of birth, and a few details about your condition. Takes under 2 minutes.",
  },
  {
    title: "Schedule Telehealth Visit",
    body: "Pick a time that works for you to meet with a CA-licensed physician online. Same-day appointments available 7 days a week.",
  },
  {
    title: "Attend the Evaluation",
    body: "Join a secure HIPAA-compliant video consultation. Your physician reviews your medical history and qualifying condition under Prop 215.",
  },
  {
    title: "Receive Your Recommendation",
    body: "If approved, get a digital physician's recommendation the same day. We'll help you file an optional county MMIC application.",
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
            From application to recommendation in 4 steps
          </h2>
          <p className="text-body mt-4">
            The fastest path to a California medical marijuana recommendation —
            designed to be transparent, secure, and same-day.
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
                    backgroundColor: "#FACC15",
                    color: "#1E3A8A",
                  }}
                >
                  {idx + 1}
                </span>
              </li>
            );
          })}
        </ol>
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
          style={{ backgroundColor: "#FACC15", color: "#1E3A8A" }}
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
