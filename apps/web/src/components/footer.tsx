import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-midnight text-cloud">
      <div className="page-shell grid gap-8 lg:grid-cols-3">
        <div>
          <p className="font-display text-2xl text-white">MiddleOrbit</p>
          <p className="mt-3 text-sm text-white/70">
            Govt. of Nepal licensed manpower (#1002/074/075). Deploying trusted teams to 32 countries with medical,
            insurance, and live transparency dashboards.
          </p>
        </div>
        <div className="text-sm">
          <p className="font-semibold text-white">Navigation</p>
          <div className="mt-3 grid gap-2 text-white/70">
            <Link href="/services">Services</Link>
            <Link href="/jobs">Jobs</Link>
            <Link href="/country-demand">Country demand</Link>
            <Link href="/document-checklist">Document checklist</Link>
            <Link href="/cost-calculator">Cost calculator</Link>
          </div>
        </div>
        <div className="text-sm">
          <p className="font-semibold text-white">Contact</p>
          <p className="mt-3 text-white/70">
            Putalisadak, Kathmandu, Nepal <br />
            +977 980-000-0000 <br />
            hello@middleorbit.com
          </p>
          <p className="mt-4 text-xs text-white/60">© {new Date().getFullYear()} MiddleOrbit Overseas. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

