"use client";
import Link from 'next/link';
import { useRef } from 'react';
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import TaglineRotator from './TaglineRotator';
import { REVEAL_EASE } from '../utils/swarmMotion';

const MARQUEE = [
  'Full-Stack Developer',
  'Python · Django',
  'React · Next.js',
  'PostgreSQL',
  'Open Source',
  'Kanpur, India',
];

export default function Hero() {
  const reduced = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });
  const stripY = useTransform(scrollYProgress, [0, 1], ['0%', '-16%']);
  const d = (v: number) => (reduced ? 0 : v);

  const line = {
    hidden: { opacity: 0, y: 28 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section
      ref={sectionRef}
      id="home"
      className="theme-paper relative overflow-hidden pt-24 sm:pt-28 lg:pt-32"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: d(0.7), delay: d(0.05) }}
        className="mx-auto flex max-w-[1280px] flex-wrap items-center justify-between gap-x-6 gap-y-2 border-b border-line px-5 pb-4 sm:px-8 lg:px-12"
      >
        <span className="eyebrow">Portfolio — 2026</span>
        <span className="eyebrow flex items-center gap-2">
          <span className="status-dot" /> Available for work
        </span>
        <span className="eyebrow text-muted">Kanpur, India</span>
      </motion.div>

      <div className="relative mx-auto mt-8 grid max-w-[1280px] grid-cols-1 gap-y-8 px-5 sm:mt-10 sm:px-8 lg:grid-cols-12 lg:gap-x-8 lg:gap-y-10 lg:px-12">
        <motion.div
          initial="hidden"
          animate="show"
          variants={{ hidden: {}, show: { transition: { staggerChildren: d(0.12), delayChildren: d(0.15) } } }}
          className="relative z-10 lg:col-start-1 lg:col-end-9"
        >
          <h1 className="t-hero">
            <motion.span
              variants={line}
              transition={{ duration: d(0.8), ease: REVEAL_EASE }}
              className="block"
            >
              Janvi
            </motion.span>
            <motion.span
              variants={line}
              transition={{ duration: d(0.8), ease: REVEAL_EASE }}
              className="block"
            >
              Chaturvedi<span className="text-accent">.</span>
            </motion.span>
          </h1>

          <motion.div variants={line} className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2">
            <span className="eyebrow accent-label">Full-Stack Developer</span>
            <span className="eyebrow text-muted">Python · Django · React</span>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30, rotate: 0 }}
          animate={{ opacity: 1, y: 0, rotate: reduced ? 0 : 4 }}
          transition={{ duration: d(0.9), delay: d(0.4), ease: REVEAL_EASE }}
          className="relative z-20 mx-auto w-52 sm:w-60 lg:col-start-9 lg:col-end-13 lg:row-start-1 lg:row-end-3 lg:mx-0 lg:w-full lg:max-w-[340px] lg:justify-self-end"
        >
          <div className="border border-line-strong bg-surface p-2 shadow-[14px_16px_0_0_rgba(18,16,14,0.09)]">
            <div className="relative">
              <div className="aspect-square overflow-hidden bg-surface-2">
                <img
                  src="/images/about-portrait.jpg"
                  alt="Janvi Chaturvedi"
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  className="h-full w-full object-cover object-[50%_32%] grayscale-[20%] contrast-[1.04]"
                />
              </div>
              <span
                aria-hidden
                className="stamp absolute -bottom-2 -left-3 -rotate-6"
              >
                Full-stack
                <br />
                developer
              </span>
            </div>
            <div className="flex items-center justify-between gap-2 px-0.5 pt-3">
              <span className="eyebrow">Janvi C.</span>
              <span className="eyebrow text-muted">Kanpur · IN</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: d(0.8), delay: d(0.55), ease: REVEAL_EASE }}
          className="lg:col-start-1 lg:col-end-8 lg:row-start-2"
        >
          <p className="eyebrow text-muted">Design to deploy</p>
          <div className="mt-3 font-serif text-[clamp(1.6rem,3vw,2.4rem)] italic leading-[1.12]">
            <TaglineRotator />
          </div>
          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-muted">
            Full-stack developer passionate about creating clean, scalable, and user-friendly
            applications. Specializing in Python, Django, React, and modern web architectures.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Link href="/projects" className="btn btn-solid">
              Selected work <ArrowUpRight size={15} />
            </Link>
            <Link href="/contact" className="btn btn-outline">
              Start a project
            </Link>
          </div>
          <p className="eyebrow mt-8 flex items-center gap-3">
            <span aria-hidden className="inline-block h-px w-10 bg-[rgb(var(--t-fg)/0.35)]" />
            Real-world experience — production backend work &amp; open source
          </p>
        </motion.div>

        <span
          aria-hidden
          className="outline-type pointer-events-none absolute bottom-0 right-0 hidden select-none font-display text-[clamp(7rem,15vw,14rem)] font-semibold leading-none tracking-[-0.04em] lg:right-12 lg:block"
        >
          01
        </span>
      </div>

      <div className="mt-14 sm:mt-20 lg:mt-24">
        <motion.div style={reduced ? undefined : { y: stripY }} className="relative">
          <div className="relative h-[120px] overflow-hidden sm:h-[150px]">
            <img
              src="/images/hero-bg.jpg"
              alt=""
              aria-hidden="true"
              loading="eager"
              decoding="async"
              className="h-full w-full scale-110 object-cover"
              style={{ filter: 'grayscale(1) contrast(1.15) brightness(0.72)' }}
            />
            <div aria-hidden className="absolute inset-0 bg-[#0D0C0B]/40" />
            <div className="marquee absolute inset-0 flex items-center">
              <div className="marquee-track">
                {[0, 1].map((copy) => (
                  <span key={copy} aria-hidden={copy === 1} className="flex items-center">
                    {MARQUEE.map((item) => (
                      <span key={item} className="flex items-center">
                        <span className="font-display text-[clamp(1.1rem,2.4vw,1.9rem)] uppercase tracking-[-0.01em] text-[#F7F4EE]">
                          {item}
                        </span>
                        <span className="mx-6 h-1.5 w-1.5 rounded-full bg-[#E2542C] sm:mx-9" />
                      </span>
                    ))}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
