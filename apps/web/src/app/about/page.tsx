import { PageBlueprint } from "@/components/page-blueprint";
import type { SectionDefinition } from "@/components/sections";
import { TeamSection } from "@/components/team-section";
import { RecruitmentProcess } from "@/components/recruitment-process";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "About MiddleOrbit | Manpower Intelligence Lab",
  description:
    "Meet the team building AI-first manpower infrastructure with transparency, compliance, and trust.",
  slug: "/about",
  keywords: ["about middleorbit", "manpower innovation", "transparency"]
});

const sections: SectionDefinition[] = [
  {
    id: "mission",
    eyebrow: "Mission",
    title: "Radical transparency for manpower",
    description:
      "We merge AI, geospatial intelligence, and compliance automation to eliminate black-box manpower practices.",
    bullets: [
      "In-house AI research covering resume parsing, matching, interview simulation.",
      "Compliance council with GDPR, GCC labor, and OSHA experts.",
      "Global recruiter network with service-level guarantees."
    ]
  },
  {
    id: "team",
    eyebrow: "Team",
    title: "Distributed, multi-disciplinary crew",
    description:
      "Recruiters, data scientists, and operations leads across Dubai, Manila, Bengaluru, and Austin.",
    bullets: [
      "Admin panel RBAC ensures least-privilege access.",
      "Quality controllers monitor placement timelines + audit logs.",
      "Dedicated customer pods per enterprise client."
    ]
  },
  {
    id: "copy",
    eyebrow: "Copy & CTA",
    title: "Highlight track record + invite demo",
    description:
      "Use proof like fill time reduction, cost savings, and candidate NPS. CTA to view case studies or contact.",
    bullets: [
      "Timeline showing MVP -> v2 roadmap milestones.",
      "Link to pen test checklist + compliance statements.",
      "CTA: “Request the Transparency Playbook PDF”."
    ],
    ctas: [
      { label: "View Case Studies", href: "/case-studies" },
      { label: "Talk to Leadership", href: "/contact", variant: "ghost" }
    ]
  }
];

export default function AboutPage() {
  return (
    <div className="space-y-16 pb-16">
      <PageBlueprint
        title="Inside MiddleOrbit"
        description="A manpower intelligence lab shipping AI-first transparency tooling."
        sections={sections}
      />
      <div className="page-shell space-y-16">
        <RecruitmentProcess />
        <TeamSection />
      </div>
    </div>
  );
}

