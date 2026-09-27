interface BrandMarkProps {
  /** Mark height in px (width scales to ≈ 0.63 × height). */
  size?: number;
  className?: string;
}

/**
 * JANVI brand mark — the monogram: a single flowing J stroke.
 *
 * One continuous centerline: flat precise top terminal → straight
 * stem → full circular hook (r8 about (24,31); its start tangent is
 * exactly vertical, so the stem joins without a kick) → an up-forward
 * flick whose centerline drifts monotonically right (no curvature
 * reversal, so the stroke edges stay glass-smooth) and finishes on a
 * 38° angled cut aimed at the wordmark. Proportions are derived from
 * the J inside BrandWordmark (weight/cap ≈ 0.17, hook R/cap ≈ 0.22,
 * flick rising to 0.6 of cap, matching flick lean), so mark and word
 * belong to one family.
 *
 * Hover (on a parent `group`): a lighter emerald trace draws along
 * the whole curve — stem root to flick tip in ~360ms — then retracts
 * on leave. The base stroke never disappears, so the logo is always
 * complete. Pure CSS transition; the global prefers-reduced-motion
 * guard collapses it to an instant swap.
 */
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
      {/* hover trace — draws along the curve, narrower than the base
          stroke so the accent silhouette stays present throughout */}
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
