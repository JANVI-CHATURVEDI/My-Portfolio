import type { Transition, Variants } from 'framer-motion';

/**
 * “Swarm Rebuild” motion language.
 *
 * Entrances are sudden rather than soft: short durations, a strong attack,
 * a touch of overshoot, and a quick materialise-blur so every element feels
 * like it was *placed* by an invisible agent instead of faded in. Containers
 * stagger their children so the page assembles itself in sequence.
 */

/** Sharp attack + overshoot — the core snap. (y > 1 overshoots before settling.) */
export const SWARM_EASE: [number, number, number, number] = [0.18, 1.35, 0.28, 1];

/** Snappier curve for tiny text and micro-elements. */
export const SNAP_EASE: [number, number, number, number] = [0.2, 1.3, 0.2, 1];

/** Firm, controlled easing for SVG stroke-drawing. */
export const DRAW_EASE: [number, number, number, number] = [0.65, 0, 0.35, 1];

/** Construction container: children snap in one after another. */
export const build = (staggerChildren = 0.085, delayChildren = 0.08): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren, delayChildren } },
});

/** Leaf/text elements: pop in with scale + blur + overshoot. */
export const snap: Variants = {
  hidden: { opacity: 0, scale: 0.84, filter: 'blur(10px)' },
  show: {
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',
    transition: { duration: 0.5, ease: SWARM_EASE },
  },
};

/** Big blocks (cards, portraits): same punch without the blur filter. */
export const snapBig: Variants = {
  hidden: { opacity: 0, scale: 0.88 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.55, ease: SWARM_EASE } },
};

/** Per-character typing pop for the hero name. */
export const charSnap: Variants = {
  hidden: { opacity: 0, scale: 0.7, filter: 'blur(4px)' },
  show: {
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',
    transition: { duration: 0.3, ease: SNAP_EASE },
  },
};

/**
 * Ready-made entrance pairs (kept as plain literal types so they stay
 * cheap for TypeScript to check against framer's huge Target union).
 * Use `reveal` for `animate` (above the fold) or `whileInView` (on scroll).
 */
export const POP = {
  leaf: {
    initial: { opacity: 0, scale: 0.84, filter: 'blur(10px)' },
    reveal: { opacity: 1, scale: 1, filter: 'blur(0px)' },
  },
  block: {
    initial: { opacity: 0, scale: 0.88 },
    reveal: { opacity: 1, scale: 1 },
  },
};

/** Matching punchy transition for the POP pairs (or anything custom). */
export const popT = (delay = 0, duration = 0.5): Transition => ({
  duration,
  delay,
  ease: SWARM_EASE,
});
