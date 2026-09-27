"use client";

/**
 * Site-wide footer bar — © line + location, aligned to the content column.
 * Rendered once in the root layout so every page ends with it.
 */
export default function FooterBar() {
  return (
    <footer className="max-w-6xl mx-auto px-6 lg:pl-24 pb-10">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-[10px] font-mono font-medium text-white/50 border-t border-white/5 pt-6">
        <span>© {new Date().getFullYear()} Janvi Chaturvedi. Built with Next.js, Tailwind &amp; Motion.</span>
        <span>Kanpur, India</span>
      </div>
    </footer>
  );
}
