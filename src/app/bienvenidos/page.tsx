import type { Metadata } from "next";
import { BilingualBanner } from "@/components/BilingualBanner";
import { Button } from "@/components/Button";
import { Hero } from "@/components/Hero";
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

      <section className="section-padding">
        <div className="section-container">
          <SectionHeading title={content.introTitle} eyebrow="Nuestra Misión" />
          <div className="mx-auto max-w-3xl space-y-5">
            {content.introParagraphs.map((paragraph, i) => (
              <p
                key={paragraph.slice(0, 40)}
                className={`text-lg leading-relaxed text-warm-gray ${i === 0 ? "font-display text-xl text-gt-navy sm:text-2xl" : ""}`}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="relative section-padding bg-section-warm">
        <div className="section-container">
          <SectionHeading
            title="Comienza Aquí"
            subtitle="Encuentra la orientación que se ajusta a donde estás ahora mismo."
            eyebrow="Caminos"
            centered
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {pathways.es.map((pathway) => (
              <PathwayCard key={pathway.title} {...pathway} exploreLabel="Explorar" />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button href="/es/comienza-aqui" variant="primary">
              Ver Todos los Caminos
            </Button>
          </div>
        </div>
      </section>

      <BilingualBanner
        title={content.bilingualTitle}
        text={content.bilingualText}
        detail={content.bilingualDetail}
      />

      <section className="section-padding">
        <div className="section-container">
          <div className="mx-auto max-w-2xl rounded-3xl border border-tech-gold/20 bg-gradient-to-br from-white via-cream to-blush/30 p-10 text-center shadow-soft sm:p-14">
            <p className="font-display text-xl leading-relaxed text-gt-navy sm:text-2xl">
              {content.welcomeClosing}
            </p>
            <div className="mt-8">
              <Button href="/es/contacto" variant="secondary">
                Contáctame
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
