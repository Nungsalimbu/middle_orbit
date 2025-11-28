import { CountryDemandGrid } from "@/components/country-demand-grid";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Country-wise Demand | MiddleOrbit Overseas",
  description: "See live manpower demand by country, sector, and urgent skills for Nepalese candidates.",
  slug: "/country-demand",
  keywords: ["country demand nepal manpower", "jobs in dubai", "jobs in qatar", "jobs in malaysia"]
});

export default function CountryDemandPage() {
  return (
    <div className="page-shell space-y-6 py-10">
      <header className="space-y-3">
        <p className="text-xs uppercase tracking-[0.4em] text-midnight/70">Country demand</p>
        <h1 className="font-display text-4xl text-midnight">Jobs by country</h1>
        <p className="text-lg text-slate-600">
          Explore current demand for Nepalese manpower across GCC, Europe, and Asia. Each tile shows sectors, urgent
          skills, and next deployment dates.
        </p>
      </header>
      <CountryDemandGrid />
    </div>
  );
}

