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
    <footer className="border-t border-border bg-ink text-white">
      <div className="section-container py-16 sm:py-20">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href={homeHref} className="text-base font-semibold text-white">
              {siteConfig.name}
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-neutral-400">
              {content.mission}
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-medium uppercase tracking-wider text-neutral-500">
              {content.quickLinksTitle}
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-neutral-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/links"
                  className="text-sm text-neutral-400 transition-colors hover:text-white"
                >
                  {locale === "es" ? "Enlaces" : "Link in Bio"}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-medium uppercase tracking-wider text-neutral-500">
              {content.languageTitle}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-neutral-400 transition-colors hover:text-white">
                  English
                </Link>
              </li>
              <li>
                <Link
                  href="/bienvenidos"
                  className="text-sm text-neutral-400 transition-colors hover:text-white"
                >
                  Español
                </Link>
              </li>
              <li>
                <Link
                  href={altHref}
                  className="text-sm text-accent transition-colors hover:text-accent-soft"
                >
                  {altLabel} →
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-medium uppercase tracking-wider text-neutral-500">
              {content.contactTitle}
            </h3>
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-sm text-neutral-400 transition-colors hover:text-white"
            >
              {siteConfig.email}
            </a>
            <p className="mt-6 text-xs text-neutral-600">{content.credit}</p>
          </div>
        </div>

        <div className="mt-12 border-t border-neutral-800 pt-8 text-center text-xs text-neutral-600">
          © {new Date().getFullYear()} {siteConfig.name}. {content.credit}.
        </div>
      </div>
    </footer>
  );
}
