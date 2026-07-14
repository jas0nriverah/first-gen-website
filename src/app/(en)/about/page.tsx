import type { Metadata } from "next";
import Image from "next/image";
import { AboutSections } from "@/components/AboutSections";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHero } from "@/components/PageHero";
import { SocialLinks } from "@/components/SocialLinks";
import { Button } from "@/components/Button";
import { aboutContent } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "About Stacy",
  description: "Meet Stacy Lomeli — a first-generation Mexican-American neuroscience student at Georgia Tech.",
};

export default function AboutPage() {
  const content = aboutContent.en;

  return (
    <>
      <PageHero title={content.pageTitle} subtitle={content.headline} />
      <Breadcrumbs items={[{ label: "About" }]} locale="en" />

      <div className="section-padding">
        <div className="section-container">
          <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
            <div className="lg:col-span-2">
              <div className="group relative aspect-[3/4] overflow-hidden rounded-3xl border border-border shadow-card transition-all duration-500 hover:-translate-y-1 hover:shadow-hover">
                <Image
                  src={content.heroImage.src}
                  alt={content.heroImage.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
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
                  <div key={fact.label} className="rounded-2xl border border-border bg-card p-4 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-hover">
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
