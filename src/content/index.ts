export interface Project {
  id: number;
  name: string;
  description: string;
  status: "completed" | "in-progress" | "featured";
  tags: string[];
}

export interface Skill {
  name: string;
  value: number;
  icon: string;
}

export interface Experience {
  title: string;
  company: string;
  date: string;
  isCurrent: boolean;
  points: string[];
}

export interface Service {
  title: string;
  description: string;
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}

export interface FooterBadge {
  label: string;
  color: string;
}

export const content: {
  bio: string;
  intro: string;
  about: string;
  career: Experience[];
  projects: Project[];
  skills: Skill[];
  services: Service[];
  contact: ContactForm;
  footers: FooterBadge[];
} = {
  bio: "Janvi Chaturvedi — Full-Stack Software Architect",
  intro: "I craft high-performance, user-centric digital products using modern web architectures. From cloud-native backends to polished frontend interfaces, I bridge the gap between ambitious ideas and scalable reality.",
  about: "Passionate full-stack developer specializing in Python/Django, React, and modern web technologies. I thrive in collaborative environments where clean code meets innovative design. My work spans production-grade applications, open-source contributions, and user-focused product development.",
  career: [
    {
      title: "Backend Developer Intern (Django)",
      company: "Ayursh",
      date: "Mar 2026 – Present",
      isCurrent: true,
      points: ["API Endpoints", "Dynamic Filters", "Bug Resolution", "Team Collaboration"],
    },
    {
      title: "Open Source Contributor",
      company: "Zulip · CircuitVerse · wger · bugOpsX",
      date: "2025 – Present",
      isCurrent: true,
      points: ["6+ PRs", "UI/UX Defects", "Code Reviews"],
    },
    {
      title: "UI/UX Contributor",
      company: "LearnAxis",
      date: "July 2025",
      isCurrent: false,
      points: ["School Management System", "Navigation Flow", "Certificate of Recognition"],
    },
  ],
  projects: [
    {
      id: 1,
      name: "TWEET",
      description: "Speak Freely. Stay Anonymous.",
      status: "completed",
      tags: ["Django", "Python", "Tailwind CSS", "PostgreSQL"],
    },
    {
      id: 2,
      name: "Digital Presence Platform",
      description: "Modern, responsive landing page for digital branding.",
      status: "in-progress",
      tags: ["React", "Tailwind CSS", "Framer Motion"],
    },
    {
      id: 3,
      name: "Secret Messaging App",
      description: "One-time secret messaging with secure media storage.",
      status: "completed",
      tags: ["React", "Appwrite", "Tailwind CSS"],
    },
    {
      id: 4,
      name: "Cofeeshop Landing Page",
      description: "Modern, responsive landing page for coffee culture.",
      status: "completed",
      tags: ["Tailwind CSS", "HTML", "JavaScript"],
    },
    {
      id: 5,
      name: "Travel Destination Explorer",
      description: "Interactive map-based travel discovery platform.",
      status: "in-progress",
      tags: ["React", "Leaflet.js", "Tailwind CSS"],
    },
  ],
  skills: [
    { name: "Python", value: 90, icon: "python" },
    { name: "Django", value: 85, icon: "django" },
    { name: "React", value: 75, icon: "react" },
    { name: "HTML5", value: 95, icon: "html" },
    { name: "Tailwind CSS", value: 80, icon: "tailwind" },
    { name: "SQLite", value: 80, icon: "sqlite" },
    { name: "PostgreSQL", value: 75, icon: "postgres" },
    { name: "Git", value: 85, icon: "git" },
    { name: "GitHub", value: 85, icon: "github" },
    { name: "Firebase", value: 80, icon: "firebase" },
    { name: "Figma", value: 70, icon: "figma" },
    { name: "Leaflet Map", value: 70, icon: "leaflet" },
  ],
  services: [
    { title: "Full-Stack Development", description: "Building robust, scalable web applications using Python, Django, JS, React, and modern CSS frameworks." },
    { title: "Database & Backend", description: "Designing with SQLite & PostgreSQL, APIs, auth, and server-side logic." },
    { title: "UI/UX & Frontend", description: "Clean, responsive interfaces with HTML, CSS, JS, React, and Figma." },
  ],
  contact: {
    name: "Janvi Chaturvedi",
    email: "janvichaturvedi82@gmail.com",
    message: "",
  },
  footers: [
    { label: "GitHub", color: "emerald-400" },
    { label: "LinkedIn", color: "blue-400" },
    { label: "X / Twitter", color: "violet-400" },
    { label: "Instagram", color: "pink-400" },
    { label: "WhatsApp", color: "green-400" },
    { label: "Resume", color: "white-400" },
    { label: "Copyright", color: "gray-400" },
  ],
};
