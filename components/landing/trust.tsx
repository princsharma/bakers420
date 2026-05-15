import Image from "next/image";

const PARTNERS = [
  { name: "California Medical Association", src: "/assets/trust/partner-1.svg" },
  { name: "CDPH Compliant", src: "/assets/trust/partner-2.svg" },
  { name: "HIPAA Secure", src: "/assets/trust/partner-3.svg" },
  { name: "Trustpilot Verified", src: "/assets/trust/partner-4.svg" },
  { name: "SSL Encrypted", src: "/assets/trust/partner-5.svg" },
];

export default function Trust() {
  return (
    <section
      id="trust"
      aria-labelledby="trust-heading"
      className="py-10"
      style={{ backgroundColor: "var(--color-background)" }}
    >
      <div className="container-px mx-auto max-w-6xl">
        <h2
          id="trust-heading"
          className="text-center text-xs font-bold uppercase tracking-wider text-[var(--color-muted)]"
        >
          Trusted by California patients and partners
        </h2>
        <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {PARTNERS.map((p) => (
            <li key={p.name} className="group">
              <Image
                src={p.src}
                alt={`${p.name} — trust partner for Bakersfield medical marijuana card service`}
                title={p.name}
                width={140}
                height={50}
                className="h-10 w-auto grayscale opacity-70 transition group-hover:grayscale-0 group-hover:opacity-100"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
