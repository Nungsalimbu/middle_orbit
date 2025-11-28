import Link from "next/link";

import { jobs } from "@/data/jobs";

export function JobList() {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      {jobs.map((job) => (
        <article key={job.id} className="rounded-3xl border border-cloud bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500">{job.country}</p>
              <h3 className="font-display text-2xl text-midnight">{job.title}</h3>
            </div>
            <span className="rounded-full bg-orbit/30 px-3 py-1 text-xs font-semibold text-midnight">
              {job.openings} openings
            </span>
          </div>
          <p className="mt-3 text-sm text-slate-600">{job.description}</p>
          <dl className="mt-4 grid gap-2 text-sm text-midnight">
            <div className="flex justify-between">
              <dt>Location</dt>
              <dd>{job.location}</dd>
            </div>
            <div className="flex justify-between">
              <dt>Sector</dt>
              <dd>{job.sector}</dd>
            </div>
            <div className="flex justify-between">
              <dt>Salary</dt>
              <dd>{job.salary}</dd>
            </div>
          </dl>
          <div className="mt-4 flex gap-3">
            <Link href={`/jobs/${job.slug}`} className="rounded-full bg-midnight px-4 py-2 text-sm font-semibold text-white">
              View details
            </Link>
            <button className="rounded-full border border-midnight px-4 py-2 text-sm font-semibold text-midnight">
              Quick apply
            </button>
          </div>
        </article>
      ))}
    </div>
  );
}

