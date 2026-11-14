"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';
import { experience } from '../data/content';
import { REVEAL_EASE } from '../utils/swarmMotion';
import Reveal from './Reveal';

export default function ExperienceSlider() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="experience" className="theme-ink relative py-20 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12">
        <div className="flex flex-wrap items-end justify-between gap-4 border-b border-line pb-4">
          <span className="eyebrow accent-label">04 — Experience</span>
          <span className="eyebrow text-muted">2025 — Present</span>
        </div>

        <Reveal y={36} scale={1} duration={0.9}>
          <h2 className="t-display mt-8">
            Career <span className="accent-italic">milestones</span>
          </h2>
        </Reveal>
        <Reveal y={20} scale={1} delay={0.1} duration={0.8}>
          <p className="mt-4 text-sm text-muted">
            Professional experience &amp; contributions — tap to expand.
          </p>
        </Reveal>

        <Reveal y={30} scale={1} delay={0.15} duration={0.85}>
          <div className="mt-12 border-t border-line">
            {experience.map((item, i) => {
              const isOpen = open === i;
              return (
                <div key={item.title} className="border-b border-line">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`experience-panel-${i}`}
                    className="group grid w-full grid-cols-[auto_1fr_auto] items-start gap-4 py-6 text-left sm:gap-6 sm:py-8"
                  >
                    <span className="eyebrow accent-label pt-2">
                      {String(i + 1).padStart(2, '0')}
                    </span>

                    <span className="min-w-0">
                      <span className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                        <span className="t-title transition-transform duration-500 group-hover:translate-x-1">
                          {item.title}
                        </span>
                        {item.current && (
                          <span className="eyebrow flex items-center gap-1.5">
                            <span className="status-dot" /> Current
                          </span>
                        )}
                      </span>
                      <span className="mt-2 block text-sm text-muted">
                        {item.company} — {item.period}
                      </span>
                    </span>

                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-line transition-colors duration-300 group-hover:border-[rgb(var(--t-accent))]">
                      <Plus
                        size={16}
                        aria-hidden
                        className={`transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}
                      />
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`experience-panel-${i}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: REVEAL_EASE }}
                        className="overflow-hidden"
                      >
                        <div className="grid gap-8 pb-8 sm:grid-cols-12 sm:pl-12">
                          <ul className="space-y-3 sm:col-span-8">
                            {item.points.map((point) => (
                              <li
                                key={point}
                                className="flex gap-3 text-sm leading-relaxed text-[rgb(var(--t-fg)/0.72)]"
                              >
                                <span
                                  aria-hidden
                                  className="mt-[9px] h-px w-3 shrink-0 bg-[rgb(var(--t-accent))]"
                                />
                                <span>{point}</span>
                              </li>
                            ))}
                          </ul>

                          {item.tech && (
                            <div className="sm:col-span-4">
                              <p className="eyebrow text-muted">Stack</p>
                              <div className="mt-3 flex flex-wrap gap-1.5">
                                {item.tech.map((tech) => (
                                  <span
                                    key={tech}
                                    className="border border-line px-2.5 py-1 text-[10px] font-mono uppercase tracking-[0.1em] text-muted"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
