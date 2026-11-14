"use client";
import { education } from '../data/content';
import Reveal from './Reveal';

export default function EducationHome() {
  return (
    <section id="education" className="theme-ink relative overflow-hidden py-20 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12">
        <div className="flex flex-wrap items-end justify-between gap-4 border-b border-line pb-4">
          <span className="eyebrow accent-label">06 — Education</span>
          <span className="eyebrow text-muted">Where I studied</span>
        </div>

        <Reveal y={36} scale={1} duration={0.9}>
          <h2 className="t-display mt-8 lg:text-right">
            Education, <span className="accent-italic">so far.</span>
          </h2>
        </Reveal>

        <div className="mt-12 border-b border-line">
          {education.map((item, i) => (
            <Reveal
              as="article"
              key={item.degree}
              y={28}
              scale={1}
              delay={i * 0.1}
              duration={0.8}
              className="grid gap-4 border-t border-line py-9 sm:grid-cols-12 sm:items-baseline sm:gap-6 sm:py-10"
            >
              <div className="sm:col-span-3">
                <span className="t-year text-[rgb(var(--t-accent-ink))]">{item.period}</span>
                <span className="eyebrow mt-2 block text-muted">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>

              <div className="sm:col-span-7">
                <h3 className="t-title">{item.degree}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.institution}</p>
                <p className="eyebrow mt-2 text-muted">{item.location}</p>
              </div>

              <div className="sm:col-span-2 sm:text-right">
                <span className="eyebrow inline-flex items-center gap-2 border border-line px-2.5 py-1.5">
                  {item.current ? (
                    <>
                      <span className="status-dot" /> Pursuing
                    </>
                  ) : (
                    'Completed'
                  )}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
