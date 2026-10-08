interface BrandMarkProps {
  size?: number;
  className?: string;
}

export default function BrandMark({ size = 28, className = "" }: BrandMarkProps) {
  const width = Math.round(size * 0.632);
  const d = "M32 6 V31 A8 8 0 1 1 16.31 28.8 C17.2 25.73 16.22 22.29 17.7 20.4";
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="12 5 24 38"
      width={width}
      height={size}
      className={className}
      aria-hidden="true"
      focusable="false"
      fill="none"
    >
      <path
        d={d}
        stroke="currentColor"
        strokeWidth={6}
        strokeLinecap="butt"
        strokeLinejoin="round"
      />
      <path
        d={d}
        style={{ stroke: 'rgb(var(--t-hi))' }}
        strokeWidth={5}
        strokeLinecap="butt"
        strokeLinejoin="round"
        pathLength={100}
        strokeDasharray={100}
        className="[stroke-dashoffset:100] transition-[stroke-dashoffset] duration-[360ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:[stroke-dashoffset:0]"
      />
    </svg>
  );
}
