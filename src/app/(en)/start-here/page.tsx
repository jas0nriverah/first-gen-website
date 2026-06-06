import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PathwayCard } from "@/components/PathwayCard";
import { PageHero } from "@/components/PageHero";
import { StartHereNav } from "@/components/StartHereNav";
import { Button } from "@/components/Button";
import { pathways } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Start Here",
  description: "Resource pathways for high school students, college students, families, and pre-med students.",
};

export default function StartHerePage() {
  return (
    <>
      <PageHero
        title="Start Here"
        subtitle="Not sure where to begin? Choose the pathway that matches where you are — or where you want to go."
      />
      <Breadcrumbs items={[{ label: "Start Here" }]} locale="en" />
      <StartHereNav locale="en" />

      <div className="section-padding">
        <div className="section-container">
          <div className="mb-12 max-w-2xl rounded-2xl border border-border bg-surface-warm p-8">
            <p className="text-base leading-relaxed text-ink sm:text-lg">
              Every first-gen journey looks different. Whether you&apos;re a high school student
              preparing for college, a current student figuring out campus life, a parent supporting
              your child, or someone on the pre-med track — there&apos;s a starting point here for you.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {pathways.en.map((pathway) => (
              <PathwayCard key={pathway.title} {...pathway} />
            ))}
          </div>

          <div className="cta-inverse mt-14">
            <h3 className="text-xl font-bold sm:text-2xl">Still have questions?</h3>
            <p className="mx-auto mt-3 max-w-md text-sm text-footer-muted">
              I&apos;m happy to help point you in the right direction. Reach out anytime.
            </p>
            <div className="mt-8">
              <Button href="/contact" variant="secondary">
                Contact Stacy
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
