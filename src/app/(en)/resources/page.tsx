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
        subtitle="Organized guides and links to help you navigate school, college, and beyond. More resources are being added regularly."
      />

      <div className="section-padding bg-section-sage">
        <div className="section-container">
          <div className="mb-10 rounded-2xl border border-gt-navy/[0.06] bg-white/70 p-5 backdrop-blur-sm">
            <p className="text-sm text-warm-gray">
              <span className="badge-soon mr-2">Coming Soon</span>
              Items marked &quot;Coming Soon&quot; are placeholders. Stacy will add real links as resources are finalized.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {resourceCategories.en.map((category) => (
              <ResourceCategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
