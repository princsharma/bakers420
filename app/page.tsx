import dynamic from "next/dynamic";
import Header from "@/components/header/headerServer";
import Hero from "@/components/landing/hero";
import Stats from "@/components/landing/stats";
import JsonLd from "@/components/JsonLd";
import BackToTop from "@/components/backtotop";
import { buildMetadata, SITE_CONFIG } from "@/lib/seo";
import { FAQS, REVIEWS } from "@/lib/content";

const Conditions = dynamic(() => import("@/components/landing/conditions"));
const Steps = dynamic(() => import("@/components/landing/steps"));
const Pricing = dynamic(() => import("@/components/landing/pricing"));
const Doctors = dynamic(() => import("@/components/landing/doctors"));
const Benefits = dynamic(() => import("@/components/landing/benefits"));
const ExpertCare = dynamic(() => import("@/components/landing/expertcare"));
const Reviews = dynamic(() => import("@/components/landing/reviews"));
const StartJourney = dynamic(() => import("@/components/landing/startjourney"));
const Trust = dynamic(() => import("@/components/landing/trust"));
const Faq = dynamic(() => import("@/components/landing/faq"));
const SpeakWithDoc = dynamic(() => import("@/components/landing/speakwithdoc"));
const Footer = dynamic(() => import("@/components/footer/footer"));

export const metadata = buildMetadata({
  title:
    "California Medical Marijuana Card Online | $59 Same-Day | Baker420 California",
  description:
    "Get your California medical marijuana card 100% online. Licensed CA physicians, HIPAA-compliant telehealth evaluations, same-day digital recommendation, money-back guarantee — $59 flat.",
  canonicalPath: "/",
});

const medicalOrgSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalOrganization",
  name: SITE_CONFIG.name,
  url: SITE_CONFIG.url,
  logo: `${SITE_CONFIG.url}/assets/logo.svg`,
  image: `${SITE_CONFIG.url}${SITE_CONFIG.defaultOgImage}`,
  description: SITE_CONFIG.defaultDescription,
  telephone: SITE_CONFIG.phone,
  address: {
    "@type": "PostalAddress",
    addressRegion: "CA",
    addressCountry: "US",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: SITE_CONFIG.phone,
    contactType: "customer service",
    areaServed: "US-CA",
    availableLanguage: ["English", "Spanish"],
  },
  medicalSpecialty: [
    "Primary Care",
    "Internal Medicine",
    "Pain Management",
    "Telehealth",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_CONFIG.name,
  url: SITE_CONFIG.url,
  inLanguage: "en-US",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${SITE_CONFIG.url}/?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.answer,
    },
  })),
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to get a California medical marijuana card online with Baker420",
  description:
    "Get a California physician's recommendation entirely online in four steps under Prop 215 and SB 420.",
  totalTime: "PT15M",
  estimatedCost: {
    "@type": "MonetaryAmount",
    currency: "USD",
    value: "59",
  },
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Create Your Account",
      text: "Provide basic info to start your California MMJ evaluation.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Schedule Telehealth Visit",
      text: "Pick a time to meet a CA-licensed physician online.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Attend the Evaluation",
      text: "Join a secure video consultation; the physician reviews your medical history and qualifying condition.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Receive Your Recommendation",
      text: "If approved, get a digital physician's recommendation the same day; optional county MMIC application.",
    },
  ],
};

const medicalBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: SITE_CONFIG.name,
  url: SITE_CONFIG.url,
  image: `${SITE_CONFIG.url}${SITE_CONFIG.defaultOgImage}`,
  telephone: SITE_CONFIG.phone,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressRegion: "CA",
    addressCountry: "US",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: REVIEWS.length.toString(),
    bestRating: "5",
    worstRating: "1",
  },
  review: REVIEWS.map((r) => ({
    "@type": "Review",
    reviewRating: {
      "@type": "Rating",
      ratingValue: r.rating.toString(),
      bestRating: "5",
    },
    author: {
      "@type": "Person",
      name: r.name,
    },
    datePublished: new Date(r.date).toISOString().split("T")[0],
    reviewBody: r.body,
    name: r.title,
  })),
};

export default function HomePage() {
  return (
    <>
      <JsonLd schema={medicalOrgSchema} id="jsonld-medical-org" />
      <JsonLd schema={websiteSchema} id="jsonld-website" />
      <JsonLd schema={faqSchema} id="jsonld-faq" />
      <JsonLd schema={howToSchema} id="jsonld-howto" />
      <JsonLd schema={medicalBusinessSchema} id="jsonld-medical-business" />

      <Header />
      <main id="main-content" tabIndex={-1} className="flex-1">
        <Hero />
        <Stats />
        <Conditions />
        <Steps />
        <Pricing />
        <Doctors />
        <Benefits />
        <ExpertCare />
        <Reviews />
        <StartJourney />
        <Trust />
        <Faq />
        <SpeakWithDoc />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
