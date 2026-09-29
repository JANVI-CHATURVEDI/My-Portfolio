"use client";
import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion';

/**
 * Blend-mode cursor: an exact-following emerald dot + a springy white ring
 * that inflates over anything interactive. Only activates on precise pointers
 * (mouse/trackpad) and never under prefers-reduced-motion — otherwise the
 * native cursor stays untouched. Enabling it adds `custom-cursor` to <html>,
 * which hides the OS cursor in globals.css.
 */
export default function CustomCursor() {
  const reduced = useReducedMotion();
  const [active, setActive] = useState(false);
  const [hot, setHot] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  /* ring lags slightly behind the dot for a fluid, springy feel */
  const ringX = useSpring(x, { stiffness: 420, damping: 34, mass: 0.7 });
  const ringY = useSpring(y, { stiffness: 420, damping: 34, mass: 0.7 });

  useEffect(() => {
    if (reduced) return;
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (!fine) return;

    setActive(true);
    const root = document.documentElement;
    root.classList.add('custom-cursor');

    const hotRef = { current: false };
    const move = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const t = e.target as HTMLElement | null;
      const next = !!t?.closest?.('a, button, [role="button"], [data-cursor="hot"]');
      if (next !== hotRef.current) {
        hotRef.current = next;
        setHot(next);
      }
    };
    const leave = () => setHot(false);

    window.addEventListener('pointermove', move, { passive: true });
    document.addEventListener('pointerleave', leave);
    return () => {
      window.removeEventListener('pointermove', move);
      document.removeEventListener('pointerleave', leave);
      root.classList.remove('custom-cursor');
    };
  }, [reduced, x, y]);

  if (!active) return null;

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[9999]">
      {/* exact dot */}
      <motion.span
        style={{ x, y, translateX: '-50%', translateY: '-50%' }}
        className="absolute left-0 top-0 block h-1.5 w-1.5 rounded-full bg-emerald-400"
      />
      {/* trailing ring — blend-difference so it reads on any palette */}
      <motion.span
        style={{ x: ringX, y: ringY, translateX: '-50%', translateY: '-50%', mixBlendMode: 'difference' }}
        animate={{ scale: hot ? 1.9 : 1, opacity: hot ? 0.95 : 0.6 }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
        className="absolute left-0 top-0 block h-8 w-8 rounded-full border border-white"
      />
    </div>
  );
}
