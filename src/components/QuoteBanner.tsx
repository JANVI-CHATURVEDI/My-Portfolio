"use client";
import { motion } from 'framer-motion';
import { quote } from '../data/content';

export default function QuoteBanner() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: true }}
      className="mt-16 mb-10"
    >
      <div className="relative rounded-2xl overflow-hidden max-w-3xl mx-auto aspect-[21/9] border border-white/5">
        <img
          src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExdnE1eXdmZmhvbG9veWs2YnprbTBkeHM4bGYyN3dxdW4xZjR1Z2tucCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/uf3jumi0zzUv6/giphy.gif"
          alt="Nature"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-t from-black/70 via-black/30 to-black/50">
          <blockquote className="text-lg sm:text-xl font-display italic text-white/90 leading-relaxed max-w-lg text-center px-6 mb-2">
            &ldquo;{quote.text}&rdquo;
          </blockquote>
          <div className="text-xs font-mono font-medium text-emerald-400/80 mb-1">{quote.lang}</div>
          <div className="text-xs font-mono font-medium text-white/60">— {quote.source}</div>
        </div>
      </div>
    </motion.div>
  );
}
