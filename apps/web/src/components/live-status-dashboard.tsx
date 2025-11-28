"use client";

import { useEffect, useState } from "react";

const baseStats = [
  { label: "Candidates deployed", value: 12840 },
  { label: "Countries served", value: 32 },
  { label: "Jobs open", value: 184 },
  { label: "Success rate", value: 0.94 }
];

export function LiveStatusDashboard() {
  const [stats, setStats] = useState(baseStats);

  useEffect(() => {
    const interval = setInterval(() => {
      setStats((prev) =>
        prev.map((stat) => {
          if (stat.label === "Success rate") {
            return { ...stat };
          }
          const variance = stat.label === "Jobs open" ? 3 : 12;
          return { ...stat, value: stat.value + Math.round(Math.random() * variance) };
        })
      );
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="rounded-4xl border border-midnight/10 bg-white p-8 shadow-glow">
      <p className="text-xs uppercase tracking-[0.4em] text-midnight/70">Live hiring status</p>
      <h3 className="mt-3 font-display text-3xl text-midnight">Realtime manpower deployment feed</h3>
      <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="rounded-3xl bg-cloud/70 p-5">
            <p className="text-xs uppercase tracking-wide text-slate-500">{stat.label}</p>
            <p className="mt-2 text-3xl font-semibold text-midnight">
              {stat.label === "Success rate" ? `${Math.round(stat.value * 100)}%` : stat.value.toLocaleString()}
            </p>
            <p className="text-xs text-emerald-600">Auto-sync every 4s</p>
          </div>
        ))}
      </div>
    </section>
  );
}

