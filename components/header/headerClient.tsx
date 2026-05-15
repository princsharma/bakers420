"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X, PhoneCall } from "lucide-react";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "How It Works", href: "/#steps" },
  { label: "Conditions", href: "/#conditions" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Doctors", href: "/#doctors" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/contact-us" },
];

export default function HeaderClient() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) {
      const original = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = original;
      };
    }
  }, [open]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-white/80 shadow-sm border-b border-[var(--color-border)]"
          : "bg-transparent"
      }`}
    >
      <div className="container-px mx-auto flex h-18 max-w-7xl items-center justify-between py-3">
        <Link
          href="/"
          className="flex items-center gap-2"
          aria-label="Baker420 California — home"
          title="Baker420 California — home"
        >
          <Image
            src="/assets/logo.webp"
            alt="Baker420 California Bakersfield medical marijuana card service logo"
            title="Baker420 California"
            width={180}
            height={40}
            priority
            className="h-10 w-auto"
          />
        </Link>

        <nav
          aria-label="Primary"
          className="hidden lg:flex items-center gap-7"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              title={`${link.label} — Bakersfield medical marijuana card`}
              className={`text-sm font-medium transition-colors ${
                scrolled
                  ? "text-[var(--color-heading)] hover:text-[var(--color-primary)]"
                  : "text-white/90 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:18004202254"
            title="Call Baker420 California about your Bakersfield medical marijuana card"
            className={`inline-flex items-center gap-2 text-sm font-medium transition-colors ${
              scrolled
                ? "text-[var(--color-accent)] hover:text-[var(--color-accent-hover)]"
                : "text-white/90 hover:text-white"
            }`}
          >
            <PhoneCall className="h-4 w-4" aria-hidden="true" />
            1-800-420-CALI
          </a>
          <Link
            href="/#hero"
            title="Start your Bakersfield medical marijuana card application"
            className="btn-primary text-sm"
          >
            Apply Now
          </Link>
        </div>

        <button
          type="button"
          className={`lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-full border backdrop-blur transition-colors ${
            scrolled
              ? "border-[var(--color-border)] bg-white/80 text-[var(--color-heading)]"
              : "border-white/30 bg-white/10 text-white"
          }`}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <X className="h-5 w-5" aria-hidden="true" />
          ) : (
            <Menu className="h-5 w-5" aria-hidden="true" />
          )}
        </button>
      </div>

      <div
        className={`fixed inset-0 z-40 transition-opacity duration-300 lg:hidden ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        <button
          type="button"
          className="absolute inset-0 bg-[var(--g1)]/60"
          aria-label="Close menu overlay"
          onClick={() => setOpen(false)}
        />
        <aside
          id="mobile-menu"
          className={`absolute right-0 top-0 h-full w-[85%] max-w-sm bg-white shadow-2xl transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between border-b border-[var(--color-border)] px-5 py-4">
            <span className="font-serif text-lg font-bold text-[var(--color-heading)]">
              Menu
            </span>
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border)]"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
          <nav
            aria-label="Mobile"
            className="flex flex-col gap-1 px-5 py-6"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                title={`${link.label} — Bakersfield medical marijuana card`}
                className="rounded-xl px-3 py-3 text-base font-medium text-[var(--color-heading)] hover:bg-[var(--color-surface-alt)]"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-4 flex flex-col gap-3">
              <a
                href="tel:18004202254"
                title="Call Baker420 California about your Bakersfield medical marijuana card"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--color-border)] px-5 py-3 text-sm font-medium text-[var(--color-accent)]"
              >
                <PhoneCall className="h-4 w-4" aria-hidden="true" />
                1-800-420-CALI
              </a>
              <Link
                href="/#hero"
                onClick={() => setOpen(false)}
                title="Start your Bakersfield medical marijuana card application"
                className="btn-primary text-sm"
              >
                Apply Now
              </Link>
            </div>
          </nav>
        </aside>
      </div>
    </header>
  );
}
