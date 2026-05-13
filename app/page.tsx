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
const WhyUs = dynamic(() => import("@/components/landing/whyus"));
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
  title: "Apply Your Medical Marijuana Card in Bakersfield",
  description:
    "Get your Bakersfield medical marijuana card recommendation online with licensed doctors, private consultations, and fast approval.",
  keywords: [
    "Medical Marijuana Card Bakersfield",
    "Bakersfield medical marijuana card",
    "Bakersfield MMJ doctor",
    "California medical marijuana card online",
    "Kern County MMIC",
    "Prop 215",
    "SB 94",
    "online MMJ evaluation California",
    "telehealth cannabis Bakersfield",
  ],
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
  areaServed: [
    {
      "@type": "City",
      name: "Bakersfield",
    },
    {
      "@type": "AdministrativeArea",
      name: "Kern County",
    },
    {
      "@type": "State",
      name: "California",
    },
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bakersfield",
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
  name: "How to get a California medical marijuana card online in Bakersfield with Baker420",
  description:
    "Get a California physician's recommendation entirely online in four steps under Prop 215 and SB 94.",
  totalTime: "PT15M",
  estimatedCost: {
    "@type": "MonetaryAmount",
    currency: "USD",
    value: "55",
  },
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Book Your Appointment",
      text: "Schedule an online consultation with a licensed Bakersfield MMJ doctor at your convenience.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Attend Your Online Consultation",
      text: "Speak with a certified practitioner who will review your medical history and discuss whether medical cannabis may be appropriate for your condition.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Receive Your Recommendation",
      text: "If approved, many patients receive their California medical marijuana recommendation shortly after completing their appointment.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Access Licensed Dispensaries",
      text: "Use your recommendation to legally purchase cannabis products from licensed dispensaries throughout California.",
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
    addressLocality: "Bakersfield",
    addressRegion: "CA",
    addressCountry: "US",
  },
  areaServed: {
    "@type": "City",
    name: "Bakersfield",
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
        <WhyUs />
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
