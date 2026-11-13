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
  SiNodedotjs,
  SiSqlite,
  SiPostgresql,
  SiMongodb,
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
import { FaMobileAlt, FaPaintBrush, FaPlug, FaCode, FaNetworkWired } from 'react-icons/fa';
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
  'UI Development': FaPaintBrush,
  Figma: SiFigma,
  Django: SiDjango,
  'Django REST Framework': SiDjango,
  'REST API Development': FaPlug,
  'Python Backend Development': SiPython,
  'Node.js (familiarity)': SiNodedotjs,
  SQLite: SiSqlite,
  PostgreSQL: SiPostgresql,
  MongoDB: SiMongodb,
  Firebase: SiFirebase,
  Appwrite: SiAppwrite,
  Git: SiGit,
  GitHub: SiGithub,
  'VS Code': FaCode,
  PyCharm: SiPycharm,
  Postman: SiPostman,
  Vercel: SiVercel,
  'Docker (learning/setup experience)': SiDocker,
  'Leaflet.js (maps and geolocation)': SiLeaflet,
  'Flutter (exposure through project work)': SiFlutter,
  'Neon Database': SiPostgresql,
  'API Integration': FaNetworkWired,
};

export default function SkillsBox() {
  const [active, setActive] = useState<SkillCategory>('All');
  const skills = skillsByCategory(active);

  return (
    <section id="skills" className="py-10 md:py-14 lg:py-16 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:pl-24">
        <div className="mb-6 md:mb-8">
          <Reveal>
            <h2 className="section-title text-3xl sm:text-4xl lg:text-5xl text-white font-serif italic leading-[1.1] mb-2">
              Technical <span className="font-display text-emerald-400">Arsenal</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1} y={40} duration={0.9}>
            <p className="text-white/75 text-xs font-mono font-medium tracking-wide">
              {Object.keys(skillMeta).length} skills across {skillGroupCount} areas
            </p>
          </Reveal>
        </div>

        <Reveal y={60} duration={0.9} className="glass rounded-2xl p-4 sm:p-5 relative overflow-hidden">
          <div className="flex flex-wrap gap-1.5 mb-4 justify-center">
            {skillCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-3 py-1 rounded-full text-xs font-mono font-medium transition-all duration-300 border ${
                  active === cat
                    ? 'bg-emerald-400/15 text-emerald-300 border-emerald-400/40'
                    : 'bg-white/[0.04] text-white/60 border-white/10 hover:text-white hover:border-white/20'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative min-h-[120px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -80 }}
                transition={{ duration: 0.6, ease: REVEAL_EASE }}
                className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-3 justify-items-center"
              >
                {skills.map((name, i) => {
                  const Icon = ICONS[name] ?? FaCode;
                  return (
                    <Reveal
                      key={name}
                      delay={i * 0.06}
                      y={40}
                      scale={0.85}
                      duration={0.7}
                      className="group flex items-center justify-center"
                    >
                      <div
                        role="img"
                        title={name}
                        aria-label={name}
                        className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center transition-all duration-300 group-hover:border-emerald-400/40 group-hover:bg-emerald-400/[0.08] group-hover:-translate-y-0.5"
                      >
                        <Icon size={22} className="text-white/80 group-hover:text-emerald-300 transition-colors" />
                      </div>
                    </Reveal>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
