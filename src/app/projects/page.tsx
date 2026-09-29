"use client";
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, Github, ExternalLink } from 'lucide-react';
import LiquidBg from '../../components/LiquidBg';
import TechStack from '../../components/TechStack';
import { projects } from '../../data/content';

const projectImages: Record<number, string> = {
  1: '/images/project-tweet.png',
  2: '/images/project-devlinktree.png',
  3: '/images/project-onetime.png',
  4: '/images/project-coffee.png',
  5: '/images/project-travel.png',
};

export default function ProjectsPage() {
  const reduced = useReducedMotion();

  return (
    <main className="section-taupe min-h-screen text-white">
      <LiquidBg />
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:pl-24 pt-28 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-xs font-mono tracking-[0.3em] text-[rgb(var(--t-ink))] uppercase mb-4">
            01 — Work
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.05] tracking-tight mb-5">
            Things I've <span className="font-display italic font-normal text-emerald-400">shipped.</span>
          </h1>
          <p className="text-[rgb(var(--t-ink))] text-sm font-mono font-medium tracking-wide">
            Five projects — full-stack platforms, secure messaging, and polished landing pages.
          </p>
        </motion.div>

        {/* Compact 2-column grid */}
        <div className="grid md:grid-cols-2 gap-5 mb-10">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              whileHover={
                reduced
                  ? undefined
                  : { y: -4, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } }
              }
              className="glass rounded-2xl overflow-hidden group hover:border-emerald-400/15 transition-[border-color,background-color,box-shadow] duration-300 flex flex-col"
            >
              {/* Compact image */}
              <div className="relative aspect-[16/9] overflow-hidden">
                <img
                  src={projectImages[project.id] || '/images/project-tweet.png'}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink-scrim)] via-transparent to-transparent" />

                {/* Status badge floating */}
                <span className={`absolute top-3 left-3 text-[10px] font-mono px-2.5 py-1 rounded-full border backdrop-blur-sm ${
                  project.status === 'completed'
                    ? 'bg-emerald-400/75 text-white border-emerald-400/60'
                    : 'bg-amber-400/80 text-[rgb(var(--t-ink))] border-amber-400/70'
                }`}>
                  {project.status === 'completed' ? '● Live' : '● Building'}
                </span>

                {/* Year + role floating bottom — translucent chip for readability */}
                <div className="absolute bottom-2 left-3 flex items-center gap-2 text-[10px] font-mono font-medium text-white/75 bg-black/35 backdrop-blur-[2px] px-2.5 py-1 rounded-full">
                  <span>{project.year}</span>
                  <span className="w-0.5 h-0.5 rounded-full bg-white/50" />
                  <span>{project.role}</span>
                </div>
              </div>

              {/* Compact content */}
              <div className="p-5 flex-1 flex flex-col">
                <h2 className="text-xl font-bold text-white mb-1.5 transition-colors">
                  {project.name}
                </h2>
                <p className="text-xs text-white font-display italic mb-3">
                  {project.description}
                </p>
                <p className="text-sm text-white leading-relaxed mb-4 line-clamp-2">
                  {project.longDescription || project.description}
                </p>

                {/* Key features — compact single line each */}
                {project.features && (
                  <div className="mb-4 space-y-1">
                    {project.features.slice(0, 3).map((f) => (
                      <div key={f} className="flex items-center gap-2 text-xs text-white">
                        <span>{f}</span>
                      </div>
                    ))}
                    {project.features.length > 3 && (
                      <span className="text-[10px] font-mono text-white">+{project.features.length - 3} more</span>
                    )}
                  </div>
                )}

                {/* Tags — overlapping icon stack, fans open on card hover */}
                <div className="mt-auto">
                  <TechStack tags={project.tags} />
                </div>

                {/* Actions */}
                <div className="flex gap-2 pt-3 border-t border-white/5">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary flex-1 items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl font-semibold text-xs hover:-translate-y-[2px] transition-all duration-300"
                    >
                      <ExternalLink size={13} /> Demo
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`btn-ghost items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl font-medium hover:-translate-y-[2px] text-xs transition-all duration-300 ${
                        project.link ? 'flex-1' : 'flex-1'
                      }`}
                    >
                      <Github size={13} /> Code
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}

          {/* "+ More coming" placeholder card */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="glass rounded-2xl flex flex-col items-center justify-center gap-4 min-h-[280px] border-dashed hover:border-emerald-400/20 transition-all"
          >
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500/15 to-cyan-500/10 flex items-center justify-center">
              <ArrowUpRight size={24} className="text-white" />
            </div>
            <p className="text-sm text-white font-mono">More experiments brewing</p>
            <a
              href="https://github.com/JANVI-CHATURVEDI"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono font-medium text-white hover:text-white transition-colors flex items-center gap-1"
            >
              Follow on GitHub <ArrowUpRight size={12} />
            </a>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
