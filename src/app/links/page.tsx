import type { Metadata } from "next";
import Link from "next/link";
import { DecorativeBackground } from "@/components/DecorativeBackground";
import { linkInBioButtons, siteConfig } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Links",
  description: "Quick links to First Gen Chronicles — perfect for Instagram bio or social media.",
};

export default function LinksPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-cream via-blush/30 to-cream-dark">
      <DecorativeBackground variant="subtle" />
      <div className="section-container relative px-4 py-14 sm:py-20">
        <div className="mx-auto max-w-md text-center">
          <div className="mx-auto mb-5 flex h-24 w-24 items-center justify-center rounded-full bg-navy-gradient text-2xl font-bold text-tech-gold shadow-lift ring-4 ring-tech-gold/20">
            SL
          </div>
          <h1 className="font-display text-3xl font-semibold text-gt-navy">
            {siteConfig.name}
          </h1>
          <p className="mt-2 text-sm font-medium text-tech-gold">
            {siteConfig.creator}
          </p>
          <p className="mt-1 text-sm text-warm-gray-light">
            First-Gen Student · Georgia Tech
          </p>
          <p className="mx-auto mt-4 max-w-xs text-sm leading-relaxed text-warm-gray">
            {siteConfig.tagline}
          </p>
        </div>

        <div className="mx-auto mt-12 flex max-w-md flex-col gap-3">
          {linkInBioButtons.map((button) => {
            if (button.comingSoon) {
              return (
                <div
                  key={button.label}
                  className="flex items-center justify-between rounded-2xl border border-gt-navy/8 bg-white/50 px-5 py-4 text-gt-navy/45 backdrop-blur-sm"
                >
                  <span className="font-medium">{button.label}</span>
                  <span className="badge-soon">
                    {button.comingSoonLabel ?? "Coming Soon"}
                  </span>
                </div>
              );
            }

            const isExternal =
              button.href.startsWith("mailto:") || button.href.startsWith("http");

            if (isExternal) {
              return (
                <a
                  key={button.label}
                  href={button.href}
                  className="link-bio-btn-primary"
                >
                  {button.label}
                </a>
              );
            }

            return (
              <Link key={button.label} href={button.href} className="link-bio-btn">
                {button.label}
              </Link>
            );
          })}
        </div>

        <p className="mx-auto mt-12 max-w-md text-center text-xs tracking-wide text-warm-gray-light">
          Bilingual resources for first-generation students & Hispanic families
        </p>
      </div>
    </div>
  );
}
