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
          <div className="mb-12 max-w-2xl rounded-2xl border border-border bg-surface-warm p-8">
            <p className="text-base leading-relaxed text-ink sm:text-lg">
              Cada camino de primera generación es diferente. Ya seas un estudiante de secundaria
              preparándote para la universidad, un estudiante actual descubriendo la vida universitaria,
              un padre/madre apoyando a su hijo/a, o alguien en la ruta pre-medicina — hay un punto
              de partida aquí para ti.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {pathways.es.map((pathway) => (
              <PathwayCard key={pathway.title} {...pathway} exploreLabel="Explorar" />
            ))}
          </div>

          <div className="mt-14 rounded-2xl bg-ink p-10 text-center text-white sm:p-12">
            <h3 className="text-xl font-bold sm:text-2xl">¿Aún tienes preguntas?</h3>
            <p className="mx-auto mt-3 max-w-md text-sm text-neutral-400">
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
