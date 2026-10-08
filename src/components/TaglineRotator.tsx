"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { heroTaglines } from "../data/content";

const HOLD_MS = 3800;
const EASE = [0.22, 1, 0.36, 1] as const;

type Phase = "active" | "exit" | "wait";

/**
 * Rotating hero tagline. Every phrase is stacked in one grid cell so the
 * container height is constant — zero layout shift between rotations.
 * Outgoing phrase slides up and fades first, incoming rises in just after,
 * so two phrases are never legible on top of each other.
 * Reduced motion: stays on the first phrase, no rotation.
 */
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
        const phase: Phase = idx === cur ? "active" : idx === prev ? "exit" : "wait";

        const animate =
          phase === "active"
            ? { opacity: 1, y: 0 }
            : phase === "exit"
            ? { opacity: 0, y: -14 }
            : { opacity: 0, y: 14 };

        const transition =
          phase === "active"
            ? { duration: reduced ? 0 : 0.45, delay: reduced ? 0 : 0.18, ease: EASE }
            : phase === "exit"
            ? { duration: reduced ? 0 : 0.22, ease: EASE }
            : { duration: 0.3, ease: EASE };

        return (
          <motion.span
            key={line.top}
            aria-hidden={phase !== "active"}
            className="col-start-1 row-start-1 block"
            initial={false}
            animate={animate}
            transition={transition}
          >
            {line.top}
            <br />
            <span className="font-display text-[#B45D67]">{line.accent}</span>
          </motion.span>
        );
      })}
    </span>
  );
}
