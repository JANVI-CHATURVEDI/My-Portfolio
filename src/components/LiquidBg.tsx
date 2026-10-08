"use client";

import dynamic from 'next/dynamic';
import { useEffect, useRef, useState } from 'react';

const LiquidEther = dynamic(() => import('./LiquidEther'), { ssr: false });

const PALETTE = ['#9B7464', '#C18D8D', '#A4A48F'];

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
      className="fixed inset-0 z-30 pointer-events-none opacity-[0.07]"
    >
      {active ? (
        <LiquidEther colors={PALETTE} resolution={0.4} iterationsPoisson={16} />
      ) : null}
    </div>
  );
}
