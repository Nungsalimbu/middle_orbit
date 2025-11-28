import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "HTML Sitemap | MiddleOrbit Manpower Platform",
  description: "Browse every SEO landing page, dashboard, and resource.",
  slug: "/sitemap",
  keywords: ["sitemap", "middleorbit pages"]
});

const pages = [
  { title: "Home", href: "/" },
  { title: "Employers", href: "/employers" },
  { title: "Candidates", href: "/candidates" },
  { title: "Talent Marketplace", href: "/talent-marketplace" },
  { title: "Dashboards – Employer", href: "/dashboards/employer" },
  { title: "Dashboards – Candidate", href: "/dashboards/candidate" },
  { title: "Admin Panel", href: "/admin" },
  { title: "About", href: "/about" },
  { title: "Case Studies", href: "/case-studies" },
  { title: "Blog", href: "/blog" },
  { title: "Contact", href: "/contact" },
  { title: "FAQ", href: "/faq" },
  { title: "Legal", href: "/legal" }
];

export default function HtmlSitemapPage() {
  return (
    <section className="page-shell space-y-6">
      <p className="text-xs uppercase tracking-[0.4em] text-midnight/70">Sitemap</p>
      <h1 className="font-display text-4xl text-midnight">MiddleOrbit Sitemap</h1>
      <p className="text-slate-600">
        All SSR landing pages, dashboards, and resources for manpower clients and talent.
      </p>
      <div className="grid gap-3 rounded-3xl border border-midnight/10 bg-white p-6 shadow-glow sm:grid-cols-2 lg:grid-cols-3">
        {pages.map((page) => (
          <Link key={page.href} href={page.href} className="text-sm font-semibold text-midnight hover:text-orbit">
            {page.title}
          </Link>
        ))}
      </div>
    </section>
  );
}

