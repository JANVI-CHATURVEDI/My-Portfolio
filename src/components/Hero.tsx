"use client";
import { motion, useReducedMotion, useScroll, useTransform, type Variants } from 'framer-motion';
import { useRef } from 'react';
import TaglineRotator from './TaglineRotator';
import { SWARM_EASE, build, snap, snapBig, charSnap } from '../utils/swarmMotion';

const FULL_NAME = 'Janvi Chaturvedi';

export default function Hero() {
  const reduced = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const portraitY = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const d = (v: number) => (reduced ? 0 : v);

  const stage = build(d(0.1), d(0.12));

  const cardOuter: Variants = {
    hidden: { opacity: 0, scale: 0.9, y: 26 },
    show: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: d(0.55),
        ease: SWARM_EASE,
        staggerChildren: d(0.075),
        delayChildren: d(0.18),
      },
    },
  };

  const nameStage = build(d(0.035), d(0.06));

  return (
    <section ref={sectionRef} id="home" className="section-rose hero-ground relative z-10 min-h-screen lg:min-h-screen flex items-center overflow-hidden">
      <motion.div className="absolute inset-0 z-0" style={{ y: bgY }}>
        <img
          src="/images/hero-bg.jpg"
          alt=""
          aria-hidden="true"
          loading="eager"
          fetchPriority="high"
          decoding="async"
          className="w-full h-full object-cover opacity-[0.18] scale-110"
          style={{ filter: 'sepia(0.55) saturate(1.05) contrast(1.02)' }}
        />
      </motion.div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:pl-24 w-full pt-20 pb-16 lg:pt-24 lg:pb-20">
        <motion.div
          variants={stage}
          initial="hidden"
          animate="show"
          className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-center lg:min-h-[80vh]"
        >
          <motion.div
            variants={snapBig}
            style={{ y: portraitY }}
            className="flex justify-center lg:justify-start order-2 lg:order-1"
          >
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#C18D8D]/30 via-transparent to-[#B08A78]/30 rounded-full blur-2xl group-hover:blur-[60px] transition-all duration-700" />
              <div className="absolute -inset-2 bg-gradient-to-br from-[#C18D8D]/15 to-transparent rounded-full blur-xl" />

              <div className="relative w-44 h-44 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-96 lg:h-96 rounded-full overflow-hidden border border-white/[0.06] shadow-2xl swarm-float">
                <img
                  src="/images/about-portrait.jpg"
                  alt="Janvi Chaturvedi"
                  loading="eager"
                  decoding="async"
                  className="w-full h-full object-cover scale-105 hover:scale-110 transition-transform duration-700"
                />
              </div>
            </div>
          </motion.div>

          <motion.div variants={cardOuter}>
            <div className="hero-card swarm-breathe space-y-4">
              <motion.div
                variants={snap}
                className="flex items-center gap-2"
              >
                <span className="status-dot" />
                <span className="text-sm font-mono font-bold text-[#6B5E57] tracking-wide">Available For Work</span>
              </motion.div>

              <motion.h1
                variants={nameStage}
                className="whitespace-nowrap text-[1.5rem] sm:text-[1.85rem] lg:text-[2.5rem] font-bold tracking-tight text-[#231A18]"
              >
                {FULL_NAME.split('').map((ch, i) => (
                  <motion.span key={`${ch}-${i}`} variants={charSnap} className="inline-block">
                    {ch === ' ' ? '\u00A0' : ch}
                  </motion.span>
                ))}
              </motion.h1>

              <motion.p
                variants={snap}
                className="text-sm font-mono font-bold text-[#2C221E] tracking-[0.18em] uppercase"
              >
                Based in India
              </motion.p>

              <motion.h2
                variants={snap}
                className="font-serif italic font-medium text-[1.35rem] leading-[1.3] sm:text-[1.6rem] text-[#A8535A]"
              >
                <TaglineRotator />
              </motion.h2>

              <motion.p
                variants={snap}
                className="text-base font-normal leading-[1.6] text-[#4A3E3B] max-w-md hidden sm:block"
              >
                Full-stack developer passionate about creating clean, scalable, and user-friendly applications. Specializing in Python, Django, React, and modern web architectures.
              </motion.p>

              <motion.div
                variants={snap}
                className="flex items-center gap-2.5 text-[11px] font-mono font-bold text-[#4A3E3B] tracking-wide"
              >
                <span aria-hidden="true" className="inline-block w-4 h-px bg-[#4A3E3B]/40" />
                <span>
                  Real-world experience — production backend work &amp; open source
                </span>
              </motion.div>

              <motion.div
                variants={snap}
                className="flex w-fit flex-wrap items-center gap-x-3 gap-y-1 text-xs font-mono font-bold text-[#2C221E] bg-[rgb(0_0_0_/_0.04)] px-3 py-2 rounded-full"
              >
                <span>Kanpur, India</span>
                <span className="w-1 h-1 rounded-full bg-emerald-400/90" />
                <span>Full-Stack Developer</span>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
