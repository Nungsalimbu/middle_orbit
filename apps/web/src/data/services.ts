export type Service = {
  slug: string;
  title: string;
  summary: string;
  deliverables: string[];
  industries: string[];
  cta: string;
};

export const services: Service[] = [
  {
    slug: "manpower-supply",
    title: "Manpower Supply",
    summary:
      "Deploy skilled, semi-skilled, and professional manpower backed by medical, compliance, and insurance cover.",
    deliverables: [
      "End-to-end sourcing & trade testing",
      "Visa, medical & insurance management",
      "Deployment charters with SLA checkpoints"
    ],
    industries: ["Oil & Gas", "Construction", "Hospitality", "Logistics"],
    cta: "Request deployment plan"
  },
  {
    slug: "overseas-hiring",
    title: "Overseas Hiring",
    summary:
      "Country-specific recruitment desks covering GCC, Europe, and APAC with embassy liaison and legal advisory.",
    deliverables: [
      "Country master compliance",
      "Interview camps & virtual assessments",
      "Repatriation and payroll advisory"
    ],
    industries: ["GCC", "Europe", "Japan POEA", "Offshore"],
    cta: "Book a country briefing"
  },
  {
    slug: "documentation-support",
    title: "Documentation Support",
    summary:
      "Centralized documentation lounge generating checklists, notarizing papers, and offering translation + attestation.",
    deliverables: [
      "Digital checklist generator",
      "MOFA, embassy, labor approvals",
      "ISO-backed document vault"
    ],
    industries: ["Visa units", "Legal", "Compliance"],
    cta: "Generate checklist"
  },
  {
    slug: "training-badges",
    title: "Training & Badges",
    summary:
      "In-house micro training with VR modules, ready-to-hire badges, and soft-skill grooming for candidates.",
    deliverables: [
      "Tailored trade upskilling",
      "Language & cultural briefings",
      "Digital credential badges"
    ],
    industries: ["Hospitality", "Aviation", "Marine"]
  }
];

