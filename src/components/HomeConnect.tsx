"use client";
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import Magnetic from './Magnetic';
import QuoteCard from './QuoteCard';
import Reveal from './Reveal';

export default function HomeConnect() {
  return (
    <section id="contact" className="theme-paper relative overflow-hidden py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12">
        <div className="flex flex-wrap items-end justify-between gap-4 border-b border-line pb-4">
          <span className="eyebrow accent-label">07 — Contact</span>
          <span className="eyebrow text-muted">Open for work · 2026</span>
        </div>

        <div className="mt-10 grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Reveal y={36} scale={1} duration={0.9}>
              <h2 className="t-display">
                Let&apos;s build something <span className="accent-italic">extraordinary</span>{' '}
                together.
              </h2>
            </Reveal>

            <Reveal y={20} scale={1} delay={0.1} duration={0.8}>
              <p className="mt-6 max-w-md text-sm leading-relaxed text-muted">
                Have a project in mind, a role to fill, or just want to discuss tech? My inbox is
                always open.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Magnetic>
                  <Link href="/contact" className="btn btn-solid">
                    Get in touch <ArrowUpRight size={15} />
                  </Link>
                </Magnetic>
                <Magnetic>
                  <Link href="/projects" className="btn btn-outline">
                    View projects <ArrowUpRight size={15} />
                  </Link>
                </Magnetic>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal y={30} scale={1} delay={0.15} duration={0.85}>
              <QuoteCard />
            </Reveal>
          </div>
        </div>

        <div className="mt-16 overflow-hidden border-t border-line pt-6">
          <span
            aria-hidden
            className="outline-type block whitespace-nowrap font-display text-[clamp(2rem,7.6vw,6.5rem)] font-semibold uppercase leading-[0.85] tracking-[-0.03em]"
          >
            Janvi Chaturvedi
          </span>
        </div>
      </div>
    </section>
  );
}
