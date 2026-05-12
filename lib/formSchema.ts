import { z } from "zod";

const phoneRegex = /^\+?1?[\s.-]?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;

export const LeadFormSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, { message: "Please enter your full name." })
    .max(80, { message: "Name is too long." }),
  email: z
    .string()
    .trim()
    .min(1, { message: "Email is required." })
    .email({ message: "Please enter a valid email address." }),
  phone: z
    .string()
    .trim()
    .min(1, { message: "Phone number is required." })
    .regex(phoneRegex, { message: "Please enter a valid US phone number." }),
  conditionAcknowledged: z
    .boolean()
    .refine((value) => value === true, {
      message: "Please confirm you have a qualifying condition.",
    }),
  consent: z
    .boolean()
    .refine((value) => value === true, {
      message: "Consent is required so a physician can contact you.",
    }),
});

export type LeadFormValues = z.infer<typeof LeadFormSchema>;

export const ContactFormSchema = LeadFormSchema.extend({
  message: z
    .string()
    .trim()
    .min(10, { message: "Please share at least a few details (10+ chars)." })
    .max(2000, { message: "Message is too long." }),
});

export type ContactFormValues = z.infer<typeof ContactFormSchema>;
