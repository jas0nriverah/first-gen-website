import type { Metadata } from "next";
import { ResourceCategoryCard } from "@/components/ResourceCategoryCard";
import { PageHero } from "@/components/PageHero";
import { resourceCategories } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Recursos",
  description:
    "Solicitudes universitarias, becas, FAFSA, pre-medicina y recursos bilingües para estudiantes de primera generación.",
};

export default function RecursosPage() {
  return (
    <>
      <PageHero
        title="Recursos"
        subtitle="Guías organizadas y enlaces para ayudarte a navegar la escuela, la universidad y más allá."
      />

      <div className="section-padding bg-surface-warm">
        <div className="section-container">
          <div className="mb-8 rounded-xl border border-border bg-white p-4">
            <p className="text-sm text-muted">
              <span className="badge-soon mr-2">Próximamente</span>
              Los marcadores de posición serán reemplazados con enlaces reales cuando los recursos estén listos.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {resourceCategories.es.map((category) => (
              <ResourceCategoryCard
                key={category.id}
                category={category}
                comingSoonLabel="Próximamente"
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
