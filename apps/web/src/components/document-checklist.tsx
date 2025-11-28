"use client";

import { useMemo, useState } from "react";

const jobTypes = [
  {
    value: "hospitality",
    label: "Hospitality Steward",
    docs: ["Passport copy", "CV + Photo", "Medical (GAMCA)", "Police clearance", "Food handling cert"]
  },
  {
    value: "oilgas",
    label: "Oil & Gas Technician",
    docs: ["Passport", "Trade certificate", "OGUK medical", "H2S + Firefighting", "Experience letters"]
  },
  {
    value: "marine",
    label: "Marine Electrician",
    docs: ["Passport", "Seaman book", "STCW/COC", "Yellow fever card", "BG + OGUK medical"]
  }
];

export function DocumentChecklist() {
  const [selection, setSelection] = useState(jobTypes[0].value);

  const active = useMemo(() => jobTypes.find((job) => job.value === selection), [selection]);

  return (
    <section className="rounded-4xl border border-midnight/10 bg-white p-8 shadow-glow">
      <p className="text-xs uppercase tracking-[0.4em] text-midnight/70">Document checklist</p>
      <h3 className="font-display text-3xl text-midnight">Generate job-specific document kits</h3>
      <div className="mt-4 flex flex-wrap gap-3">
        {jobTypes.map((job) => (
          <button
            key={job.value}
            className={`rounded-2xl px-4 py-2 text-sm font-semibold ${
              selection === job.value ? "bg-midnight text-white" : "bg-cloud text-midnight"
            }`}
            onClick={() => setSelection(job.value)}
          >
            {job.label}
          </button>
        ))}
      </div>
      <div className="mt-6 grid gap-3">
        {active?.docs.map((doc) => (
          <div key={doc} className="flex items-center gap-3 rounded-2xl bg-cloud/70 px-4 py-3 text-sm text-midnight">
            <span className="h-6 w-6 rounded-full bg-orbit/40 text-center text-xs font-semibold text-midnight">✓</span>
            {doc}
          </div>
        ))}
      </div>
      <button className="mt-6 rounded-full bg-midnight px-5 py-3 text-sm font-semibold text-white">
        Download checklist PDF
      </button>
    </section>
  );
}

