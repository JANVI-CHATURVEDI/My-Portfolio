"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import BrandMark from './BrandMark';
import BrandWordmark from './BrandWordmark';

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
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-[var(--nav-bg-solid)] backdrop-blur-xl border-b border-white/5' : 'bg-[var(--nav-bg)] backdrop-blur-md'
    }`}>
      <div className="max-w-6xl mx-auto px-6 lg:pl-24 h-16 flex items-center justify-between">
        <Link href="/" aria-label="Janvi — home" className="group flex items-center gap-2.5">
          <BrandMark size={28} className="text-emerald-400" />
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
                className={`relative text-sm font-medium tracking-wide transition-colors duration-300 ${
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
          className="md:hidden text-white/80 hover:text-white transition-colors duration-300"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
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
            <div className="px-6 lg:pl-24 py-4 flex flex-col gap-3">
              {navLinks.map((link) => {
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    aria-current={active ? 'page' : undefined}
                    className={`relative w-fit text-sm font-medium py-1 transition-colors duration-300 ${
                      active ? 'text-white' : 'text-white/75 hover:text-white'
                    }`}
                  >
                    {link.label}
                    {active && (
                      <span
                        aria-hidden="true"
                        className="absolute left-0 right-0 -bottom-0.5 h-[2px] rounded-full bg-emerald-400/90"
                      />
                    )}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
