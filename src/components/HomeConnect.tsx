"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { quote } from '../data/content';

export default function HomeConnect() {
  return (
    <section className="section-rose relative py-20">
      <div className="max-w-6xl mx-auto px-6 lg:pl-24">
        {/* Connect CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-10 lg:p-14 text-center mb-16 relative overflow-hidden"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif italic text-white relative z-10 mb-6">
            Let's build something <br />
            <span className="font-display text-emerald-400">extraordinary together.</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-4 relative z-10">
            <Link
              href="/contact"
              className="btn-primary px-6 py-3 rounded-full font-semibold text-sm hover:-translate-y-[2px] transition-all duration-300"
            >
              Get In Touch <ArrowUpRight size={14} />
            </Link>
            <Link
              href="/projects"
              className="btn-ghost px-6 py-3 rounded-full font-medium hover:-translate-y-[2px] transition-all duration-300"
            >
              View Projects <ArrowUpRight size={14} />
            </Link>
          </div>
        </motion.div>

        {/* Custom CSS quote canvas — warm espresso, emerald glow & rings */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <div className="quote-canvas relative rounded-2xl overflow-hidden max-w-3xl mx-auto aspect-[21/9]">
            {/* oversized editorial quotation mark */}
            <span
              aria-hidden
              className="pointer-events-none absolute left-5 top-1 z-[1] select-none font-display text-[5.5rem] leading-none text-[rgb(var(--t-ink)/0.14)]"
            >
              &ldquo;
            </span>
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center">
              <blockquote className="text-lg sm:text-xl font-display italic text-[rgb(var(--t-ink)/0.92)] leading-relaxed max-w-lg text-center px-6 mb-2">
                &ldquo;{quote.text}&rdquo;
              </blockquote>
              <div className="text-xs font-mono font-medium text-[rgb(var(--t-ink)/0.7)] mb-1">{quote.lang}</div>
              <div className="text-xs font-mono font-medium text-[rgb(var(--t-ink)/0.62)]">— {quote.source}</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
