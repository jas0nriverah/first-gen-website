"use client";

import Link from "next/link";
import { useState } from "react";
import { navLinksEn, navLinksEs, siteConfig } from "@/lib/site-data";

type HeaderProps = {
  locale?: "en" | "es";
};

export function Header({ locale = "en" }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = locale === "es" ? navLinksEs : navLinksEn;
  const homeHref = locale === "es" ? "/bienvenidos" : "/";
  const altLocaleHref = locale === "es" ? "/" : "/bienvenidos";
  const altLocaleLabel = locale === "es" ? "English" : "Español";

  return (
    <header className="glass-nav sticky top-0 z-50">
      <div className="section-container">
        <div className="flex h-16 items-center justify-between sm:h-[4.5rem]">
          <Link
            href={homeHref}
            className="group flex items-center gap-3"
            onClick={() => setMenuOpen(false)}
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-navy-gradient text-xs font-bold text-tech-gold shadow-card transition-transform group-hover:scale-105">
              FG
            </div>
            <div className="flex flex-col">
              <span className="font-display text-lg font-semibold leading-tight text-gt-navy sm:text-xl">
                {siteConfig.name}
              </span>
              <span className="hidden text-[11px] tracking-wide text-warm-gray-light sm:block">
                {locale === "es" ? "Por Stacy Lomeli" : "By Stacy Lomeli"}
              </span>
            </div>
          </Link>

          <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full px-3.5 py-2 text-sm font-medium text-gt-navy/75 transition-all hover:bg-white/80 hover:text-gt-navy hover:shadow-card"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={altLocaleHref}
              className="ml-2 rounded-full border border-tech-gold/30 bg-tech-gold/10 px-4 py-2 text-sm font-semibold text-gt-navy transition-all hover:bg-tech-gold/20 hover:shadow-card"
            >
              {altLocaleLabel}
            </Link>
          </nav>

          <button
            type="button"
            className="rounded-full p-2.5 text-gt-navy transition-colors hover:bg-gt-navy/5 lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>

        {menuOpen && (
          <nav className="border-t border-gt-navy/[0.06] py-4 lg:hidden" aria-label="Mobile navigation">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-xl px-4 py-3 text-base font-medium text-gt-navy transition-colors hover:bg-white/80"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href={altLocaleHref}
                className="mt-2 rounded-xl border border-tech-gold/30 bg-tech-gold/10 px-4 py-3 text-center text-base font-semibold text-gt-navy"
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
