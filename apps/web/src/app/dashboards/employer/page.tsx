import { PageBlueprint } from "@/components/page-blueprint";
import type { SectionDefinition } from "@/components/sections";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Employer Dashboard | MiddleOrbit",
  description:
    "Live hiring funnels, AI insights, compliance alerts, and automated contract workflows in one cockpit.",
  slug: "/dashboards/employer",
  keywords: ["employer dashboard manpower", "hiring analytics"]
});

const sections: SectionDefinition[] = [
  {
    id: "overview",
    eyebrow: "Layout",
    title: "Modular analytics canvas",
    description:
      "Left nav for Overview, Talent Map, Interviews, Contracts, Analytics, Settings. Main canvas uses responsive cards with drill-in drawers.",
    bullets: [
      "Top row KPIs (Time-to-fill, Cost-per-hire, Compliance score).",
      "Interactive funnel chart with Mixpanel instrumentation.",
      "SLA alerts + audit log stream."
    ],
    components: ["KPI deck", "Funnel chart", "Audit log feed"],
    uxFlow: ["Select job", "Review AI shortlist", "Trigger interview sim", "Issue contract", "Track timeline"]
  },
  {
    id: "automation",
    eyebrow: "Automation",
    title: "AI + workflow integrations",
    description:
      "Embed Career-Fit Score cards, auto-generated contract templates, and placement timeline sync.",
    bullets: [
      "2FA step-up for contract approvals.",
      "Automated alerts via email + WhatsApp.",
      "Downloadable ROI dashboards (PDF, CSV)."
    ]
  },
  {
    id: "seo",
    eyebrow: "SEO & Copy",
    title: "Conversion-focused copy & structured data",
    description:
      "Even app pages reference SEO keywords via SSR fallback (public view). Use `SoftwareApplication` schema for demo page.",
    bullets: [
      "Document RBAC roles and compliance posture.",
      "Inject FAQ for procurement teams.",
      "Link to Contact, Marketplace, and Case Studies."
    ]
  }
];

export default function EmployerDashboardPage() {
  return (
    <PageBlueprint
      title="Employer Dashboard Blueprint"
      description="Command hiring funnels with AI explainability, transparency timelines, and ROI analytics."
      sections={sections}
    />
  );
}

