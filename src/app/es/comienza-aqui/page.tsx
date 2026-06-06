import type { Metadata } from "next";
import { PathwayCard } from "@/components/PathwayCard";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/Button";
import { pathways } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Comienza Aquí",
  description:
    "Caminos de recursos para estudiantes de secundaria, universitarios, familias y estudiantes pre-medicina.",
};

export default function ComienzaAquiPage() {
  return (
    <>
      <PageHero
        title="Comienza Aquí"
        subtitle="¿No sabes por dónde empezar? Elige el camino que coincida con donde estás — o hacia dónde quieres ir."
      />

      <div className="section-padding">
        <div className="section-container">
          <div className="mb-12 rounded-3xl border border-tech-gold/20 bg-gradient-to-r from-blush/50 via-white to-sage/30 p-8 sm:p-10">
            <p className="font-display text-xl leading-relaxed text-gt-navy sm:text-2xl">
              Cada camino de primera generación es diferente. Ya seas un estudiante de secundaria
              preparándote para la universidad, un estudiante actual descubriendo la vida universitaria,
              un padre/madre apoyando a su hijo/a, o alguien en la ruta pre-medicina — hay un punto
              de partida aquí para ti.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {pathways.es.map((pathway) => (
              <PathwayCard key={pathway.title} {...pathway} exploreLabel="Explorar" />
            ))}
          </div>

          <div className="mt-14 overflow-hidden rounded-3xl bg-navy-gradient p-10 text-center text-white shadow-lift sm:p-12">
            <h3 className="font-display text-2xl font-semibold sm:text-3xl">
              ¿Aún tienes preguntas?
            </h3>
            <p className="mx-auto mt-4 max-w-lg text-white/70">
              Con gusto te ayudo a orientarte. Escríbeme cuando quieras.
            </p>
            <div className="mt-8">
              <Button href="/es/contacto" variant="secondary">
                Contactar a Stacy
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
