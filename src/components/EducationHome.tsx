"use client";
import { education } from '../data/content';
import Reveal from './Reveal';

export default function EducationHome() {
  return (
    <section id="education" className="section-cream relative py-16 md:py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:pl-24">
        <div className="mb-10 md:mb-12">
          <Reveal>
            <h2 className="section-title text-4xl sm:text-5xl lg:text-6xl text-white font-serif italic leading-[1.1] mb-4">
              Education, <span className="font-display text-emerald-400">so far.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1} y={40} duration={0.9}>
            <p className="text-white/75 text-sm font-mono font-medium tracking-wide">Where I studied</p>
          </Reveal>
        </div>

        <div className="grid gap-5 sm:gap-6 md:grid-cols-2">
          {education.map((item, i) => (
            <Reveal
              as="article"
              key={item.degree}
              delay={i * 0.15}
              className="exp-card glass rounded-2xl p-6 sm:p-7"
            >
              <header className="mb-4 flex items-start justify-between gap-x-4 gap-y-2">
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/70">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <time className="shrink-0 font-mono text-xs font-medium text-white/75">
                  {item.period}
                </time>
              </header>
              <h3 className="text-lg sm:text-xl font-semibold tracking-tight text-white">
                {item.degree}
              </h3>
              <p className="mt-2 text-sm font-medium text-white/80">{item.institution}</p>
              <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.14em] text-white/70">
                {item.location}
              </p>
              <footer className="mt-5 flex items-center gap-3 border-t border-white/[0.06] pt-4">
                {item.current ? (
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/35 bg-emerald-400/[0.12] px-2.5 py-1 text-[10px] font-mono text-white/85">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Pursuing
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/[0.05] px-2.5 py-1 text-[10px] font-mono text-white/70">
                    Completed
                  </span>
                )}
              </footer>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
