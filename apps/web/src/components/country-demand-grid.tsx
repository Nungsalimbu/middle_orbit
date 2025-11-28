"use client";

import { countryDemand } from "@/data/countries";
import clsx from "clsx";

const statusCopy: Record<string, string> = {
  open: "Open for CVS",
  interviewing: "Interviewing now",
  "closed-soon": "Closing soon"
};

export function CountryDemandGrid() {
  return (
    <section className="rounded-4xl border border-midnight/10 bg-white p-8 shadow-glow">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-midnight/70">Country demand</p>
          <h3 className="font-display text-3xl text-midnight">Live country & skill requirements</h3>
          <p className="text-sm text-slate-600">Filter by status and export requirement briefs.</p>
        </div>
      </div>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {countryDemand.map((country) => (
          <div key={country.country} className="rounded-3xl border border-cloud bg-cloud/40 p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold text-midnight">{country.country}</p>
                <p className="text-xs uppercase tracking-wide text-slate-500">{country.city}</p>
              </div>
              <span
                className={clsx(
                  "rounded-full px-3 py-1 text-xs font-semibold",
                  country.status === "open" && "bg-emerald-100 text-emerald-700",
                  country.status === "interviewing" && "bg-amber-100 text-amber-700",
                  country.status === "closed-soon" && "bg-rose-100 text-rose-700"
                )}
              >
                {statusCopy[country.status]}
              </span>
            </div>
            <p className="mt-3 text-sm text-slate-600">
              Quota {country.quota} | Next deployment {country.nextDeployment}
            </p>
            <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-slate-500">Focus sectors</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {country.sectors.map((sector) => (
                <span key={sector} className="rounded-full bg-white px-3 py-1 text-xs font-medium text-midnight">
                  {sector}
                </span>
              ))}
            </div>
            <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-slate-500">Urgent skills</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {country.urgentSkills.map((skill) => (
                <span key={skill} className="rounded-full bg-midnight/10 px-3 py-1 text-xs font-medium text-midnight">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

