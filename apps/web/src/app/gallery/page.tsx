import { GalleryGrid } from "@/components/gallery-grid";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Gallery & Deployments | MiddleOrbit Overseas",
  description: "Photos from training halls, medical partners, and overseas deployments managed by MiddleOrbit.",
  slug: "/gallery",
  keywords: ["manpower gallery", "overseas deployment photos"]
});

export default function GalleryPage() {
  return (
    <div className="page-shell space-y-6 py-10">
      <header className="space-y-3">
        <p className="text-xs uppercase tracking-[0.4em] text-midnight/70">Gallery</p>
        <h1 className="font-display text-4xl text-midnight">Projects & deployments</h1>
        <p className="text-lg text-slate-600">
          A glimpse of our candidates, employer worksites, and pre-departure trainings conducted in Nepal.
        </p>
      </header>
      <GalleryGrid />
    </div>
  );
}

