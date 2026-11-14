"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Reveal from './Reveal';
import {
  SiPython,
  SiOpenjdk,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiBootstrap,
  SiFigma,
  SiDjango,
  SiSqlite,
  SiPostgresql,
  SiMongodb,
  SiNeon,
  SiFirebase,
  SiAppwrite,
  SiGit,
  SiGithub,
  SiPycharm,
  SiPostman,
  SiVercel,
  SiDocker,
  SiLeaflet,
  SiFlutter,
} from 'react-icons/si';
import { Code } from 'lucide-react';
import { FaMobileAlt, FaPlug, FaNetworkWired } from 'react-icons/fa';
import { skillCategories, skillGroupCount, skillMeta, skillsByCategory, type SkillCategory } from '../data/content';
import { REVEAL_EASE } from '../utils/swarmMotion';

const ICONS: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Python: SiPython,
  Java: SiOpenjdk,
  JavaScript: SiJavascript,
  HTML5: SiHtml5,
  CSS3: SiCss,
  'React.js': SiReact,
  'Next.js': SiNextdotjs,
  'Tailwind CSS': SiTailwindcss,
  Bootstrap: SiBootstrap,
  'Responsive Web Design': FaMobileAlt,
  Django: SiDjango,
  'Django REST Framework': SiDjango,
  'REST API Development': FaPlug,
  'API Integration': FaNetworkWired,
  PostgreSQL: SiPostgresql,
  SQLite: SiSqlite,
  MongoDB: SiMongodb,
  Neon: SiNeon,
  Firebase: SiFirebase,
  Appwrite: SiAppwrite,
  Git: SiGit,
  GitHub: SiGithub,
  'VS Code': Code,
  PyCharm: SiPycharm,
  Postman: SiPostman,
  Vercel: SiVercel,
  Figma: SiFigma,
  Docker: SiDocker,
  Flutter: SiFlutter,
  'Leaflet.js': SiLeaflet,
};

const total = Object.keys(skillMeta).length;

export default function SkillsBox() {
  const [active, setActive] = useState<SkillCategory>('All');
  const skills = skillsByCategory(active);

  return (
    <section id="skills" className="theme-paper relative py-20 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12">
        <div className="flex flex-wrap items-end justify-between gap-4 border-b border-line pb-4">
          <span className="eyebrow accent-label">05 — Technical arsenal</span>
          <span className="eyebrow text-muted">
            {total} skills · {skillGroupCount} areas
          </span>
        </div>

        <Reveal y={36} scale={1} duration={0.9}>
          <h2 className="t-display mt-8">
            Technical <span className="accent-italic">arsenal</span>
          </h2>
        </Reveal>
        <Reveal y={20} scale={1} delay={0.1} duration={0.8}>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">
            The languages, frameworks and tools I reach for — filtered by where they sit in the stack.
          </p>
        </Reveal>

        <Reveal y={24} scale={1} delay={0.15} duration={0.8}>
          <div className="mt-10 flex flex-wrap items-center gap-x-4 gap-y-2.5 border-y border-line py-3.5">
            {skillCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActive(cat)}
                aria-pressed={active === cat}
                className={`eyebrow tracking-[0.08em] transition-colors duration-300 ${
                  active === cat
                    ? 'text-[rgb(var(--t-accent-ink))]'
                    : 'text-muted hover:text-[rgb(var(--t-fg))]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-8 min-h-[300px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: REVEAL_EASE }}
            >
              <div className="skill-grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
                {skills.map((name) => {
                  const Icon = ICONS[name] ?? Code;
                  return (
                    <div key={name} className="skill-cell" title={name}>
                      <Icon size={20} className="shrink-0" />
                      <span className="text-[13px] leading-tight">{name}</span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <p className="eyebrow mt-4 text-muted">
          {skills.length} shown / {total} total
        </p>
      </div>
    </section>
  );
}
