import Image from "next/image";
import Link from "next/link";
import { SocialLinks } from "@/components/SocialLinks";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ContrastToggle } from "@/components/ContrastToggle";
import type { LinkInBioButton } from "@/lib/site-data";
import { linkInBioContent, siteConfig, uxLabels } from "@/lib/site-data";

type LinksPageContentProps = {
  locale: "en" | "es";
};

export function LinksPageContent({ locale }: LinksPageContentProps) {
  const content = linkInBioContent[locale];
  const labels = uxLabels[locale];

  return (
    <div className="relative min-h-screen bg-page">
      <div className="absolute right-5 top-5 flex items-center gap-2">
        <ContrastToggle locale={locale} />
        <ThemeToggle locale={locale} />
      </div>

      <div className="section-container px-5 py-16 sm:py-24">
        <div className="mx-auto max-w-sm text-center">
          <div className="relative mx-auto mb-5 h-16 w-16 overflow-hidden rounded-full border border-border">
            <Image
              src={content.avatarSrc}
              alt={content.avatarAlt}
              fill
              className="object-cover object-top"
              sizes="64px"
              priority
            />
          </div>
          <h1 className="text-lg font-bold text-ink">{siteConfig.name}</h1>
          <p className="mt-1 text-xs text-muted">{siteConfig.creator}</p>
          <p className="mt-4 text-xs leading-relaxed text-muted-light">
            {locale === "es" ? siteConfig.taglineEs : siteConfig.tagline}
          </p>
        </div>

        <div className="mx-auto mt-8 flex justify-center">
          <SocialLinks variant="large" />
        </div>

        <div className="mx-auto mt-8 flex max-w-sm flex-col gap-2.5">
          {content.buttons.map((button: LinkInBioButton) => {
            if (button.comingSoon) {
              return (
                <div
                  key={button.label}
                  className="flex items-center justify-between rounded-xl border border-border px-5 py-3.5 text-sm text-muted-light"
                >
                  <span>{button.label}</span>
                  <span className="badge-soon">
                    {button.comingSoonLabel ?? content.comingSoonLabel}
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

        <p className="mx-auto mt-10 max-w-sm text-center text-xs text-muted-light">
          {labels.linkInBioTitle} · {siteConfig.name}
        </p>
      </div>
    </div>
  );
}
