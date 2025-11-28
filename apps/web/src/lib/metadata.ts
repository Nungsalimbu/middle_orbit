import type { Metadata } from "next";

type SeoInput = {
  title: string;
  description: string;
  slug: string;
  keywords?: string[];
};

export function buildMetadata({ title, description, slug, keywords = [] }: SeoInput): Metadata {
  const url = `https://middleorbit.com${slug}`;
  return {
    title,
    description,
    keywords: ["MiddleOrbit manpower", "AI manpower platform", ...keywords],
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: "MiddleOrbit",
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title,
      description
    }
  };
}

