"use client";
import { motion, useReducedMotion } from 'framer-motion';
import TaglineRotator from './TaglineRotator';

export default function Hero() {
  const reduced = useReducedMotion();

  return (
    <section id="home" className="section-nude relative z-10 min-h-screen flex items-center overflow-hidden">
      {/* Mountain background — natural photo under a warm editorial wash */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-bg.jpg"
          alt=""
          className="w-full h-full object-cover opacity-90"
          /* warm sepia tint — turns the B&W photo into the creme theme
             instead of a cool grey block */
          style={{ filter: 'sepia(0.55) saturate(1.05) contrast(1.02)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--scrim-a)] via-[var(--scrim-b)] to-[var(--scrim-c)]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--scrim-b)] via-transparent to-[var(--scrim-a)]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:pl-24 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[80vh]">

          {/* Left: Avatar with glow */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: reduced ? 0 : 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative group">
              {/* Warm cream halo — clay + dusty rose, no cool tones */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#C18D8D]/30 via-transparent to-[#B08A78]/30 rounded-full blur-2xl group-hover:blur-[60px] transition-all duration-700" />
              <div className="absolute -inset-2 bg-gradient-to-br from-[#C18D8D]/15 to-transparent rounded-full blur-xl" />

              <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border border-white/[0.06] shadow-2xl">
                <img
                  src="/images/about-portrait.jpg"
                  alt="Janvi Chaturvedi"
                  className="w-full h-full object-cover scale-105 hover:scale-110 transition-transform duration-700"
                />
              </div>
            </div>
          </motion.div>

          {/* Right: Text content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: reduced ? 0 : 0.8, delay: reduced ? 0 : 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative space-y-6 hero-type"
          >
            {/* Calm creme field behind the copy — the photo keeps breathing
                on the left, while the type always sits on flat ground. */}
            <div
              aria-hidden="true"
              className="absolute -inset-x-10 -inset-y-6 -z-10 bg-gradient-to-l from-[rgb(var(--t-surface)/0.6)] via-[rgb(var(--t-surface)/0.35)] to-transparent"
            />
            {/* Status */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: reduced ? 0 : 0.5, delay: reduced ? 0 : 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-2"
            >
              <span className="status-dot" />
              <span className="text-sm font-mono font-bold text-black tracking-wide">Available For Work</span>
            </motion.div>

            {/* Name — forced onto one line; sizes step to fit the column
                width at each breakpoint (nowrap overrides any wrap) */}
            <h1 className="whitespace-nowrap text-[2.2rem] sm:text-[3.25rem] lg:text-[3rem] xl:text-[3.75rem] font-extrabold text-black tracking-tight">
              Janvi Chaturvedi
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: reduced ? 0 : 0.5, delay: reduced ? 0 : 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="text-sm font-mono font-bold text-black tracking-[0.18em] uppercase"
            >
              Based in India
            </motion.p>

            {/* Big italic serif tagline — rotating set, see TaglineRotator */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold italic text-black leading-[1.1]">
              <TaglineRotator />
            </h2>

            {/* Bio */}
            <p className="text-[15px] font-bold leading-[1.75] text-black/90 max-w-md">
              Full-stack developer passionate about creating clean, scalable, and user-friendly applications. Specializing in Python, Django, React, and modern web architectures.
            </p>

            {/* Experience hint — one subtle credibility line; details live in About */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: reduced ? 0 : 0.5, delay: reduced ? 0 : 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-2.5 text-[11px] font-mono font-bold text-black/95 tracking-wide"
            >
              <span aria-hidden="true" className="inline-block w-4 h-px bg-black/35" />
              <span>
                Real-world experience — production backend work &amp; open source
              </span>
            </motion.div>

            {/* Location + role */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: reduced ? 0 : 0.5, delay: reduced ? 0 : 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-3 text-xs font-mono font-bold text-black/95"
            >
              <span>Kanpur, India</span>
              <span className="w-1 h-1 rounded-full bg-emerald-400/90" />
              <span>Full-Stack Developer</span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: reduced ? 0 : 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-5 h-8 rounded-full border border-black/25 flex items-start justify-center p-1">
          <motion.div
            animate={reduced ? { y: 0 } : { y: [0, 8, 0] }}
            transition={reduced ? { duration: 0 } : { duration: 2, repeat: Infinity }}
            className="w-1 h-2 rounded-full bg-emerald-400/75"
          />
        </div>
      </motion.div>
    </section>
  );
}
