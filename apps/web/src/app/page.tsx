import { CountryDemandGrid } from "@/components/country-demand-grid";
import { CostCalculator } from "@/components/cost-calculator";
import { DocumentChecklist } from "@/components/document-checklist";
import { GalleryGrid } from "@/components/gallery-grid";
import { LiveStatusDashboard } from "@/components/live-status-dashboard";
import { Hero } from "@/components/hero";
import { InquiryForm } from "@/components/forms/inquiry-form";
import { JobList } from "@/components/jobs/job-list";
import { Testimonials } from "@/components/testimonials";
import { AboutSection } from "@/components/about-section";
import { RecruitmentProcess } from "@/components/recruitment-process";
import { TeamSection } from "@/components/team-section";
import { RecruiterContact } from "@/components/recruiter-contact";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "MiddleOrbit Overseas Manpower | Hire & Deploy From Nepal",
  description:
    "Government-licensed Nepal manpower agency supplying skilled teams to GCC, Europe, and APAC with live hiring dashboards, document generators, and secure online applications.",
  slug: "/"
});

export default function HomePage() {
  return (
    <div className="space-y-12 pb-16">
      <Hero />
      <div className="page-shell space-y-12">
        <AboutSection />
        <LiveStatusDashboard />
        <section className="space-y-4">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-midnight/70">Featured jobs</p>
              <h2 className="font-display text-3xl text-midnight">Apply online, track every milestone</h2>
            </div>
            <a href="/jobs" className="text-sm font-semibold text-midnight underline">
              View all jobs
            </a>
          </div>
          <JobList />
        </section>
        <RecruitmentProcess />
        <RecruiterContact />
        <TeamSection />
        <CountryDemandGrid />
        <div className="grid gap-6 lg:grid-cols-2">
          <DocumentChecklist />
          <CostCalculator />
        </div>
        <Testimonials />
        <GalleryGrid />
        <InquiryForm title="Share your manpower requirement" />
      </div>
    </div>
  );
}

