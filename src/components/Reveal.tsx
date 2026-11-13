"use client";

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { REVEAL_EASE } from '../utils/swarmMotion';

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  scale?: number;
  duration?: number;
  className?: string;
  as?: 'div' | 'article';
}

export default function Reveal({
  children,
  delay = 0,
  y = 80,
  scale = 0.92,
  duration = 1.1,
  className,
  as = 'div',
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });
  const MotionTag: typeof motion.div =
    as === 'article' ? (motion.article as typeof motion.div) : motion.div;

  return (
    <MotionTag
      ref={ref}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y, scale }}
      transition={inView ? { duration, delay, ease: REVEAL_EASE } : { duration: 0 }}
      className={className}
    >
      {children}
    </MotionTag>
  );
}
