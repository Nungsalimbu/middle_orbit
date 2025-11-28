import { JobList } from "@/components/jobs/job-list";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Jobs | MiddleOrbit Overseas Manpower",
  description: "Browse current overseas manpower jobs from Nepal with verified salaries and transparent processes.",
  slug: "/jobs",
  keywords: ["nepal overseas jobs", "middleorbit jobs", "apply gulf job"]
});

export default function JobsPage() {
  return (
    <div className="page-shell space-y-6 py-10">
      <header className="space-y-3">
        <p className="text-xs uppercase tracking-[0.4em] text-midnight/70">Jobs</p>
        <h1 className="font-display text-4xl text-midnight">Apply online & track every milestone</h1>
        <p className="text-lg text-slate-600">
          All jobs listed below include transparent costs, document checklists, and WhatsApp updates.
        </p>
      </header>
      <JobList />
    </div>
  );
}

