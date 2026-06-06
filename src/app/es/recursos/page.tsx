import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHero } from "@/components/PageHero";
import { ResourcesExplorer } from "@/components/ResourcesExplorer";
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
      <Breadcrumbs items={[{ label: "Recursos" }]} locale="es" />

      <div className="section-padding bg-surface-warm">
        <ResourcesExplorer categories={resourceCategories.es} locale="es" />
      </div>
    </>
  );
}
