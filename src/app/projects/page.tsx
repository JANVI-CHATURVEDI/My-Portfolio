"use client";
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import Reveal from '../../components/Reveal';
import { projects } from '../../data/content';

export default function ProjectsPage() {
  return (
    <main className="theme-paper min-h-screen">
      <div className="mx-auto max-w-[1280px] px-5 pb-20 pt-28 sm:px-8 sm:pt-36 lg:px-12">
        <Reveal y={28} scale={1} duration={0.8}>
          <div className="flex flex-wrap items-end justify-between gap-4 border-b border-line pb-4">
            <span className="eyebrow accent-label">Index — Work</span>
            <span className="eyebrow text-muted">{projects.length} projects · 2024 — 2026</span>
          </div>
        </Reveal>

        <Reveal y={36} scale={1} duration={0.9}>
          <h1 className="t-display mt-8">
            Things I&apos;ve <span className="accent-italic">shipped.</span>
          </h1>
        </Reveal>
        <Reveal y={20} scale={1} delay={0.1} duration={0.8}>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted">
            Selected work — built end-to-end, from schema to interface.
          </p>
        </Reveal>

        <div className="mt-12 border-t border-line">
          {projects.map((project, i) => {
            const flipped = i % 2 === 1;
            return (
              <Reveal
                as="article"
                key={project.id}
                y={32}
                scale={1}
                duration={0.8}
                className="grid gap-6 border-b border-line py-10 lg:grid-cols-12 lg:items-center lg:gap-10 lg:py-14"
              >
                <div className={`lg:col-span-5 ${flipped ? 'lg:order-2' : ''}`}>
                  <div
                    className={`group relative overflow-hidden border border-line bg-surface-2 transition-transform duration-500 hover:rotate-0 ${
                      flipped ? '-rotate-[1.4deg]' : 'rotate-[1.4deg]'
                    }`}
                  >
                    <img
                      src={project.image}
                      alt={project.name}
                      loading="lazy"
                      decoding="async"
                      className="aspect-[11/5] w-full object-contain"
                    />
                    <span className="absolute -left-3 -top-3 bg-[rgb(var(--t-bg))] px-2.5 py-1.5">
                      <span className="eyebrow">0{i + 1}</span>
                    </span>
                  </div>

                  <p className="eyebrow mt-4 text-muted">
                    {project.year} · {project.role}
                  </p>
                </div>

                <div className={`lg:col-span-7 ${flipped ? 'lg:order-1' : ''}`}>
                  <div className="flex items-center gap-3">
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${
                        project.status === 'completed'
                          ? 'bg-[rgb(var(--t-accent))]'
                          : 'bg-[rgb(var(--t-fg)/0.4)]'
                      }`}
                    />
                    <span className="eyebrow text-muted">
                      {project.status === 'completed' ? 'Live' : 'Building'} · {project.tags[0]}
                    </span>
                  </div>

                  <h2 className="t-display mt-3 text-[clamp(2rem,4.4vw,3.4rem)]">
                    {project.name}
                  </h2>
                  <p className="mt-2 font-serif text-lg italic leading-snug text-[rgb(var(--t-accent-ink))]">
                    {project.description}
                  </p>

                  <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">
                    {project.longDescription || project.description}
                  </p>

                  {project.features && (
                    <ul className="mt-5 grid gap-1.5 sm:grid-cols-2">
                      {project.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex gap-2.5 text-xs leading-relaxed text-muted"
                        >
                          <span aria-hidden className="mt-1.5 text-[rgb(var(--t-accent))]">
                            +
                          </span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  <p className="eyebrow mt-6 text-muted">{project.tags.join(' · ')}</p>

                  <div className="mt-6 flex flex-wrap items-center gap-3">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-solid"
                      >
                        <ExternalLink size={14} /> Live demo
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline"
                      >
                        <Github size={14} /> Source
                      </a>
                    )}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal
          y={24}
          scale={1}
          className="mt-12 flex flex-col items-start justify-between gap-6 border border-dashed border-line-strong p-8 sm:flex-row sm:items-center"
        >
          <div>
            <p className="t-title">More experiments brewing.</p>
            <p className="eyebrow mt-2 text-muted">Half-formed ideas, prototypes and open source.</p>
          </div>
          <a
            href="https://github.com/JANVI-CHATURVEDI"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            Follow on GitHub <ArrowUpRight size={14} />
          </a>
        </Reveal>
      </div>
    </main>
  );
}
