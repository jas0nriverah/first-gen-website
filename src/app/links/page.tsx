import type { Metadata } from "next";
import Link from "next/link";
import { linkInBioButtons, siteConfig } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Links",
  description: "Quick links to First Gen Chronicles — perfect for Instagram bio or social media.",
};

export default function LinksPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="section-container px-5 py-16 sm:py-24">
        <div className="mx-auto max-w-sm text-center">
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-ink text-sm font-semibold text-white">
            SL
          </div>
          <h1 className="text-lg font-bold text-ink">{siteConfig.name}</h1>
          <p className="mt-1 text-xs text-muted">{siteConfig.creator}</p>
          <p className="mt-4 text-xs leading-relaxed text-muted-light">
            {siteConfig.tagline}
          </p>
        </div>

        <div className="mx-auto mt-10 flex max-w-sm flex-col gap-2.5">
          {linkInBioButtons.map((button) => {
            if (button.comingSoon) {
              return (
                <div
                  key={button.label}
                  className="flex items-center justify-between rounded-xl border border-border px-5 py-3.5 text-sm text-muted-light"
                >
                  <span>{button.label}</span>
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
                <a key={button.label} href={button.href} className="link-bio-btn-primary">
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
      </div>
    </div>
  );
}
