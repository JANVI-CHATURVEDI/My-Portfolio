"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import BrandMark from './BrandMark';
import BrandWordmark from './BrandWordmark';
import { SWARM_EASE, REVEAL_EASE } from '../utils/swarmMotion';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const reduced = useReducedMotion();

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
    <nav className={`site-nav fixed inset-x-0 top-0 z-50 ${open ? 'site-nav--solid' : ''}`}>
      <div className="mx-auto flex h-16 max-w-[1280px] items-center justify-between px-5 sm:h-20 sm:px-8 lg:px-12">
        <Link
          href="/"
          aria-label="Janvi — home"
          className="brand-pop flex min-h-[44px] items-center gap-2.5 py-2"
        >
          <BrandMark size={30} className="brand-mark" />
          <BrandWordmark height={13} />
        </Link>

        <div className="hidden items-center gap-9 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={pathname === link.href ? 'page' : undefined}
              className="nav-link eyebrow"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-nav"
          className="-mr-3 flex h-11 w-11 items-center justify-center transition-opacity duration-300 hover:opacity-60 md:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: reduced ? 0 : 0.35, ease: REVEAL_EASE }}
            className="overflow-hidden border-t border-[#F2EDE4]/15 text-[#F2EDE4] md:hidden"
          >
            <div id="mobile-nav" className="px-5 pb-7 pt-2">
              {navLinks.map((link, i) => {
                const active = pathname === link.href;
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: reduced ? 0 : 0.05 + i * 0.05,
                      duration: reduced ? 0 : 0.35,
                      ease: SWARM_EASE,
                    }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      aria-current={active ? 'page' : undefined}
                      className="flex min-h-[60px] items-center justify-between border-b border-[#F2EDE4]/15"
                    >
                      <span className="font-display text-3xl">{link.label}</span>
                      <span className={`eyebrow ${active ? 'text-[rgb(var(--t-accent))]' : 'opacity-50'}`}>
                        0{i + 1}
                      </span>
                    </Link>
                  </motion.div>
                );
              })}
              <p className="eyebrow mt-6 opacity-50">Kanpur, India — Available for work</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
