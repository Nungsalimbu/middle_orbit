"use client";

import { useMemo } from "react";

const regions = [
  { city: "Dubai", roles: 184, strength: 0.92 },
  { city: "Manila", roles: 240, strength: 0.88 },
  { city: "Bengaluru", roles: 312, strength: 0.95 },
  { city: "Riyadh", roles: 96, strength: 0.74 }
];

export function InteractiveTalentMap() {
  const max = useMemo(() => Math.max(...regions.map((r) => r.roles)), []);

  return (
    <section className="page-shell mt-16 rounded-4xl border border-midnight/10 bg-white p-8 shadow-glow">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
        <div className="flex-1 space-y-4">
          <p className="text-xs uppercase tracking-[0.4em] text-midnight/70">
            Interactive Talent Map
          </p>
          <h2 className="font-display text-3xl text-midnight">
            Geospatial manpower heatmap with subscription-ready pools.
          </h2>
          <p className="text-base text-slate-600">
            Slice live supply by skill, clearance, visa status, or readiness. Each node surfaces AI
            explainability chips so employers know why a candidate is a top match.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {regions.map((region) => (
              <div key={region.city} className="rounded-3xl border border-cloud bg-cloud/40 p-4">
                <p className="text-sm font-semibold text-midnight">{region.city}</p>
                <p className="text-xs text-slate-500">
                  {region.roles} ready-to-interview candidates
                </p>
                <div className="mt-2 h-2 rounded-full bg-cloud">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-orbit to-ion"
                    style={{ width: `${(region.roles / max) * 100}%` }}
                  />
                </div>
                <p className="mt-2 text-xs uppercase tracking-wide text-slate-500">
                  Strength {Math.round(region.strength * 100)}%
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative h-80 w-full flex-1 overflow-hidden rounded-3xl bg-slate-900">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(30,214,193,0.4),_transparent_60%)]" />
          <p className="absolute left-4 top-4 text-xs uppercase tracking-[0.4em] text-white/60">
            Heatmap
          </p>
          <div className="absolute inset-0 flex items-center justify-center gap-4">
            {regions.map((region) => (
              <div
                key={region.city}
                className="flex flex-col items-center text-white"
                style={{ transform: `translateY(${(1 - region.strength) * 30}px)` }}
              >
                <span
                  className="mb-2 rounded-full border border-white/40 px-3 py-1 text-xs"
                >
                  {region.city}
                </span>
                <div
                  className="rounded-full bg-orbit/70 text-midnight"
                  style={{
                    width: `${region.strength * 80}px`,
                    height: `${region.strength * 80}px`
                  }}
                >
                  <span className="sr-only">{region.roles} roles</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

