export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-black/[0.06] bg-[#f8f5ef]">

      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at top right, rgba(200,169,74,0.10), transparent 35%)",
        }}
      />

      {/* Top gold hairline */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[rgba(200,169,74,0.5)] to-transparent" />

      <div className="relative mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-14">

        {/* =========================================================
           FOOTER GRID
        ========================================================= */}
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr]">

          {/* Brand / description */}
          <div>

            <div
              className="text-[26px] tracking-[-0.04em] text-slate-900"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              Elegance Occasion
            </div>

            <p className="mt-3 max-w-sm text-[13px] leading-[1.8] text-slate-500">
              Luxury décor, dessert stations, entertainment and premium event
              experiences tailored across the UK.
            </p>

            {/* Socials */}
            <div className="mt-5 flex items-center gap-3">

              {/* Instagram */}
              <a
                href="https://instagram.com/eleganceoccasion"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-black/[0.06] bg-white/80 text-slate-500 transition-all duration-300 hover:-translate-y-[1px] hover:border-[rgba(200,169,74,0.3)] hover:text-slate-900"
              >
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M7.75 2C4.574 2 2 4.574 2 7.75v8.5C2 19.426 4.574 22 7.75 22h8.5C19.426 22 22 19.426 22 16.25v-8.5C22 4.574 19.426 2 16.25 2h-8.5zm0 1.8h8.5a3.95 3.95 0 013.95 3.95v8.5a3.95 3.95 0 01-3.95 3.95h-8.5a3.95 3.95 0 01-3.95-3.95v-8.5A3.95 3.95 0 017.75 3.8zm8.95 1.35a.9.9 0 100 1.8.9.9 0 000-1.8zM12 6.85A5.15 5.15 0 106 12a5.15 5.15 0 006-5.15zm0 1.8A3.35 3.35 0 1112 15.35 3.35 3.35 0 0112 8.65z" />
                </svg>
              </a>

              {/* TikTok */}
              <a
                href="https://tiktok.com/@elegance.occasion"
                target="_blank"
                rel="noreferrer"
                aria-label="TikTok"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-black/[0.06] bg-white/80 text-slate-500 transition-all duration-300 hover:-translate-y-[1px] hover:border-[rgba(200,169,74,0.3)] hover:text-slate-900"
              >
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.2v13.02a2.89 2.89 0 11-2.89-2.89c.2 0 .39.02.58.06V8.94a6.09 6.09 0 00-.58-.03A6.09 6.09 0 1015.82 15V8.57a8.02 8.02 0 004.68 1.5V6.9c-.31 0-.62-.07-.91-.21z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <div className="mb-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--gold-1)]">
              Navigation
            </div>

            <div className="space-y-2.5">
              {[
                ["Home", "/"],
                ["Services", "/services"],
                ["Corporate", "/corporate"],
                ["Contact", "/contact"],
              ].map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  className="block text-[13px] text-slate-600 transition-all duration-300 hover:translate-x-[2px] hover:text-slate-900"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <div className="mb-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--gold-1)]">
              Contact
            </div>

            <div className="space-y-3">

              <a
                href="tel:+447932802236"
                className="block text-[13px] text-slate-600 transition-colors hover:text-slate-900"
              >
                +44 7932 802236
              </a>

              <a
                href="mailto:enquiries@eleganceoccasion.co.uk"
                className="block break-all text-[13px] text-slate-600 transition-colors hover:text-slate-900"
              >
                enquiries@eleganceoccasion.co.uk
              </a>

              <div className="text-[13px] leading-relaxed text-slate-500">
                London • Birmingham • Manchester
                <br />
                Available UK-wide
              </div>
            </div>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="mt-10 flex flex-col gap-3 border-t border-black/[0.06] pt-5 text-[11px] text-slate-400 sm:flex-row sm:items-center sm:justify-between">

          <div>
            © 2026 Elegance Occasion
          </div>

        </div>
      </div>
    </footer>
  );
}