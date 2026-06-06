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
        subtitle="Guías organizadas y enlaces para ayudarte a navegar la escuela, la universidad y más allá. Se agregan más recursos regularmente."
      />

      <div className="section-padding bg-section-sage">
        <div className="section-container">
          <div className="mb-10 rounded-2xl border border-gt-navy/[0.06] bg-white/70 p-5 backdrop-blur-sm">
            <p className="text-sm text-warm-gray">
              <span className="badge-soon mr-2">Próximamente</span>
              Los elementos marcados como &quot;Próximamente&quot; son marcadores de posición. Stacy agregará enlaces reales cuando los recursos estén listos.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
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
