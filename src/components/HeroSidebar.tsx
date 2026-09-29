"use client";
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { socials } from '../data/content';

export default function HeroSidebar() {
  const getUrl = (label: string) => socials.find(s => s.label === label)?.url || '#';

  const icons = [
    { icon: <Github size={18} />, url: getUrl('GitHub'), label: 'GitHub' },
    { icon: <Linkedin size={18} />, url: getUrl('LinkedIn'), label: 'LinkedIn' },
    { icon: <Twitter size={18} />, url: getUrl('X / Twitter'), label: 'X / Twitter' },
    { icon: <Mail size={18} />, url: getUrl('Email'), label: 'Email' },
  ];

  return (
    <motion.aside
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="fixed left-8 top-0 bottom-0 hidden lg:flex flex-col items-center justify-center z-20"
    >
      {/* Social icons stack — soft surface pill keeps the rail legible
          over every section palette (light or dark). */}
      <div className="rail-pill flex flex-col items-center gap-5 px-2 py-3">
        {icons.map((item, i) => (
          <motion.a
            key={i}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.label}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + i * 0.1 }}
            className="group text-white/75 hover:text-emerald-400 transition-colors duration-300"
          >
            <span className="block transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-[2px]">
              {item.icon}
            </span>
          </motion.a>
        ))}
      </div>

      {/* Vertical line + Contact Me (rotated opposite).
          The label lives in a fixed-size slot matching its rotated
          footprint, so the line and the pill share one exact center
          axis and the line can't overlap the rotated text. */}
      <div className="flex flex-col items-center mt-6">
        <div className="w-px h-16 self-center bg-gradient-to-b from-[rgb(var(--t-accent)/0.5)] to-transparent" />
        <div className="relative mt-3 h-32 w-6">
          <Link
            href="/contact"
            className="rail-pill absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-90 origin-center text-[10px] font-mono font-semibold tracking-[0.25em] text-white/75 px-2 py-1 whitespace-nowrap hover:text-emerald-400 transition-colors duration-300"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </motion.aside>
  );
}
