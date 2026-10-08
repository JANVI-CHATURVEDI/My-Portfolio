export interface Project {
  id: number;
  name: string;
  description: string;
  longDescription?: string;
  status: "completed" | "in-progress" | "featured";
  tags: string[];
  image?: string;
  link?: string;
  github?: string;
  features?: string[];
  year?: string;
  role?: string;
}

export interface SkillCategory {
  title: string;
  skills: { name: string; level: number; icon?: string }[];
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  current?: boolean;
  points: string[];
  tech?: string[];
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  current?: boolean;
}

export interface Quote {
  text: string;
  source: string;
  lang?: string;
}

export interface SocialLink {
  label: string;
  url: string;
  icon?: string;
}

export const portfolio = {
  name: "Janvi Chaturvedi",
  title: "Full-Stack Software Architect",
  tagline: "Crafting digital products & high-performance web architecture.",
  bio: "Passionate full-stack developer specializing in Python/Django, React, and modern web technologies. I bridge ambitious ideas with scalable, user-centric digital products.",
  location: "Kanpur, India",
  status: "Available for new opportunities",
  email: "janvichaturvedi82@gmail.com",
  resume: "https://drive.google.com/file/d/1HyZ1PbW3TBUVSlSIu6PLxsqDcvfjVzdm/view",
};

export const projects: Project[] = [
  {
    id: 6,
    name: "SwachDrishti",
    description: "See the waste. Spark the action.",
    longDescription: "Full-stack civic-tech platform: citizens report garbage with GPS + photo, AI triages and scores it, supervisors dispatch workers from a live map, workers resolve with photo proof, citizens verify, and admins steer the city with insights and forecasts.",
    status: "completed",
    tags: ["Django", "React", "Tailwind CSS", "PostgreSQL", "Leaflet.js"],
    link: "https://swachdrishti.vercel.app",
    github: "https://github.com/JANVI-CHATURVEDI/SwachDrishti",
    features: ["GPS map-pin reports with AI triage", "Live dispatch queue + route optimizer", "Before/after AI cleanup audit", "Ward Cleanliness Index & forecasts", "Public transparency ledger + quiz"],
    year: "2026",
    role: "Solo Developer",
  },
  {
    id: 7,
    name: "CivicConnect AI",
    description: "Report civic issues. Get them fixed.",
    longDescription: "Civic reporting platform with transparent AI triage. Citizens file issues with photo + Hindi/Hinglish/English + voice, Gemini vision scores priority 0-100 with reasons, and staff resolve through a full lifecycle with SLA tracking, duplicates detection, and audit trail.",
    status: "in-progress",
    tags: ["Django", "Python", "PostgreSQL", "Docker", "Gemini AI"],
    github: "https://github.com/JANVI-CHATURVEDI/CivicConnect",
    features: ["Photo + multilingual + voice reports", "Gemini vision triage with fallback", "SLA tracking & escalation", "Duplicate detection + audit trail", "Dockerized deploy with health checks"],
    year: "2026",
    role: "Solo Developer",
  },
  {
    id: 1,
    name: "TWEET",
    description: "Speak Freely. Stay Anonymous.",
    longDescription: "A full-stack microblogging platform built with Django and PostgreSQL. Supports posts, likes, follows, authentication, media uploads, and optimized database filtering for performance at scale.",
    status: "completed",
    tags: ["Django", "Python", "Tailwind CSS", "PostgreSQL"],
    github: "https://github.com/JANVI-CHATURVEDI/TWEET",
    features: ["User authentication & profiles", "Posts with media uploads", "Follow / unfollow system", "Likes & engagement", "Optimized DB queries", "Responsive UI"],
    year: "2025",
    role: "Solo Developer",
  },
  {
    id: 2,
    name: "Dev LinkTree",
    description: "Drag-and-drop link builder with instant preview.",
    longDescription: "A link-in-bio builder with a drag-and-drop interface, live preview, and instant saving via localStorage. Backend integration in progress for cloud persistence.",
    status: "in-progress",
    tags: ["React", "Tailwind CSS", "Vanilla JS"],
    link: "https://dev-link-tree.vercel.app/",
    github: "https://github.com/JANVI-CHATURVEDI/DevLinkTree",
    features: ["Drag-and-drop editor", "Live preview", "localStorage persistence", "Mobile-first responsive", "Theme customization"],
    year: "2025",
    role: "Solo Developer",
  },
  {
    id: 3,
    name: "One-Time Secret",
    description: "Send Secrets That Only Live Once.",
    longDescription: "A secure messaging app where each message can be read only once. Includes safe media storage, automatic expiry logic, and Appwrite backend integration for robust security.",
    status: "completed",
    tags: ["React", "Appwrite", "Tailwind CSS"],
    link: "https://one-time-msg.vercel.app/",
    github: "https://github.com/JANVI-CHATURVEDI/one-time-msg",
    features: ["Read-once message security", "Auto-expiring secrets", "Secure media uploads", "Appwrite backend", "Clean minimal UI"],
    year: "2025",
    role: "Solo Developer",
  },
  {
    id: 4,
    name: "Coffee Shop",
    description: "Modern responsive landing page.",
    longDescription: "A modern, responsive landing page for a coffee shop with clean typography, mobile-first optimization, and smooth scroll-based user experience.",
    status: "completed",
    tags: ["HTML", "Tailwind CSS"],
    link: "https://cofeeshop-kappa.vercel.app/",
    github: "https://github.com/JANVI-CHATURVEDI/Cofeeshop",
    features: ["Mobile-first layout", "Smooth scroll animations", "Menu showcase", "Contact section", "Fast load times"],
    year: "2024",
    role: "Designer & Developer",
  },
  {
    id: 5,
    name: "Travel Explorer",
    description: "Interactive map-based travel explorer.",
    longDescription: "An interactive map-based travel destination explorer with rich filters, responsive design, detailed destination cards, and optimized performance using React and Leaflet.js.",
    status: "in-progress",
    tags: ["React", "Tailwind CSS", "Leaflet.js"],
    link: "https://travel-destination-explorer-neon.vercel.app/",
    github: "https://github.com/JANVI-CHATURVEDI/Travel-Destination-Explorer",
    features: ["Interactive Leaflet maps", "Destination filtering", "Rich detail cards", "Responsive grid", "Optimized performance"],
    year: "2025",
    role: "Solo Developer",
  },
];

