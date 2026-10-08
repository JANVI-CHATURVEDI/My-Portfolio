import React from "react";
import "./TechMarquee.css";
import { FaPython, FaReact, FaJsSquare, FaGitAlt, FaJava } from "react-icons/fa";
import { SiDjango, SiTailwindcss, SiPostgresql, SiFirebase, SiFigma } from "react-icons/si";

const techItems = [
  { name: "Python", icon: <FaPython /> },
  { name: "Django", icon: <SiDjango /> },
  { name: "React 18", icon: <FaReact /> },
  { name: "JavaScript", icon: <FaJsSquare /> },
  { name: "PostgreSQL", icon: <SiPostgresql /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "Firebase", icon: <SiFirebase /> },
  { name: "Java", icon: <FaJava /> },
  { name: "Git & GitHub", icon: <FaGitAlt /> },
  { name: "Figma UI/UX", icon: <SiFigma /> },
];

const TechMarquee = () => {
  return (
    <div className="tech-marquee-wrapper" aria-hidden="true">
      <div className="marquee-fade-left"></div>
      <div className="marquee-track">
        {[...techItems, ...techItems, ...techItems].map((item, index) => (
          <div key={index} className="marquee-item">
            <span className="marquee-icon">{item.icon}</span>
            <span className="marquee-text">{item.name}</span>
            <span className="marquee-dot">•</span>
          </div>
        ))}
      </div>
      <div className="marquee-fade-right"></div>
    </div>
  );
};

export default TechMarquee;
