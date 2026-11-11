"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import BrandMark from './BrandMark';
import BrandWordmark from './BrandWordmark';
import { SWARM_EASE } from '../utils/swarmMotion';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const reduced = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close the mobile menu with Escape, and drop it if the viewport grows to
  // the desktop breakpoint while it's open.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onResize);
    };
  }, [open]);

  return (
    <nav className={`swarm-nav fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-[var(--nav-bg-solid)] backdrop-blur-xl border-b border-white/5' : 'bg-[var(--nav-bg)] backdrop-blur-md'
    }`}>
      <div className="max-w-6xl mx-auto px-6 lg:pl-24 h-16 flex items-center justify-between">
        <Link href="/" aria-label="Janvi — home" className="group brand-pop flex min-h-[44px] items-center gap-2.5 py-2">
          <BrandMark size={28} className="brand-mark text-emerald-400" />
          <BrandWordmark
            height={14}
            className="text-white/80 group-hover:text-white transition-colors duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
          />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? 'page' : undefined}
                className={`relative nav-pop-link text-sm font-medium tracking-wide transition-colors duration-300 ${
                  active ? 'text-white' : 'text-white/80 hover:text-white'
                }`}
              >
                {link.label}
                {active && (
                  <motion.span
                    layoutId="nav-active"
                    aria-hidden="true"
                    className="absolute left-0 right-0 -bottom-2 h-[2px] rounded-full bg-emerald-400/90"
                    transition={{ duration: reduced ? 0 : 0.3, ease: [0.22, 1, 0.36, 1] }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        <button
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-nav"
          className="md:hidden -mr-3 flex h-11 w-11 items-center justify-center rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors duration-300"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-white/5 bg-[var(--nav-bg-solid)] backdrop-blur-xl"
          >
            <div id="mobile-nav" className="px-6 py-2 flex flex-col">
              {navLinks.map((link, i) => {
                const active = pathname === link.href;
                return (
                  <motion.span
                    key={link.href}
                    initial={{ opacity: 0, y: 12, scale: 0.92 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{
                      delay: reduced ? 0 : 0.05 + i * 0.06,
                      duration: reduced ? 0 : 0.4,
                      ease: SWARM_EASE,
                    }}
                    className="block"
                  >
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      aria-current={active ? 'page' : undefined}
                      className={`relative flex min-h-[44px] w-full items-center text-[15px] font-medium transition-colors duration-300 ${
                        active ? 'text-white' : 'text-white/75 hover:text-white'
                      }`}
                    >
                      {link.label}
                      {active && (
                        <span
                          aria-hidden="true"
                          className="absolute left-0 right-0 bottom-1 h-[2px] rounded-full bg-emerald-400/90"
                        />
                      )}
                    </Link>
                  </motion.span>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
