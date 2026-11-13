"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { experience } from '../data/content';
import { ChevronDown } from 'lucide-react';
import { REVEAL_EASE } from '../utils/swarmMotion';
import Reveal from './Reveal';

export default function ExperienceSlider() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="experience" className="section-graphite relative py-16 md:py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:pl-24">
        <div className="mb-10 md:mb-12">
          <Reveal>
            <h2 className="section-title text-4xl sm:text-5xl lg:text-6xl text-white font-serif italic leading-[1.1] mb-4">
              Career <span className="font-display text-emerald-400">Milestones</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1} y={40} duration={0.9}>
            <p className="text-white/75 text-sm font-mono font-medium tracking-wide">
              Professional experience &amp; contributions — tap to expand
            </p>
          </Reveal>
        </div>

        <div className="space-y-4">
          {experience.map((item, i) => {
            const isOpen = open === i;
            return (
              <Reveal
                key={item.title}
                delay={i * 0.12}
                className="exp-card glass rounded-2xl overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-6 lg:p-7 text-left"
                  aria-expanded={isOpen}
                >
                  <div className="flex flex-wrap items-center gap-3 min-w-0">
                    <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/50 shrink-0">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3 className="text-lg font-semibold text-white truncate">{item.title}</h3>
                    {item.current && (
                      <span className="inline-flex items-center gap-1.5 text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-950/30 text-emerald-400 border border-emerald-400/20 shrink-0">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        Active
                      </span>
                    )}
                    <span className="text-sm text-emerald-400/70 font-mono truncate">
                      {item.company} — {item.period}
                    </span>
                  </div>
                  <ChevronDown
                    size={20}
                    className={`shrink-0 text-white/60 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.45, ease: REVEAL_EASE }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 lg:px-7 pb-6 lg:pb-7 pt-0">
                        <ul className="space-y-2 mb-4">
                          {item.points.map((point, idx) => (
                            <li key={idx} className="text-sm text-white/60 flex items-start gap-2">
                              <span className="w-1 h-1 rounded-full bg-white/30 flex-shrink-0 mt-2" />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                        {item.tech && (
                          <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/[0.06]">
                            {item.tech.map((t) => (
                              <span key={t} className="exp-tag text-xs">
                                {t}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
