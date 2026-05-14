import type { Metadata } from "next";

export const SITE_CONFIG = {
  name: "Baker420 California",
  url: "https://baker420.com",
  defaultTitle:
    "Bakersfield Medical Marijuana Card Online | Baker420 California",
  defaultDescription:
    "Apply for your California medical marijuana card online in Bakersfield. Secure telemedicine evaluations with licensed California physicians, HIPAA-compliant, $55 flat, money-back guarantee.",
  twitterHandle: "@baker420ca",
  locale: "en_US" as const,
  phone: "1-800-420-CALI",
  email: "contact@bakers420.com",
  region: "California",
  city: "Bakersfield",
  county: "Kern",
  defaultOgImage: "/assets/og-homepage.svg",
  googleSiteVerification: "A2tCQn-mzjI_lsIPuf3g6ICVLsDThzb67eB5NeHlm04",
  gtmId: "GTM-KZP5FX7M",
} as const;

type OgType = "website" | "article" | "profile";

type ExtraMetadata = Partial<Omit<Metadata, "title" | "description">>;

export interface BuildMetadataInput {
  title?: string;
  description?: string;
  keywords?: string[];
  canonicalPath?: string;
  ogImage?: string;
  ogType?: OgType;
  extra?: ExtraMetadata;
}

export function buildMetadata(input: BuildMetadataInput = {}): Metadata {
  const {
    title = SITE_CONFIG.defaultTitle,
    description = SITE_CONFIG.defaultDescription,
    keywords = [
      "Bakersfield medical marijuana card",
      "California medical marijuana card online",
      "Bakersfield MMJ doctor",
      "Kern County MMIC",
      "Prop 215",
      "SB 94",
      "SB 420",
      "online MMJ evaluation California",
      "licensed California physician",
      "telehealth cannabis Bakersfield",
    ],
    canonicalPath = "/",
    ogImage = SITE_CONFIG.defaultOgImage,
    ogType = "website",
    extra = {},
  } = input;

  const canonical = new URL(canonicalPath, SITE_CONFIG.url).toString();
  const ogImageUrl = ogImage.startsWith("http")
    ? ogImage
    : new URL(ogImage, SITE_CONFIG.url).toString();

  return {
    metadataBase: new URL(SITE_CONFIG.url),
    title,
    description,
    keywords,
    alternates: {
      canonical,
    },
    icons: {
      icon: [
        { url: "/assets/baker-favicon.webp", type: "image/webp" },
        { url: "/icon.webp", type: "image/webp" },
      ],
      shortcut: "/assets/baker-favicon.webp",
      apple: "/assets/baker-favicon.webp",
    },
    openGraph: {
      type: ogType,
      title,
      description,
      url: canonical,
      siteName: SITE_CONFIG.name,
      locale: SITE_CONFIG.locale,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: SITE_CONFIG.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      site: SITE_CONFIG.twitterHandle,
      creator: SITE_CONFIG.twitterHandle,
      images: [ogImageUrl],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    verification: {
      google: SITE_CONFIG.googleSiteVerification,
    },
    ...extra,
  };
}
