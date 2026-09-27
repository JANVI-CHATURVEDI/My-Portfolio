"use client";
import { motion, useReducedMotion } from 'framer-motion';
import Link from 'next/link';
import { Terminal, Coffee, Rocket } from 'lucide-react';
import ExperienceArrow from '../../components/ExperienceArrow';
import LiquidBg from '../../components/LiquidBg';
import { experience, skillMatrix } from '../../data/content';

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

/* Hand-drawn sticker set scattered around the polaroid */
const stickers = [
  {
    label: 'green-sparkle',
    pos: '-top-5 right-1',
    svg: (
      <svg width="44" height="44" viewBox="0 0 24 24" className="drop-shadow-[0_0_10px_rgba(52,211,153,0.5)]">
        <path
          d="M12 0 C13.2 8.4 15.6 10.8 24 12 C15.6 13.2 13.2 15.6 12 24 C10.8 15.6 8.4 13.2 0 12 C8.4 10.8 10.8 8.4 12 0 Z"
          fill="#34d399"
        />
      </svg>
    ),
  },
  {
    label: 'ring',
    pos: 'left-2 -top-8',
    svg: (
      <svg width="26" height="26" viewBox="0 0 26 26">
        <circle cx="13" cy="13" r="11" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    label: 'star-outline',
    pos: '-left-4 top-[38%]',
    svg: (
      <svg width="30" height="30" viewBox="0 0 24 24">
        <path
          d="M12 2 L14.9 8.6 L22 9.3 L16.7 14.1 L18.2 21.2 L12 17.5 L5.8 21.2 L7.3 14.1 L2 9.3 L9.1 8.6 Z"
          fill="none"
          stroke="rgba(255,255,255,0.65)"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: 'cross-ink',
    pos: 'left-3 bottom-[3%]',
    svg: (
      <svg width="20" height="20" viewBox="0 0 22 22">
        <path d="M4 4 L18 18 M18 4 L4 18" stroke="rgba(12,12,14,0.55)" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: 'cross-left',
    pos: '-left-3 bottom-[18%]',
    svg: (
      <svg width="18" height="18" viewBox="0 0 22 22">
        <path d="M4 4 L18 18 M18 4 L4 18" stroke="rgba(255,255,255,0.4)" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: 'scribble',
    pos: '-bottom-5 right-3',
    svg: (
      <svg width="72" height="14" viewBox="0 0 72 14" fill="none">
        <path
          d="M2 8 Q 12 1, 22 7 T 42 7 T 62 6 T 70 8"
          stroke="rgba(255,255,255,0.35)"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

export default function AboutPage() {
  const reduced = useReducedMotion();
  return (
    <main className="min-h-screen bg-[#0c0c0e] text-white">
      <LiquidBg />
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:pl-24 pt-24 pb-20">

        {/* ── Section 1: scrapbook hero — tilted polaroid + editorial collage ── */}
        <section
          aria-label="Introduction"
          className="relative mb-24 flex flex-col justify-center overflow-hidden pb-4 lg:min-h-[calc(100vh-12rem)]"
        >
          {/* Oversized marker word — outlined texture behind the composition */}
          <span
            aria-hidden
            className="pointer-events-none absolute bottom-2 right-0 select-none rotate-[-6deg] font-marker text-[6.5rem] leading-none text-transparent sm:text-[9rem] lg:text-[13rem] [-webkit-text-stroke:2px_rgba(255,255,255,0.11)]"
          >
            ABOUT.
          </span>

          <div className="relative z-10 grid w-full items-center gap-y-12 lg:grid-cols-12 lg:gap-x-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2 lg:col-span-8 lg:ml-10"
            >
                <p className="inline-block -rotate-[2deg] border border-white/25 bg-white/[0.04] px-3 py-1.5 text-[11px] font-mono uppercase tracking-[0.3em] text-white/60">
                  01 — A LITTLE ABOUT ME
                </p>

                <h1 className="mb-6 mt-6 text-4xl font-extrabold leading-[1.04] tracking-tight text-white sm:text-5xl lg:text-[4.25rem]">
                  Wanna{' '}
                  <span className="relative inline-block whitespace-nowrap font-display font-normal italic text-emerald-400">
                    know me?
                    {/* hand-drawn green underline */}
                    <svg
                      aria-hidden
                      viewBox="0 0 300 12"
                      preserveAspectRatio="none"
                      className="absolute -bottom-1.5 left-0 h-2.5 w-full overflow-visible"
                    >
                      <path
                        d="M3 8 C 62 2, 118 10, 176 5 S 262 3, 297 7"
                        fill="none"
                        stroke="#34d399"
                        strokeWidth="3"
                        strokeLinecap="round"
                        vectorEffect="non-scaling-stroke"
                      />
                    </svg>
                  </span>
                </h1>

                <p className="mb-5 max-w-xl text-sm font-[450] leading-relaxed text-white/65 sm:text-base">
                  Started as a kid who was curious about how things worked.
                  <br />
                  Now I build things, break things, fix them, and ship them.
                </p>

                <div className="flex flex-wrap gap-4">
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

                {/* Stat stickers */}
                <div className="mb-5 mt-5 flex flex-wrap gap-3">
                  {stats.map((s, i) => (
                    <div
                      key={s.label}
                      className={`border border-white/15 bg-[#0c0c0e]/60 px-3.5 py-2 ${i === 1 ? 'rotate-[1.25deg]' : i === 2 ? '-rotate-1' : '-rotate-[0.75deg]'}`}
                    >
                      <div className="text-xl font-bold leading-none text-white">{s.value}</div>
                      <div className="mt-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-white/55">
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* identity tags */}
                <div className="flex flex-wrap items-center gap-4 font-mono text-[11px] uppercase tracking-wider [&>span]:bg-[#0c0c0e]/60">
                  <span className="flex -rotate-[1deg] items-center gap-1.5 border border-dashed border-white/20 px-2.5 py-1.5 text-white/55">
                    <Terminal size={12} className="text-white/45" /> Developer
                  </span>
                  <span className="flex rotate-[1deg] items-center gap-1.5 border border-dashed border-white/20 px-2.5 py-1.5 text-white/55">
                    <Coffee size={12} className="text-white/45" /> Freelancer
                  </span>
                  <span className="flex -rotate-[0.5deg] items-center gap-1.5 border border-dashed border-white/20 px-2.5 py-1.5 text-white/55">
                    <Rocket size={12} className="text-white/45" /> Open Source · Builder
                  </span>
                </div>
            </motion.div>

            {/* Polaroid composition — left on desktop, after the text on mobile */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="order-2 flex flex-col items-center self-start pt-10 lg:order-1 lg:col-span-4 lg:items-start"
            >
              <div className="relative ml-0 w-fit lg:ml-6">
                {/* backing sheet */}
                <div
                  aria-hidden
                  className="absolute inset-0 translate-x-3 translate-y-4 rotate-[2.5deg] border border-white/10 bg-white/[0.04]"
                />
                {/* washi tape */}
                <div
                  aria-hidden
                  className="absolute -top-3 left-1/2 z-10 h-7 w-24 -translate-x-1/2 -rotate-[6deg] border-y border-white/10 bg-white/30"
                />

                {/* The polaroid */}
                <figure className="relative w-[260px] -rotate-[3.5deg] bg-white px-3 pb-3 pt-3 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.85)] sm:w-[300px]">
                  <div className="aspect-square overflow-hidden bg-[#0c0c0e]">
                    <img
                      src="/images/about-portrait.jpg"
                      alt="Janvi Chaturvedi"
                      className="h-full w-full object-cover object-[50%_35%] contrast-[1.05] grayscale"
                    />
                  </div>
                  <figcaption className="px-1 pt-2.5 text-center">
                    <p className="font-marker text-[1.35rem] leading-tight text-[#0c0c0e]">Janvi Chaturvedi</p>
                    <p className="mt-1 font-mono text-[8.5px] uppercase tracking-[0.16em] text-black/55">
                      Backend · Full-Stack · Open Source
                    </p>
                    <p className="mt-1.5 flex items-center justify-center gap-1.5 font-mono text-[9.5px] uppercase tracking-[0.14em] text-black/70">
                      <span className="status-dot" /> Available for work
                    </p>
                  </figcaption>
                </figure>

                {/* Scattered stickers */}
                {stickers.map((st, i) => (
                  <motion.span
                    key={st.label}
                    aria-hidden
                    initial={{ opacity: 0, scale: 0.4 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.55 + i * 0.08, type: 'spring', stiffness: 260, damping: 16 }}
                    className={`absolute ${st.pos}`}
                  >
                    {st.svg}
                  </motion.span>
                ))}
              </div>

              {/* handwritten annotation */}
              <div className="mt-3 flex items-start gap-1 self-start pl-1 lg:pl-6">
                <span className="max-w-[260px] -rotate-3 font-marker text-lg leading-snug text-white/70">
                  Currently building CivicConnect. Stay tuned.
                </span>
                <svg width="34" height="30" viewBox="0 0 34 30" fill="none" aria-hidden className="mb-1">
                  <path
                    d="M31 27 C 24 25, 14 20, 9 8"
                    stroke="rgba(255,255,255,0.45)"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M9 8 L 12.7 16.2 M9 8 L 17.6 10.4"
                    stroke="rgba(255,255,255,0.45)"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              {/* interest stamps */}
              <div className="mt-6 flex max-w-[340px] flex-wrap justify-center gap-2.5 lg:justify-start">
                {interests.map((it, i) => (
                  <motion.div
                    key={it.label}
                    animate={reduced ? { y: 0 } : { y: [0, i % 2 === 0 ? -5 : 5, 0] }}
                    transition={reduced ? { duration: 0 } : { duration: 3 + i, repeat: Infinity, ease: 'easeInOut' }}
                    className={`flex items-center gap-1.5 whitespace-nowrap border border-white/20 bg-[#0c0c0e]/75 px-3 py-1.5 text-[11px] text-white/70 backdrop-blur-sm ${i === 0 ? '-rotate-[1.5deg]' : i === 1 ? 'rotate-[1.5deg]' : '-rotate-1'}`}
                  >
                    <span>{it.icon}</span> {it.label}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

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
