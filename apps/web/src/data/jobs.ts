export type Job = {
  id: string;
  title: string;
  country: string;
  location: string;
  sector: string;
  salary: string;
  openings: number;
  description: string;
  requirements: string[];
  benefits: string[];
  slug: string;
};

export const jobs: Job[] = [
  {
    id: "JOB-NE-001",
    title: "HVAC Technician",
    country: "United Arab Emirates",
    location: "Dubai",
    sector: "Engineering",
    salary: "AED 3,800 + overtime",
    openings: 45,
    description:
      "Deploy certified HVAC technicians to lead maintenance projects across aviation hubs and high-rise assets.",
    requirements: [
      "3+ years HVAC maintenance experience",
      "Valid trade certificate",
      "Conversational English",
      "Passport valid 2+ years"
    ],
    benefits: ["Accommodation", "Medical insurance", "Yearly flight allowance"],
    slug: "hvac-technician-dubai"
  },
  {
    id: "JOB-NE-002",
    title: "Marine Electrician",
    country: "Qatar",
    location: "Doha Shipyard",
    sector: "Marine",
    salary: "QAR 4,200 + food",
    openings: 30,
    description:
      "Support offshore rig retrofits with certified marine electricians who understand IEC/ATEX standards.",
    requirements: [
      "Marine background",
      "IEC/ATEX awareness",
      "Seaman book or willingness to obtain",
      "OGUK medical"
    ],
    benefits: ["Food allowance", "Offshore allowance", "Insurance"],
    slug: "marine-electrician-qatar"
  },
  {
    id: "JOB-NE-003",
    title: "Hospitality Steward",
    country: "Saudi Arabia",
    location: "NEOM Hospitality Zones",
    sector: "Hospitality",
    salary: "SAR 2,800 + tips",
    openings: 120,
    description:
      "Serve luxury resorts under NEOM with bilingual stewards trained in soft skills and sustainability practices.",
    requirements: [
      "Hospitality or cruise experience",
      "Customer-facing English",
      "Medical fit certificate"
    ],
    benefits: ["Shared accommodation", "Transport", "Gratuity bonus"],
    slug: "hospitality-steward-saudi"
  }
];

export function getJobBySlug(slug: string) {
  return jobs.find((job) => job.slug === slug);
}

