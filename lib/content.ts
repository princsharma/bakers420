export type FaqCategory = "Eligibility" | "Process" | "Renewal";

export interface FaqItem {
  question: string;
  answer: string;
  category: FaqCategory;
}

export const FAQS: FaqItem[] = [
  {
    category: "Process",
    question: "Can I get a California medical marijuana card online?",
    answer:
      "Yes. California patients can complete medical marijuana evaluations online through telemedicine appointments with licensed physicians.",
  },
  {
    category: "Renewal",
    question:
      "How long does a California medical marijuana recommendation last?",
    answer:
      "Most California medical marijuana recommendations are valid for one year from the date of issue.",
  },
  {
    category: "Eligibility",
    question: "Does California issue a state medical marijuana card?",
    answer:
      "Yes. Eligible patients may apply for the California Medical Marijuana Identification Card (MMIC) program through their local county health department for additional state-recognized identification protections. In Bakersfield, applications are processed through the Kern County Public Health Services Department.",
  },
  {
    category: "Process",
    question:
      "What documents are needed to apply for a California medical marijuana recommendation?",
    answer:
      "Patients generally need a valid government-issued photo ID, proof of California residency, medical records if available, and a completed medical evaluation with a licensed physician.",
  },
  {
    category: "Eligibility",
    question:
      "Can medical marijuana patients legally buy cannabis from dispensaries in California?",
    answer:
      "Yes. Adults age 21 and older may legally purchase cannabis in California, and medical marijuana patients with valid recommendations may access licensed dispensaries throughout the state.",
  },
  {
    category: "Eligibility",
    question:
      "How much cannabis can medical marijuana patients possess in California?",
    answer:
      "Under California law, qualified medical marijuana patients may possess and cultivate amounts of cannabis reasonably related to their medical needs. Adult-use laws also allow adults 21+ to possess up to 28.5 grams of cannabis flower and cultivate up to six plants for personal use.",
  },
  {
    category: "Process",
    question: "Do I need to visit a clinic in person to get evaluated?",
    answer:
      "Many California medical marijuana evaluations can be completed remotely through secure telemedicine appointments — no in-person visit required for most Bakersfield patients.",
  },
  {
    category: "Eligibility",
    question: "Is PTSD a qualifying condition for a California medical marijuana card?",
    answer:
      "Yes. PTSD is commonly recognized as a qualifying condition for medical marijuana recommendations in California.",
  },
  {
    category: "Renewal",
    question:
      "What is the California Medical Marijuana Identification Card (MMIC) Program?",
    answer:
      "The MMIC program is California's voluntary state-issued medical cannabis identification card system administered through county public health departments. Bakersfield residents apply through the Kern County Public Health Services Department.",
  },
];

export const FAQ_CATEGORIES: FaqCategory[] = [
  "Eligibility",
  "Process",
  "Renewal",
];

export interface Review {
  name: string;
  city: string;
  date: string;
  rating: number;
  title: string;
  body: string;
  featured?: boolean;
}

export const REVIEWS: Review[] = [
  {
    name: "Maria L.",
    city: "Bakersfield, CA",
    date: "March 18, 2026",
    rating: 5,
    title: "Same-day approval — exactly as promised",
    body: "I scheduled my evaluation Tuesday morning and had my California physician's recommendation by lunch. Dr. Martinez listened carefully and explained every step. Used it the same afternoon at my dispensary in Bakersfield. Could not be easier.",
    featured: true,
  },
  {
    name: "Jamal R.",
    city: "Tehachapi, CA",
    date: "February 02, 2026",
    rating: 5,
    title: "Saved me significant money in taxes",
    body: "Picked up my MMIC through Kern County right after my Baker420 evaluation. The sales tax exemption alone has saved me well over $200 this year. The whole process was fast, respectful, and 100% online.",
  },
  {
    name: "Hannah K.",
    city: "Delano, CA",
    date: "January 26, 2026",
    rating: 5,
    title: "Telehealth done right",
    body: "Honestly the most professional telehealth visit I've had. Dr. Shankar reviewed my migraine history thoroughly and approved me the same day. Highly recommend to anyone in Bakersfield or the broader Kern County area.",
  },
];
