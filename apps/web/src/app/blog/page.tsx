import { PageBlueprint } from "@/components/page-blueprint";
import type { SectionDefinition } from "@/components/sections";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Blog | MiddleOrbit Manpower Intelligence",
  description:
    "Playbooks on geospatial talent mapping, AI explainability, and transparent manpower operations.",
  slug: "/blog",
  keywords: ["manpower blog", "talent intelligence"]
});

const sections: SectionDefinition[] = [
  {
    id: "layout",
    eyebrow: "Layout",
    title: "Editorial hero + topic filters",
    description:
      "Masonry grid with skeleton placeholders. Sticky topic pills for SEO clusters (AI, Compliance, Case Studies, Training).",
    bullets: [
      "Featured article with video/story embed.",
      "Newsletter CTA and exit-intent magnet for ROI kit.",
      "Author cards with recruiter + data scientist bios."
    ],
    components: ["Topic filters", "Newsletter CTA", "Author bios"]
  },
  {
    id: "copy",
    eyebrow: "Copy",
    title: "Long-form expert voice",
    description:
      "Blend data, actionable steps, and CTA linking to services. Ensure each post has TL;DR and checklist.",
    bullets: [
      "Include keyword clusters: manpower automation, AI staffing, geospatial hiring.",
      "Add quotes from recruiters and clients.",
      "CTA after second fold pointing to demo + marketplace."
    ]
  },
  {
    id: "schema",
    eyebrow: "Schema",
    title: "BlogPosting + BreadcrumbList",
    description:
      "Structured data per article for SEO + discoverability. Mention GA4, Mixpanel tracking plan for blog interactions.",
    bullets: [
      "Use `BlogPosting` with `author`, `wordCount`, `mainEntityOfPage`.",
      "Sitemap auto-includes new posts.",
      "Instrument scroll depth + CTA clicks."
    ]
  }
];

export default function BlogPage() {
  return (
    <PageBlueprint
      title="MiddleOrbit Blog"
      description="SEO-dominant manpower intelligence, automation, and transparency guides."
      sections={sections}
    />
  );
}

