import Image from "next/image";

import { gallery } from "@/data/gallery";

export function GalleryGrid() {
  return (
    <section className="rounded-4xl border border-midnight/10 bg-white p-8 shadow-glow">
      <p className="text-xs uppercase tracking-[0.4em] text-midnight/70">Deployments</p>
      <h3 className="font-display text-3xl text-midnight">Projects & training halls</h3>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {gallery.map((item) => (
          <figure key={item.id} className="overflow-hidden rounded-3xl border border-cloud">
            <div className="relative h-56 w-full">
              <Image src={item.image} alt={item.title} fill className="object-cover" />
            </div>
            <figcaption className="p-4">
              <p className="text-sm font-semibold text-midnight">{item.title}</p>
              <p className="text-xs uppercase tracking-wide text-slate-500">{item.location}</p>
              <p className="mt-2 text-sm text-slate-600">{item.description}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

