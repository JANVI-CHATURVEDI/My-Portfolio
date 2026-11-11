"use client";

import { useEffect, useRef, useState } from 'react';

export type ArrowDirection = 'down' | 'up' | 'left' | 'right' | 'upRight' | 'downLeft';

type Geometry = {
  /** The shaft, drawn first. */
  shaft: string;
  /** The arrowhead, drawn right after the shaft lands. */
  head: string;
  /** CSS loop class + travel amounts for the continuous motion. */
  loopClass: 'da-loop-y' | 'da-loop-x' | 'da-loop-xy';
  vars: { '--da-x'?: string; '--da-y'?: string };
};

const GEOMETRY: Record<ArrowDirection, Geometry> = {
  down: { shaft: 'M24 6 V33', head: 'M15 25 L24 34 L33 25', loopClass: 'da-loop-y', vars: { '--da-y': '5px' } },
  up: { shaft: 'M24 42 V15', head: 'M15 23 L24 14 L33 23', loopClass: 'da-loop-y', vars: { '--da-y': '-5px' } },
  right: { shaft: 'M6 24 H33', head: 'M25 15 L34 24 L25 33', loopClass: 'da-loop-x', vars: { '--da-x': '5px' } },
  left: { shaft: 'M42 24 H15', head: 'M23 15 L14 24 L23 33', loopClass: 'da-loop-x', vars: { '--da-x': '-5px' } },
  upRight: {
    shaft: 'M11 37 L35 13',
    head: 'M24 13 H35 V24',
    loopClass: 'da-loop-xy',
    vars: { '--da-x': '4px', '--da-y': '-4px' },
  },
  downLeft: {
    shaft: 'M37 11 L13 35',
    head: 'M24 35 H13 V24',
    loopClass: 'da-loop-xy',
    vars: { '--da-x': '-4px', '--da-y': '4px' },
  },
};

interface DrawnArrowProps {
  /** Which way the arrow points. */
  direction?: ArrowDirection;
  /** Seconds before the stroke starts drawing — sync it with the build stagger. */
  delay?: number;
  /** SVG box size in px. */
  size?: number;
  strokeWidth?: number;
  className?: string;
  /** Seconds the shaft takes to draw. */
  drawDuration?: number;
  /** Continuous motion once the arrow is fully built. */
  loop?: 'bounce' | 'none';
  /** Draw on mount (hero build) or when scrolled into view (sections). */
  trigger?: 'mount' | 'view';
}

/**
 * An arrow that feels *built* live: the shaft stroke-draws first, the head
 * snaps on right behind it, and once fully constructed the whole arrow keeps
 * moving automatically to guide the eye.
 *
 * The draw + travel are pure CSS keyframes (globals.css `.da-*`), started by
 * adding the `da-on` class — on mount, or via IntersectionObserver for
 * scroll-triggered arrows. CSS is used because framer-motion renders SVG
 * path/transform animations at their final state without playing them.
 */
export default function DrawnArrow({
  direction = 'down',
  delay = 0,
  size = 32,
  strokeWidth = 3,
  className = '',
  drawDuration = 0.55,
  loop = 'bounce',
  trigger = 'mount',
}: DrawnArrowProps) {
  const geo = GEOMETRY[direction];
  const headDelay = delay + drawDuration * 0.85;
  const buildTime = delay + drawDuration + 0.2;

  const ref = useRef<SVGSVGElement>(null);
  const [on, setOn] = useState(trigger === 'mount');

  useEffect(() => {
    if (on) return;
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') {
      setOn(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setOn(true);
            io.disconnect();
          }
        }
      },
      { threshold: 0.6 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [on]);

  const cssVars = {
    ...geo.vars,
    '--da-delay': `${delay}s`,
    '--da-dur': `${drawDuration}s`,
    '--da-head-delay': `${headDelay}s`,
    '--da-loop-delay': `${buildTime}s`,
  } as React.CSSProperties;

  return (
    <svg
      ref={ref}
      viewBox="0 0 48 48"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`${on ? `da-on ${loop === 'bounce' ? geo.loopClass : ''}` : ''} ${className}`}
      style={cssVars}
      aria-hidden="true"
      focusable="false"
    >
      <path className="da-shaft" d={geo.shaft} pathLength={1} strokeDasharray="1" />
      <path className="da-head" d={geo.head} pathLength={1} strokeDasharray="1" />
    </svg>
  );
}
