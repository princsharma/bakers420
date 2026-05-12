"use client";

import dynamic from "next/dynamic";

const FormSkeleton = () => (
  <div
    className="card-soft p-6 sm:p-8 max-w-lg w-full animate-pulse"
    aria-hidden="true"
  >
    <div className="h-4 w-32 rounded bg-[var(--color-surface-alt)]" />
    <div className="mt-3 h-7 w-56 rounded bg-[var(--color-surface-alt)]" />
    <div className="mt-2 h-3 w-48 rounded bg-[var(--color-surface-alt)]" />
    <div className="mt-6 space-y-4">
      <div className="h-12 w-full rounded-xl bg-[var(--color-surface-alt)]" />
      <div className="h-12 w-full rounded-xl bg-[var(--color-surface-alt)]" />
      <div className="h-12 w-full rounded-xl bg-[var(--color-surface-alt)]" />
      <div className="h-5 w-full rounded bg-[var(--color-surface-alt)]" />
      <div className="h-5 w-full rounded bg-[var(--color-surface-alt)]" />
      <div className="h-12 w-full rounded-full bg-[var(--color-surface-alt)]" />
    </div>
  </div>
);

const LeadForm = dynamic(() => import("./form"), {
  ssr: false,
  loading: FormSkeleton,
});

export default function FormWrapper() {
  return <LeadForm />;
}
