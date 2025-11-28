"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/jobs", label: "Jobs" },
  { href: "/country-demand", label: "Country Demand" },
  { href: "/candidates", label: "Candidates" },
  { href: "/employers", label: "Employers" },
  { href: "/contact", label: "Contact" }
];

export function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-white/20 bg-white/80 backdrop-blur">
      <div className="page-shell flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-3">
          <span className="h-12 w-12 rounded-2xl bg-midnight text-center text-xl font-semibold text-white leading-[3rem]">
            MO
          </span>
          <div>
            <p className="font-display text-lg text-midnight">MiddleOrbit Manpower</p>
            <p className="text-xs text-slate-500">Overseas recruitment | Nepal</p>
          </div>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={pathname === link.href ? "text-midnight" : "hover:text-midnight"}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contact" className="rounded-full bg-orbit px-4 py-2 text-sm font-semibold text-midnight shadow-glow">
            WhatsApp +977-9800000000
          </Link>
        </nav>
        <button
          className="lg:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          {open ? <XMarkIcon className="h-6 w-6 text-midnight" /> : <Bars3Icon className="h-6 w-6 text-midnight" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-white/30 bg-white/95 px-4 pb-4 pt-2 lg:hidden">
          <div className="flex flex-col gap-3 text-sm">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="py-1"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact" className="rounded-2xl bg-midnight px-4 py-2 text-center font-semibold text-white">
              WhatsApp Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

