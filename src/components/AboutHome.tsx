"use client";
import { ArrowUpRight } from 'lucide-react';
import CountUp from './CountUp';
import Reveal from './Reveal';

const stats = [
  { label: 'Merged PRs', value: 6, suffix: '+' },
  { label: 'Shipped Apps', value: 5, suffix: '+' },
  { label: 'Open Source Orgs', value: 4, suffix: '' },
];

const interests = [
  { icon: '🏅', label: 'Kho-Kho Medalist' },
  { icon: '🎧', label: 'Music Enthusiast' },
  { icon: '🌍', label: 'Open Source Advocate' },
];

export default function AboutHome() {
  return (
    <section id="about" className="theme-ink relative overflow-hidden py-20 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12">
        <div className="flex flex-wrap items-end justify-between gap-4 border-b border-line pb-4">
          <span className="eyebrow accent-label">02 — About</span>
          <span className="eyebrow text-muted">Curious mind. Builder at heart.</span>
        </div>

        <Reveal y={36} scale={1} duration={0.9}>
          <h2 className="t-display mt-8 max-w-4xl">
            A little <span className="accent-italic">about me</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-16 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <Reveal y={24} scale={1} duration={0.8}>
              <div className="max-w-2xl space-y-5 text-[15px] leading-[1.75] text-[rgb(var(--t-fg)/0.82)] sm:text-lg">
                <p>
                  I build practical products end to end: the interface someone actually touches, and
                  the backend quietly holding it together. Most of that work runs on Python, Django,
                  React and PostgreSQL. I care about the unglamorous parts — clean architecture
                  underneath, interfaces that never make anyone think twice.
                </p>
                <p>
                  Right now most of my attention is on CivicConnect, working out how technology can
                  make civic problem-solving easier to take part in. Alongside it I&apos;m going deeper
                  into Java and data structures, and reading up on system design: the fundamentals
                  that decide whether a product survives its own growth.
                </p>
                <p>
                  I contribute to open source in Zulip, CircuitVerse and wger, where the problems are
                  real and the feedback is immediate. Away from the keyboard I&apos;m usually testing
                  some new technology, or following a half-formed idea to see if it earns a project.
                </p>
              </div>
            </Reveal>

            <Reveal y={24} scale={1} delay={0.1} duration={0.8}>
              <div className="mt-10 grid grid-cols-3 gap-4 border-t border-line pt-6">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <div className="t-num">
                      <CountUp to={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="eyebrow mt-2 text-muted">{stat.label}</div>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal y={24} scale={1} delay={0.15} duration={0.8}>
              <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3">
                {interests.map((interest) => (
                  <span key={interest.label} className="eyebrow flex items-center gap-2">
                    <span aria-hidden>{interest.icon}</span>
                    {interest.label}
                  </span>
                ))}
              </div>

              <div className="mt-9">
                <a
                  href="https://drive.google.com/file/d/15Ib6Xr4-UN7ON3BZvNLy9jFr9yXYiLLq/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                >
                  Resume <ArrowUpRight size={14} />
                </a>
              </div>
            </Reveal>
          </div>

          <div className="order-first lg:order-none lg:col-span-5">
            <Reveal y={40} scale={1} delay={0.1} duration={0.9}>
              <div className="relative mx-auto max-w-[340px] lg:mr-0 lg:ml-auto lg:max-w-[360px]">
                <figure className="rotate-[3deg] border border-line-strong bg-surface p-2.5 shadow-[18px_20px_0_0_rgba(0,0,0,0.35)]">
                  <div className="aspect-[735/823] overflow-hidden bg-surface-2">
                    <img
                      src="/images/hero-bg.jpg"
                      alt="Janvi's wall — a guitar, headphones and a wall of posters"
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <figcaption className="px-1 pt-2.5">
                    <p className="eyebrow">Off the clock</p>
                    <p className="eyebrow mt-1 text-muted">Guitar, headphones, printed matter</p>
                  </figcaption>
                </figure>

                <div className="absolute -left-4 bottom-20 w-[70%] max-w-[230px] -rotate-[4deg] border border-[rgb(var(--t-accent))] bg-[rgb(var(--t-bg))] p-4 sm:-left-8">
                  <p className="eyebrow accent-label">Currently building</p>
                  <p className="mt-2 font-serif text-xl italic leading-snug">
                    CivicConnect — AI-assisted civic reporting.
                  </p>
                </div>
              </div>
            </Reveal>

            <p className="mt-12 text-center font-serif text-xl italic text-muted lg:mt-8 lg:text-right">
              Always in the middle of something.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
