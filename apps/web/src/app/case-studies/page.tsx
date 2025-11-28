import { PageBlueprint } from "@/components/page-blueprint";
import type { SectionDefinition } from "@/components/sections";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Case Studies | MiddleOrbit Manpower Wins",
  description:
    "Read how logistics, healthcare, and energy leaders slashed hiring time with MiddleOrbit.",
  slug: "/case-studies",
  keywords: ["manpower case study", "hiring transparency results"]
});

const sections: SectionDefinition[] = [
  {
    id: "layout",
    eyebrow: "Layout",
    title: "Hero metrics + masonry story cards",
    description:
      "Hero banner features aggregated ROI stats, followed by cards with KPI highlights, storyline, and CTA.",
    bullets: [
      "Each card includes industry tag, location, and AI tooling used.",
      "Embed video testimonial modal for select stories.",
      "CTA row linking to Employers and Contact pages."
    ],
    components: ["Metric hero", "Story cards", "Testimonial modal"]
  },
  {
    id: "copy",
    eyebrow: "Copy",
    title: "Structured storytelling",
    description:
      "Use challenge → intervention → impact storytelling with KPI emphasis.",
    bullets: [
      "Include AI Career-Fit explainability snippet per case.",
      "Highlight placement transparency timeline screenshots.",
      "Offer downloadable PDF for procurement."
    ]
  },
  {
    id: "schema",
    eyebrow: "Schema",
    title: "CreativeWork + Breadcrumb",
    description:
      "Each case study SSR route should include JSON-LD with author, publish date, industry.",
    bullets: [
      "Keywords per industry cluster.",
      "Internal links to relevant services and blog posts.",
      "CTA to request detailed walkthrough."
    ]
  }
];

export default function CaseStudiesPage() {
  return (
    <PageBlueprint
      title="Case Studies"
      description="Proof from global employers using MiddleOrbit to reach hiring clarity."
      sections={sections}
    />
  );
}

