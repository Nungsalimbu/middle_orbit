import { services } from "@/data/services";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Services | MiddleOrbit Overseas Manpower",
  description:
    "Manpower supply, recruitment, documentation support, training, and overseas hiring from Nepal with GCC & APAC coverage.",
  slug: "/services",
  keywords: ["manpower services Nepal", "overseas hiring services", "documentation support manpower"]
});

export default function ServicesPage() {
  return (
    <div className="page-shell space-y-8 py-10">
      <header className="space-y-3">
        <p className="text-xs uppercase tracking-[0.4em] text-midnight/70">Services</p>
        <h1 className="font-display text-4xl text-midnight">Everything required to deploy manpower</h1>
        <p className="text-lg text-slate-600">
          MiddleOrbit is licensed by the Government of Nepal to deliver manpower supply, recruitment, documentation, and
          training. Each service is transparent, SLA-driven, and backed by live dashboards.
        </p>
      </header>
      <div className="grid gap-6 lg:grid-cols-2">
        {services.map((service) => (
          <article key={service.slug} className="rounded-4xl border border-midnight/10 bg-white p-6 shadow-glow">
            <p className="text-xs uppercase tracking-[0.4em] text-midnight/70">{service.title}</p>
            <h2 className="mt-2 font-display text-2xl text-midnight">{service.summary}</h2>
            <p className="mt-3 text-sm text-slate-600">Industries: {service.industries.join(", ")}</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              {service.deliverables.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-orbit" />
                  {item}
                </li>
              ))}
            </ul>
            <button className="mt-5 rounded-full bg-midnight px-4 py-2 text-sm font-semibold text-white">
              {service.cta ?? "Discuss service"}
            </button>
          </article>
        ))}
      </div>
    </div>
  );
}

