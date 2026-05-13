"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Loader2, ShieldCheck } from "lucide-react";
import { LeadFormSchema, type LeadFormValues } from "@/lib/formSchema";

const STATE = {
  stateAbbr: "CA",
  stateName: "California",
  city: "Bakersfield",
  timezone: "PST",
} as const;

const UTM_SOURCE = "baker420";

const HEALLY_PREFILL_URL =
  "https://mymmj.getheally.com/patient_admin/prefill";

const fieldBaseClass =
  "w-full rounded-xl border-[1.5px] border-[#e8f0ec] bg-white px-4 py-3 text-sm text-[var(--color-heading)] placeholder:text-[var(--color-muted)] focus:outline-none focus:border-[var(--g4)] focus:ring-4 focus:ring-[rgba(82,183,136,0.10)] transition";

const errorClass = "border-red-500 focus:border-red-500 focus:ring-red-100";

function base64UrlEncode(input: string): string {
  return btoa(input)
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

export default function LeadForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
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

  const onSubmit = async (data: LeadFormValues) => {
    const nameParts = data.fullName.trim().split(/\s+/);
    const firstName = nameParts[0];
    const lastName = nameParts.slice(1).join(" ") || "";

    const payload = {
      first_name: firstName,
      last_name: lastName,
      email: data.email,
      phone: data.phone,
      state: STATE.stateAbbr,
      state_of_evaluation: STATE.stateAbbr,
      timezone: STATE.timezone,
      city: STATE.city,
      extra_data: {
        "contact[contact_type]": "Web Form",
        "product[name]": "Eva",
        utm_source: UTM_SOURCE,
      },
    };

    const preset = base64UrlEncode(JSON.stringify(payload));

    if (typeof window !== "undefined") {
      window.dataLayer?.push({
        event: "heallyValidatedSubmit",
        utm_source: UTM_SOURCE,
      });
    }

    window.location.assign(
      `${HEALLY_PREFILL_URL}?redirect=sched&preset=${preset}&utm_source=${UTM_SOURCE}`,
    );
  };

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
            placeholder="555-123-0123"
            maxLength={12}
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            className={`${fieldBaseClass} ${errors.phone ? errorClass : ""}`}
            {...register("phone")}
            onChange={(e) => {
              const digits = e.target.value.replace(/\D/g, "").slice(0, 10);
              let formatted = digits;
              if (digits.length >= 7) {
                formatted = `${digits.slice(0, 3)}-${digits.slice(3, 6)}-${digits.slice(6)}`;
              } else if (digits.length >= 4) {
                formatted = `${digits.slice(0, 3)}-${digits.slice(3)}`;
              }
              e.target.value = formatted;
            }}
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
          aria-busy={isSubmitting}
          className="btn-primary w-full mt-2"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
              Redirecting to secure scheduler…
            </>
          ) : (
            <>Apply for Your MMJ Card</>
          )}
        </button>
        <p className="text-xs text-center text-[var(--color-muted)]">
          We&rsquo;ll take you to our secure scheduling partner to finish
          booking. Money-back guarantee if not approved.
        </p>
      </div>
    </form>
  );
}
