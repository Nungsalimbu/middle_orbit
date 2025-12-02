export interface TeamMember {
  id: string;
  name: string;
  position: string;
  department: string;
  bio: string;
  email: string;
  phone: string;
  image: string;
  specialization: string[];
}

export const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Rajesh Kumar Sharma",
    position: "Managing Director",
    department: "Executive Leadership",
    bio: "With over 15 years of experience in international manpower recruitment, Rajesh leads our strategic vision and overseas partnerships across GCC, Malaysia, and Europe.",
    email: "rajesh@middleorbit.com",
    phone: "+977-9800000001",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    specialization: ["GCC Markets", "Strategic Planning", "Government Relations"]
  },
  {
    id: "2",
    name: "Sunita Thapa",
    position: "Operations Director",
    department: "Operations",
    bio: "Sunita oversees end-to-end recruitment operations, ensuring compliance with international labor laws and smooth deployment of candidates worldwide.",
    email: "sunita@middleorbit.com",
    phone: "+977-9800000002",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    specialization: ["Operations Management", "Compliance", "Quality Control"]
  },
  {
    id: "3",
    name: "Bikash Rai",
    position: "Recruitment Manager - GCC",
    department: "Recruitment",
    bio: "Bikash specializes in Gulf region placements with extensive connections across UAE, Saudi Arabia, Qatar, and Kuwait for construction and hospitality sectors.",
    email: "bikash@middleorbit.com",
    phone: "+977-9800000003",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    specialization: ["Gulf Markets", "Construction", "Hospitality"]
  },
  {
    id: "4",
    name: "Anita Gurung",
    position: "Recruitment Manager - Europe",
    department: "Recruitment",
    bio: "Anita manages European placements focusing on healthcare, care work, and skilled trades across Poland, Romania, and Portugal.",
    email: "anita@middleorbit.com",
    phone: "+977-9800000004",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    specialization: ["European Markets", "Healthcare", "Care Work"]
  },
  {
    id: "5",
    name: "Prakash Shrestha",
    position: "Documentation & Visa Manager",
    department: "Documentation",
    bio: "Prakash handles all visa processing, work permits, medical clearances, and ensures all documentation meets embassy requirements.",
    email: "prakash@middleorbit.com",
    phone: "+977-9800000005",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    specialization: ["Visa Processing", "Documentation", "Embassy Relations"]
  },
  {
    id: "6",
    name: "Kopila Adhikari",
    position: "Training & Development Manager",
    department: "Training",
    bio: "Kopila oversees pre-departure orientation, skill development programs, and language training to prepare candidates for international employment.",
    email: "kopila@middleorbit.com",
    phone: "+977-9800000006",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop",
    specialization: ["Training Programs", "Language Training", "Cultural Orientation"]
  }
];
