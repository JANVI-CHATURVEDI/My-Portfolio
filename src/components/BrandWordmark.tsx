const LETTER_PATHS = [
  'M17 0V16.5A7.3 7.3 0 1 1 2.65 14.61C2.35 12.7 3 10.8 4.6 9.4C5.45 11.25 6.2 13.9 6.51 16.78A3.2 3.2 0 0 0 12.9 16.5V0Z',
  'M0 24L8.4 0L17 24H12.645L7.21 8.85L1.91 24ZM3.1 16.6L14.35 16.6L14.96 18.3L3.1 18.3Z',
  'M0 0H4.1V24H0ZM12.9 0H17V24H12.9ZM1.26 0H3.94L15.74 24H13.06Z',
  'M0 0H4.32L9.3 14.94L14.589 0H16.5L8 24Z',
  'M0 0H4.1V24H0Z',
];

const LETTER_X = [0, 20, 42.5, 65, 87];
const HOVER_SHIFT = [
  '',
  'group-hover:translate-x-[1px]',
  'group-hover:translate-x-[2px]',
  'group-hover:translate-x-[3px]',
  'group-hover:translate-x-[4px]',
];

interface BrandWordmarkProps {
  height?: number;
  className?: string;
}

export default function BrandWordmark({ height = 14, className = '' }: BrandWordmarkProps) {
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
      {LETTER_PATHS.map((d, i) => (
        <g
          key={d}
          transform={`translate(${LETTER_X[i]} 0)`}
          className={`transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${HOVER_SHIFT[i]}`}
        >
          <path d={d} />
        </g>
      ))}
    </svg>
  );
}
