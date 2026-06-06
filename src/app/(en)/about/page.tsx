import type { Metadata } from "next";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/Button";
import { aboutContent } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "About Stacy",
  description: "Meet Stacy Lomeli — a first-generation Mexican-American neuroscience student at Georgia Tech.",
};

export default function AboutPage() {
  const content = aboutContent.en;

  return (
    <>
      <PageHero title={content.pageTitle} subtitle={content.headline} />

      <div className="section-padding">
        <div className="section-container">
          <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
            <div className="lg:col-span-2">
              <PlaceholderImage
                label={content.photoPlaceholder}
                aspectRatio="portrait"
              />
            </div>

            <div className="lg:col-span-3">
              <div className="space-y-6">
                {content.paragraphs.map((paragraph, i) => (
                  <p
                    key={paragraph.slice(0, 40)}
                    className={`leading-relaxed text-warm-gray ${i === 0 ? "font-display text-2xl text-gt-navy" : "text-lg"}`}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              <dl className="mt-12 grid gap-4 sm:grid-cols-2">
                {content.facts.map((fact) => (
                  <div
                    key={fact.label}
                    className="rounded-2xl border border-gt-navy/[0.06] bg-white/80 p-5 shadow-card backdrop-blur-sm"
                  >
                    <dt className="text-xs font-semibold uppercase tracking-[0.15em] text-tech-gold">
                      {fact.label}
                    </dt>
                    <dd className="mt-2 font-display text-lg font-medium text-gt-navy">
                      {fact.value}
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="mt-10 flex flex-wrap gap-3">
                <Button href="/resources" variant="primary">
                  Browse Resources
                </Button>
                <Button href="/contact" variant="outline">
                  Contact Me
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
