import {
  BadgeCheck,
  Laptop2,
  Sparkles,
  Tag,
  Lock,
  Headphones,
} from "lucide-react";
import Reveal from "@/components/Reveal";

const REASONS = [
  {
    title: "Licensed California Practitioners",
    body: "Connect with experienced California medical cannabis practitioners authorized to evaluate and recommend qualifying patients.",
    icon: BadgeCheck,
  },
  {
    title: "Convenient Online Evaluations",
    body: "Complete your medical marijuana consultation online from the comfort of your home — no clinic visit needed — through a trusted Medical Cannabis Card platform serving Bakersfield.",
    icon: Laptop2,
  },
  {
    title: "Simple & Hassle-Free Process",
    body: "Our streamlined process helps patients receive their medical cannabis recommendation quickly and with minimal paperwork from an MMJ doctor that Bakersfield patients can trust.",
    icon: Sparkles,
  },
  {
    title: "Transparent Pricing",
    body: "We believe in clear, upfront pricing — no hidden fees or unexpected charges during the evaluation process.",
    icon: Tag,
  },
  {
    title: "HIPAA-Compliant & Secure",
    body: "Your personal and medical information remains protected on our secure, HIPAA-compliant platform.",
    icon: Lock,
  },
  {
    title: "Dedicated Patient Support",
    body: "Our team is available to guide Bakersfield patients through every step of obtaining their California medical marijuana card online.",
    icon: Headphones,
  },
];

export default function WhyUs() {
  return (
    <section
      id="why-us"
      aria-labelledby="why-us-heading"
      className="section-py"
      style={{ backgroundColor: "var(--color-background)" }}
    >
      <div className="container-px mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Why Patients Choose Us</span>
          <h2 id="why-us-heading" className="heading-secondary mt-2">
            Why Patients Choose Us for Their Medical Marijuana Card in
            Bakersfield, California
          </h2>
          <p className="text-body mt-4">
            Patients in Bakersfield trust our platform for a secure and
            convenient way to get a California medical marijuana card online.
            Our process is designed to make access to medical cannabis simple,
            fast, and stress-free for eligible patients.
          </p>
        </Reveal>

        <ul
          className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          aria-label="Reasons Bakersfield patients choose Baker420"
        >
          {REASONS.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <Reveal
                key={reason.title}
                as="li"
                delay={(i % 3) * 80}
                className="card-soft card-hover p-6"
              >
                <span
                  className="inline-flex h-12 w-12 items-center justify-center rounded-2xl"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(82,183,136,0.18), rgba(149,213,178,0.32))",
                    color: "var(--g2)",
                  }}
                  aria-hidden="true"
                >
                  <Icon className="h-6 w-6" strokeWidth={1.7} />
                </span>
                <h3 className="heading-tertiary mt-4">{reason.title}</h3>
                <p className="text-body mt-2">{reason.body}</p>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
