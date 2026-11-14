"use client";
import { useEffect, useState } from 'react';
import { ArrowUpRight, Mail, Github, Linkedin, Twitter, FileText } from 'lucide-react';
import Reveal from '../../components/Reveal';
import { socials } from '../../data/content';

const EMAIL = 'janvichaturvedi82@gmail.com';

export default function ContactPage() {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timer = window.setTimeout(() => setCopied(false), 2000);
    return () => window.clearTimeout(timer);
  }, [copied]);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  };

  const socialIcons: Record<string, React.ReactNode> = {
    GitHub: <Github size={15} />,
    LinkedIn: <Linkedin size={15} />,
    'X / Twitter': <Twitter size={15} />,
    Email: <Mail size={15} />,
    Resume: <FileText size={15} />,
  };

  return (
    <main className="theme-paper min-h-screen">
      <div className="mx-auto max-w-[1180px] px-5 pb-20 pt-28 sm:px-8 sm:pt-36 lg:px-12">
        <Reveal y={28} scale={1} duration={0.8}>
          <div className="flex flex-wrap items-end justify-between gap-4 border-b border-line pb-4">
            <span className="eyebrow accent-label">Contact</span>
            <span className="eyebrow text-muted">Kanpur, India</span>
          </div>
        </Reveal>

        <Reveal y={36} scale={1} duration={0.9}>
          <h1 className="t-display mt-8">
            Let&apos;s <span className="accent-italic">connect.</span>
          </h1>
        </Reveal>
        <Reveal y={20} scale={1} delay={0.1} duration={0.8}>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted">
            Have a project in mind or just want to discuss tech? My inbox is always open.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal y={28} scale={1} delay={0.1} className="lg:col-span-5">
            <p className="eyebrow accent-label">Direct channels</p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              Feel free to connect for collaboration, opportunities, or projects.
            </p>

            <a
              href={`mailto:${EMAIL}`}
              className="mt-8 block break-all font-display text-[clamp(1.15rem,2.2vw,1.6rem)] font-medium leading-tight underline decoration-1 underline-offset-4 transition-colors duration-300 hover:text-[rgb(var(--t-accent-ink))]"
            >
              {EMAIL}
            </a>

            <button type="button" onClick={copyEmail} className="btn btn-outline mt-5">
              {copied ? 'Copied' : 'Copy address'}
            </button>

            <div className="mt-10 border-t border-line">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between gap-4 border-b border-line py-4 transition-colors duration-300 hover:text-[rgb(var(--t-accent-ink))]"
                >
                  <span className="flex items-center gap-3 text-sm font-medium">
                    <span className="text-muted">{socialIcons[social.label]}</span>
                    {social.label}
                  </span>
                  <ArrowUpRight
                    size={15}
                    aria-hidden
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
              ))}
            </div>
          </Reveal>

          <Reveal y={28} scale={1} delay={0.2} className="lg:col-span-7">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.target as HTMLFormElement;
                const data = new FormData(form);
                window.open(
                  `mailto:${EMAIL}?subject=From ${data.get('name')}&body=${data.get('message')}`
                );
              }}
              className="border border-line-strong bg-surface p-6 sm:p-8"
            >
              <div className="flex flex-wrap items-end justify-between gap-3 border-b border-line pb-4">
                <p className="eyebrow accent-label">Send a message</p>
                <span className="eyebrow text-muted">Opens your mail app</span>
              </div>

              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="eyebrow block text-muted"
                  >
                    Your name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    placeholder="e.g. Alex Smith"
                    className="mt-2 w-full border-b border-line bg-transparent pb-2 text-base text-fg placeholder:text-[rgb(var(--t-fg)/0.35)] transition-colors duration-300 focus:border-[rgb(var(--t-accent))]"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-email"
                    className="eyebrow block text-muted"
                  >
                    Your email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    placeholder="alex@example.com"
                    className="mt-2 w-full border-b border-line bg-transparent pb-2 text-base text-fg placeholder:text-[rgb(var(--t-fg)/0.35)] transition-colors duration-300 focus:border-[rgb(var(--t-accent))]"
                  />
                </div>
              </div>

              <div className="mt-6">
                <label htmlFor="contact-message" className="eyebrow block text-muted">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me about your project, role, or idea..."
                  className="mt-2 w-full resize-none border-b border-line bg-transparent pb-2 text-base text-fg placeholder:text-[rgb(var(--t-fg)/0.35)] transition-colors duration-300 focus:border-[rgb(var(--t-accent))]"
                />
              </div>

              <button type="submit" className="btn btn-solid mt-8 w-full">
                Send message <ArrowUpRight size={15} />
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </main>
  );
}
