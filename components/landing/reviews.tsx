import { Star, Quote } from "lucide-react";
import { REVIEWS } from "@/lib/content";
import Reveal from "@/components/Reveal";

export default function Reviews() {
  const [featured, ...others] = REVIEWS;

  return (
    <section
      id="reviews"
      aria-labelledby="reviews-heading"
      className="section-py"
      style={{ backgroundColor: "var(--color-background)" }}
    >
      <div className="container-px mx-auto max-w-6xl">
        <Reveal className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-primary)]">
              California patient reviews
            </span>
            <h2 id="reviews-heading" className="heading-secondary mt-2">
              4.9 out of 5 — from thousands of California patients
            </h2>
          </div>
          <Stars rating={5} className="self-start sm:self-end" />
        </Reveal>

        <Reveal className="mt-10" delay={120}>
          <article
            className="rounded-3xl bg-white p-7 sm:p-10 shadow-md card-hover"
            style={{
              border: "1px solid var(--color-border)",
              boxShadow: "var(--shadow-card)",
            }}
          >
            <div className="flex items-start gap-4">
              <span
                className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full sm:flex"
                style={{ backgroundColor: "#FACC15", color: "#1E3A8A" }}
                aria-hidden="true"
              >
                <Quote className="h-5 w-5" />
              </span>
              <div className="flex-1">
                <Stars rating={featured.rating} />
                <h3 className="heading-tertiary mt-3">{featured.title}</h3>
                <p className="text-body mt-3 text-base sm:text-lg">
                  &ldquo;{featured.body}&rdquo;
                </p>
                <p className="mt-4 text-sm font-semibold text-[var(--color-heading)]">
                  {featured.name}
                  <span className="ml-1 font-normal text-[var(--color-muted)]">
                    · {featured.city} · {featured.date}
                  </span>
                </p>
              </div>
            </div>
          </article>
        </Reveal>

        <ul
          className="-mx-4 mt-8 flex gap-5 overflow-x-auto px-4 pb-3 scrollbar-hide snap-x snap-mandatory sm:mx-0 sm:px-0 sm:grid sm:grid-cols-2 sm:gap-6 sm:overflow-visible"
          aria-label="More reviews"
        >
          {others.map((r, i) => (
            <Reveal
              key={r.name}
              as="li"
              delay={i * 100}
              className="snap-start min-w-[85%] sm:min-w-0 card-soft card-hover p-6"
            >
              <Stars rating={r.rating} />
              <h4 className="mt-3 font-serif text-lg font-semibold text-[var(--color-heading)]">
                {r.title}
              </h4>
              <p className="text-body mt-2 text-sm">&ldquo;{r.body}&rdquo;</p>
              <p className="mt-3 text-xs font-semibold text-[var(--color-heading)]">
                {r.name}
                <span className="ml-1 font-normal text-[var(--color-muted)]">
                  · {r.city} · {r.date}
                </span>
              </p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Stars({
  rating,
  className = "",
}: {
  rating: number;
  className?: string;
}) {
  return (
    <div
      className={`inline-flex items-center gap-0.5 ${className}`}
      aria-label={`${rating} out of 5 stars`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className="h-5 w-5"
          aria-hidden="true"
          style={{
            color: i < rating ? "#FACC15" : "#E5E7EB",
            fill: i < rating ? "#FACC15" : "transparent",
          }}
        />
      ))}
    </div>
  );
}
