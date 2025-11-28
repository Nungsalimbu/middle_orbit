export type GalleryItem = {
  id: string;
  title: string;
  location: string;
  image: string;
  description: string;
};

export const gallery: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Solar Farm Crew Deployment",
    location: "Al Ain, UAE",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=80",
    description: "Batch of 120 technicians trained in safety and robotics welding."
  },
  {
    id: "gal-2",
    title: "Hospitality Training Lab",
    location: "Kathmandu, Nepal",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
    description: "Pre-departure etiquette and language bootcamp."
  },
  {
    id: "gal-3",
    title: "Marine Crew Briefing",
    location: "Doha, Qatar",
    image: "https://images.unsplash.com/photo-1454165205744-3b78555e5572?auto=format&fit=crop&w=1200&q=80",
    description: "Offshore electricians receiving safety kits."
  }
];

