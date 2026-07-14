import type { Metadata } from "next";
import { BilingualBanner } from "@/components/BilingualBanner";
import { Button } from "@/components/Button";
import { FamilyCallout } from "@/components/FamilyCallout";
import { Hero } from "@/components/Hero";
import { HomePhotoGallery } from "@/components/HomePhotoGallery";
import { PathwayCard } from "@/components/PathwayCard";
import { SectionHeading } from "@/components/SectionHeading";
import { homeContent, pathways } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Bienvenidos",
  description:
    "Orientación para estudiantes de primera generación y familias hispanas que navegan la escuela, la universidad y más allá.",
};

export default function BienvenidosPage() {
  const content = homeContent.es;

  return (
    <>
      <Hero
        subtitle={content.heroSubtitle}
        locale="es"
        ctaStart={content.ctaStart}
        ctaResources={content.ctaResources}
        ctaAbout={content.ctaAbout}
        ctaContact={content.ctaContact}
      />

      <FamilyCallout locale="es" />

      <section className="section-padding">
        <div className="section-container">
          <SectionHeading title={content.introTitle} eyebrow={content.missionEyebrow} />
          <div className="mx-auto max-w-2xl space-y-5">
            {content.introParagraphs.map((paragraph, i) => (
              <p
                key={paragraph.slice(0, 40)}
                className={`leading-relaxed ${i === 0 ? "text-lg font-medium text-ink sm:text-xl" : "text-base text-muted"}`}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-surface-warm">
        <div className="section-container">
          <SectionHeading
            title={content.pathwaysTitle}
            subtitle={content.pathwaysSubtitle}
            eyebrow={content.pathwaysEyebrow}
            centered
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {pathways.es.map((pathway, index) => (
              <div
                key={pathway.title}
                className="animate-fade-up"
                style={{ animationDelay: `${index * 60}ms` }}
              >
                <PathwayCard {...pathway} exploreLabel="Explorar" />
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button href={content.pathwaysCtaHref} variant="primary">
              {content.pathwaysCta}
            </Button>
          </div>
        </div>
      </section>

      <HomePhotoGallery locale="es" />

      <BilingualBanner
        title={content.bilingualTitle}
        text={content.bilingualText}
        detail={content.bilingualDetail}
      />

      <section className="section-padding">
        <div className="section-container">
          <div className="mx-auto max-w-xl rounded-3xl border border-border bg-accent-muted/70 p-10 text-center shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-hover sm:p-12">
            <p className="font-display text-lg leading-relaxed text-ink sm:text-xl">
              {content.welcomeClosing}
            </p>
            <div className="mt-8">
              <Button href={content.closingCtaHref} variant="secondary">
                {content.closingCta}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
