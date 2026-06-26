export default function Footer() {
  return (
    <footer className="bg-[var(--color-base)]">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center py-6 border-t border-[var(--color-border-subtle)] gap-2 md:gap-0">
          <span className="text-[0.8125rem] text-[var(--color-text-muted)] text-center md:text-left">
            &copy; 2025 TEKGUYZ. Powered by Advantage Software.
          </span>
          <span className="text-[0.8125rem] text-[var(--color-text-muted)] text-center md:text-right">
            Bundle by Advantage Software &middot; reporterresource.com
          </span>
        </div>
      </div>
    </footer>
  );
}
