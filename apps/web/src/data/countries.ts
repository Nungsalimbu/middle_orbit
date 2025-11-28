export type CountryDemand = {
  country: string;
  city: string;
  sectors: string[];
  urgentSkills: string[];
  status: "open" | "interviewing" | "closed-soon";
  quota: number;
  nextDeployment: string;
};

export const countryDemand: CountryDemand[] = [
  {
    country: "United Arab Emirates",
    city: "Abu Dhabi, Dubai",
    sectors: ["Oil & Gas", "Facilities", "Aviation"],
    urgentSkills: ["HVAC techs", "Scaffolders", "Baggage handlers"],
    status: "open",
    quota: 320,
    nextDeployment: "Jan 12 – Feb 05"
  },
  {
    country: "Qatar",
    city: "Doha, Ras Laffan",
    sectors: ["Marine", "Logistics"],
    urgentSkills: ["Marine electricians", "Forklift ops"],
    status: "interviewing",
    quota: 150,
    nextDeployment: "Interview camp: Jan 07"
  },
  {
    country: "Saudi Arabia",
    city: "NEOM, Riyadh",
    sectors: ["Hospitality", "Infrastructure"],
    urgentSkills: ["Stewards", "Steel fixers"],
    status: "open",
    quota: 500,
    nextDeployment: "Rolling deployments"
  },
  {
    country: "Japan",
    city: "Osaka, Nagoya",
    sectors: ["Manufacturing"],
    urgentSkills: ["CNC machinists", "Auto assemblers"],
    status: "closed-soon",
    quota: 60,
    nextDeployment: "Feb orientation"
  }
];

