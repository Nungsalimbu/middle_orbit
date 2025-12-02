import {
  ClipboardDocumentCheckIcon,
  UserGroupIcon,
  DocumentTextIcon,
  GlobeAltIcon,
  AcademicCapIcon,
  CheckBadgeIcon,
  RocketLaunchIcon,
  ShieldCheckIcon
} from "@heroicons/react/24/outline";

const procedures = [
  {
    step: "01",
    title: "Demand Collection",
    description: "Receive job requirements from international employers including job descriptions, qualifications, and number of positions needed.",
    icon: ClipboardDocumentCheckIcon,
    details: ["Job analysis", "Skill requirements", "Contract terms review"]
  },
  {
    step: "02",
    title: "Candidate Sourcing",
    description: "Identify and recruit qualified candidates through our talent pool, referrals, and recruitment campaigns across Nepal.",
    icon: UserGroupIcon,
    details: ["Database screening", "Job advertisements", "Referral programs"]
  },
  {
    step: "03",
    title: "Initial Screening",
    description: "Conduct preliminary interviews, verify documents, and assess candidate qualifications against job requirements.",
    icon: DocumentTextIcon,
    details: ["Resume verification", "Initial interviews", "Skills assessment"]
  },
  {
    step: "04",
    title: "Employer Selection",
    description: "Shortlist candidates and coordinate interviews with employers through video calls or in-person meetings.",
    icon: GlobeAltIcon,
    details: ["Profile submission", "Interview scheduling", "Employer feedback"]
  },
  {
    step: "05",
    title: "Training & Orientation",
    description: "Provide pre-departure training including language, cultural orientation, and job-specific skills development.",
    icon: AcademicCapIcon,
    details: ["Language classes", "Cultural training", "Technical skills"]
  },
  {
    step: "06",
    title: "Documentation & Visa",
    description: "Process all required documents including passport, work permits, medical certificates, and visa applications.",
    icon: CheckBadgeIcon,
    details: ["Passport processing", "Medical tests", "Visa application"]
  },
  {
    step: "07",
    title: "Final Verification",
    description: "Complete police clearance, contract signing, insurance, and final document verification before deployment.",
    icon: ShieldCheckIcon,
    details: ["Police clearance", "Contract signing", "Insurance coverage"]
  },
  {
    step: "08",
    title: "Deployment",
    description: "Arrange flight tickets, conduct final briefing, and ensure safe arrival at destination with employer coordination.",
    icon: RocketLaunchIcon,
    details: ["Flight booking", "Airport assistance", "Safe arrival confirmation"]
  }
];

export function RecruitmentProcess() {
  return (
    <section className="space-y-8">
      <div className="text-center">
        <p className="text-xs uppercase tracking-[0.4em] text-midnight/70">How We Work</p>
        <h2 className="font-display text-4xl text-midnight mt-2">Our Recruitment Process</h2>
        <p className="text-slate-600 max-w-2xl mx-auto mt-3">
          A transparent, step-by-step procedure ensuring quality placements and candidate success
        </p>
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orbit via-midnight to-orbit hidden md:block" />

        <div className="space-y-6">
          {procedures.map((proc, index) => (
            <div key={proc.step} className="relative">
              <div className="flex gap-6 items-start">
                {/* Step indicator */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-orbit to-midnight shadow-lg">
                    <proc.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="absolute -bottom-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-white border-2 border-midnight text-xs font-bold text-midnight">
                    {proc.step}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-lg transition">
                  <h3 className="font-display text-2xl text-midnight mb-2">{proc.title}</h3>
                  <p className="text-slate-600 mb-4">{proc.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {proc.details.map((detail) => (
                      <span
                        key={detail}
                        className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700"
                      >
                        ✓ {detail}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-br from-midnight to-slate-800 rounded-3xl p-8 text-white text-center">
        <h3 className="font-display text-2xl mb-3">Ready to Start Your Journey?</h3>
        <p className="text-white/80 mb-6 max-w-xl mx-auto">
          Our proven process has successfully placed thousands of candidates in international positions
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="/jobs"
            className="rounded-full bg-orbit px-6 py-3 font-semibold text-midnight shadow-glow hover:bg-white transition"
          >
            View Available Jobs
          </a>
          <a
            href="/contact"
            className="rounded-full border-2 border-white px-6 py-3 font-semibold text-white hover:bg-white hover:text-midnight transition"
          >
            Contact Our Team
          </a>
        </div>
      </div>
    </section>
  );
}
