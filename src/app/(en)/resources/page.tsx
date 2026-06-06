import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHero } from "@/components/PageHero";
import { ResourcesExplorer } from "@/components/ResourcesExplorer";
import { resourceCategories } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Resources",
  description: "College applications, scholarships, FAFSA, pre-med, and bilingual resources for first-gen students.",
};

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        title="Resources"
        subtitle="Organized guides and links to help you navigate school, college, and beyond."
      />
      <Breadcrumbs items={[{ label: "Resources" }]} locale="en" />

      <div className="section-padding bg-surface-warm">
        <ResourcesExplorer categories={resourceCategories.en} locale="en" />
      </div>
    </>
  );
}
