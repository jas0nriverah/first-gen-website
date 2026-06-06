"use client";

import Link from "next/link";
import { useState } from "react";
import { navLinksEn, navLinksEs, siteConfig } from "@/lib/site-data";
import { ThemeToggle } from "./ThemeToggle";

type HeaderProps = {
  locale?: "en" | "es";
};

export function Header({ locale = "en" }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = locale === "es" ? navLinksEs : navLinksEn;
  const homeHref = locale === "es" ? "/bienvenidos" : "/";
  const altLocaleHref = locale === "es" ? "/" : "/bienvenidos";
  const altLocaleLabel = locale === "es" ? "EN" : "ES";

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
            <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-md px-3 py-2 text-sm text-muted transition-colors hover:text-ink"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href={altLocaleHref}
                className="ml-2 rounded-md border border-border px-3 py-1.5 text-xs font-medium text-ink transition-colors hover:border-border-dark"
              >
                {altLocaleLabel}
              </Link>
            </nav>

            <ThemeToggle />

            <button
              type="button"
              className="rounded-md p-2 text-ink lg:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-expanded={menuOpen}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
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
                  className="rounded-md px-3 py-3 text-sm font-medium text-ink"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href={altLocaleHref}
                className="mt-2 rounded-md border border-border px-3 py-3 text-center text-sm font-medium text-ink"
                onClick={() => setMenuOpen(false)}
              >
                {altLocaleLabel}
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
