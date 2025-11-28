const timeline = [
  { label: "AI shortlist", detail: "Explainable scoring + compliance gates" },
  { label: "Video resume", detail: "Story builder recordings auto-shared" },
  { label: "Interview simulator", detail: "Readiness stats + prompts" },
  { label: "Offer automation", detail: "Contracts + e-sign via S3 + AWS KMS" },
  { label: "Onboarding", detail: "Audit-ready timeline for both parties" }
];

export function PlacementTransparencyTimeline() {
  return (
    <div className="rounded-3xl border border-midnight/10 bg-white p-6 shadow-glow">
      <p className="text-xs uppercase tracking-[0.4em] text-midnight/60">Transparency</p>
      <h3 className="font-display text-2xl text-midnight">Placement Timeline</h3>
      <ol className="mt-6 space-y-5 border-l-2 border-dashed border-orbit/60 pl-6">
        {timeline.map((item) => (
          <li key={item.label} className="relative text-sm text-slate-600">
            <span className="absolute -left-10 mt-1 h-6 w-6 rounded-full bg-orbit/30 text-center text-xs font-semibold text-midnight">
              •
            </span>
            <p className="font-semibold text-midnight">{item.label}</p>
            <p>{item.detail}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}

