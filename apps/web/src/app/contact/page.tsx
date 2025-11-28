import { PageBlueprint } from "@/components/page-blueprint";
import type { SectionDefinition } from "@/components/sections";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Contact | Schedule a MiddleOrbit Demo",
  description:
    "Talk to manpower strategists, request ROI dashboards, or trigger deployment sprints.",
  slug: "/contact",
  keywords: ["contact manpower platform", "book demo", "recruitment platform demo"]
});

const sections: SectionDefinition[] = [
  {
    id: "layout",
    eyebrow: "Layout",
    title: "Two-column trust layout",
    description:
      "Left column: form with progressive disclosure (company, headcount, roles). Right: trust box with SLAs, compliance badges, office map.",
    bullets: [
      "Include timezone-aware scheduler widget.",
      "Add phone/email + WhatsApp fallback.",
      "Microcopy reassuring data privacy (GDPR-ready)."
    ],
    components: ["Multi-step form", "Scheduler embed", "Trust badges"]
  },
  {
    id: "copy",
    eyebrow: "Copy",
    title: "Action-oriented copy",
    description:
      "Call out what employers receive: ROI dashboard, transparency timeline example, AI shortlist preview.",
    bullets: [
      "Add scarcity CTA: “November deployment slots: 3 remaining”.",
      "Offer exit-intent magnet (PDF: Transparent Manpower Playbook).",
      "Mention 24h response SLA."
    ]
  },
  {
    id: "schema",
    eyebrow: "Schema",
    title: "LocalBusiness + ContactPoint",
    description:
      "Highlight Dubai HQ plus satellite offices for local SEO. Mark sales, support, compliance contact types.",
    bullets: [
      "Structured data includes `areaServed` and `openingHours`. ",
      "Embed Google Map with verified listing.",
      "Include WhatsApp link for instant consult."
    ],
    ctas: [{ label: "Book Demo", href: "/contact" }]
  }
];

const schema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "MiddleOrbit HQ",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Emirates Towers, Sheikh Zayed Rd",
    "addressLocality": "Dubai",
    "addressCountry": "AE"
  },
  "openingHours": "Mo-Fr 09:00-19:00"
};

export default function ContactPage() {
  return (
    <PageBlueprint
      title="Book a Transparency Demo"
      description="Share hiring goals, get a live ROI dashboard, and see MiddleOrbit’s placement timeline."
      sections={sections}
      schema={schema}
    />
  );
}

