"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from "@heroicons/react/24/outline";

type NavLink = {
  href?: string;
  label: string;
  dropdown?: boolean;
  items?: { href: string; label: string }[];
};

const links: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { 
    label: "Procedure", 
    dropdown: true,
    items: [
      { href: "/procedure/required-documents", label: "Required Documents" },
      { href: "/procedure/deployment", label: "Deployment Procedure" },
      { href: "/procedure/visa-processing", label: "Visa Processing" },
      { href: "/procedure/saudi-visa", label: "Saudi Visa Process" },
      { href: "/procedure/malaysia-visa", label: "Malaysia Visa Process" },
      { href: "/procedure/visa-steps", label: "Visa Processing Steps" },
      { href: "/procedure/employer-responsibility", label: "Employers Responsibility" }
    ]
  },
  { href: "/jobs", label: "Jobs" },
  { href: "/gallery", label: "Gallery" },
  { href: "/candidates", label: "Candidates" },
  { href: "/contact", label: "Contact" }
];

export function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [procedureOpen, setProcedureOpen] = useState(false);

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
        
        {/* Certification Badges */}
        <div className="hidden lg:flex items-center gap-3">
          <div className="flex flex-col items-center justify-center rounded-xl border-2 border-green-600 bg-white p-2">
            <div className="text-xs font-bold text-green-700">ISO 9001:2015</div>
            <div className="text-[9px] text-slate-600">Certified Agency</div>
          </div>
          <div className="flex flex-col items-center justify-center rounded-xl border-2 border-blue-600 bg-white p-2">
            <div className="text-xs font-bold text-blue-700">Gov. Licensed</div>
            <div className="text-[9px] text-slate-600">Nepal</div>
          </div>
        </div>
        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 lg:flex">
          {links.map((link, index) => (
            link.dropdown ? (
              <div 
                key={index}
                className="relative"
                onMouseEnter={() => setProcedureOpen(true)}
                onMouseLeave={() => setProcedureOpen(false)}
              >
                <button className="flex items-center gap-1 hover:text-midnight">
                  {link.label}
                  <ChevronDownIcon className="h-3 w-3" />
                </button>
                {procedureOpen && (
                  <div className="absolute top-full left-0 mt-2 w-56 rounded-2xl border border-slate-200 bg-white shadow-xl py-2 z-50">
                    {link.items?.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-midnight"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href || "/"}
                className={pathname === link.href ? "text-midnight" : "hover:text-midnight"}
              >
                {link.label}
              </Link>
            )
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
            {links.map((link, index) => (
              link.dropdown ? (
                <div key={index}>
                  <p className="py-1 font-semibold text-midnight">{link.label}</p>
                  <div className="pl-4 flex flex-col gap-2">
                    {link.items?.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="py-1 text-slate-600"
                        onClick={() => setOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href || "/"}
                  className="py-1"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              )
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

