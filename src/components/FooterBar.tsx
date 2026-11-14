export default function FooterBar() {
  return (
    <footer className="theme-paper relative border-t border-line">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-3 px-5 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
        <span className="eyebrow">
          © {new Date().getFullYear()} Janvi Chaturvedi
        </span>
        <span className="eyebrow text-muted">Kanpur, India</span>
        <span className="eyebrow text-muted">Next.js · Tailwind · Motion</span>
      </div>
    </footer>
  );
}
