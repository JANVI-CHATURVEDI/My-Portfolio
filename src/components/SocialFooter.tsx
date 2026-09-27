"use client";
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { socials, quote } from '../data/content';

const socialIcons: Record<string, string> = {
  GitHub: '🐙',
  LinkedIn: '💼',
  'X / Twitter': '𝕏',
  Instagram: '📸',
  Email: '✉',
  Resume: '📄',
  WhatsApp: '💬',
};

export default function SocialFooter() {
  return (
    <footer id="connect" className="relative overflow-hidden pt-24 pb-8">
      <div className="max-w-6xl mx-auto px-6">

        {/* Contact heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-xs font-mono tracking-[0.25em] text-emerald-400/70 uppercase mb-4">Contact</h2>
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-serif italic text-white leading-[1.1]">
            Let's build something <br />
            <span className="font-display text-emerald-400">extraordinary together.</span>
          </h3>
        </motion.div>

        {/* Social pill links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-4"
        >
          <p className="text-xs font-mono font-medium tracking-wider text-white/55 mb-4 uppercase">Social Links</p>
          <div className="flex flex-wrap gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-pill"
              >
                {socialIcons[s.label] && <span className="text-xs">{socialIcons[s.label]}</span>}
                <span>{s.label}</span>
                <ArrowUpRight size={12} className="opacity-70" />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Quote block */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="my-16 lg:my-20 glass rounded-2xl p-8 lg:p-12 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl" />
          <blockquote className="text-xl sm:text-2xl lg:text-3xl font-display italic text-white/80 leading-relaxed relative z-10 max-w-2xl mx-auto">
            &ldquo;{quote.text}&rdquo;
          </blockquote>
          <div className="mt-6 flex items-center justify-center gap-3 text-sm text-white/55 relative z-10">
            {quote.lang && <span className="font-mono text-[10px] tracking-widest text-emerald-400/75">{quote.lang}</span>}
            <span className="w-px h-3 bg-white/20" />
            <span className="font-medium text-white/65">— {quote.source}</span>
          </div>
        </motion.div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-[10px] font-mono font-medium text-white/50 border-t border-white/5 pt-6">
          <span>© {new Date().getFullYear()} Janvi Chaturvedi. Built with Next.js, Tailwind &amp; Framer Motion.</span>
          <span>Kanpur, India</span>
        </div>
      </div>
    </footer>
  );
}
