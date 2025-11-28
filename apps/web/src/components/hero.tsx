import Link from "next/link";

export function Hero() {
  return (
    <section className="page-shell relative isolate overflow-hidden rounded-4xl bg-gradient-to-br from-midnight via-[#142c5a] to-charcoal py-16 text-white shadow-glow">
      <div className="relative z-10 grid gap-10 lg:grid-cols-[3fr,2fr]">
        <div className="space-y-6">
          <p className="text-xs uppercase tracking-[0.5em] text-white/70">Nepal Overseas Manpower</p>
          <h1 className="font-display text-4xl leading-tight">
            Deploy trusted Nepalese manpower to GCC, Europe, and APAC with real transparency.
          </h1>
          <p className="text-lg text-white/80">
            MiddleOrbit combines recruiter expertise, embassy-compliant paperwork, medical partners, and live dashboards
            so employers and candidates always know the status of visas, flights, and onboarding.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/jobs" className="rounded-full bg-orbit px-6 py-3 text-sm font-semibold text-midnight shadow-glow">
              Browse jobs
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-white/50 px-6 py-3 text-sm font-semibold text-white"
            >
              Hire manpower
            </Link>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              ["12,840", "Candidates deployed"],
              ["32", "Countries served"],
              ["94%", "Retention at 12 months"]
            ].map(([stat, label]) => (
              <div key={stat} className="rounded-3xl bg-white/10 p-3 text-sm text-white/80">
                <p className="text-3xl font-semibold text-white">{stat}</p>
                <p>{label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-3xl bg-white/10 p-6 text-sm backdrop-blur">
          <p className="text-xs uppercase tracking-[0.4em] text-white/70">
            Placement Transparency Timeline
          </p>
          <ol className="mt-4 space-y-4">
            {["AI shortlist", "Video resume review", "Interview simulator", "Contract drafted", "Onboarding"].map(
              (item, index) => (
                <li key={item} className="flex items-start gap-4">
                  <span className="mt-1 h-8 w-8 rounded-full bg-white/20 text-center text-sm leading-8 text-white">
                    {index + 1}
                  </span>
                  <div>
                    <p className="font-semibold">{item}</p>
                    <p className="text-white/70">Auto-tracked milestone with employer + candidate view.</p>
                  </div>
                </li>
              )
            )}
          </ol>
        </div>
      </div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80')] opacity-[0.12] mix-blend-screen" />
    </section>
  );
}

