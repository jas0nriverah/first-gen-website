import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PathwayCard } from "@/components/PathwayCard";
import { PageHero } from "@/components/PageHero";
import { StartHereNav } from "@/components/StartHereNav";
import { Button } from "@/components/Button";
import { pathways, startHereContent } from "@/lib/site-data";

export const metadata: Metadata = {
  title: startHereContent.es.pageTitle,
  description: startHereContent.es.metaDescription,
};

export default function ComienzaAquiPage() {
  const content = startHereContent.es;

  return (
    <>
      <PageHero title={content.pageTitle} subtitle={content.subtitle} />
      <div className="border-b border-border bg-background">
        <div className="section-container space-y-4 py-6 sm:py-8">
          <Breadcrumbs items={[{ label: content.breadcrumb }]} locale="es" embedded />
          <StartHereNav locale="es" embedded />
        </div>
      </div>

      <div className="section-padding">
        <div className="section-container">
          <div className="mb-12 max-w-2xl rounded-2xl border border-border bg-surface-warm p-8">
            <p className="text-base leading-relaxed text-ink sm:text-lg">{content.intro}</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {pathways.es.map((pathway) => (
              <PathwayCard key={pathway.title} {...pathway} exploreLabel="Explorar" />
            ))}
          </div>

          <div className="cta-inverse mt-14">
            <h3 className="text-xl font-bold sm:text-2xl">{content.ctaTitle}</h3>
            <p className="mx-auto mt-3 max-w-md text-sm text-footer-muted">{content.ctaText}</p>
            <div className="mt-8">
              <Button href={content.ctaHref} variant="secondary">
                {content.ctaButton}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
