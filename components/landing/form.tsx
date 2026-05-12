"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { CheckCircle2, Loader2, ShieldCheck } from "lucide-react";
import { LeadFormSchema, type LeadFormValues } from "@/lib/formSchema";
import { sleep } from "@/lib/utils";

const fieldBaseClass =
  "w-full rounded-xl border-[1.5px] border-[#e8f0ec] bg-white px-4 py-3 text-sm text-[var(--color-heading)] placeholder:text-[var(--color-muted)] focus:outline-none focus:border-[var(--g4)] focus:ring-4 focus:ring-[rgba(82,183,136,0.10)] transition";

const errorClass = "border-red-500 focus:border-red-500 focus:ring-red-100";

export default function LeadForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<LeadFormValues>({
    resolver: zodResolver(LeadFormSchema),
    mode: "onTouched",
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      conditionAcknowledged: false,
      consent: false,
    },
  });

  const onSubmit = async () => {
    await sleep(800);
    setSubmitted(true);
    reset();
  };

  if (submitted) {
    return (
      <div
        role="status"
        aria-live="polite"
        className="card-soft p-7 sm:p-8 max-w-lg w-full text-center"
      >
        <div
          className="mx-auto flex h-14 w-14 items-center justify-center rounded-full"
          style={{ backgroundColor: "var(--g6)", color: "var(--g3)" }}
        >
          <CheckCircle2 className="h-8 w-8" aria-hidden="true" />
        </div>
        <h3 className="heading-tertiary mt-5">You&rsquo;re on the list</h3>
        <p className="text-body mt-3">
          Thanks! A California-licensed physician will reach out within{" "}
          <strong>1 business hour</strong> to schedule your secure telehealth
          evaluation.
        </p>
        <button
          type="button"
          className="btn-secondary mt-6"
          onClick={() => setSubmitted(false)}
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="card-soft p-6 sm:p-8 max-w-lg w-full"
      aria-labelledby="lead-form-heading"
    >
      <div className="flex items-center gap-2 mb-1">
        <ShieldCheck
          className="h-5 w-5 text-[var(--color-primary)]"
          aria-hidden="true"
        />
        <span className="text-xs font-semibold uppercase tracking-wider text-[var(--color-primary)]">
          Start your evaluation
        </span>
      </div>
      <h3 id="lead-form-heading" className="heading-tertiary">
        Apply in under 2 minutes
      </h3>
      <p className="text-muted mt-1 mb-5 text-sm">
        100% online — pay only if approved.
      </p>

      <div className="space-y-4">
        <div>
          <label
            htmlFor="fullName"
            className="block text-sm font-medium text-[var(--color-heading)] mb-1.5"
          >
            Full name
          </label>
          <input
            id="fullName"
            type="text"
            autoComplete="name"
            placeholder="Jordan Rivera"
            aria-invalid={!!errors.fullName}
            aria-describedby={errors.fullName ? "fullName-error" : undefined}
            className={`${fieldBaseClass} ${
              errors.fullName ? errorClass : ""
            }`}
            {...register("fullName")}
          />
          {errors.fullName ? (
            <p
              id="fullName-error"
              className="mt-1 text-xs font-medium text-red-600"
            >
              {errors.fullName.message}
            </p>
          ) : null}
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-[var(--color-heading)] mb-1.5"
          >
            Email address
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={`${fieldBaseClass} ${errors.email ? errorClass : ""}`}
            {...register("email")}
          />
          {errors.email ? (
            <p id="email-error" className="mt-1 text-xs font-medium text-red-600">
              {errors.email.message}
            </p>
          ) : null}
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-[var(--color-heading)] mb-1.5"
          >
            Mobile phone (US)
          </label>
          <input
            id="phone"
            type="tel"
            autoComplete="tel-national"
            placeholder="(415) 555-0123"
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            className={`${fieldBaseClass} ${errors.phone ? errorClass : ""}`}
            {...register("phone")}
          />
          {errors.phone ? (
            <p id="phone-error" className="mt-1 text-xs font-medium text-red-600">
              {errors.phone.message}
            </p>
          ) : null}
        </div>

        <div className="space-y-3 pt-1">
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              className="mt-1 h-4 w-4 rounded border-[var(--color-border)] text-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/30"
              aria-invalid={!!errors.conditionAcknowledged}
              aria-describedby={
                errors.conditionAcknowledged ? "condition-error" : undefined
              }
              {...register("conditionAcknowledged")}
            />
            <span className="text-sm text-[var(--color-body)]">
              I have, or believe I have, a qualifying medical condition under
              California Prop 215.
            </span>
          </label>
          {errors.conditionAcknowledged ? (
            <p
              id="condition-error"
              className="text-xs font-medium text-red-600 ml-7"
            >
              {errors.conditionAcknowledged.message}
            </p>
          ) : null}

          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              className="mt-1 h-4 w-4 rounded border-[var(--color-border)] text-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/30"
              aria-invalid={!!errors.consent}
              aria-describedby={errors.consent ? "consent-error" : undefined}
              {...register("consent")}
            />
            <span className="text-sm text-[var(--color-body)]">
              I consent to be contacted by Baker420 California about my MMJ
              evaluation. HIPAA-compliant.
            </span>
          </label>
          {errors.consent ? (
            <p
              id="consent-error"
              className="text-xs font-medium text-red-600 ml-7"
            >
              {errors.consent.message}
            </p>
          ) : null}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-primary w-full mt-2"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
              Submitting…
            </>
          ) : (
            <>Start My Evaluation</>
          )}
        </button>
        <p className="text-xs text-center text-[var(--color-muted)]">
          By submitting, you agree to our terms. Money-back guarantee if not
          approved.
        </p>
      </div>
    </form>
  );
}
