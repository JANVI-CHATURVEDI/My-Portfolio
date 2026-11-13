"use client";
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import Magnetic from './Magnetic';
import QuoteCard from './QuoteCard';
import Reveal from './Reveal';

export default function HomeConnect() {
  return (
    <section className="section-rose contact-ground relative py-14 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:pl-24">
        <Reveal y={60} duration={0.9} className="glass rounded-3xl p-6 sm:p-10 lg:p-14 text-center mb-12 md:mb-16 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />
          <Reveal delay={0.15} y={40} duration={0.9}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif italic text-[#231A18] relative z-10 mb-6">
              Let's build something <br />
              <span className="font-display text-emerald-400">extraordinary together.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.25} y={30} duration={0.8} className="flex flex-wrap justify-center gap-4 relative z-10">
            <Magnetic>
              <Link
                href="/contact"
                className="btn-primary px-6 py-3 rounded-full font-semibold text-sm hover:-translate-y-[2px] transition-all duration-300"
              >
                Get In Touch <ArrowUpRight size={14} />
              </Link>
            </Magnetic>
            <Magnetic>
              <Link
                href="/projects"
                className="btn-ghost px-6 py-3 rounded-full font-medium hover:-translate-y-[2px] transition-all duration-300"
              >
                View Projects <ArrowUpRight size={14} />
              </Link>
            </Magnetic>
          </Reveal>
        </Reveal>

        <Reveal delay={0.2} y={60} duration={0.9} className="mb-10">
          <QuoteCard />
        </Reveal>
      </div>
    </section>
  );
}
