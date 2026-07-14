import Link from "next/link";
import { SocialLinks } from "./SocialLinks";
import { footerContent, navLinksEn, navLinksEs, siteConfig } from "@/lib/site-data";

type FooterProps = {
  locale?: "en" | "es";
};

export function Footer({ locale = "en" }: FooterProps) {
  const content = footerContent[locale];
  const navLinks = locale === "es" ? navLinksEs : navLinksEn;
  const homeHref = locale === "es" ? "/bienvenidos" : "/";
  const linksHref = locale === "es" ? "/es/enlaces" : "/links";
  const linksLabel = locale === "es" ? "Enlaces" : "Link in Bio";

  return (
    <footer className="border-t border-border bg-inverse text-inverse-foreground">
      <div className="section-container py-16 sm:py-20">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href={homeHref} className="font-display text-lg font-semibold text-inverse-foreground">
              {siteConfig.name}
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-footer-muted">
              {content.mission}
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-medium uppercase tracking-wider text-footer-subtle">
              {content.quickLinksTitle}
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-footer-muted transition-colors hover:text-inverse-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href={linksHref}
                  className="text-sm text-footer-muted transition-colors hover:text-inverse-foreground"
                >
                  {linksLabel}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-medium uppercase tracking-wider text-footer-subtle">
              {content.languageTitle}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className={`text-sm transition-colors ${
                    locale === "en"
                      ? "font-medium text-inverse-foreground"
                      : "text-footer-muted hover:text-inverse-foreground"
                  }`}
                  aria-current={locale === "en" ? "true" : undefined}
                >
                  English
                </Link>
              </li>
              <li>
                <Link
                  href="/bienvenidos"
                  className={`text-sm transition-colors ${
                    locale === "es"
                      ? "font-medium text-inverse-foreground"
                      : "text-footer-muted hover:text-inverse-foreground"
                  }`}
                  aria-current={locale === "es" ? "true" : undefined}
                >
                  Español
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-medium uppercase tracking-wider text-footer-subtle">
              {content.contactTitle}
            </h3>
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-sm text-footer-muted transition-colors hover:text-inverse-foreground"
            >
              {siteConfig.email}
            </a>
            <p className="mt-6 text-xs text-footer-subtle">{content.credit}</p>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-medium uppercase tracking-wider text-footer-subtle">
              {content.socialTitle}
            </h3>
            <SocialLinks variant="footer" />
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center text-xs text-footer-subtle">
          © {new Date().getFullYear()} {siteConfig.name}. {content.credit}.
        </div>
      </div>
    </footer>
  );
}
