import type { Metadata } from "next";
import { ResourceCategoryCard } from "@/components/ResourceCategoryCard";
import { PageHero } from "@/components/PageHero";
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

      <div className="section-padding bg-surface-warm">
        <div className="section-container">
          <div className="mb-8 rounded-xl border border-border bg-card p-4">
            <p className="text-sm text-muted">
              <span className="badge-soon mr-2">Coming Soon</span>
              Placeholder items will be replaced with real links as resources are finalized.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {resourceCategories.en.map((category) => (
              <ResourceCategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
