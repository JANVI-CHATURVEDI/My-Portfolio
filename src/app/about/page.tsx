"use client";
import { motion, useReducedMotion } from 'framer-motion';
import Link from 'next/link';
import { Terminal, Coffee, Rocket } from 'lucide-react';
import ExperienceArrow from '../../components/ExperienceArrow';
import LiquidBg from '../../components/LiquidBg';
import CountUp from '../../components/CountUp';
import { education, experience, skillMatrix } from '../../data/content';

const stats = [
  { label: 'Merged PRs', value: 6, suffix: '+' },
  { label: 'Shipped Apps', value: 5, suffix: '+' },
  { label: 'Open Source Orgs', value: 4, suffix: '' },
];

const interests = [
  { icon: '🏅', label: 'Kho-Kho Medalist' },
  { icon: '🎧', label: 'Music Enthusiast' },
  { icon: '🌍', label: 'Open Source Advocate' },
];

const stickers = [
  {
    label: 'green-sparkle',
    pos: '-top-5 right-1',
    svg: (
      <svg width="44" height="44" viewBox="0 0 24 24" className="text-emerald-400 drop-shadow-[0_0_10px_rgba(155,116,100,0.45)]">
        <path
          d="M12 0 C13.2 8.4 15.6 10.8 24 12 C15.6 13.2 13.2 15.6 12 24 C10.8 15.6 8.4 13.2 0 12 C8.4 10.8 10.8 8.4 12 0 Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    label: 'ring',
    pos: 'left-2 -top-8',
    svg: (
      <svg width="26" height="26" viewBox="0 0 26 26" className="text-white/35">
        <circle cx="13" cy="13" r="11" fill="none" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    label: 'star-outline',
    pos: '-left-4 top-[38%]',
    svg: (
      <svg width="30" height="30" viewBox="0 0 24 24" className="text-white/65">
        <path
          d="M12 2 L14.9 8.6 L22 9.3 L16.7 14.1 L18.2 21.2 L12 17.5 L5.8 21.2 L7.3 14.1 L2 9.3 L9.1 8.6 Z"
          fill="none"
          stroke="currentColor"
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
        <path d="M4 4 L18 18 M18 4 L4 18" stroke="#292322" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: 'cross-left',
    pos: '-left-3 bottom-[18%]',
    svg: (
      <svg width="18" height="18" viewBox="0 0 22 22" className="text-white/45">
        <path d="M4 4 L18 18 M18 4 L4 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: 'scribble',
    pos: '-bottom-5 right-3',
    svg: (
      <svg width="72" height="14" viewBox="0 0 72 14" fill="none" className="text-white/40">
        <path
          d="M2 8 Q 12 1, 22 7 T 42 7 T 62 6 T 70 8"
          stroke="currentColor"
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
    <main className="section-nude min-h-screen text-white">
      <LiquidBg />
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:pl-24 pt-24">

        <section
          aria-label="Introduction"
          className="relative mb-24 flex flex-col justify-center overflow-hidden pb-4 lg:min-h-[calc(100vh-12rem)]"
        >
          <span
            aria-hidden
            style={{ WebkitTextStroke: '2px rgb(var(--t-fg) / 0.14)' }}
            className="pointer-events-none absolute bottom-2 right-0 select-none rotate-[-6deg] font-marker text-[6.5rem] leading-none text-transparent sm:text-[9rem] lg:text-[13rem]"
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
                <p className="inline-block -rotate-[2deg] border border-white/25 bg-white/[0.04] px-3 py-1.5 text-[11px] font-mono uppercase tracking-[0.3em] text-white/80">
                  01 — A LITTLE ABOUT ME
                </p>

                <h1 className="mb-6 mt-6 text-4xl font-extrabold leading-[1.04] tracking-tight text-white sm:text-5xl lg:text-[4.25rem]">
                  Wanna{' '}
                  <span className="relative inline-block whitespace-nowrap font-display font-normal italic text-emerald-400">
                    know me?
                    <svg
                      aria-hidden
                      viewBox="0 0 300 12"
                      preserveAspectRatio="none"
                      className="absolute -bottom-1.5 left-0 h-2.5 w-full overflow-visible"
                    >
                      <path
                        d="M3 8 C 62 2, 118 10, 176 5 S 262 3, 297 7"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        vectorEffect="non-scaling-stroke"
                      />
                    </svg>
                  </span>
                </h1>

                <p className="mb-5 max-w-xl text-sm font-[450] leading-relaxed text-white/80 sm:text-base">
                  Started as a kid who was curious about how things worked.
                  <br />
                  Now I build things, break things, fix them, and ship them.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="btn-primary px-6 py-3 rounded-full font-bold text-sm hover:-translate-y-[2px] transition-all duration-300"
                  >
                    Start a Project →
                  </Link>
                  <a
                    href="https://drive.google.com/file/d/1HyZ1PbW3TBUVSlSIu6PLxsqDcvfjVzdm/view"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost px-6 py-3 rounded-full font-medium text-sm hover:-translate-y-[2px] transition-all duration-300"
                  >
                    Hire Me — Resume
                  </a>
                </div>

                <div className="mb-5 mt-5 flex flex-wrap gap-3">
                  {stats.map((s, i) => (
                    <div
                      key={s.label}
                      className={`border border-white/15 bg-[var(--paper)] px-3.5 py-2 ${i === 1 ? 'rotate-[1.25deg]' : i === 2 ? '-rotate-1' : '-rotate-[0.75deg]'}`}
                    >
                      <div className="text-xl font-bold leading-none text-white">
                        <CountUp to={s.value} suffix={s.suffix} />
                      </div>
                      <div className="mt-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-white/80">
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-4 font-mono text-[11px] uppercase tracking-wider [&>span]:bg-white/[0.05]">
                  <span className="flex -rotate-[1deg] items-center gap-1.5 border border-dashed border-white/20 px-2.5 py-1.5 text-white/85">
                    <Terminal size={12} className="text-white/70" /> Developer
                  </span>
                  <span className="flex rotate-[1deg] items-center gap-1.5 border border-dashed border-white/20 px-2.5 py-1.5 text-white/85">
                    <Coffee size={12} className="text-white/70" /> Freelancer
                  </span>
                  <span className="flex -rotate-[0.5deg] items-center gap-1.5 border border-dashed border-white/20 px-2.5 py-1.5 text-white/85">
                    <Rocket size={12} className="text-white/70" /> Open Source · Builder
                  </span>
                </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="order-2 flex flex-col items-center self-start pt-10 lg:order-1 lg:col-span-4 lg:items-start"
            >
              <div className="relative ml-0 w-fit lg:ml-6">
                <div
                  aria-hidden
                  className="absolute inset-0 translate-x-3 translate-y-4 rotate-[2.5deg] border border-white/10 bg-white/[0.04]"
                />
                <div
                  aria-hidden
                  className="absolute -top-3 left-1/2 z-10 h-7 w-24 -translate-x-1/2 -rotate-[6deg] border-y border-white/10 bg-[var(--tape)]"
                />

                <figure className="relative w-[260px] -rotate-[3.5deg] bg-[var(--paper)] px-3 pb-3 pt-3 shadow-[0_20px_50px_-18px_rgba(41,35,34,0.45)] sm:w-[300px]">
                  <div className="aspect-square overflow-hidden bg-[rgb(var(--t-ink))]">
                    <img
                      src="/images/about-portrait.jpg"
                      alt="Janvi Chaturvedi"
                      className="h-full w-full object-cover object-[50%_35%]"
                    />
                  </div>
                  <figcaption className="px-1 pt-2.5 text-center">
                    <p className="font-marker text-[1.35rem] leading-tight text-[rgb(var(--t-ink))]">Janvi Chaturvedi</p>
                    <p className="mt-1 font-mono text-[8.5px] uppercase tracking-[0.16em] text-black/75">
                      Backend · Full-Stack · Open Source
                    </p>
                    <p className="mt-1.5 flex items-center justify-center gap-1.5 font-mono text-[9.5px] uppercase tracking-[0.14em] text-black/70">
                      <span className="status-dot" /> Available for work
                    </p>
                  </figcaption>
                </figure>

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

              <div className="mt-3 flex items-start gap-1 self-start pl-1 lg:pl-6">
                <span className="max-w-[260px] -rotate-3 font-marker text-lg leading-snug text-white/85">
                  Currently building CivicConnect. Stay tuned.
                </span>
                <svg width="34" height="30" viewBox="0 0 34 30" fill="none" aria-hidden className="mb-1 text-white/55">
                  <path
                    d="M31 27 C 24 25, 14 20, 9 8"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M9 8 L 12.7 16.2 M9 8 L 17.6 10.4"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

            </motion.div>
          </div>
        </section>

        <motion.section
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, margin: '-60px' }}
          className="section-graphite bleed py-16 sm:py-20 lg:py-24 mb-24"
          aria-label="Work experience"
        >
          <p className="text-[10px] font-mono tracking-[0.3em] text-emerald-400 uppercase mb-6">
            02 — What I actually worked on
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-10 sm:mb-12">
            Experience, <span className="font-display italic font-normal text-emerald-400">in detail.</span>
          </h2>

          <div className="relative">
            {experience.map((item, i) => {
              const num = String(i + 1).padStart(2, '0');
              const isLast = i === experience.length - 1;

              return (
                <div
                  key={i}
                  className="relative md:pl-14 pb-8 last:pb-0"
                >
                  {!isLast && (
                    <span
                      aria-hidden="true"
                      className="hidden md:block absolute left-4 top-10 -bottom-[36px] w-px bg-white/[0.06]"
                    />
                  )}

                  <span
                    aria-hidden="true"
                    className="hidden md:flex absolute left-0 top-6 w-8 h-8 items-center justify-center rounded-full border border-white/15 bg-[rgb(var(--t-surface))] text-[10px] font-mono font-medium text-white/70"
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
                    className="exp-card glass rounded-2xl p-6 sm:p-7 lg:p-8"
                  >
                    <header className="flex flex-wrap items-start justify-between gap-x-6 gap-y-1 mb-5">
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
                          <span className="md:hidden text-[11px] font-mono text-emerald-400/80">
                            {num}
                          </span>
                          <h3 className="text-lg sm:text-xl font-semibold text-white tracking-tight">
                            {item.title}
                          </h3>
                          {item.current && (
                            <span className="inline-flex items-center gap-1.5 text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-400/[0.12] border border-emerald-400/35 text-white/85">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                              Active
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-white/75 font-medium mt-1.5">{item.company}</p>
                      </div>
                      <time className="w-full sm:w-auto sm:text-right text-xs font-mono font-medium text-white/75 shrink-0">
                        {item.period}
                      </time>
                    </header>

                    <ul className="space-y-3.5 mb-6">
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

                    {item.tech && (
                      <div className="flex flex-wrap gap-1.5 pt-5 border-t border-white/[0.06]">
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

        <motion.section
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, margin: '-60px' }}
          className="section-chocolate bleed py-16 sm:py-20 lg:py-24 mb-24"
          aria-label="Education"
        >
          <p className="text-[10px] font-mono tracking-[0.3em] text-emerald-400 uppercase mb-6">
            03 — Where I studied
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-10 sm:mb-12">
            Education, <span className="font-display italic font-normal text-emerald-400">so far.</span>
          </h2>

          <div className="grid gap-5 sm:gap-6 md:grid-cols-2">
            {education.map((item, i) => (
              <motion.article
                key={item.degree}
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
                    : { y: -4, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } }
                }
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
              </motion.article>
            ))}
          </div>
        </motion.section>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-olive bleed py-16 sm:py-20 lg:py-24 mb-24"
        >
          <p className="text-xs font-mono tracking-[0.3em] text-white uppercase mb-6">
            04 — Technical arsenal
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-10 sm:mb-12">
            The tools I{' '}
            <span className="font-display italic font-normal text-emerald-400">reach for.</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-5 lg:gap-6">
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
                className="glass rounded-2xl p-6 sm:p-7 hover:border-emerald-400/15 transition-[border-color,background-color,box-shadow] duration-300"
              >
                <div className="flex items-center gap-2 mb-6">
                  <span className="w-2 h-2 rounded-full bg-emerald-400/60" />
                  <h3 className="text-sm font-mono font-medium text-white/85 uppercase tracking-wider">{cat.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {cat.skills.map((skill) => (
                    <span key={skill.name} className="tech-pill">
                      {skill.name}
                      <span className="text-[9px] text-white/80">{skill.level}%</span>
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-cream bleed pt-16 sm:pt-20 lg:pt-24 pb-24"
        >
          <p className="text-xs font-mono tracking-[0.3em] text-emerald-400 uppercase mb-6">
            05 — Off the clock
          </p>

          <div className="glass rounded-3xl p-8 sm:p-10 lg:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-bl from-emerald-500/8 to-transparent rounded-full blur-3xl" />
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl font-serif italic text-white mb-8">
                There's more to me <br />
                <span className="font-display text-emerald-400">than commits.</span>
              </h2>
              <p className="text-white/75 font-[450] leading-relaxed max-w-2xl mb-10">
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
