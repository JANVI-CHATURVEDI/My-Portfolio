"use client";
import { motion } from 'framer-motion';
import { ArrowUpRight, Mail, Github, Linkedin, Twitter } from 'lucide-react';
import { socials } from '../../data/content';

export default function ContactPage() {
  const socialIcons: Record<string, React.ReactNode> = {
    GitHub: <Github size={16} />,
    LinkedIn: <Linkedin size={16} />,
    'X / Twitter': <Twitter size={16} />,
    Instagram: <span>📸</span>,
    Email: <Mail size={16} />,
    Resume: <span>📄</span>,
    WhatsApp: <span>💬</span>,
  };

  return (
    <main className="min-h-screen bg-[#0c0c0e] text-white">
      <div className="max-w-5xl mx-auto px-6 lg:pl-24 pt-24 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="text-5xl lg:text-6xl font-serif italic text-white leading-[1.1] mb-4">
            Let's <span className="font-display text-emerald-400">Connect</span>
          </h1>
          <p className="text-white/60 text-sm font-mono font-medium tracking-wide">
            Have a project in mind or just want to discuss tech? My inbox is always open.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left: Social + Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <div className="glass rounded-2xl p-6 lg:p-8">
              <h3 className="text-sm font-mono text-emerald-400 tracking-wide mb-4">Direct Channels</h3>
              <p className="text-white/70 text-sm mb-6">Feel free to connect for collaboration, opportunities, or projects.</p>

              {/* Email copy */}
              <div className="flex items-center gap-3 mb-2 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                <Mail size={16} className="text-emerald-400/80 flex-shrink-0" />
                <span className="text-sm text-white/85 font-medium font-mono flex-1 min-w-0 break-all">janvichaturvedi82@gmail.com</span>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText('janvichaturvedi82@gmail.com');
                  }}
                  className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-white/5 text-white/65 hover:text-emerald-400 transition-colors border border-white/5"
                >
                  Copy
                </button>
              </div>

              {/* Social pills */}
              <div className="flex flex-wrap gap-2 mt-6">
                {socials
                  .filter((s) => s.label !== 'Instagram' && s.label !== 'WhatsApp')
                  .map((s) => (
                  <a
                    key={s.label}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-pill text-xs px-4 py-2"
                  >
                    <span className="text-xs">{socialIcons[s.label]}</span>
                    {s.label}
                    <ArrowUpRight size={10} className="opacity-70" />
                  </a>
                ))}
              </div>
            </div>

          </motion.div>

          {/* Right: Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass rounded-2xl p-6 lg:p-8"
          >
            <h3 className="text-sm font-mono text-emerald-400 tracking-wide mb-6">Send a Message</h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.target as HTMLFormElement;
                const data = new FormData(form);
                window.open(`mailto:janvichaturvedi82@gmail.com?subject=From ${data.get('name')}&body=${data.get('message')}`);
              }}
              className="space-y-4"
            >
              {/* Name + email share a row so the whole form — submit button
                  included — fits the first screen without scrolling. */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] font-mono font-medium text-white/60 tracking-wider uppercase block mb-2">Your Name</label>
                  <input
                    name="name"
                    type="text"
                    required
                    placeholder="e.g. Alex Smith"
                    className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/35 outline-none focus:border-emerald-400/40 transition-colors"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-mono font-medium text-white/60 tracking-wider uppercase block mb-2">Your Email</label>
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="alex@example.com"
                    className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/35 outline-none focus:border-emerald-400/40 transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="text-[10px] font-mono font-medium text-white/60 tracking-wider uppercase block mb-2">Message</label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder="Tell me about your project, role, or idea..."
                  className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/35 outline-none focus:border-emerald-400/40 transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-black font-semibold text-sm hover:shadow-[0_0_24px_rgba(52,211,153,0.3)] hover:-translate-y-[2px] transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
