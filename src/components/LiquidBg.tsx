"use client";

import dynamic from 'next/dynamic';
import { useEffect, useRef, useState } from 'react';

// three.js is ~700 kB — load it only after mount, never on the server.
const LiquidEther = dynamic(() => import('./LiquidEther'), { ssr: false });

// Brand palette sampled by fluid speed: deep emerald (ambient drift) →
// emerald → cyan (fast strokes) — matches the emerald→cyan gradient CTAs.
const PALETTE = ['#064e3b', '#34d399', '#22d3ee'];

/**
 * Liquid-ether backdrop (React Bits). Renders a fixed, full-viewport layer
 * behind the content of the element it is placed inside:
 *
 *  - mounts only while that region intersects the viewport (on the home page
 *    the region starts below the hero, so the first slide stays untouched);
 *  - never renders under prefers-reduced-motion;
 *  - z-0 + pointer-events-none: content layers sit above it and it can never
 *    swallow clicks.
 */
export default function LiquidBg() {
  const hostRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;
    const region = host.parentElement;
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    let reduced = mq.matches;
    let inView = false;
    const sync = () => setActive(!reduced && inView);

    // -10% bottom rootMargin: the region must reach 90% into the viewport
    // before mounting — edge contact with the hero would otherwise count as
    // an intersection and put liquid over the first slide.
    const io = new IntersectionObserver(
      (entries) => {
        inView = entries[0].isIntersecting;
        sync();
      },
      { threshold: 0, rootMargin: '0px 0px -10% 0px' }
    );
    if (region) io.observe(region);

    const onMq = () => {
      reduced = mq.matches;
      sync();
    };
    mq.addEventListener('change', onMq);

    return () => {
      io.disconnect();
      mq.removeEventListener('change', onMq);
    };
  }, []);

  return (
    <div
      ref={hostRef}
      aria-hidden="true"
      data-liquid-bg=""
      className="fixed inset-0 z-0 pointer-events-none opacity-50"
    >
      {active ? (
        <LiquidEther colors={PALETTE} resolution={0.4} iterationsPoisson={16} />
      ) : null}
    </div>
  );
}
