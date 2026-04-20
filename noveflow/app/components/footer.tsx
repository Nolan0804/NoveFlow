export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mx-auto mt-12 w-full max-w-7xl border-t border-white/10 px-6 py-8 sm:px-10 lg:px-12 lg:py-10">
      <div className="flex flex-col gap-6 pb-6 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,var(--brand-primary)_0%,var(--brand-accent)_100%)] text-sm font-bold text-white">
            N
          </span>
          <div className="flex flex-col gap-0.5">
            <p className="text-text-strong text-sm font-semibold uppercase tracking-[0.16em]">
              NoveFlow
            </p>
            <p className="text-text-subtle text-sm">
              SaaS de QR code de commande pour restaurants modernes.
            </p>
          </div>
        </div>

        <nav
          className="flex flex-wrap items-center gap-4 text-sm md:gap-6"
          aria-label="Footer"
        >
          <a
            href="#fonctionnalites"
            className="text-text-muted hover:text-text-strong transition"
          >
            Fonctionnalites
          </a>
          <a href="#prix" className="text-text-muted hover:text-text-strong transition">
            Prix
          </a>
          <a
            href="#contact"
            className="text-text-muted hover:text-text-strong transition"
          >
            Contact
          </a>
        </nav>
      </div>

      <div className="flex flex-col gap-3 border-t border-white/8 pt-6 text-sm md:flex-row md:items-center md:justify-between">
        <p className="text-text-subtle">
          Copyright {year} NoveFlow. Tous droits reserves.
        </p>
        <p className="text-text-subtle">
          Powered by <span className="text-text-strong font-semibold">Novecode</span>
        </p>
      </div>
    </footer>
  );
}
