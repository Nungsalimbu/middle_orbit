const cards = [
  { label: "Time-to-fill", value: "9.3 days", trend: "+63% faster" },
  { label: "Cost-per-hire", value: "$1.3K", trend: "-41% vs agency avg" },
  { label: "Retention @ 12mo", value: "89%", trend: "+11 pts" }
];

export function RoiDashboard() {
  return (
    <div className="rounded-3xl border border-midnight/10 bg-white p-6 shadow-glow">
      <p className="text-xs uppercase tracking-[0.4em] text-midnight/60">ROI Dashboard</p>
      <h3 className="font-display text-2xl text-midnight">Live hiring economics</h3>
      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        {cards.map((card) => (
          <div key={card.label} className="rounded-2xl bg-cloud/60 p-4">
            <p className="text-xs text-slate-500">{card.label}</p>
            <p className="mt-2 text-2xl font-semibold text-midnight">{card.value}</p>
            <p className="text-xs text-emerald-600">{card.trend}</p>
          </div>
        ))}
      </div>
      <p className="mt-4 text-sm text-slate-600">
        Export ROI packs for procurement, share read-only dashboards with auditors, and benchmark
        against industry cohorts.
      </p>
    </div>
  );
}

