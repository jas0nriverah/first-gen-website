import type { Metadata } from "next";
import Image from "next/image";
import { AboutSections } from "@/components/AboutSections";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHero } from "@/components/PageHero";
import { SocialLinks } from "@/components/SocialLinks";
import { Button } from "@/components/Button";
import { aboutContent } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Sobre Mí",
  description:
    "Conoce a Stacy Lomeli — una estudiante mexicoamericana de primera generación en Georgia Tech.",
};

export default function SobreMiPage() {
  const content = aboutContent.es;

  return (
    <>
      <PageHero title={content.pageTitle} subtitle={content.headline} />
      <Breadcrumbs items={[{ label: "Sobre Mí" }]} locale="es" />

      <div className="section-padding">
        <div className="section-container">
          <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
            <div className="lg:col-span-2">
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-border">
                <Image
                  src={content.heroImage.src}
                  alt={content.heroImage.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  priority
                />
              </div>

              <div className="mt-8">
                <p className="mb-3 text-sm font-medium text-ink">{content.connectTitle}</p>
                <SocialLinks variant="large" />
              </div>

              <dl className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                {content.facts.map((fact) => (
                  <div key={fact.label} className="rounded-xl border border-border p-4">
                    <dt className="text-xs font-medium uppercase tracking-wider text-muted">
                      {fact.label}
                    </dt>
                    <dd className="mt-1 text-sm font-medium text-ink">{fact.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="lg:col-span-3">
              <AboutSections sections={content.sections} />

              <div className="mt-12 flex flex-wrap gap-3">
                <Button href={content.ctas.primaryHref} variant="primary">
                  {content.ctas.primary}
                </Button>
                <Button href={content.ctas.secondaryHref} variant="outline">
                  {content.ctas.secondary}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
