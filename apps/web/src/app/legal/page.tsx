import { PageBlueprint } from "@/components/page-blueprint";
import type { SectionDefinition } from "@/components/sections";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Legal & Compliance | MiddleOrbit",
  description:
    "GDPR-ready privacy, data encryption, RBAC, audit logs, and contract terms for the manpower OS.",
  slug: "/legal",
  keywords: ["middleorbit privacy", "gdpr manpower", "security compliance"]
});

const sections: SectionDefinition[] = [
  {
    id: "policies",
    eyebrow: "Policies",
    title: "Privacy, Terms, SLA, DPA",
    description:
      "Modular tabs for Privacy Policy, Terms of Service, Service Level Agreement, Data Processing Addendum.",
    bullets: [
      "Link to pen test checklist + vulnerability disclosure.",
      "Summaries above fold with CTA to download PDF.",
      "Highlight encryption, data residency, retention."
    ],
    components: ["Tabs", "Download CTA", "Contact compliance"]
  },
  {
    id: "security",
    eyebrow: "Security",
    title: "Defense-in-depth story",
    description:
      "Explain auth (OAuth + JWT + 2FA), encryption (S3 SSE-KMS, Postgres pgcrypto), monitoring (CloudWatch, Datadog).",
    bullets: [
      "RBAC matrix for Admin/Employer/Candidate/Recruiter.",
      "Audit log retention + export policy.",
      "Pen-test + incident response timeline."
    ]
  },
  {
    id: "seo",
    eyebrow: "SEO & Schema",
    title: "Policy schema + linking",
    description:
      "Use `TechArticle` or `Article` schema for policy content plus `BreadcrumbList`.",
    bullets: [
      "Keywords: manpower data privacy, GDPR manpower agency.",
      "Link to FAQ and Admin pages.",
      "CTA for compliance call."
    ]
  }
];

export default function LegalPage() {
  return (
    <PageBlueprint
      title="Legal + Compliance Center"
      description="Document MiddleOrbit’s security, privacy, and SLA commitments."
      sections={sections}
    />
  );
}

