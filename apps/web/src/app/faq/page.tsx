import { PageBlueprint } from "@/components/page-blueprint";
import type { SectionDefinition } from "@/components/sections";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "FAQ | MiddleOrbit Manpower Platform",
  description:
    "Answers for employers, candidates, and admins covering AI scoring, transparency timelines, compliance, and pricing.",
  slug: "/faq",
  keywords: ["manpower faq", "ai staffing questions"]
});

const sections: SectionDefinition[] = [
  {
    id: "structure",
    eyebrow: "Layout",
    title: "Accordion grouped by persona",
    description:
      "Tabs for Employers, Candidates, Admin. Each tab uses accordion UI with microcopy and contextual CTAs.",
    bullets: [
      "Include quick search, scrollspy, and share links.",
      "Use skeleton loader for deep answers (progressive disclosure).",
      "Embed CTA after third answer (demo or signup)."
    ],
    components: ["Tabs", "Accordion", "Inline CTAs"]
  },
  {
    id: "copy",
    eyebrow: "Copy",
    title: "Transparent, SEO-rich answers",
    description:
      "Address AI fairness, data privacy, pricing, and ROI steps. Reference watchdogs (GDPR, ISO).",
    bullets: [
      "Call out AI explainability + manual oversight.",
      "Describe placement transparency timeline sharing.",
      "List referral payouts and micro-training benefits."
    ]
  },
  {
    id: "schema",
    eyebrow: "Schema",
    title: "FAQPage JSON-LD",
    description:
      "Each question inserted into schema for SEO + People Also Ask coverage.",
    bullets: [
      "Keywords: “MiddleOrbit manpower transparency”, “AI interview simulator trust”.",
      "Internal links to relevant pages per answer.",
      "Add CTA for contacting compliance team."
    ]
  }
];

export default function FaqPage() {
  return (
    <PageBlueprint
      title="Frequently Asked Questions"
      description="Everything about AI career-fit scores, transparency timelines, contracts, and compliance."
      sections={sections}
    />
  );
}

