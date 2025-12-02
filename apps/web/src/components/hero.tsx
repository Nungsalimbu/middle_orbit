import Link from "next/link";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-midnight text-white">
      {/* Background Image with Dark Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80')"
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-midnight/90 via-midnight/85 to-slate-900/90" />
      
      {/* Content */}
      <div className="page-shell relative z-10 py-20 md:py-32">
        <div className="max-w-4xl">
          {/* Decorative Border Box */}
          <div className="border-4 border-white/30 rounded-lg p-8 md:p-12 backdrop-blur-sm bg-white/5">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
              About MiddleOrbit Manpower
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-8">
              Gulf, Malaysia and Europe Expert manpower agency. We Can Provide You Best Employee From Nepal.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/jobs" 
                className="rounded-full bg-orbit px-8 py-3 text-sm font-semibold text-midnight shadow-glow hover:bg-white transition"
              >
                Browse Jobs
              </Link>
              <Link
                href="/contact"
                className="rounded-full border-2 border-white px-8 py-3 text-sm font-semibold text-white hover:bg-white hover:text-midnight transition"
              >
                Contact Us
              </Link>
            </div>
          </div>
          
          {/* Stats */}
          <div className="grid gap-6 md:grid-cols-3 mt-8">
            {[
              ["10,000+", "Candidates deployed"],
              ["50+", "Partner Companies"],
              ["15+", "Years Experience"]
            ].map(([stat, label]) => (
              <div key={stat} className="rounded-2xl bg-white/10 backdrop-blur p-4 text-center border border-white/20">
                <p className="text-3xl md:text-4xl font-bold text-orbit">{stat}</p>
                <p className="text-sm text-white/80 mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

