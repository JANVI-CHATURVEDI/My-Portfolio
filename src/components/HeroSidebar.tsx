"use client";
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { socials } from '../data/content';
import { SWARM_EASE } from '../utils/swarmMotion';

export default function HeroSidebar() {
  const reduced = useReducedMotion();
  const getUrl = (label: string) => socials.find(s => s.label === label)?.url || '#';

  const icons = [
    { icon: <Github size={18} />, url: getUrl('GitHub'), label: 'GitHub' },
    { icon: <Linkedin size={18} />, url: getUrl('LinkedIn'), label: 'LinkedIn' },
    { icon: <Twitter size={18} />, url: getUrl('X / Twitter'), label: 'X / Twitter' },
    { icon: <Mail size={18} />, url: getUrl('Email'), label: 'Email' },
  ];

  return (
    <motion.aside
      initial={{ opacity: 0, x: -18, scale: 0.78 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{
        duration: reduced ? 0 : 0.5,
        delay: reduced ? 0 : 0.3,
        ease: SWARM_EASE,
      }}
      className="fixed left-8 top-0 bottom-0 hidden lg:flex flex-col items-center justify-center z-20"
    >
      <div className="rail-pill flex flex-col items-center gap-5 px-2 py-3">
        {icons.map((item, i) => (
          <motion.a
            key={i}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.label}
            initial={{ opacity: 0, scale: 0.4 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: reduced ? 0 : 0.55 + i * 0.09,
              duration: reduced ? 0 : 0.4,
              ease: SWARM_EASE,
            }}
            className="group text-white/75 hover:text-emerald-400 transition-colors duration-300"
          >
            <span className="block transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-[2px]">
              {item.icon}
            </span>
          </motion.a>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{
          delay: reduced ? 0 : 1,
          duration: reduced ? 0 : 0.45,
          ease: SWARM_EASE,
        }}
        className="flex flex-col items-center mt-6"
      >
        <div className="w-px h-16 self-center bg-gradient-to-b from-[rgb(var(--t-accent)/0.5)] to-transparent" />
        <div className="relative mt-3 h-32 w-6">
          <Link
            href="/contact"
            className="rail-pill absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-90 origin-center text-[10px] font-mono font-semibold tracking-[0.25em] text-white/75 px-2 py-1 whitespace-nowrap hover:text-emerald-400 transition-colors duration-300"
          >
            Contact Me
          </Link>
        </div>
      </motion.div>
    </motion.aside>
  );
}
