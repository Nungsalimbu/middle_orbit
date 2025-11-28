"use client";

import { useMemo, useState } from "react";

const baseCosts = {
  passport: 5000,
  medical: 12000,
  visa: 25000,
  training: 18500,
  travel: 18000
};

export function CostCalculator() {
  const [costs, setCosts] = useState(baseCosts);

  const total = useMemo(
    () => Object.values(costs).reduce((sum, value) => sum + value, 0),
    [costs]
  );

  const handleChange = (key: keyof typeof baseCosts, value: number) => {
    setCosts((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <section className="rounded-4xl border border-midnight/10 bg-white p-8 shadow-glow">
      <p className="text-xs uppercase tracking-[0.4em] text-midnight/70">Cost breakdown</p>
      <h3 className="font-display text-3xl text-midnight">Estimate your pre-departure budget</h3>
      <p className="text-sm text-slate-600">Adjust sliders to match the fees quoted by embassy, clinics, or airlines.</p>
      <div className="mt-6 space-y-5">
        {Object.entries(costs).map(([key, value]) => (
          <div key={key}>
            <div className="flex justify-between text-sm text-midnight">
              <p className="capitalize">{key}</p>
              <p>NPR {value.toLocaleString()}</p>
            </div>
            <input
              type="range"
              min={3000}
              max={30000}
              value={value}
              onChange={(event) => handleChange(key as keyof typeof baseCosts, Number(event.target.value))}
              className="w-full"
            />
          </div>
        ))}
      </div>
      <div className="mt-6 rounded-3xl bg-midnight p-5 text-white">
        <p className="text-xs uppercase tracking-[0.4em] text-white/60">Estimated total</p>
        <p className="mt-2 text-3xl font-semibold">NPR {total.toLocaleString()}</p>
        <p className="text-sm text-white/80">Use this to plan savings, loans, or employer sponsorships.</p>
      </div>
    </section>
  );
}

