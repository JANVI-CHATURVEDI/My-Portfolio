"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import CountUp from './CountUp';
import { SWARM_EASE, DRAW_EASE, POP, popT, build, snap } from '../utils/swarmMotion';

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
  { label: 'green-sparkle', pos: '-top-5 right-1', svg: <svg width="44" height="44" viewBox="0 0 24 24" className="text-emerald-400 drop-shadow-[0_0_10px_rgba(155,116,100,0.45)]"><path d="M12 0 C13.2 8.4 15.6 10.8 24 12 C15.6 13.2 13.2 15.6 12 24 C10.8 15.6 8.4 13.2 0 12 C8.4 10.8 10.8 8.4 12 0 Z" fill="currentColor" /></svg> },
  { label: 'ring', pos: 'left-2 -top-8', svg: <svg width="26" height="26" viewBox="0 0 26 26" className="text-white/35"><circle cx="13" cy="13" r="11" fill="none" stroke="currentColor" strokeWidth="1.5" /></svg> },
  { label: 'star-outline', pos: '-left-4 top-[38%]', svg: <svg width="30" height="30" viewBox="0 0 24 24" className="text-white/65"><path d="M12 2 L14.9 8.6 L22 9.3 L16.7 14.1 L18.2 21.2 L12 17.5 L5.8 21.2 L7.3 14.1 L2 9.3 L9.1 8.6 Z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" /></svg> },
  { label: 'cross-ink', pos: 'left-3 bottom-[3%]', svg: <svg width="20" height="20" viewBox="0 0 22 22"><path d="M4 4 L18 18 M18 4 L4 18" stroke="#292322" strokeWidth="2" strokeLinecap="round" /></svg> },
  { label: 'cross-left', pos: '-left-3 bottom-[18%]', svg: <svg width="18" height="18" viewBox="0 0 22 22" className="text-white/45"><path d="M4 4 L18 18 M18 4 L4 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" /></svg> },
  { label: 'scribble', pos: '-bottom-5 right-3', svg: <svg width="72" height="14" viewBox="0 0 72 14" fill="none" className="text-white/40"><path d="M2 8 Q 12 1, 22 7 T 42 7 T 62 6 T 70 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg> },
];

export default function AboutHome() {
  return (
    <section id="about" className="section-nude relative py-16 md:py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:pl-24">
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={build(0.09)}
          viewport={{ once: true, amount: 0.4 }}
          className="mb-10 md:mb-12"
        >
          <motion.h2
            variants={snap}
            className="section-title text-4xl sm:text-5xl lg:text-6xl text-white font-serif italic leading-[1.1] mb-4"
          >
            A little <span className="font-display text-emerald-400">about me</span>
          </motion.h2>
          <motion.p variants={snap} className="text-white/75 text-sm font-mono font-medium tracking-wide">
            Curious mind. Builder at heart.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          <motion.div
            initial={POP.block.initial}
            whileInView={POP.block.reveal}
            transition={popT(0, 0.5)}
            viewport={{ once: true }}
            className="lg:col-span-4 flex flex-col items-center lg:items-start"
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

              <figure className="relative w-[min(260px,78vw)] -rotate-[3.5deg] bg-[var(--paper)] px-3 pb-3 pt-3 shadow-[0_20px_50px_-18px_rgba(41,35,34,0.45)] sm:w-[300px]">
                <div className="aspect-square overflow-hidden bg-[rgb(var(--t-ink))]">
                  <img
                    src="/images/about-portrait.jpg"
                    alt="Janvi Chaturvedi"
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover object-[50%_35%]"
                  />
                </div>
                <figcaption className="px-1 pt-2.5 text-center">
                  <p className="font-marker text-[1.35rem] leading-tight text-[rgb(var(--t-ink))]">Janvi Chaturvedi</p>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.16em] text-black/75">
                    Backend · Full-Stack · Open Source
                  </p>
                  <p className="mt-1.5 flex items-center justify-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-black/70">
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
              <span className="max-w-[min(260px,58vw)] -rotate-3 font-marker text-lg leading-snug text-white/85">
                Currently building CivicConnect. Stay tuned.
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={POP.block.initial}
            whileInView={POP.block.reveal}
            transition={popT(0.12, 0.5)}
            viewport={{ once: true }}
            className="lg:col-span-8 space-y-6"
          >
            <p className="text-base sm:text-lg font-[450] leading-relaxed text-white/85 max-w-2xl">
              Started as a kid who was curious about how things worked. Now I build things, break
              things, fix them, and ship them. Passionate full-stack developer specializing in
              Python/Django, React, and modern web technologies — I bridge ambitious ideas with
              scalable, user-centric digital products.
            </p>

            <div className="flex flex-wrap gap-3">
              {stats.map((s, i) => (
                <div
                  key={s.label}
                  className={`border border-white/15 bg-[var(--paper)] px-3.5 py-2 ${
                    i === 1 ? 'rotate-[1.25deg]' : i === 2 ? '-rotate-1' : '-rotate-[0.75deg]'
                  }`}
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

            <div className="flex flex-wrap gap-3">
              {interests.map((it) => (
                <span key={it.label} className="tech-pill text-sm px-4 py-2">
                  <span>{it.icon}</span> {it.label}
                </span>
              ))}
            </div>

            <div>
              <a
                href="https://drive.google.com/file/d/15Ib6Xr4-UN7ON3BZvNLy9jFr9yXYiLLq/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost px-6 py-3 rounded-full text-sm font-medium hover:-translate-y-[2px] transition-all duration-300 inline-flex items-center gap-2"
              >
                Resume <ArrowUpRight size={14} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
