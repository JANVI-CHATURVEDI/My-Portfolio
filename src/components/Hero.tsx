"use client";
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import TaglineRotator from './TaglineRotator';
import DrawnArrow from './DrawnArrow';
import { SWARM_EASE, build, snap, snapBig, charSnap } from '../utils/swarmMotion';

const FULL_NAME = 'Janvi Chaturvedi';

export default function Hero() {
  const reduced = useReducedMotion();
  const d = (v: number) => (reduced ? 0 : v);

  /** Construction stage: portrait, then card — snap in one after another. */
  const stage = build(d(0.1), d(0.12));

  /** The card lands as one block, then its contents are built inside it. */
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

  /** The name is typed out character by character. */
  const nameStage = build(d(0.035), d(0.06));

  return (
    <section id="home" className="section-rose hero-ground relative z-10 min-h-screen lg:min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-bg.jpg"
          alt=""
          aria-hidden="true"
          loading="eager"
          fetchPriority="high"
          decoding="async"
          className="w-full h-full object-cover opacity-[0.18]"
          style={{ filter: 'sepia(0.55) saturate(1.05) contrast(1.02)' }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:pl-24 w-full pt-20 pb-16 lg:pt-24 lg:pb-20">
        <motion.div
          variants={stage}
          initial="hidden"
          animate="show"
          className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-center lg:min-h-[80vh]"
        >
          {/* Portrait — snaps into place, then floats gently forever after. */}
          <motion.div
            variants={snapBig}
            className="flex justify-center lg:justify-start order-2 lg:order-1"
          >
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#C18D8D]/30 via-transparent to-[#B08A78]/30 rounded-full blur-2xl group-hover:blur-[60px] transition-all duration-700" />
              <div className="absolute -inset-2 bg-gradient-to-br from-[#C18D8D]/15 to-transparent rounded-full blur-xl" />

              {/* 288px at base overflowed a 320px viewport (only ~272px of room
                  after px-4/px-6). Start at 224px and scale up. */}
              <div className="relative w-44 h-44 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-96 lg:h-96 rounded-full overflow-hidden border border-white/[0.06] shadow-2xl swarm-float">
                <img
                  src="/images/about-portrait.jpg"
                  alt="Janvi Chaturvedi"
                  loading="eager"
                  decoding="async"
                  className="w-full h-full object-cover scale-105 hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* An invisible agent draws this arrow at the portrait while the
                  rest of the hero is being constructed. */}
              <span className="absolute -right-10 top-1/2 hidden lg:flex -translate-y-1/2">
                <DrawnArrow
                  direction="left"
                  delay={0.75}
                  size={44}
                  strokeWidth={4}
                  className="text-[#2C221E]"
                />
              </span>
            </div>
          </motion.div>

          {/* Hero card — lands as a block, then its contents are built. */}
          <motion.div variants={cardOuter}>
            <div className="hero-card swarm-breathe space-y-4">
              <motion.div
                variants={snap}
                className="flex items-center gap-2"
              >
                <span className="status-dot" />
                <span className="text-sm font-mono font-bold text-[#6B5E57] tracking-wide">Available For Work</span>
              </motion.div>

              {/* The name is typed out, character by character. */}
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

      {/* The main scroll arrow — drawn FIRST, then bounces forever after. */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: d(0.35), delay: d(0.05) }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 hidden sm:flex"
      >
        <div className="w-9 h-14 rounded-full border border-black/30 flex items-start justify-center p-1">
          <DrawnArrow
            direction="down"
            delay={0.1}
            size={26}
            strokeWidth={5}
            drawDuration={0.6}
            className="text-[#2C221E]"
          />
        </div>
      </motion.div>
    </section>
  );
}
