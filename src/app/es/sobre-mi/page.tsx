import type { Metadata } from "next";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/Button";
import { aboutContent } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Sobre Mí",
  description:
    "Conoce a Stacy Lomeli — una estudiante mexicoamericana de primera generación en Georgia Tech.",
};

export default function SobreMiPage() {
  const content = aboutContent.es;

  return (
    <>
      <PageHero title={content.pageTitle} subtitle={content.headline} />

      <div className="section-padding">
        <div className="section-container">
          <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
            <div className="lg:col-span-2">
              <PlaceholderImage label={content.photoPlaceholder} aspectRatio="portrait" />
            </div>

            <div className="lg:col-span-3">
              <div className="space-y-5">
                {content.paragraphs.map((paragraph, i) => (
                  <p
                    key={paragraph.slice(0, 40)}
                    className={`leading-relaxed ${i === 0 ? "text-lg font-medium text-ink" : "text-base text-muted"}`}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              <dl className="mt-10 grid gap-3 sm:grid-cols-2">
                {content.facts.map((fact) => (
                  <div key={fact.label} className="rounded-xl border border-border p-4">
                    <dt className="text-xs font-medium uppercase tracking-wider text-muted">
                      {fact.label}
                    </dt>
                    <dd className="mt-1 text-sm font-medium text-ink">{fact.value}</dd>
                  </div>
                ))}
              </dl>

              <div className="mt-10 flex flex-wrap gap-3">
                <Button href="/es/recursos" variant="primary">
                  Ver recursos
                </Button>
                <Button href="/es/contacto" variant="outline">
                  Contáctame
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
