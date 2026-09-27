"use client";
import { motion } from 'framer-motion';
import { quote } from '../data/content';

export default function QuoteBanner() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: true }}
      className="mt-16 mb-10"
    >
      <div className="quote-canvas relative rounded-2xl overflow-hidden max-w-3xl mx-auto aspect-[21/9]">
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
          <div className="text-xs font-mono font-medium text-emerald-700/80 mb-1">{quote.lang}</div>
          <div className="text-xs font-mono font-medium text-[rgb(var(--t-ink)/0.62)]">— {quote.source}</div>
        </div>
      </div>
    </motion.div>
  );
}
