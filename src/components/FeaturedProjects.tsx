"use client";
import Link from 'next/link';
import { ArrowUpRight, Github, ExternalLink } from 'lucide-react';
import { projects, featuredProjectIds } from '../data/content';
import Reveal from './Reveal';

export default function FeaturedProjects() {
  const featured = featuredProjectIds
    .map((id) => projects.find((project) => project.id === id))
    .filter((project): project is (typeof projects)[number] => Boolean(project));

  return (
    <section id="projects" className="theme-paper relative py-20 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12">
        <div className="flex flex-wrap items-end justify-between gap-4 border-b border-line pb-4">
          <span className="eyebrow accent-label">03 — Selected work</span>
          <span className="eyebrow text-muted">Featured · 2024 — 2026</span>
        </div>

        <Reveal y={36} scale={1} duration={0.9}>
          <h2 className="t-display mt-8">
            Featured <span className="accent-italic">projects</span>
          </h2>
        </Reveal>
        <Reveal y={20} scale={1} delay={0.1} duration={0.8}>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">
            A selection of things I&apos;ve built — civic platforms, microblogs and small experiments,
            each shipped end to end.
          </p>
        </Reveal>

        <div className="mt-14 space-y-16 sm:space-y-24">
          {featured.map((project, i) => {
            const href = project.link || project.github;
            const flipped = i % 2 === 1;
            return (
              <Reveal
                as="article"
                key={project.id}
                y={36}
                scale={1}
                delay={0.05}
                duration={0.85}
                className="group grid items-center gap-6 sm:grid-cols-12 sm:gap-8 lg:gap-12"
              >
                <div className={`sm:col-span-7 ${flipped ? 'sm:order-2' : ''}`}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                    aria-label={`${project.name} — open project`}
                  >
                    <div
                      className={`relative overflow-hidden border border-line bg-surface-2 transition-transform duration-500 group-hover:rotate-0 ${
                        flipped ? '-rotate-[1.2deg]' : 'rotate-[1.2deg]'
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
                  </a>
                </div>

                <div className={`sm:col-span-5 ${flipped ? 'sm:order-1' : ''}`}>
                  <div className="flex items-center gap-3">
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${
                        project.status === 'completed'
                          ? 'bg-[rgb(var(--t-accent))]'
                          : 'bg-[rgb(var(--t-fg)/0.4)]'
                      }`}
                    />
                    <span className="eyebrow text-muted">
                      {project.status === 'completed' ? 'Live' : 'Building'} / {project.year}
                    </span>
                  </div>

                  <h3 className="t-title mt-3">{project.name}</h3>
                  <p className="mt-2 font-serif text-lg italic leading-snug text-muted">
                    {project.description}
                  </p>
                  <p className="eyebrow mt-5 text-muted">{project.tags.join(' · ')}</p>

                  <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-[11px] font-mono font-semibold uppercase tracking-[0.16em] transition-colors duration-300 hover:text-[rgb(var(--t-accent-ink))]"
                      >
                        Live site <ExternalLink size={12} />
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-[11px] font-mono font-semibold uppercase tracking-[0.16em] transition-colors duration-300 hover:text-[rgb(var(--t-accent-ink))]"
                      >
                        Source <Github size={13} />
                      </a>
                    )}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal y={24} scale={1} className="mt-20 flex flex-wrap items-center justify-between gap-6 border-t border-line pt-8">
          <Link href="/projects" className="btn btn-solid">
            All projects <ArrowUpRight size={15} />
          </Link>
          <span className="eyebrow text-muted">Full index, features &amp; stack notes</span>
        </Reveal>
      </div>
    </section>
  );
}
