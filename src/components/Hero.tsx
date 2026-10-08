"use client";
import { motion, useReducedMotion } from 'framer-motion';
import TaglineRotator from './TaglineRotator';

export default function Hero() {
  const reduced = useReducedMotion();

  return (
    <section id="home" className="section-rose hero-ground relative z-10 min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-bg.jpg"
          alt=""
          className="w-full h-full object-cover opacity-[0.18]"
          style={{ filter: 'sepia(0.55) saturate(1.05) contrast(1.02)' }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:pl-24 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[80vh]">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: reduced ? 0 : 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative group">
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

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: reduced ? 0 : 0.8, delay: reduced ? 0 : 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="hero-card space-y-4"
          >
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: reduced ? 0 : 0.5, delay: reduced ? 0 : 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-2"
            >
              <span className="status-dot" />
              <span className="text-sm font-mono font-bold text-[#6B5E57] tracking-wide">Available For Work</span>
            </motion.div>

            <h1 className="whitespace-nowrap text-[2rem] sm:text-[2.5rem] font-bold tracking-tight text-[#231A18]">
              Janvi Chaturvedi
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: reduced ? 0 : 0.5, delay: reduced ? 0 : 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="text-sm font-mono font-bold text-[#2C221E] tracking-[0.18em] uppercase"
            >
              Based in India
            </motion.p>

            <h2 className="font-serif italic font-medium text-[1.6rem] leading-[1.3] text-[#A8535A]">
              <TaglineRotator />
            </h2>

            <p className="text-[0.95rem] font-normal leading-[1.6] text-[#4A3E3B] max-w-md">
              Full-stack developer passionate about creating clean, scalable, and user-friendly applications. Specializing in Python, Django, React, and modern web architectures.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: reduced ? 0 : 0.5, delay: reduced ? 0 : 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-2.5 text-[11px] font-mono font-bold text-[#4A3E3B] tracking-wide"
            >
              <span aria-hidden="true" className="inline-block w-4 h-px bg-[#4A3E3B]/40" />
              <span>
                Real-world experience — production backend work &amp; open source
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: reduced ? 0 : 0.5, delay: reduced ? 0 : 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="flex w-fit items-center gap-3 text-xs font-mono font-bold text-[#2C221E] bg-[rgb(0_0_0_/_0.04)] px-3 py-1.5 rounded-full"
            >
              <span>Kanpur, India</span>
              <span className="w-1 h-1 rounded-full bg-emerald-400/90" />
              <span>Full-Stack Developer</span>
            </motion.div>
          </motion.div>
        </div>
      </div>

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
