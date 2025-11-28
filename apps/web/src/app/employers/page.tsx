import { PageBlueprint } from "@/components/page-blueprint";
import type { SectionDefinition } from "@/components/sections";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Employers | MiddleOrbit Manpower Dashboards",
  description:
    "AI-ready employer cockpit with ROI dashboard, talent subscriptions, transparency timelines, and automated contracts.",
  slug: "/employers",
  keywords: ["employer dashboard", "manpower ROI", "contract automation"]
});

const sections: SectionDefinition[] = [
  {
    id: "ui-layout",
    eyebrow: "UI Layout",
    title: "Left nav + KPI header + modular cards",
    description:
      "Sticky KPI header shows time-to-fill, spend, and open requisitions. Below lives a modular grid for AI shortlist, interviews, contracts, and transparency timeline.",
    bullets: [
      "Responsive 12-column grid with micro-interactions + skeleton loaders.",
      "Docked filters for job status, region, compliance tags.",
      "Embedded ROI card stack with export + share controls."
    ],
    components: ["KPI header", "AI shortlist table", "Placement timeline", "Contract generator modal"],
    uxFlow: ["Signup", "Verify", "Post job", "AI shortlist", "Interview", "Hire", "Contract", "Timeline"],
    ctas: [
      { label: "Book ROI Session", href: "/contact" },
      { label: "View Candidate Dashboard", href: "/dashboards/candidate", variant: "ghost" }
    ]
  },
  {
    id: "copy-guidelines",
    eyebrow: "Copy",
    title: "Trust-first copy with proof points",
    description:
      "Lead with guarantees, compliance coverage, and ROI stats. Reinforce scarcity for talent subscription marketplace.",
    bullets: [
      "Above-the-fold trust badges + compliance seals.",
      "Case study slider referencing industries (logistics, oil & gas, healthcare).",
      "CTA microcopy: “Deploy AI shortlist in 48h”, “See transparency timeline live”."
    ]
  },
  {
    id: "seo",
    eyebrow: "SEO + Schema",
    title: "JobPosting + Organization schema",
    description:
      "Server-render meta tags plus JSON-LD for employer intent. Include LocalBusiness for each city-specific section.",
    bullets: [
      "Target keywords: manpower agency alternative, AI staffing ROI, transparent hiring.",
      "FAQPage JSON-LD for procurement questions.",
      "Internal links to marketplace, dashboards, case studies."
    ]
  }
];

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Manpower subscription",
  "provider": {
    "@type": "Organization",
    "name": "MiddleOrbit"
  },
  "areaServed": ["UAE", "KSA", "India", "Philippines"]
};

export default function EmployersPage() {
  return (
    <PageBlueprint
      title="Employer Command Center"
      description="Analytics-grade dashboards orchestrating manpower ROI, transparency, and automation."
      sections={sections}
      schema={schema}
    />
  );
}

