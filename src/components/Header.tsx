"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { getAlternateLocaleHref } from "@/lib/locale-routes";
import { navLinksEn, navLinksEs, siteConfig, uxLabels } from "@/lib/site-data";
import { ThemeToggle } from "./ThemeToggle";
import { ContrastToggle } from "./ContrastToggle";

type HeaderProps = {
  locale?: "en" | "es";
};

function isActive(pathname: string, href: string, homeHref: string) {
  if (href === homeHref) return pathname === href;
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header({ locale = "en" }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const navLinks = locale === "es" ? navLinksEs : navLinksEn;
  const homeHref = locale === "es" ? "/bienvenidos" : "/";
  const altLocaleHref = getAlternateLocaleHref(pathname);
  const altLocaleLabel = locale === "es" ? "English" : "Español";
  const labels = uxLabels[locale];

  const linkClass = (href: string) => {
    const active = isActive(pathname, href, homeHref);
    return `rounded-md px-3 py-2 text-sm transition-colors ${
      active
        ? "bg-surface font-medium text-ink"
        : "text-muted hover:text-ink"
    }`;
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-header-bg backdrop-blur-lg">
      <div className="section-container">
        <div className="flex h-14 items-center justify-between sm:h-16">
          <Link
            href={homeHref}
            className="text-sm font-semibold tracking-tight text-ink sm:text-base"
            onClick={() => setMenuOpen(false)}
          >
            {siteConfig.name}
          </Link>

          <div className="flex items-center gap-2">
            <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Main navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={linkClass(link.href)}
                  aria-current={isActive(pathname, link.href, homeHref) ? "page" : undefined}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href={altLocaleHref}
                className="ml-2 inline-flex items-center gap-1.5 rounded-md border border-border px-3 py-1.5 text-xs font-medium text-ink transition-colors hover:border-border-dark"
              >
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5a17.92 17.92 0 0 1-8.716-2.247m0 0A8.966 8.966 0 0 1 3 12c0-1.264.26-2.467.732-3.553" />
                </svg>
                {altLocaleLabel}
              </Link>
            </nav>

            <ContrastToggle locale={locale} />
            <ThemeToggle locale={locale} />

            <button
              type="button"
              className="rounded-md p-2 text-ink lg:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-expanded={menuOpen}
              aria-label={menuOpen ? labels.closeMenu : labels.openMenu}
            >
              {menuOpen ? (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav className="border-t border-border py-4 lg:hidden" aria-label="Mobile navigation">
            <div className="flex flex-col gap-0.5">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-md px-3 py-3 text-sm font-medium ${
                    isActive(pathname, link.href, homeHref)
                      ? "bg-surface text-ink"
                      : "text-ink"
                  }`}
                  onClick={() => setMenuOpen(false)}
                  aria-current={isActive(pathname, link.href, homeHref) ? "page" : undefined}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href={altLocaleHref}
                className="mt-2 inline-flex items-center justify-center gap-1.5 rounded-md border border-border px-3 py-3 text-sm font-medium text-ink"
                onClick={() => setMenuOpen(false)}
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5a17.92 17.92 0 0 1-8.716-2.247m0 0A8.966 8.966 0 0 1 3 12c0-1.264.26-2.467.732-3.553" />
                </svg>
                {altLocaleLabel}
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
