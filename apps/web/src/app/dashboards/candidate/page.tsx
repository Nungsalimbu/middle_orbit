import { PageBlueprint } from "@/components/page-blueprint";
import type { SectionDefinition } from "@/components/sections";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Candidate Dashboard | MiddleOrbit",
  description:
    "Track applications, run interview simulations, earn skill badges, and monitor transparency timelines.",
  slug: "/dashboards/candidate",
  keywords: ["candidate dashboard manpower", "interview simulator", "skill badges"]
});

const sections: SectionDefinition[] = [
  {
    id: "layout",
    eyebrow: "Layout",
    title: "Progress tracker + mission cards",
    description:
      "Hero progress ring shows profile completion. Cards for Video Resume, Micro-training, Matches, Timeline, Referrals.",
    bullets: [
      "Story builder prompts with AI highlight suggestions.",
      "Skill badge grid with share-to-LinkedIn buttons.",
      "Placement transparency timeline mirror view."
    ],
    components: ["Progress ring", "Mission cards", "Timeline viewer"],
    uxFlow: [
      "Sign in",
      "Complete profile",
      "Record video",
      "Train + badges",
      "Run simulator",
      "Track timeline"
    ]
  },
  {
    id: "copy",
    eyebrow: "Copy",
    title: "Motivational, clarity-first tone",
    description:
      "Explain each task’s benefit, reassure data privacy, celebrate achievements.",
    bullets: [
      "Referral module shows payouts + CTA to invite peers.",
      "Micro-training copy includes duration + credential provider.",
      "Interview simulator copy outlines AI and human coach roles."
    ]
  },
  {
    id: "schema",
    eyebrow: "Schema",
    title: "Profile + HowTo data",
    description:
      "Public preview uses `Person` + `HowTo` JSON-LD for skill badges and training steps.",
    bullets: [
      "Link to Candidate FAQ + Marketplace.",
      "Add `SpeakableSpecification` for key sections to support voice search.",
      "SEO keywords: “MiddleOrbit candidate portal”, “manpower interview simulator”."
    ]
  }
];

export default function CandidateDashboardPage() {
  return (
    <PageBlueprint
      title="Candidate Dashboard Blueprint"
      description="Guide talent through AI storytelling, training, applications, and payouts."
      sections={sections}
    />
  );
}

