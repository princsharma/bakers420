import type { Metadata } from "next";

export const SITE_CONFIG = {
  name: "Baker420 California",
  url: "https://baker420.com",
  defaultTitle:
    "Baker420 California | Online Medical Marijuana Card Evaluations",
  defaultDescription:
    "Get your California medical marijuana card 100% online. Licensed California physicians, HIPAA-compliant evaluations, and a money-back guarantee if you're not approved.",
  twitterHandle: "@baker420ca",
  locale: "en_US" as const,
  phone: "1-800-420-CALI",
  region: "California",
  defaultOgImage: "/assets/og-homepage.svg",
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
      "California medical marijuana card",
      "MMJ card California",
      "Prop 215",
      "SB 420",
      "MMIC",
      "online MMJ evaluation",
      "licensed California physician",
      "telehealth cannabis",
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
    ...extra,
  };
}
