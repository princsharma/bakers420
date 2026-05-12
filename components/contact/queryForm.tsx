"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import {
  ContactFormSchema,
  type ContactFormValues,
} from "@/lib/formSchema";
import { sleep } from "@/lib/utils";

const fieldBaseClass =
  "w-full rounded-xl border border-[var(--color-border)] bg-white px-4 py-3 text-sm text-[var(--color-heading)] placeholder:text-[var(--color-muted)] focus:outline-none focus:border-[var(--color-primary)] focus:ring-4 focus:ring-[#C2410C]/15 transition";

const errorClass = "border-red-500 focus:border-red-500 focus:ring-red-100";

export default function QueryForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(ContactFormSchema),
    mode: "onTouched",
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      message: "",
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
        className="card-soft p-8 text-center"
      >
        <div
          className="mx-auto flex h-14 w-14 items-center justify-center rounded-full"
          style={{ backgroundColor: "#FFEDD5", color: "#C2410C" }}
        >
          <CheckCircle2 className="h-8 w-8" aria-hidden="true" />
        </div>
        <h2 className="heading-tertiary mt-5">Message received</h2>
        <p className="text-body mt-3">
          Thanks! A California-licensed physician or care team member will reach
          out within <strong>1 business hour</strong>.
        </p>
        <button
          type="button"
          className="btn-secondary mt-6"
          onClick={() => setSubmitted(false)}
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="card-soft p-7 sm:p-9"
      aria-labelledby="contact-form-heading"
    >
      <h2 id="contact-form-heading" className="heading-tertiary">
        Send us a message
      </h2>
      <p className="text-muted mt-1 mb-6 text-sm">
        Most California patients hear back within 1 business hour.
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="sm:col-span-2">
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
            aria-invalid={!!errors.fullName}
            aria-describedby={errors.fullName ? "c-fullName-error" : undefined}
            placeholder="Jordan Rivera"
            className={`${fieldBaseClass} ${errors.fullName ? errorClass : ""}`}
            {...register("fullName")}
          />
          {errors.fullName ? (
            <p
              id="c-fullName-error"
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
            Email
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "c-email-error" : undefined}
            placeholder="you@example.com"
            className={`${fieldBaseClass} ${errors.email ? errorClass : ""}`}
            {...register("email")}
          />
          {errors.email ? (
            <p
              id="c-email-error"
              className="mt-1 text-xs font-medium text-red-600"
            >
              {errors.email.message}
            </p>
          ) : null}
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-[var(--color-heading)] mb-1.5"
          >
            Phone (US)
          </label>
          <input
            id="phone"
            type="tel"
            autoComplete="tel-national"
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "c-phone-error" : undefined}
            placeholder="(415) 555-0123"
            className={`${fieldBaseClass} ${errors.phone ? errorClass : ""}`}
            {...register("phone")}
          />
          {errors.phone ? (
            <p
              id="c-phone-error"
              className="mt-1 text-xs font-medium text-red-600"
            >
              {errors.phone.message}
            </p>
          ) : null}
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-[var(--color-heading)] mb-1.5"
          >
            How can we help?
          </label>
          <textarea
            id="message"
            rows={5}
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? "c-message-error" : undefined}
            placeholder="Tell us a little about your situation — qualifying condition, renewal vs. new patient, county, etc."
            className={`${fieldBaseClass} resize-y ${
              errors.message ? errorClass : ""
            }`}
            {...register("message")}
          />
          {errors.message ? (
            <p
              id="c-message-error"
              className="mt-1 text-xs font-medium text-red-600"
            >
              {errors.message.message}
            </p>
          ) : null}
        </div>
      </div>

      <div className="mt-5 space-y-3">
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            className="mt-1 h-4 w-4 rounded border-[var(--color-border)] text-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/30"
            aria-invalid={!!errors.conditionAcknowledged}
            aria-describedby={
              errors.conditionAcknowledged ? "c-condition-error" : undefined
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
            id="c-condition-error"
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
            aria-describedby={errors.consent ? "c-consent-error" : undefined}
            {...register("consent")}
          />
          <span className="text-sm text-[var(--color-body)]">
            I consent to be contacted by Baker420 California regarding my MMJ
            evaluation. HIPAA-compliant.
          </span>
        </label>
        {errors.consent ? (
          <p
            id="c-consent-error"
            className="text-xs font-medium text-red-600 ml-7"
          >
            {errors.consent.message}
          </p>
        ) : null}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-primary w-full sm:w-auto mt-7"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
            Sending…
          </>
        ) : (
          <>Send Message</>
        )}
      </button>
    </form>
  );
}
