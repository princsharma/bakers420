"use client";

import Link from "next/link";
import { Mail, MapPin, PhoneCall, Clock } from "lucide-react";
import Header from "@/components/header/headerServer";
import Footer from "@/components/footer/footer";
import BackToTop from "@/components/backtotop";
import QueryForm from "@/components/contact/queryForm";

const CONTACT_INFO = [
  {
    icon: PhoneCall,
    label: "Phone",
    value: "1-800-420-CALI",
    href: "tel:18004202254",
  },
  {
    icon: Mail,
    label: "Email",
    value: "care@baker420.com",
    href: "mailto:care@baker420.com",
  },
  {
    icon: MapPin,
    label: "Service area",
    value: "California, United States",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon–Sun · 8am – 10pm PT",
  },
];

export default function ContactPageContent() {
  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1} className="flex-1 pt-24">
        <section
          className="relative isolate overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, #C2410C 0%, #FACC15 60%, #FFFBF5 100%)",
          }}
        >
          <div className="container-px mx-auto max-w-5xl py-16 sm:py-24 text-white">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur px-3 py-1.5 text-xs font-semibold uppercase tracking-wider ring-1 ring-white/30">
              Care Team · California
            </span>
            <h1 className="heading-primary mt-5 text-white">
              We&rsquo;re here to help — usually within an hour
            </h1>
            <p className="mt-4 max-w-2xl text-white/95">
              Questions about your California medical marijuana card evaluation,
              MMIC application, renewal, or anything else? Send us a note and a
              California-licensed physician or care team member will respond
              promptly.
            </p>
          </div>
        </section>

        <section className="section-py" style={{ backgroundColor: "var(--color-background)" }}>
          <div className="container-px mx-auto max-w-6xl">
            <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
              <QueryForm />

              <aside aria-label="Contact details">
                <h2 className="heading-tertiary">Other ways to reach us</h2>
                <p className="text-body mt-2">
                  Prefer to talk first? Pick whichever channel works for you.
                </p>

                <ul className="mt-6 space-y-4">
                  {CONTACT_INFO.map((info) => {
                    const Icon = info.icon;
                    const content = (
                      <span className="flex items-start gap-4">
                        <span
                          className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full"
                          style={{ backgroundColor: "#FFEDD5", color: "#C2410C" }}
                          aria-hidden="true"
                        >
                          <Icon className="h-5 w-5" />
                        </span>
                        <span>
                          <span className="block text-xs font-bold uppercase tracking-wider text-[var(--color-muted)]">
                            {info.label}
                          </span>
                          <span className="mt-0.5 block text-base font-semibold text-[var(--color-heading)]">
                            {info.value}
                          </span>
                        </span>
                      </span>
                    );
                    return (
                      <li
                        key={info.label}
                        className="card-soft p-5"
                      >
                        {info.href ? (
                          <a
                            href={info.href}
                            className="block"
                          >
                            {content}
                          </a>
                        ) : (
                          content
                        )}
                      </li>
                    );
                  })}
                </ul>

                <div
                  className="mt-8 rounded-2xl p-6 text-white"
                  style={{ backgroundColor: "#1E3A8A" }}
                >
                  <h3 className="font-serif text-lg font-semibold">
                    Ready to apply?
                  </h3>
                  <p className="mt-1 text-sm text-white/85">
                    Skip the email back-and-forth and start your evaluation now.
                  </p>
                  <Link href="/#hero" className="btn-gold mt-4">
                    Apply in 2 minutes
                  </Link>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