export const skillMatrix: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      { name: "React", level: 85 },
      { name: "JavaScript", level: 80 },
      { name: "HTML5 / CSS3", level: 95 },
      { name: "Tailwind CSS", level: 80 },
    ],
  },
  {
    title: "Backend & Cloud",
    skills: [
      { name: "Python", level: 90 },
      { name: "Django", level: 85 },
      { name: "PostgreSQL", level: 75 },
      { name: "SQLite", level: 80 },
      { name: "Firebase", level: 80 },
    ],
  },
  {
    title: "Design & Tools",
    skills: [
      { name: "Figma", level: 70 },
      { name: "Git / GitHub", level: 85 },
      { name: "Leaflet.js", level: 70 },
      { name: "Bootstrap", level: 85 },
    ],
  },
];

export const experience: Experience[] = [
  {
    title: "Software Developer Intern",
    company: "Ayursh",
    period: "Mar 2026 — Present",
    current: true,
    points: [
      "Engineered production REST APIs and integrated Razorpay payments and Delhivery logistics into real application workflows.",
      "Contributed to 2+ applications and 3 backend services, building features from scratch, implementing dynamic filtering, and resolving production issues.",
      "Developed and maintained Python/Django backend systems, debugging across application layers and shipping production-ready features through Git workflows.",
    ],
    tech: ["Python", "Django", "REST APIs", "Razorpay", "Delhivery", "Git"],
  },
  {
    title: "Open Source Contributor",
    company: "Zulip · CircuitVerse · wger · bugOpsX",
    period: "2025 — Present",
    current: true,
    points: [
      "Merged 6+ pull requests across production open-source repositories.",
      "Resolved UI/UX, access-control, and application issues through targeted code changes.",
      "Participated in structured code reviews and collaborative development during Hacktoberfest.",
    ],
    tech: ["Python", "JavaScript", "Git", "Code Review"],
  },
  {
    title: "UI/UX Contributor",
    company: "LearnAxis",
    period: "July 2025",
    current: false,
    points: [
      "Designed UI/UX flows for a school/college management system alongside a senior-led team.",
      "Improved usability by refining navigation flow, workflow clarity, and interface consistency.",
      "Received a Certificate of Recognition for design contribution and team collaboration.",
    ],
    tech: ["Figma", "UI/UX", "Prototyping"],
  },
];

export const education: Education[] = [
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Dr. Virendra Swarup Institute of Computer Studies",
    location: "Kanpur, India",
    period: "2024 — 2027",
    current: true,
  },
  {
    degree: "Senior Secondary (Class XII)",
    institution: "Gulmohar Public School",
    location: "Kanpur, India · CBSE",
    period: "2023 — 2024",
  },
];

/* Hero rotating tagline — replaces the static "Building Polished
   Digital Experiences." line. Each entry is two lines: `top` in white
   serif italic, `accent` in emerald display, matching the old hierarchy. */
export const heroTaglines: { top: string; accent: string }[] = [
  { top: 'Full-stack development,', accent: 'design to deploy.' },
  { top: 'From database schema', accent: 'to polished interface.' },
  { top: 'Clean interfaces,', accent: 'resilient backends.' },
  { top: 'Python, Django & React,', accent: 'wired end to end.' },
];

export const quote: Quote = {
  text: "For one who has conquered the mind, the mind is the best of friends; but for one who has failed to do so, the mind remains the greatest enemy.",
  lang: "बन्धुरात्मात्मनस्तस्य येनात्मैवात्मना जितः। अनात्मनस्तु शत्रुत्वे वर्तेतात्मैव शत्रुवत्॥",
  source: "Bhagavad Gita, Chapter 6, Verse 6",
};

export const socials: SocialLink[] = [
  { label: "GitHub", url: "https://github.com/JANVI-CHATURVEDI" },
  { label: "LinkedIn", url: "https://linkedin.com/in/janvi1010" },
  { label: "X / Twitter", url: "https://x.com/janvi_0x" },
  { label: "Instagram", url: "https://instagram.com" },
  { label: "Email", url: "mailto:janvichaturvedi82@gmail.com" },
  { label: "Resume", url: "https://drive.google.com/file/d/1HyZ1PbW3TBUVSlSIu6PLxsqDcvfjVzdm/view" },
  { label: "WhatsApp", url: "https://wa.me/918000000000" },
];
