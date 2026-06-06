import type { Metadata } from "next";
import { PathwayCard } from "@/components/PathwayCard";
import { PageHero } from "@/components/PageHero";
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

      <div className="section-padding">
        <div className="section-container">
          <div className="mb-12 rounded-3xl border border-tech-gold/20 bg-gradient-to-r from-blush/50 via-white to-sage/30 p-8 sm:p-10">
            <p className="font-display text-xl leading-relaxed text-gt-navy sm:text-2xl">
              Every first-gen journey looks different. Whether you&apos;re a high school student
              preparing for college, a current student figuring out campus life, a parent supporting
              your child, or someone on the pre-med track — there&apos;s a starting point here for you.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {pathways.en.map((pathway) => (
              <PathwayCard key={pathway.title} {...pathway} />
            ))}
          </div>

          <div className="mt-14 overflow-hidden rounded-3xl bg-navy-gradient p-10 text-center text-white shadow-lift sm:p-12">
            <h3 className="font-display text-2xl font-semibold sm:text-3xl">
              Still have questions?
            </h3>
            <p className="mx-auto mt-4 max-w-lg text-white/70">
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
