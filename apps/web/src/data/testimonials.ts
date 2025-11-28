export type Testimonial = {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  mediaUrl?: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "testi-1",
    name: "Ravi Shah",
    role: "Head of Projects",
    company: "SunGrid Renewables",
    quote:
      "MiddleOrbit deployed 220 solar technicians in 28 days. The live dashboard kept HQ synced across every medical, visa, and flight step.",
    mediaUrl: "https://videos.pexels.com/video-files/857195/857195-hd_1280_720_25fps.mp4"
  },
  {
    id: "testi-2",
    name: "Fatima Al Nuaimi",
    role: "Talent Director",
    company: "GulfAir Catering",
    quote:
      "Their document checklist generator eliminated back-and-forth. Stewards arrived trained, vaccinated, and ready for five-star service."
  },
  {
    id: "testi-3",
    name: "Prakash Lama",
    role: "Welder",
    company: "Candidate",
    quote:
      "The cost calculator told me exactly what to budget. I applied online, tracked my medical, and received instant WhatsApp support."
  }
];

