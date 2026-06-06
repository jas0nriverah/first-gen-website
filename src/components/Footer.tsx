import Link from "next/link";
import { footerContent, navLinksEn, navLinksEs, siteConfig } from "@/lib/site-data";

type FooterProps = {
  locale?: "en" | "es";
};

export function Footer({ locale = "en" }: FooterProps) {
  const content = footerContent[locale];
  const navLinks = locale === "es" ? navLinksEs : navLinksEn;
  const homeHref = locale === "es" ? "/bienvenidos" : "/";
  const altHref = locale === "es" ? "/" : "/bienvenidos";
  const altLabel = locale === "es" ? "English" : "Español";

  return (
    <footer className="relative overflow-hidden bg-navy-gradient text-white">
      <div className="pointer-events-none absolute inset-0 bg-gold-shimmer opacity-50" aria-hidden="true" />
      <div className="gold-line opacity-30" />
      <div className="section-container relative section-padding">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-tech-gold/30 bg-white/5 text-sm font-bold text-tech-gold">
                FG
              </div>
              <Link href={homeHref} className="font-display text-xl font-semibold text-white">
                {siteConfig.name}
              </Link>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-white/65">
              {content.mission}
            </p>
          </div>

          <div>
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-tech-gold">
              {content.quickLinksTitle}
            </h3>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-tech-gold-light"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/links"
                  className="text-sm text-white/60 transition-colors hover:text-tech-gold-light"
                >
                  {locale === "es" ? "Enlaces" : "Link in Bio"}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-tech-gold">
              {content.languageTitle}
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link href="/" className="text-sm text-white/60 transition-colors hover:text-tech-gold-light">
                  English
                </Link>
              </li>
              <li>
                <Link
                  href="/bienvenidos"
                  className="text-sm text-white/60 transition-colors hover:text-tech-gold-light"
                >
                  Español
                </Link>
              </li>
              <li>
                <Link
                  href={altHref}
                  className="text-sm font-medium text-tech-gold transition-colors hover:text-tech-gold-light"
                >
                  {altLabel} →
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-tech-gold">
              {content.contactTitle}
            </h3>
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-sm text-white/60 transition-colors hover:text-white"
            >
              {siteConfig.email}
            </a>
            <p className="mt-6 text-xs text-white/40">{content.credit}</p>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-8 text-center text-xs text-white/35">
          © {new Date().getFullYear()} {siteConfig.name}. {content.credit}.
        </div>
      </div>
    </footer>
  );
}
