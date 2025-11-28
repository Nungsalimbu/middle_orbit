import { notFound } from "next/navigation";

import { JobDetail } from "@/components/jobs/job-detail";
import { jobs, getJobBySlug } from "@/data/jobs";
import { buildMetadata } from "@/lib/metadata";

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  return jobs.map((job) => ({ slug: job.slug }));
}

export async function generateMetadata({ params }: Props) {
  const job = getJobBySlug(params.slug);
  if (!job) return buildMetadata({ title: "Job not found", description: "", slug: `/jobs/${params.slug}` });

  return buildMetadata({
    title: `${job.title} | ${job.country} | MiddleOrbit Jobs`,
    description: job.description,
    slug: `/jobs/${job.slug}`,
    keywords: [job.title, job.country, "MiddleOrbit job"]
  });
}

export default function JobDetailPage({ params }: Props) {
  const job = getJobBySlug(params.slug);
  if (!job) return notFound();

  return (
    <div className="page-shell py-10">
      <JobDetail job={job} />
    </div>
  );
}

