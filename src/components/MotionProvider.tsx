"use client";

import { MotionConfig } from 'framer-motion';

/**
 * Global reduced-motion policy: when the OS/browser asks for reduced
 * motion, Framer Motion skips every transform/layout animation
 * (slides, scales, the nav-underline layout slide) while opacity/color
 * fades still run. CSS animations are collapsed separately in
 * globals.css. Wrapping here keeps individual components free of
 * per-prop reduced-motion branches that could diverge from the
 * server-rendered markup and break hydration.
 */
export default function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
