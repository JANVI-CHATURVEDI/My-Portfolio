'use client';

import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { heroTaglines } from '../data/content';
import { SWARM_EASE } from '../utils/swarmMotion';

const HOLD_MS = 3800;

type Phase = 'active' | 'exit' | 'wait';

export default function TaglineRotator() {
  const reduced = useReducedMotion();
  const [state, setState] = useState<{ cur: number; prev: number | null }>({
    cur: 0,
    prev: null,
  });

  useEffect(() => {
    if (reduced) return;
    const id = window.setInterval(() => {
      setState((s) => ({ cur: (s.cur + 1) % heroTaglines.length, prev: s.cur }));
    }, HOLD_MS);
    return () => window.clearInterval(id);
  }, [reduced]);

  const { cur, prev } = state;

  return (
    <span className="grid">
      {heroTaglines.map((line, idx) => {
        const phase: Phase = idx === cur ? 'active' : idx === prev ? 'exit' : 'wait';

        const animate =
          phase === 'active'
            ? { opacity: 1, y: 0 }
            : phase === 'exit'
            ? { opacity: 0, y: -14 }
            : { opacity: 0, y: 14 };

        const transition =
          phase === 'active'
            ? { duration: reduced ? 0 : 0.4, delay: reduced ? 0 : 0.1, ease: SWARM_EASE }
            : phase === 'exit'
            ? { duration: reduced ? 0 : 0.16, ease: SWARM_EASE }
            : { duration: 0.25, ease: SWARM_EASE };

        return (
          <motion.span
            key={line.top}
            aria-hidden={phase !== 'active'}
            className="col-start-1 row-start-1 block"
            initial={false}
            animate={animate}
            transition={transition}
          >
            {line.top}
            <br />
            <span className="accent-italic">{line.accent}</span>
          </motion.span>
        );
      })}
    </span>
  );
}
