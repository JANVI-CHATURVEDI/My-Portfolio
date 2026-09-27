"use client";
import { motion } from 'framer-motion';
import { experience } from '../data/content';

export default function ExperienceSection() {
  return (
    <section id="about" className="relative py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="section-title text-4xl sm:text-5xl lg:text-6xl text-white font-serif italic leading-[1.1] mb-4">
            Career <span className="font-display text-emerald-400">Milestones</span>
          </h2>
          <p className="text-white/40 text-sm font-mono tracking-wide">Professional experience & contributions</p>
        </motion.div>

        <div className="space-y-4">
          {experience.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="glass rounded-2xl p-6 lg:p-8 hover:border-white/10 transition-all"
            >
              <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full border border-white/5 flex items-center justify-center text-xs font-mono text-white/40">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-3 mb-1">
                    <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                    {item.current && (
                      <span className="inline-flex items-center gap-1.5 text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-950/30 text-emerald-400 border border-emerald-400/20">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        Active
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-emerald-400/70 mb-3 font-mono">{item.company} — {item.period}</p>
                  <ul className="space-y-1.5">
                    {item.points.map((point, idx) => (
                      <li key={idx} className="text-sm text-white/50 flex items-start gap-2">
                        <span className="w-1 h-1 rounded-full bg-white/20 flex-shrink-0 mt-2.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}