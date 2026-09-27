"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { quote } from '../data/content';

export default function HomeConnect() {
  return (
    <section className="relative py-20">
      <div className="max-w-6xl mx-auto px-6 lg:pl-24">
        {/* Connect CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-10 lg:p-14 text-center mb-16 relative overflow-hidden"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif italic text-white relative z-10 mb-6">
            Let's build something <br />
            <span className="font-display text-emerald-400">extraordinary together.</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-4 relative z-10">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 text-black font-semibold text-sm hover:shadow-[0_0_24px_rgba(52,211,153,0.3)] hover:-translate-y-[2px] transition-all duration-300"
            >
              Get In Touch <ArrowUpRight size={14} />
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 text-white/65 font-medium hover:text-white hover:border-white/20 hover:-translate-y-[2px] transition-all duration-300"
            >
              View Projects <ArrowUpRight size={14} />
            </Link>
          </div>
        </motion.div>

        {/* Nature gif with quote overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <div className="relative rounded-2xl overflow-hidden max-w-3xl mx-auto aspect-[21/9] border border-white/5">
            <img
              src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExdnE1eXdmZmhvbG9veWs2YnprbTBkeHM4bGYyN3dxdW4xZjR1Z2tucCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/uf3jumi0zzUv6/giphy.gif"
              alt="Nature"
              className="w-full h-full object-cover"
            />
            {/* Quote overlapping on top */}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-t from-black/70 via-black/30 to-black/50">
              <blockquote className="text-lg sm:text-xl font-display italic text-white/90 leading-relaxed max-w-lg text-center px-6 mb-2">
                &ldquo;{quote.text}&rdquo;
              </blockquote>
              <div className="text-xs font-mono font-medium text-emerald-400/80 mb-1">{quote.lang}</div>
              <div className="text-xs font-mono font-medium text-white/60">— {quote.source}</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
