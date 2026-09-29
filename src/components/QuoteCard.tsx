"use client";
import { motion, useReducedMotion } from 'framer-motion';
import { useRef } from 'react';
import { quote } from '../data/content';

/**
 * Frosted-glass quote card with three layers of motion:
 *  1. Aurora — colour blobs drifting inside the glass (pure CSS, globals.css)
 *  2. Spotlight — a soft light patch that follows the pointer across the pane
 *  3. Word reveal — the verse materialises word-by-word (blur → sharp) on
 *     scroll, followed by a one-shot glare sweep across the glass.
 * Everything collapses gracefully under prefers-reduced-motion.
 */
export default function QuoteCard() {
  const reduced = useReducedMotion();
  const cardRef = useRef<HTMLDivElement>(null);
  const words = quote.text.split(' ');
  const revealEnd = Math.min(words.length * 0.05, 1.4);

  /* spotlight: write CSS vars directly on the node — no React re-render */
  const trackPointer = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty('--mx', `${e.clientX - r.left}px`);
    el.style.setProperty('--my', `${e.clientY - r.top}px`);
  };

  return (
    <div
      ref={cardRef}
      onPointerMove={trackPointer}
      className="quote-canvas relative rounded-2xl overflow-hidden max-w-3xl mx-auto aspect-[21/9]"
    >
      {/* 1 — aurora blobs drifting behind the glass */}
      <span aria-hidden className="quote-blob quote-blob--emerald" />
      <span aria-hidden className="quote-blob quote-blob--rose" />
      <span aria-hidden className="quote-blob quote-blob--gold" />

      {/* 2 — pointer spotlight (visible on hover) */}
      <span aria-hidden className="quote-spotlight" />

      {/* oversized editorial quotation mark */}
      <span
        aria-hidden
        className="pointer-events-none absolute left-5 top-1 z-[3] select-none font-display text-[5.5rem] leading-none text-[rgb(var(--t-ink)/0.14)]"
      >
        &ldquo;
      </span>

      {/* 3 — verse reveal + attribution */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center">
        <blockquote className="text-lg sm:text-xl font-display italic text-[rgb(var(--t-ink)/0.92)] leading-relaxed max-w-lg text-center px-6 mb-2">
          {reduced ? (
            <>&ldquo;{quote.text}&rdquo;</>
          ) : (
            words.map((w, i) => (
              <motion.span
                key={`${w}-${i}`}
                className="inline-block whitespace-pre"
                initial={{ opacity: 0, y: 14, filter: 'blur(7px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  duration: 0.55,
                  delay: i * 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {w}
                {' '}
              </motion.span>
            ))
          )}
        </blockquote>
        <motion.div
          initial={reduced ? undefined : { opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, delay: revealEnd + 0.15 }}
          className="text-center"
        >
          <div className="text-xs font-mono font-medium text-[rgb(var(--t-ink)/0.7)] mb-1">
            {quote.lang}
          </div>
          <div className="text-xs font-mono font-medium text-[rgb(var(--t-ink)/0.62)]">
            — {quote.source}
          </div>
        </motion.div>
      </div>

      {/* one-shot glare sweep when the card scrolls into view */}
      {!reduced && (
        <motion.span
          aria-hidden
          className="quote-sheen"
          initial={{ x: '-130%', rotate: 10 }}
          whileInView={{ x: '130%', rotate: 10 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 1.5, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        />
      )}
    </div>
  );
}
