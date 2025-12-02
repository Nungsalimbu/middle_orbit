import {
  CheckCircleIcon,
  ShieldCheckIcon,
  GlobeAltIcon,
  UsersIcon
} from "@heroicons/react/24/outline";

const features = [
  {
    icon: ShieldCheckIcon,
    title: "Government Licensed",
    description: "Fully licensed and authorized by the Government of Nepal for international recruitment services"
  },
  {
    icon: GlobeAltIcon,
    title: "Global Network",
    description: "Strong partnerships across GCC, Malaysia, Europe, and Asia-Pacific regions"
  },
  {
    icon: UsersIcon,
    title: "15+ Years Experience",
    description: "Successfully placed over 10,000 candidates in international employment"
  },
  {
    icon: CheckCircleIcon,
    title: "Complete Support",
    description: "End-to-end service from recruitment to deployment and post-arrival assistance"
  }
];

export function AboutSection() {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-midnight via-slate-800 to-midnight p-8 md:p-12">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-orbit blur-3xl" />
        <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-white blur-3xl" />
      </div>

      <div className="relative z-10 space-y-8">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.4em] text-orbit">About Us</p>
          <h2 className="font-display text-4xl text-white mt-2 mb-4">
            Leading Manpower Agency in Nepal
          </h2>
          <p className="text-lg text-white/90 leading-relaxed mb-4">
            MiddleOrbit Overseas Manpower is a government-licensed recruitment agency specializing in providing skilled and semi-skilled workers from Nepal to international employers across the globe.
          </p>
          <p className="text-white/80 leading-relaxed">
            With over 15 years of experience, we have built a reputation for excellence in overseas employment services. Our mission is to connect talented Nepali workers with quality international opportunities while ensuring transparency, compliance, and comprehensive support throughout the recruitment process.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur p-6 transition hover:bg-white/20"
            >
              <feature.icon className="h-10 w-10 text-orbit mb-3" />
              <h3 className="font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-sm text-white/70">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="grid gap-8 md:grid-cols-3 pt-6">
          <div className="text-center">
            <div className="font-display text-5xl text-orbit mb-2">10,000+</div>
            <div className="text-white/80">Candidates Placed</div>
          </div>
          <div className="text-center">
            <div className="font-display text-5xl text-orbit mb-2">50+</div>
            <div className="text-white/80">Partner Companies</div>
          </div>
          <div className="text-center">
            <div className="font-display text-5xl text-orbit mb-2">15+</div>
            <div className="text-white/80">Years Experience</div>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 pt-4">
          <a
            href="/about"
            className="rounded-full bg-orbit px-6 py-3 font-semibold text-midnight shadow-glow hover:bg-white transition"
          >
            Learn More About Us
          </a>
          <a
            href="/services"
            className="rounded-full border-2 border-white px-6 py-3 font-semibold text-white hover:bg-white hover:text-midnight transition"
          >
            Our Services
          </a>
        </div>
      </div>
    </section>
  );
}
