"use client";
import { motion, type Variants } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import Magnetic from './Magnetic';
import QuoteCard from './QuoteCard';
import DrawnArrow from './DrawnArrow';
import { SWARM_EASE, POP, popT, snap } from '../utils/swarmMotion';

/** The glass card lands as a block, then its contents are built inside it. */
const ctaCard: Variants = {
  hidden: { opacity: 0, scale: 0.9, y: 34 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: SWARM_EASE,
      staggerChildren: 0.1,
      delayChildren: 0.14,
    },
  },
};

export default function HomeConnect() {
  return (
    <section className="section-rose contact-ground relative py-14 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:pl-24">
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={ctaCard}
          viewport={{ once: true, amount: 0.35 }}
          className="glass rounded-3xl p-6 sm:p-10 lg:p-14 text-center mb-12 md:mb-16 relative overflow-hidden"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />
          <motion.h2
            variants={snap}
            className="text-3xl sm:text-4xl lg:text-5xl font-serif italic text-[#231A18] relative z-10 mb-6"
          >
            Let's build something <br />
            <span className="font-display text-emerald-400">extraordinary together.</span>
          </motion.h2>

          {/* Built live between the headline and the buttons — points the way. */}
          <motion.div variants={snap} className="relative z-10 -mt-3 mb-1 flex justify-center">
            <DrawnArrow
              direction="down"
              delay={0.25}
              size={40}
              strokeWidth={4}
              trigger="view"
              className="text-[#2C221E]"
            />
          </motion.div>

          <motion.div variants={snap} className="flex flex-wrap justify-center gap-4 relative z-10">
            <Magnetic>
              <Link
                href="/contact"
                className="btn-primary px-6 py-3 rounded-full font-semibold text-sm hover:-translate-y-[2px] transition-all duration-300"
              >
                Get In Touch <ArrowUpRight size={14} />
              </Link>
            </Magnetic>
            <Magnetic>
              <Link
                href="/projects"
                className="btn-ghost px-6 py-3 rounded-full font-medium hover:-translate-y-[2px] transition-all duration-300"
              >
                View Projects <ArrowUpRight size={14} />
              </Link>
            </Magnetic>
          </motion.div>
        </motion.div>

        <motion.div
          initial={POP.block.initial}
          whileInView={POP.block.reveal}
          transition={popT(0.2, 0.55)}
          viewport={{ once: true }}
          className="mb-10"
        >
          <QuoteCard />
        </motion.div>
      </div>
    </section>
  );
}
