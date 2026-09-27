"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";

/**
 * Fast page-level crossfade keyed by route. Exit is quick (160ms) so
 * navigation never feels slow; enter is a soft 300ms fade.
 * Opacity only — no transform — so scrollbars, fixed children and
 * layout are never disturbed mid-transition. Navbar/Sidebar live in the
 * root layout outside this wrapper and stay put like a persistent shell.
 * The wrapper markup is identical on server and client (never branched
 * on reduced-motion — that would break hydration); reduced motion only
 * collapses the durations, so routes swap instantly with no fade.
 */
export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const reduced = useReducedMotion();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { duration: reduced ? 0 : 0.3, ease: [0.22, 1, 0.36, 1] },
        }}
        exit={{
          opacity: 0,
          transition: { duration: reduced ? 0 : 0.16, ease: "easeIn" },
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
