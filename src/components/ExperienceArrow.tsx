'use client';

import { useId } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

/**
 * Hand-drawn swoosh arrow used by the Experience section bullets.
 *
 * - The tapered body is a filled organic silhouette (thin tail -> bold belly
 *   -> slim neck), so it reads like a brush stroke rather than a font glyph.
 * - It is revealed by a mask whose centerline stroke "draws" itself via
 *   stroke-dasharray/stroke-dashoffset when the parent motion component
 *   switches to the "show" variant.
 * - The arrowhead is a separate shape that pops in (fade + short scale)
 *   right after the stroke lands.
 *
 * `delay` is the draw-in delay in seconds, relative to the parent's
 * "show" trigger (scroll reveal).
 */
export default function ExperienceArrow({ delay = 0 }: { delay?: number }) {
  const reduced = useReducedMotion();
  const maskId = `swoosh-${useId().replace(/:/g, '')}`;

  // Centerline for the draw-on reveal. Extended slightly past both ends of
  // the body so the butt-capped reveal front never leaves a notch.
  const revealD = 'M2.17 13.75L3 15C9 24 24 18 34 12L35.3 11.2';

  // Tapered brush-stroke silhouette: thin tail -> bold belly -> slim neck.
  // The neck extends slightly past the head's base so the arrowhead
  // covers it cleanly (no gap at the junction).
  const bodyD =
    'M2.54 15.31C3.3 16.46 3.88 17.83 5.02 18.61C6.17 19.39 7.2 20.48 8.55 20.82C11.42 21.55 14.51 21.81 17.41 21.24C20.58 20.62 23.52 19.16 26.48 17.87C29.86 16.4 32.75 13.98 35.91 12.08L34.83 10.28C31.77 12.11 28.35 13.24 25.08 14.66C22.39 15.83 19.47 16.45 16.59 17.01C14.23 17.47 11.72 18.11 9.39 17.52C8.36 17.26 7.15 17.39 6.27 16.79C5.31 16.14 4.1 15.67 3.46 14.7Q2.5 14.55 2.54 15.31Z';

  // Sharp arrowhead with a subtly concave base.
  const headD = 'M38.6 8.9L32.4 8.4Q35.6 11.1 36.2 14.8Z';

  const maskPath = (
    <motion.path
      d={revealD}
      stroke="#fff"
      strokeWidth={7}
      fill="none"
      pathLength={1}
      strokeDasharray="1"
      variants={{
        hidden: { strokeDashoffset: 1 },
        show: {
          strokeDashoffset: 0,
          transition: {
            duration: reduced ? 0 : 0.5,
            delay: reduced ? 0 : delay,
            ease: [0.65, 0, 0.35, 1],
          },
        },
      }}
    />
  );

  const headPath = (
    <motion.path
      d={headD}
      fill="currentColor"
      variants={{
        hidden: { opacity: 0, scale: 0.55 },
        show: {
          opacity: 1,
          scale: 1,
          transition: {
            duration: reduced ? 0 : 0.16,
            delay: reduced ? 0 : delay + 0.4,
            ease: [0.22, 1, 0.36, 1],
          },
        },
      }}
    />
  );

  return (
    <span className="exp-arrow" aria-hidden="true">
      <svg viewBox="0 0 40 28" fill="none">
        <defs>
          <mask
            id={maskId}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="40"
            height="28"
          >
            {maskPath}
          </mask>
        </defs>
        <g mask={`url(#${maskId})`}>
          <path d={bodyD} fill="currentColor" />
        </g>
        {headPath}
      </svg>
    </span>
  );
}
