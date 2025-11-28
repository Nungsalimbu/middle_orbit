import { PageBlueprint } from "@/components/page-blueprint";
import type { SectionDefinition } from "@/components/sections";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Talent Marketplace | MiddleOrbit Subscriptions",
  description:
    "Curated talent pools with AI-fit scores, geospatial intel, and transparent availability.",
  slug: "/talent-marketplace",
  keywords: ["talent marketplace", "subscription manpower", "geospatial talent"]
});

const sections: SectionDefinition[] = [
  {
    id: "layout",
    eyebrow: "UI Layout",
    title: "Filter rail + talent cards + map preview",
    description:
      "Filters stay sticky on desktop, collapse into pill drawer on mobile. Talent cards show AI-fit score, badges, and next-available window.",
    bullets: [
      "Heatmap preview component syncing with card hover.",
      "Talent subscription CTA with scarcity counter (“4 seats left”).",
      "Comparison drawer to evaluate multiple candidates."
    ],
    components: ["Filter rail", "Talent card", "Subscription upsell bar"],
    uxFlow: ["Browse", "Filter", "Preview map", "Add to shortlist", "Subscribe/Engage"]
  },
  {
    id: "copy",
    eyebrow: "Copy",
    title: "Data-rich but concise messaging",
    description:
      "Use metrics (availability %, training badges) and transparency cues (placement timeline).",
    bullets: [
      "Highlight career-fit explainability per card.",
      "Include compliance tags (visa ready, medical cleared).",
      "Call-to-action: “Unlock weekly drops”, “Reserve 10-seat subscription”."
    ]
  },
  {
    id: "seo",
    eyebrow: "SEO + Schema",
    title: "LocalBusiness + ItemList schema",
    description:
      "Each segment (city + skill) becomes an SSR route with schema metadata.",
    bullets: [
      "Keywords: “MiddleOrbit manpower {city} {skill}”, “talent subscription {industry}”.",
      "ItemList for top candidates; include job category schema for open requisitions.",
      "Sitemap inclusion for all local pages."
    ]
  }
];

const schema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "MiddleOrbit Talent Marketplace",
  "itemListOrder": "https://schema.org/ItemListOrderAscending"
};

export default function TalentMarketplacePage() {
  return (
    <PageBlueprint
      title="Talent Subscription Marketplace"
      description="Always-on access to curated manpower pools with explainable AI scoring."
      sections={sections}
      schema={schema}
    />
  );
}

