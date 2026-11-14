"use client";
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { useRef } from 'react';
import { quote } from '../data/content';
import { SWARM_EASE } from '../utils/swarmMotion';

export default function QuoteCard() {
  const reduced = useReducedMotion();
  const cardRef = useRef<HTMLElement>(null);
  const inView = useInView(cardRef, { once: true, amount: 0.35 });
  const words = quote.text.split(' ');

  return (
    <figure
      ref={cardRef}
      className="relative border border-line bg-surface-2 p-6 sm:p-8 lg:p-9"
    >
      <span
        aria-hidden
        className="pointer-events-none absolute -top-3 left-5 select-none font-display text-[5rem] leading-none text-[rgb(var(--t-accent))]"
      >
        &ldquo;
      </span>

      <blockquote className="relative mt-9 font-serif text-[1.1rem] italic leading-[1.55] sm:text-xl">
        {reduced ? (
          <>&ldquo;{quote.text}&rdquo;</>
        ) : (
          words.map((word, i) => (
            <motion.span
              key={`${word}-${i}`}
              className="inline-block whitespace-pre"
              initial={false}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
              transition={{ duration: 0.32, delay: i * 0.02, ease: SWARM_EASE }}
            >
              {word}
              {' '}
            </motion.span>
          ))
        )}
      </blockquote>

      <figcaption className="mt-8 border-t border-line pt-4">
        <p className="font-serif text-sm leading-relaxed text-muted">{quote.lang}</p>
        <p className="eyebrow mt-3 text-muted">— {quote.source}</p>
      </figcaption>
    </figure>
  );
}
