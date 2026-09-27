interface BrandWordmarkProps {
  /** Cap height in px (rendered width scales to ≈ 4.0 × height). */
  height?: number;
  className?: string;
}

/**
 * JANVI wordmark — custom-drawn letterforms, not a font.
 *
 * Design system: cap height 24u · stems 4.1u · hairlines 1.6–1.8u
 * (thick/thin editorial contrast) · low hairline A crossbar · thin
 * N diagonal · sharp A/V vertices · and the signature trajectory-J
 * flick whose lean and rise are mirrored by the monogram in
 * BrandMark, so the icon and the word belong to one family.
 * Inter-letter gaps are a uniform 1u airier than the first cut —
 * just enough editorial breathing room to feel drawn, not typed.
 *
 * On hover of a parent `group`, letters open their tracking by 1u
 * each (subtle, ~300ms) — the J anchors the word and never moves.
 * Fill is `currentColor`, so callers control brightness.
 */
export default function BrandWordmark({ height = 14, className = "" }: BrandWordmarkProps) {
  const shift = [
    "", // J anchors the word — it never shifts
    "group-hover:translate-x-[1px]",
    "group-hover:translate-x-[2px]",
    "group-hover:translate-x-[3px]",
    "group-hover:translate-x-[4px]",
  ];
  const letterCls = (i: number) =>
    `transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${shift[i]}`;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 96 24"
      height={height}
      fill="currentColor"
      className={className}
      role="img"
      aria-label="Janvi"
      focusable="false"
    >
      {/* J — stem + rising tapered flick (the signature detail) */}
      <g>
        <g className={letterCls(0)}>
          <path d="M17 0V16.5A7.3 7.3 0 1 1 2.65 14.61C2.35 12.7 3 10.8 4.6 9.4C5.45 11.25 6.2 13.9 6.51 16.78A3.2 3.2 0 0 0 12.9 16.5V0Z" />
        </g>
      </g>
      {/* A — hairline left diagonal, thick right, low hairline crossbar */}
      <g transform="translate(20 0)">
        <g className={letterCls(1)}>
          <path d="M0 24L8.4 0L17 24H12.645L7.21 8.85L1.91 24Z" />
          <path d="M3.1 16.6L14.35 16.6L14.96 18.3L3.1 18.3Z" />
        </g>
      </g>
      {/* N — thick verticals bridged by a thin diagonal */}
      <g transform="translate(42.5 0)">
        <g className={letterCls(2)}>
          <path d="M0 0H4.1V24H0Z" />
          <path d="M12.9 0H17V24H12.9Z" />
          <path d="M1.26 0H3.94L15.74 24H13.06Z" />
        </g>
      </g>
      {/* V — thick left diagonal, hairline right, sharp vertex */}
      <g transform="translate(65 0)">
        <g className={letterCls(3)}>
          <path d="M0 0H4.32L9.3 14.94L14.589 0H16.5L8 24Z" />
        </g>
      </g>
      {/* I — clean stem closing the word */}
      <g transform="translate(87 0)">
        <g className={letterCls(4)}>
          <path d="M0 0H4.1V24H0Z" />
        </g>
      </g>
    </svg>
  );
}
