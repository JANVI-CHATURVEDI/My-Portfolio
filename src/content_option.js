import { FaPython, FaReact, FaJsSquare, FaHtml5, FaCss3Alt, FaBootstrap, FaGitAlt, FaJava } from "react-icons/fa";
import { SiDjango, SiTailwindcss, SiSqlite, SiPostgresql, SiGithub, SiFirebase, SiFigma } from "react-icons/si";
import { GiPositionMarker } from "react-icons/gi";

import img from "./assets/images/bg.jpg";
import tweetimg from "./assets/images/tweetlanding.png";
import cofeeimg from "./assets/images/cofeelanding.png";
import devlinktreeimg from "./assets/images/devlinktree.png";
import travelimg from "./assets/images/travellanding.png";
import onetimeimg from "./assets/images/onetimemsg.png";

const logotext = "Janvi";

const meta = {
    title: "Janvi Chaturvedi — Full Stack Developer",
    description: "I build accessible, pixel-perfect web experiences. Explore my projects and engineering journey.",
};

const introdata = {
    title: "Janvi Chaturvedi",
    tagline: "Building Polished Digital Experiences.",
    description: "Specializing in crafting seamless interfaces and robust backends with Python, Django, React, and Tailwind CSS. Driven by logic, clean code, and interactive aesthetics.",
    your_img_url: img,
};

const gitaQuote = {
    sanskrit: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।",
    english: "The disciplined mind is your best friend. The undisciplined mind is your worst enemy.",
    source: "Bhagavad Gita",
};

const skills = [
  // Backend
  { name: "Python", value: 90, icon: <FaPython size={20} /> },
  { name: "Django", value: 85, icon: <SiDjango size={20} /> },
  { name: "Java", value: 75, icon: <FaJava size={20} /> },

  // Frontend
  { name: "JavaScript", value: 80, icon: <FaJsSquare size={20} /> },
  { name: "React", value: 75, icon: <FaReact size={20} /> },
  { name: "HTML5", value: 95, icon: <FaHtml5 size={20} /> },
  { name: "CSS3", value: 90, icon: <FaCss3Alt size={20} /> },
  { name: "Bootstrap", value: 85, icon: <FaBootstrap size={20} /> },
  { name: "Tailwind CSS", value: 80, icon: <SiTailwindcss size={20} /> },

  // Database
  { name: "SQLite", value: 80, icon: <SiSqlite size={20} /> },
  { name: "PostgreSQL", value: 75, icon: <SiPostgresql size={20} /> },

  // Tools
  { name: "Git", value: 85, icon: <FaGitAlt size={20} /> },
  { name: "GitHub", value: 85, icon: <SiGithub size={20} /> },
  { name: "Firebase", value: 80, icon: <SiFirebase size={20} /> },
  { name: "Appwrite", value: 75, icon: <SiGithub size={20} /> },
  { name: "Figma", value: 70, icon: <SiFigma size={20} /> },
  { name: "Leaflet Map", value: 70, icon: <GiPositionMarker size={20} /> },
];

const services = [
    {
        title: "Full-Stack Web Development",
        description: "Building scalable web applications using Python, Django, React, and modern CSS frameworks.",
    },
    {
        title: "Backend & REST APIs",
        description: "Designing database schemas with PostgreSQL and SQLite, developing APIs, and handling server-side logic.",
    },
    {
        title: "Frontend Engineering",
        description: "Crafting clean, responsive, and user-friendly web interfaces from Figma designs.",
    },
];

const dataportfolio = [
  {
    name: "Tweet",
    img: tweetimg,
    description:
      "Full-stack microblogging platform with posts, likes, follows, authentication, media uploads, and database filtering.",
    link: null,
    github: "https://github.com/JANVI-CHATURVEDI/TWEET",
    status: "completed",
    tags: ["Django", "Python", "Tailwind CSS", "PostgreSQL", "JavaScript"],
  },
  {
    name: "Dev LinkTree",
    img: devlinktreeimg,
    description:
      "Drag-and-drop link-in-bio builder with live preview, instant saving via localStorage, and responsive UI.",
    link: "https://dev-link-tree.vercel.app/",
    github: "https://github.com/JANVI-CHATURVEDI/DevLinkTree",
    status: "in-progress",
    tags: ["HTML", "Tailwind CSS", "Vanilla JS", "LocalStorage"],
  },
  {
    name: "One-Time Secret App",
    img: onetimeimg,
    description:
      "Secure messaging app where each message can be read only once, with safe storage, expiry logic, and Appwrite backend.",
    link: "https://one-time-msg.vercel.app/",
    github: "https://github.com/JANVI-CHATURVEDI/one-time-msg",
    status: "completed",
    tags: ["React", "Appwrite", "Tailwind CSS", "JavaScript"],
  },
  {
    name: "Coffee Shop Landing Page",
    img: cofeeimg,
    description:
      "Modern, responsive landing page for a coffee shop with clean design, mobile-first optimization, and smooth user experience.",
    link: "https://cofeeshop-kappa.vercel.app/",
    github: "https://github.com/JANVI-CHATURVEDI/Cofeeshop",
    status: "completed",
    tags: ["Tailwind CSS", "HTML", "JavaScript"],
  },
  {
    name: "Travel Destination Explorer",
    img: travelimg,
    description:
      "Interactive map-based travel explorer with filters, responsive design, rich destination details, and React + Leaflet.js.",
    link: "https://travel-destination-explorer-neon.vercel.app/",
    github: "https://github.com/JANVI-CHATURVEDI/Travel-Destination-Explorer",
    status: "in-progress",
    tags: ["React", "Tailwind CSS", "Leaflet.js", "JavaScript"],
  },
];

const contactConfig = {
    YOUR_EMAIL: "janvichaturvedi82@gmail.com",
    cta_title: "Let's build something extraordinary together.",
    description: "Feel free to connect with me for collaboration, internship opportunities, or projects.",
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    github: "https://github.com/JANVI-CHATURVEDI",
    linkedin: "https://linkedin.com/in/janvi1010",
    twitter: "https://x.com/janvi_0x",
    email: "mailto:janvichaturvedi82@gmail.com",
    resume: "https://drive.google.com/file/d/1HyZ1PbW3TBUVSlSIu6PLxsqDcvfjVzdm/view?usp=sharing",
};

export {
    meta,
    dataportfolio,
    skills,
    services,
    introdata,
    gitaQuote,
    contactConfig,
    socialprofils,
    logotext,
};
