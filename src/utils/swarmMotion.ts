import type { Transition, Variants } from 'framer-motion';

export const SWARM_EASE: [number, number, number, number] = [0.18, 1.35, 0.28, 1];
export const SNAP_EASE: [number, number, number, number] = [0.2, 1.3, 0.2, 1];
export const DRAW_EASE: [number, number, number, number] = [0.65, 0, 0.35, 1];

export const build = (staggerChildren = 0.085, delayChildren = 0.08): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren, delayChildren } },
});

export const snap: Variants = {
  hidden: { opacity: 0, scale: 0.84, filter: 'blur(10px)' },
  show: {
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',
    transition: { duration: 0.5, ease: SWARM_EASE },
  },
};

export const snapBig: Variants = {
  hidden: { opacity: 0, scale: 0.88 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.55, ease: SWARM_EASE } },
};

export const charSnap: Variants = {
  hidden: { opacity: 0, scale: 0.7, filter: 'blur(4px)' },
  show: {
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',
    transition: { duration: 0.3, ease: SNAP_EASE },
  },
};

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

export const popT = (delay = 0, duration = 0.5): Transition => ({
  duration,
  delay,
  ease: SWARM_EASE,
});
