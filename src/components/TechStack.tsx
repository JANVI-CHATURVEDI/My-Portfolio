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

/* tag → brand glyph (Simple Icons, single-colour so they inherit the
   card's warm ink tones). Unknown tags fall back to a generic code
   glyph — the tooltip/aria label always keeps the full name. */
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

/**
 * Project tech stack as overlapping icon discs that fan apart on card
 * hover (see .tech-chip in globals.css).
 *
 * The flex row always reserves the *fanned* width; the resting overlap
 * is pure transform, so hovering never shifts the card's layout.
 * Each disc carries `title` + `aria-label` — icons never replace the
 * actual name for assistive tech or curious hovers.
 */
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
