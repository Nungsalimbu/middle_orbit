 "use client";

import { motion } from "framer-motion";
import Link from "next/link";

export type CTA = {
  label: string;
  href: string;
  variant?: "primary" | "ghost";
};

export type SectionDefinition = {
  id: string;
  eyebrow?: string;
  title: string;
  description: string;
  bullets: string[];
  uxFlow?: string[];
  components?: string[];
  ctas?: CTA[];
};

export function SectionStack({ sections }: { sections: SectionDefinition[] }) {
  return (
    <div className="mt-12 space-y-10">
      {sections.map((section) => (
        <motion.section
          key={section.id}
          className="card-surface p-8 shadow-glow"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="space-y-4">
            {section.eyebrow && (
              <p className="text-xs uppercase tracking-[0.4em] text-midnight/80">
                {section.eyebrow}
              </p>
            )}
            <h3 className="font-display text-2xl text-midnight">{section.title}</h3>
            <p className="text-base text-slate-600">{section.description}</p>
            <ul className="grid gap-2">
              {section.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3 text-sm text-slate-700">
                  <span className="mt-1 h-2 w-2 rounded-full bg-orbit" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
            {section.uxFlow && (
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                  UX Flow
                </p>
                <div className="mt-3 flex flex-wrap items-center gap-2">
                  {section.uxFlow.map((step) => (
                    <span
                      key={step}
                      className="rounded-full border border-midnight/10 bg-white/80 px-4 py-1 text-xs font-semibold"
                    >
                      {step}
                    </span>
                  ))}
                </div>
              </div>
            )}
            {section.components && (
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                  Components
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {section.components.map((component) => (
                    <span
                      key={component}
                      className="rounded-2xl bg-cloud px-3 py-1 text-xs font-medium text-midnight/80"
                    >
                      {component}
                    </span>
                  ))}
                </div>
              </div>
            )}
            {section.ctas && (
              <div className="flex flex-wrap gap-3">
                {section.ctas.map((cta) => (
                  <Link
                    key={cta.label}
                    href={cta.href}
                    className={
                      cta.variant === "ghost"
                        ? "rounded-full border border-midnight px-4 py-2 text-sm font-semibold text-midnight"
                        : "rounded-full bg-midnight px-4 py-2 text-sm font-semibold text-white shadow-glow"
                    }
                  >
                    {cta.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </motion.section>
      ))}
    </div>
  );
}

