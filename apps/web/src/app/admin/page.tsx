import { PageBlueprint } from "@/components/page-blueprint";
import type { SectionDefinition } from "@/components/sections";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Admin Panel | MiddleOrbit Recruiter Console",
  description:
    "RBAC-secured console for recruiters, QC, and compliance leads to manage talent pools, audits, and SLA alerts.",
  slug: "/admin",
  keywords: ["admin panel manpower", "rbac audit logs"]
});

const sections: SectionDefinition[] = [
  {
    id: "rbac",
    eyebrow: "Security",
    title: "RBAC lanes + audit logs",
    description:
      "Role badges (Admin, Recruiter, QC, Compliance) control module access. Audit log stream surfaces every data touch with user, time, IP.",
    bullets: [
      "2FA enforced, hardware key support for admins.",
      "PII encryption indicators referencing AWS KMS.",
      "Pen-test checklist widget referencing OWASP."
    ],
    components: ["Audit log table", "Role switcher", "Compliance alerts"]
  },
  {
    id: "operations",
    eyebrow: "Operations",
    title: "Talent Pool + Search orchestration",
    description:
      "Panels for TalentPool curation, Placement oversight, Elasticsearch sync status, referral payout approvals.",
    bullets: [
      "Bulk actions with optimistic UI + skeleton states.",
      "SLA tracker referencing employer contracts.",
      "Automated job-post moderation queue."
    ]
  },
  {
    id: "copy",
    eyebrow: "Copy & Schema",
    title: "Transparency + compliance messaging",
    description:
      "Document how recruiter actions are monitored, stored, and exportable for audits. Provide schema recommendations for `SoftwareApplication` in marketing view.",
    bullets: [
      "Link to Legal + FAQ on data handling.",
      "CTA to download compliance whitepaper.",
      "Highlight GDPR readiness + data residency."
    ]
  }
];

export default function AdminPage() {
  return (
    <PageBlueprint
      title="Admin & Recruiter Panel"
      description="Secure operations console with RBAC, audit logs, and automation controls."
      sections={sections}
    />
  );
}

