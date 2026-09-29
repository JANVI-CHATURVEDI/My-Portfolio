"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight, Github, ExternalLink } from 'lucide-react';
import { projects } from '../data/content';
import TechStack from './TechStack';

const projectImages: Record<number, string> = {
  1: '/images/project-tweet.png',
  2: '/images/project-devlinktree.png',
  3: '/images/project-onetime.png',
  4: '/images/project-coffee.png',
  5: '/images/project-travel.png',
};

export default function FeaturedProjects() {
  const featured = projects.slice(0, 5);
  /* duplicated set → seamless -50% loop (see .projects-track in globals.css).
     The copy is aria-hidden so assistive tech doesn't read projects twice. */
  const loop = [...featured, ...featured];

  return (
    <section id="projects" className="section-chocolate relative py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-6 lg:pl-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="section-title text-4xl sm:text-5xl lg:text-6xl text-white font-serif italic leading-[1.1] mb-4">
            Featured <span className="font-display text-emerald-400">Projects</span>
          </h2>
          <p className="text-white/75 text-sm font-mono font-medium tracking-wide">A selection of things I&apos;ve built</p>
        </motion.div>

        {/* ── Infinite marquee: viewport clips, track glides, slot sizes,
              card handles its own hover pop-out (all CSS, see globals.css) */}
        <div className="projects-viewport">
          <div className="projects-track">
            {loop.map((project, i) => {
              const duplicate = i >= featured.length;
              return (
                <motion.div
                  key={`${project.id}-${i}`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: (i % featured.length) * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="projects-slot"
                >
                  <a
                    href={project.link || project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-hidden={duplicate || undefined}
                    tabIndex={duplicate ? -1 : undefined}
                    className="project-card group rounded-2xl overflow-hidden flex flex-col"
                  >
                    {/* Image plate — contained, rounded by the card's overflow */}
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={projectImages[project.id]}
                        alt={project.name}
                        className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                      />
                    </div>

                    {/* Info area — visually separated from the image */}
                    <div className="project-card__body flex flex-1 flex-col p-5">
                      <div className="flex items-center justify-between mb-3">
                        <span className={`project-status text-[10px] font-mono px-2.5 py-1 rounded-full border ${
                          project.status === 'completed'
                            ? 'bg-[#b08a78]/20 text-[#eddbcc] border-[#b08a78]/45'
                            : 'bg-[#c99a6b]/15 text-[#f0e0cd] border-[#c99a6b]/45'
                        }`}>
                          {project.status === 'completed' ? 'Live' : 'Building'}
                        </span>
                        {project.link && (
                          <ExternalLink
                            size={14}
                            className="text-[#c0b0a5] group-hover:text-[#f0e5dc] group-hover:translate-x-0.5 transition-all duration-300"
                          />
                        )}
                      </div>

                      <h3 className="text-lg font-semibold text-[#f0e5dc] mb-1.5 group-hover:text-[#e8cdb8] transition-colors duration-300">{project.name}</h3>
                      <p className="text-sm text-[#c0b0a5] mb-3 leading-relaxed">{project.description}</p>

                      <TechStack tags={project.tags} />

                      <div className="mt-auto flex items-center gap-4 border-t border-[#ecDCD0]/10 pt-4 text-xs font-medium">
                        {project.link && (
                          <span className="flex items-center gap-1 text-[#c0b0a5] group-hover:text-[#d2a992] transition-colors">
                            Live Demo
                            <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                          </span>
                        )}
                        {project.github && (
                          <span className="flex items-center gap-1 text-[#c0b0a5] group-hover:text-[#ecDCD0] transition-colors">
                            <Github size={12} /> Code
                          </span>
                        )}
                      </div>
                    </div>
                  </a>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* View all CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <Link
            href="/projects"
            className="btn-ghost px-6 py-3 rounded-full text-sm font-medium hover:-translate-y-[2px] transition-all duration-300"
          >
            View All Projects <ArrowUpRight size={14} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
