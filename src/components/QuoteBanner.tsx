"use client";
import { motion } from 'framer-motion';
import QuoteCard from './QuoteCard';

export default function QuoteBanner() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: true }}
      className="mt-16 mb-10"
    >
      <QuoteCard />
    </motion.div>
  );
}
