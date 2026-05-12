import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Twitter, Youtube, Linkedin } from "lucide-react";

const QUICK_LINKS = [
  { label: "How It Works", href: "/#steps" },
  { label: "Qualifying Conditions", href: "/#conditions" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Our Doctors", href: "/#doctors" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/contact-us" },
];

const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "/contact-us" },
  { label: "Terms of Service", href: "/contact-us" },
  { label: "HIPAA Notice", href: "/contact-us" },
];

export default function Footer() {
  return (
    <footer
      className="relative text-white"
      style={{ backgroundColor: "#0F172A" }}
    >
      <div className="container-px mx-auto max-w-7xl pt-16 pb-6">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <Image
              src="/assets/logo.svg"
              alt="Baker420 California"
              width={200}
              height={44}
              className="brightness-0 invert mb-4"
            />
            <p className="text-sm text-slate-300 leading-relaxed max-w-sm">
              Baker420 California connects California residents with
              state-licensed physicians for online medical marijuana
              evaluations under Prop 215 and SB 420.
            </p>
            <div className="mt-5 flex gap-3">
              <a
                aria-label="Facebook"
                href="#"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 hover:bg-[var(--color-primary)] transition-colors"
              >
                <Facebook className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                aria-label="Instagram"
                href="#"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 hover:bg-[var(--color-primary)] transition-colors"
              >
                <Instagram className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                aria-label="Twitter"
                href="#"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 hover:bg-[var(--color-primary)] transition-colors"
              >
                <Twitter className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                aria-label="YouTube"
                href="#"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 hover:bg-[var(--color-primary)] transition-colors"
              >
                <Youtube className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                aria-label="LinkedIn"
                href="#"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 hover:bg-[var(--color-primary)] transition-colors"
              >
                <Linkedin className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div>
            <h2 className="font-serif text-lg font-semibold text-white mb-4">
              Quick Links
            </h2>
            <ul className="space-y-2">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-300 hover:text-[var(--color-secondary)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-serif text-lg font-semibold text-white mb-4">
              Contact
            </h2>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <a
                  href="tel:18004202254"
                  className="hover:text-[var(--color-secondary)]"
                >
                  1-800-420-CALI
                </a>
              </li>
              <li>
                <a
                  href="mailto:care@baker420.com"
                  className="hover:text-[var(--color-secondary)]"
                >
                  care@baker420.com
                </a>
              </li>
              <li>California, United States</li>
              <li className="pt-3">
                <span className="inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-[var(--color-secondary)]">
                  Telehealth · Mon–Sun · 8am–10pm PT
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="mt-12 h-px w-full"
          style={{
            background:
              "linear-gradient(90deg, transparent, #FACC15 35%, #FACC15 65%, transparent)",
          }}
          aria-hidden="true"
        />

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pt-6">
          <p className="text-xs text-slate-400">
            © {new Date().getFullYear()} Baker420 California. All rights
            reserved. This site does not provide legal advice. Medical
            cannabis recommendations are issued only after evaluation by a
            California-licensed physician.
          </p>
          <ul className="flex flex-wrap gap-4 text-xs text-slate-400">
            {LEGAL_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="hover:text-[var(--color-secondary)]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
