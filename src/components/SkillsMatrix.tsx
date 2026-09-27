"use client";
import { useState } from 'react';
import { Monitor, Database, PenTool, Box } from 'lucide-react';
import { skillMatrix } from '../data/content';

const icons = {
  'Frontend': Monitor,
  'Backend & Cloud': Database,
  'Design & Tools': PenTool,
};

export default function SkillsMatrix() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section id="skills" className="py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <span className="section-eyebrow">Capabilities</span>
          <h2 className="section-title text-5xl sm:text-6xl lg:text-7xl text-white mt-3">
            Technical <span className="italic font-playfair text-violet-300">Arsenal</span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-lg mx-auto">Interactive skill matrix with contextual hover glow.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {skillMatrix.map((cat) => (
            <div
              key={cat.title}
              className="glass rounded-3xl p-8 relative overflow-hidden group"
              onMouseEnter={() => setHovered(cat.title)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className={`absolute inset-0 bg-gradient-to-br transition-opacity duration-500 ${
                hovered === cat.title ? 'opacity-30' : 'opacity-0'
              } ${cat.title.includes('Frontend') ? 'from-cyan-900/30' : cat.title.includes('Design') ? 'from-violet-900/30' : 'from-emerald-900/30'}`} />

              <div className="relative z-10">
                <div className={`mb-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium bg-white/5 border border-white/10 transition-colors ${
                  hovered === cat.title ? 'text-emerald-300 border-emerald-400/30' : 'text-slate-300'
                }`}>
                  {(() => {
                    const Icon = icons[cat.title as keyof typeof icons] || Box;
                    return <Icon size={16} />;
                  })()}
                  {cat.title}
                </div>

                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <a
                      key={skill.name}
                      href="#"
                      className={`inline-block px-3.5 py-1.5 rounded-full border transition-all duration-300 text-sm font-medium ${
                        hovered === cat.title
                          ? 'border-emerald-400/30 bg-emerald-950/30 text-emerald-300 shadow-[0_0_16px_rgba(52,211,153,0.15)]'
                          : 'border-white/10 text-slate-300 bg-white/[0.03] hover:border-white/20 hover:text-white'
                      }`}
                    >
                      {skill.name}
                      <span className="ml-2 text-xs opacity-60 font-mono">{skill.level}%</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}