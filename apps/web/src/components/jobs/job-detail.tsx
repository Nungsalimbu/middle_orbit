import Link from "next/link";

import { Job } from "@/data/jobs";

export function JobDetail({ job }: { job: Job }) {
  return (
    <article className="space-y-6 rounded-4xl border border-midnight/10 bg-white p-8 shadow-glow">
      <header>
        <p className="text-xs uppercase tracking-[0.4em] text-midnight/70">{job.country}</p>
        <h1 className="mt-2 font-display text-4xl text-midnight">{job.title}</h1>
        <p className="text-sm text-slate-600">{job.location}</p>
      </header>
      <p className="text-base text-slate-700">{job.description}</p>
      <div className="grid gap-4 rounded-3xl bg-cloud/60 p-5 text-sm text-midnight md:grid-cols-3">
        <div>
          <p className="text-xs uppercase tracking-wide text-slate-500">Salary</p>
          <p className="font-semibold">{job.salary}</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-wide text-slate-500">Sector</p>
          <p className="font-semibold">{job.sector}</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-wide text-slate-500">Openings</p>
          <p className="font-semibold">{job.openings}</p>
        </div>
      </div>
      <section>
        <p className="text-xs uppercase tracking-[0.4em] text-midnight/70">Requirements</p>
        <ul className="mt-3 space-y-2 text-sm text-slate-700">
          {job.requirements.map((requirement) => (
            <li key={requirement} className="flex gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-orbit" />
              {requirement}
            </li>
          ))}
        </ul>
      </section>
      <section>
        <p className="text-xs uppercase tracking-[0.4em] text-midnight/70">Benefits</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {job.benefits.map((benefit) => (
            <span key={benefit} className="rounded-full bg-midnight/10 px-3 py-1 text-xs font-semibold text-midnight">
              {benefit}
            </span>
          ))}
        </div>
      </section>
      <section className="space-y-3 rounded-3xl bg-midnight p-6 text-white">
        <p className="text-xs uppercase tracking-[0.4em] text-white/70">Apply now</p>
        <p className="text-lg font-semibold">Complete the secure form and we will call within 24 hours.</p>
        <div className="flex flex-wrap gap-3">
          <Link
            href={`/apply?job=${encodeURIComponent(job.title)}&country=${encodeURIComponent(job.country)}&sector=${encodeURIComponent(job.sector)}`}
            className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-midnight"
          >
            Fill online form
          </Link>
          <a
            href="https://wa.me/9779800000000"
            className="rounded-full border border-white px-4 py-2 text-sm font-semibold text-white"
          >
            WhatsApp instant inquiry
          </a>
        </div>
      </section>
    </article>
  );
}

