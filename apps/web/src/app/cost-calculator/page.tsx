import { CostCalculator } from "@/components/cost-calculator";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Cost Breakdown Calculator | MiddleOrbit Overseas",
  description: "Estimate your total pre-departure cost including passport, medical, visa, training, and travel.",
  slug: "/cost-calculator",
  keywords: ["manpower cost calculator", "overseas job cost nepal"]
});

export default function CostCalculatorPage() {
  return (
    <div className="page-shell py-10">
      <CostCalculator />
    </div>
  );
}

