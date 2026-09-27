"use client";
import { motion, useReducedMotion } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight, Github, ExternalLink } from 'lucide-react';
import { projects } from '../data/content';

const projectImages: Record<number, string> = {
  1: '/images/project-tweet.png',
  2: '/images/project-devlinktree.png',
  3: '/images/project-onetime.png',
  4: '/images/project-coffee.png',
  5: '/images/project-travel.png',
};

export default function FeaturedProjects() {
  const reduced = useReducedMotion();
  const featured = projects.slice(0, 3);

  return (
    <section id="projects" className="relative py-24 lg:py-32">
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
          <p className="text-white/60 text-sm font-mono font-medium tracking-wide">A selection of things I&apos;ve built</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {featured.map((project, i) => (
            <motion.a
              key={project.id}
              href={project.link || project.github}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ once: true }}
              whileHover={
                reduced
                  ? undefined
                  : { y: -4, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } }
              }
              className="group glass rounded-2xl overflow-hidden transition-[border-color,background-color,box-shadow] duration-300"
            >
              {/* Image */}
              <div className="aspect-video overflow-hidden">
                <img
                  src={projectImages[project.id]}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-[10px] font-mono px-2 py-1 rounded-full border ${
                    project.status === 'completed'
                      ? 'bg-emerald-950/30 text-emerald-400 border-emerald-400/20'
                      : 'bg-amber-950/30 text-amber-400 border-amber-400/20'
                  }`}>
                    {project.status === 'completed' ? 'Live' : 'Building'}
                  </span>
                  {project.link && <ExternalLink size={14} className="text-white/45 group-hover:text-white/80 transition-colors" />}
                </div>

                <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-emerald-300 transition-colors">{project.name}</h3>
                <p className="text-sm text-white/75 mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tech-pill">{tag}</span>
                  ))}
                </div>

                <div className="flex items-center gap-3 text-xs font-medium">
                  {project.link && (
                    <span className="flex items-center gap-1 text-white/60 group-hover:text-emerald-400 transition-colors">
                      Live Demo <ArrowUpRight size={12} />
                    </span>
                  )}
                  {project.github && (
                    <span className="flex items-center gap-1 text-white/60 group-hover:text-white transition-colors">
                      <Github size={12} /> Code
                    </span>
                  )}
                </div>
              </div>
            </motion.a>
          ))}
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
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 text-sm font-medium text-white/60 hover:text-white hover:border-white/20 hover:-translate-y-[2px] transition-all duration-300"
          >
            View All Projects <ArrowUpRight size={14} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
