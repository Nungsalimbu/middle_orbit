import { PageBlueprint } from "@/components/page-blueprint";
import type { SectionDefinition } from "@/components/sections";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Candidates | MiddleOrbit Career OS",
  description:
    "Video resumes, micro-training, AI interview simulator, and referral earnings inside one talent experience.",
  slug: "/candidates",
  keywords: ["video resume", "micro training", "interview simulator"]
});

const sections: SectionDefinition[] = [
  {
    id: "experience",
    eyebrow: "Experience",
    title: "Mobile-first dashboard with completion heatmap",
    description:
      "Guided onboarding breaks profile creation into steps using progressive disclosure and skeleton states.",
    bullets: [
      "Video recorder + story builder panel with prompt chips.",
      "Micro-training carousel awarding skill badges (JSONB).",
      "Referral engine tile with payout tracker + CTA to invite peers."
    ],
    uxFlow: [
      "Signup",
      "Profile intake",
      "Video resume",
      "Micro-training",
      "Matches",
      "Interview simulator",
      "Hired"
    ],
    components: ["Video resume recorder", "Skill badge grid", "Interview simulator CTA"]
  },
  {
    id: "copy",
    eyebrow: "Copy",
    title: "Empathetic tone stressing transparency",
    description:
      "Highlight AI explainability, placement timeline access, and clear referral earnings.",
    bullets: [
      "Headlines like “See every hiring update in one transparency timeline”.",
      "Badge descriptions referencing OSHA, offshore, leadership, etc.",
      "Microcopy for scarcity: “7 robotics employers interviewing this week”."
    ]
  },
  {
    id: "seo-schema",
    eyebrow: "SEO & Schema",
    title: "FAQPage + HowTo schema for career actions",
    description:
      "Document steps for recording video resume, earning badges, and activating referrals.",
    bullets: [
      "Long-form copy clusters targeting “MiddleOrbit manpower jobs”, “video resume manpower”.",
      "Local SEO callouts linking to city landing pages.",
      "Structured data for HowTo (Video resume) and FAQ (badges, transparency)."
    ]
  }
];

const schema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Record a MiddleOrbit Video Resume",
  "step": [
    "Sign in with 2FA",
    "Enable camera",
    "Follow guided prompts",
    "Submit for AI polishing"
  ]
};

export default function CandidatesPage() {
  return (
    <PageBlueprint
      title="Candidate Story Builder"
      description="Give every candidate AI-powered storytelling, training, and transparent hiring updates."
      sections={sections}
      schema={schema}
    />
  );
}

