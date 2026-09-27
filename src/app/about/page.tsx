"use client";
import { motion, useReducedMotion } from 'framer-motion';
import Link from 'next/link';
import { Terminal, MapPin, Coffee, Rocket } from 'lucide-react';
import ExperienceArrow from '../../components/ExperienceArrow';
import LiquidBg from '../../components/LiquidBg';
import { experience, skillMatrix, portfolio } from '../../data/content';

const stats = [
  { label: 'Merged PRs', value: '6+' },
  { label: 'Shipped Apps', value: '5+' },
  { label: 'Open Source Orgs', value: '4' },
];

const interests = [
  { icon: '🏅', label: 'Kho-Kho Medalist' },
  { icon: '🎧', label: 'Music Enthusiast' },
  { icon: '🌍', label: 'Open Source Advocate' },
];

export default function AboutPage() {
  const reduced = useReducedMotion();
  return (
    <main className="min-h-screen bg-[#0c0c0e] text-white">
      <LiquidBg />
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:pl-24 pt-28 pb-20">

        {/* ── Section 1: Eyebrow + Heading + portrait floating right ── */}
        <div className="grid lg:grid-cols-5 gap-10 items-start mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <p className="text-xs font-mono tracking-[0.3em] text-emerald-400/70 uppercase mb-4">
              01 — Introduction
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.05] tracking-tight mb-6">
              I turn ideas into
              <br />
              <span className="font-display italic font-normal text-emerald-400">revenue-generating</span>
              <br />
              <span className="text-white/55 text-2xl sm:text-3xl lg:text-4xl font-light block mt-4">
                digital products.
              </span>
            </h1>

            <p className="text-white/75 font-[450] leading-relaxed max-w-xl mb-6 text-base">
              You have a vision. I have the technical depth to ship it — production-ready
              backend architecture, pixel-perfect frontend, and a track record of delivering
              on deadline. Every project I touch is built to scale.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 text-black font-bold text-sm hover:shadow-[0_0_28px_rgba(52,211,153,0.35)] hover:-translate-y-[2px] transition-all duration-300"
              >
                Start a Project →
              </Link>
              <a
                href="https://drive.google.com/file/d/1HyZ1PbW3TBUVSlSIu6PLxsqDcvfjVzdm/view"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/15 text-white/75 hover:text-white hover:border-white/30 font-medium text-sm hover:-translate-y-[2px] transition-all duration-300"
              >
                Hire Me — Resume
              </a>
            </div>

            {/* Stat counters */}
            <div className="flex gap-8 mb-6 pt-6 border-t border-white/5">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="text-3xl font-bold text-white">{s.value}</div>
                  <div className="text-[11px] font-mono font-medium text-white/55 uppercase tracking-wider">{s.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4 text-xs font-mono font-medium text-white/55">
              <span className="flex items-center gap-1.5"><MapPin size={13} className="text-emerald-400/80" /> {portfolio.location}</span>
              <span className="w-1 h-1 rounded-full bg-white/35" />
              <span className="flex items-center gap-1.5"><Terminal size={13} className="text-emerald-400/80" /> Building since 2024</span>
              <span className="w-1 h-1 rounded-full bg-white/35" />
              <span className="flex items-center gap-1.5"><Rocket size={13} className="text-emerald-400/80" /> Open to remote roles</span>
            </div>
          </motion.div>

          {/* Portrait card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-2 relative"
          >
            <div className="glass rounded-3xl overflow-hidden p-1">
              <div className="relative aspect-[3/4] overflow-hidden rounded-[1.4rem]">
                <img
                  src="/images/about-portrait.jpg"
                  alt="Janvi Chaturvedi"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0e]/90 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 [text-shadow:0_1px_4px_rgba(0,0,0,0.65)]">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="status-dot" />
                    <span className="text-xs font-mono font-medium text-white/85">Available for work</span>
                  </div>
                  <p className="text-lg font-semibold text-white">Janvi Chaturvedi</p>
                  <p className="text-xs text-white/70 font-mono">Backend · Full-Stack · Open Source</p>
                </div>
              </div>
            </div>

            {/* Floating interests */}
            <div className="absolute -left-4 top-6 flex flex-col gap-2">
              {interests.map((it, i) => (
                <motion.div
                  key={it.label}
                  animate={reduced ? { y: 0 } : { y: [0, i % 2 === 0 ? -5 : 5, 0] }}
                  transition={reduced ? { duration: 0 } : { duration: 3 + i, repeat: Infinity, ease: 'easeInOut' }}
                  className="glass px-3 py-1.5 rounded-full text-xs text-white/70 flex items-center gap-1.5 shadow-lg whitespace-nowrap"
                >
                  <span>{it.icon}</span> {it.label}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ── Section 2: Experience — editorial timeline ── */}
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, margin: '-60px' }}
          className="mb-24"
          aria-label="Work experience"
        >
          <p className="text-[10px] font-mono tracking-[0.3em] text-emerald-400/70 uppercase mb-4">
            02 — What I actually worked on
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-12">
            Experience, <span className="font-display italic font-normal text-emerald-400">in detail.</span>
          </h2>

          <div className="relative">
            {experience.map((item, i) => {
              const num = String(i + 1).padStart(2, '0');
              const isLast = i === experience.length - 1;

              return (
                <div
                  key={i}
                  className="relative md:pl-14 pb-6 last:pb-0"
                >
                  {/* subtle vertical connector */}
                  {!isLast && (
                    <span
                      aria-hidden="true"
                      className="hidden md:block absolute left-4 top-10 -bottom-[36px] w-px bg-white/[0.06]"
                    />
                  )}

                  {/* rail node: 01 02 03 */}
                  <span
                    aria-hidden="true"
                    className="hidden md:flex absolute left-0 top-6 w-8 h-8 items-center justify-center rounded-full border border-white/10 bg-[#0c0c0e] text-[10px] font-mono font-medium text-white/55"
                  >
                    {num}
                  </span>

                  <motion.article
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: reduced ? 0 : 0.5,
                      delay: reduced ? 0 : i * 0.1,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    viewport={{ once: true, margin: '-40px' }}
                    whileHover={
                      reduced
                        ? undefined
                        : { y: -4, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } }
                    }
                    className="exp-card glass rounded-2xl p-5 sm:p-6 lg:p-7"
                  >
                    {/* NUMBER → ROLE → COMPANY → DATE */}
                    <header className="flex flex-wrap items-start justify-between gap-x-6 gap-y-1 mb-4">
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
                          <span className="md:hidden text-[11px] font-mono text-emerald-400/80">
                            {num}
                          </span>
                          <h3 className="text-lg sm:text-xl font-semibold text-white tracking-tight">
                            {item.title}
                          </h3>
                          {item.current && (
                            <span className="inline-flex items-center gap-1.5 text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-400/[0.07] border border-emerald-400/20 text-emerald-400/90">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                              Active
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-white/75 font-medium mt-1">{item.company}</p>
                      </div>
                      <time className="w-full sm:w-auto sm:text-right text-xs font-mono font-medium text-white/60 shrink-0">
                        {item.period}
                      </time>
                    </header>

                    {/* DESCRIPTION — custom hand-drawn swoosh arrow */}
                    <ul className="space-y-2.5 mb-5">
                      {item.points.map((point, idx) => {
                        const delay = i * 0.1 + idx * 0.07;
                        return (
                          <motion.li
                            key={idx}
                            className="flex gap-3 text-sm text-white/75 leading-relaxed"
                            variants={{ hidden: {}, show: {} }}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, margin: '-40px' }}
                          >
                            <ExperienceArrow delay={delay} />
                            <motion.span
                              variants={{
                                hidden: { opacity: 0, x: -6 },
                                show: {
                                  opacity: 1,
                                  x: 0,
                                  transition: {
                                    duration: reduced ? 0 : 0.45,
                                    delay: reduced ? 0 : delay + 0.5,
                                    ease: [0.22, 1, 0.36, 1],
                                  },
                                },
                              }}
                            >
                              {point}
                            </motion.span>
                          </motion.li>
                        );
                      })}
                    </ul>

                    {/* STACK */}
                    {item.tech && (
                      <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/[0.06]">
                        {item.tech.map((t) => (
                          <span key={t} className="exp-tag">
                            {t}
                          </span>
                        ))}
                      </div>
                    )}
                  </motion.article>
                </div>
              );
            })}
          </div>
        </motion.section>

        {/* ── Section 3: Skills — horizontal ticker style ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <p className="text-xs font-mono tracking-[0.3em] text-emerald-400/70 uppercase mb-4">
            03 — Technical arsenal
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-10">
            The tools I{' '}
            <span className="font-display italic font-normal text-emerald-400">reach for.</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-5">
            {skillMatrix.map((cat, ci) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: ci * 0.1 }}
                viewport={{ once: true }}
                whileHover={
                  reduced
                    ? undefined
                    : { y: -4, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } }
                }
                className="glass rounded-2xl p-6 hover:border-emerald-400/15 transition-[border-color,background-color,box-shadow] duration-300"
              >
                <div className="flex items-center gap-2 mb-5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400/60" />
                  <h3 className="text-sm font-mono font-medium text-white/65 uppercase tracking-wider">{cat.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span key={skill.name} className="tech-pill">
                      {skill.name}
                      <span className="text-[9px] text-white/45">{skill.level}%</span>
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ── Section 4: Persona — editorial quote-style ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-4"
        >
          <p className="text-xs font-mono tracking-[0.3em] text-emerald-400/70 uppercase mb-4">
            04 — Off the clock
          </p>

          <div className="glass rounded-3xl p-8 lg:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-bl from-emerald-500/8 to-transparent rounded-full blur-3xl" />
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl font-serif italic text-white mb-6">
                There's more to me <br />
                <span className="font-display text-emerald-400">than commits.</span>
              </h2>
              <p className="text-white/75 font-[450] leading-relaxed max-w-2xl mb-8">
                Away from the keyboard, I'm a Kho-Kho medalist who thrives on competition,
                always plugged into music, and a relentless open-source contributor. Building
                is my default mode — whether it's software, a strategy, or a play on the court.
              </p>
              <div className="flex flex-wrap gap-3">
                {interests.map((it) => (
                  <span key={it.label} className="tech-pill text-sm px-5 py-2">
                    <span>{it.icon}</span> {it.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
