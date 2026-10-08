import type { CSSProperties } from 'react';
import type { IconType } from 'react-icons';
import { FaCode } from 'react-icons/fa';
import {
  SiAppwrite,
  SiDjango,
  SiHtml5,
  SiJavascript,
  SiLeaflet,
  SiPostgresql,
  SiPython,
  SiReact,
  SiTailwindcss,
} from 'react-icons/si';

const ICONS: Record<string, IconType> = {
  Django: SiDjango,
  Python: SiPython,
  'Tailwind CSS': SiTailwindcss,
  PostgreSQL: SiPostgresql,
  React: SiReact,
  'Vanilla JS': SiJavascript,
  Appwrite: SiAppwrite,
  HTML: SiHtml5,
  'Leaflet.js': SiLeaflet,
};

export default function TechStack({ tags }: { tags: string[] }) {
  return (
    <div className="tech-stack mb-4">
      {tags.map((tag, i) => {
        const Icon = ICONS[tag] ?? FaCode;
        return (
          <span
            key={tag}
            className="tech-chip"
            title={tag}
            role="img"
            aria-label={tag}
            style={{ '--i': i, zIndex: tags.length - i } as CSSProperties}
          >
            <Icon size={14} />
          </span>
        );
      })}
    </div>
  );
}
