export type FaqCategory = "Eligibility" | "Process" | "Pricing" | "Renewal";

export interface FaqItem {
  question: string;
  answer: string;
  category: FaqCategory;
}

export const FAQS: FaqItem[] = [
  {
    category: "Eligibility",
    question: "What is a California medical marijuana card and who needs one?",
    answer:
      "A California medical marijuana card is a state-issued Medical Marijuana Identification Card (MMIC) that confirms a patient has received a physician's recommendation for medical cannabis under the Compassionate Use Act (Prop 215) and SB 420. It is most useful for patients who want sales-tax exemptions, higher possession limits, and clearer legal protection than adult-use status alone.",
  },
  {
    category: "Eligibility",
    question: "How do I qualify under Prop 215 / SB 420?",
    answer:
      "You qualify if you are a California resident with a qualifying condition such as chronic pain, severe nausea, cancer, AIDS, anorexia, cachexia, arthritis, glaucoma, migraine, persistent muscle spasms (including MS), seizures (including epilepsy), or any other chronic or persistent symptom that substantially limits major life activities.",
  },
  {
    category: "Process",
    question: "Can I get a California MMJ recommendation entirely online?",
    answer:
      "Yes. Baker420 California connects you with a CA-licensed physician through a secure HIPAA-compliant video visit. Most evaluations are completed in 10 to 15 minutes, and approved patients receive a digital physician's recommendation the same day.",
  },
  {
    category: "Eligibility",
    question:
      "What's the difference between a physician's recommendation and the county MMIC?",
    answer:
      "A physician's recommendation is the document signed by your evaluating physician — it is what most patients actually use. The MMIC is a state-tracked county-issued card that adds sales-tax exemption and legal protections. The MMIC application is optional and filed through your county health department.",
  },
  {
    category: "Pricing",
    question: "How much does it cost?",
    answer:
      "The California Resident Special is $59 flat for a full physician evaluation, with a money-back guarantee if you are not approved. The optional county MMIC card fee is around $44 (or $22 for Medi-Cal beneficiaries) and is paid separately to your county.",
  },
  {
    category: "Renewal",
    question: "How long is a California MMJ recommendation valid?",
    answer:
      "A California physician's recommendation is valid for 1 year. You can renew online with Baker420 in under 10 minutes — most renewal patients are approved the same day.",
  },
  {
    category: "Pricing",
    question: "What are the tax benefits of holding an MMIC in California?",
    answer:
      "MMIC cardholders are exempt from California sales and use tax on medical cannabis purchases at licensed dispensaries. For regular patients this typically pays back the card cost within a few refills.",
  },
  {
    category: "Process",
    question: "Can I designate a primary caregiver in California?",
    answer:
      "Yes. Under California law you may designate a primary caregiver who is responsible for your housing, health, or safety. The caregiver designation is recorded with the physician and, if you obtain an MMIC, with your county.",
  },
];

export const FAQ_CATEGORIES: FaqCategory[] = [
  "Eligibility",
  "Process",
  "Pricing",
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
    city: "Long Beach, CA",
    date: "March 18, 2026",
    rating: 5,
    title: "Same-day approval — exactly as promised",
    body: "I scheduled my evaluation Tuesday morning and had my California physician's recommendation by lunch. Dr. Martinez listened carefully and explained every step. Used it the same afternoon at my dispensary in Long Beach. Could not be easier.",
    featured: true,
  },
  {
    name: "Jamal R.",
    city: "Oakland, CA",
    date: "February 02, 2026",
    rating: 5,
    title: "Saved me significant money in taxes",
    body: "Picked up my MMIC right after my Baker420 evaluation. The sales tax exemption alone has saved me well over $200 this year. The whole process was fast, respectful, and 100% online.",
  },
  {
    name: "Hannah K.",
    city: "San Diego, CA",
    date: "January 26, 2026",
    rating: 5,
    title: "Telehealth done right",
    body: "Honestly the most professional telehealth visit I've had. Dr. Shankar reviewed my migraine history thoroughly and approved me the same day. Highly recommend to anyone in California.",
  },
];
