"use client";

import { testimonials } from "@/data/testimonials";
import { useState } from "react";

export function Testimonials() {
  const [active, setActive] = useState(0);
  const testimonial = testimonials[active];

  return (
    <section className="rounded-4xl border border-midnight/10 bg-white p-8 shadow-glow">
      <p className="text-xs uppercase tracking-[0.4em] text-midnight/70">Success stories</p>
      <h3 className="font-display text-3xl text-midnight">Employers & candidates speak</h3>
      <div className="mt-6 grid gap-6 lg:grid-cols-[2fr,1fr]">
        <div className="rounded-3xl bg-cloud/70 p-6">
          <p className="text-lg text-slate-800">“{testimonial.quote}”</p>
          <p className="mt-4 text-sm font-semibold text-midnight">
            {testimonial.name} · {testimonial.role} {testimonial.company && `| ${testimonial.company}`}
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          {testimonials.map((item, index) => (
            <button
              key={item.id}
              className={`flex-1 rounded-2xl border px-3 py-2 text-left text-xs ${
                index === active ? "border-midnight bg-midnight text-white" : "border-cloud text-midnight"
              }`}
              onClick={() => setActive(index)}
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

