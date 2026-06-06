import { BilingualBanner } from "@/components/BilingualBanner";
import { Button } from "@/components/Button";
import { Hero } from "@/components/Hero";
import { PathwayCard } from "@/components/PathwayCard";
import { SectionHeading } from "@/components/SectionHeading";
import { homeContent, pathways } from "@/lib/site-data";

export default function HomePage() {
  const content = homeContent.en;

  return (
    <>
      <Hero
        subtitle={content.heroSubtitle}
        locale="en"
        ctaStart={content.ctaStart}
        ctaResources={content.ctaResources}
        ctaAbout={content.ctaAbout}
        ctaContact={content.ctaContact}
      />

      <section className="section-padding">
        <div className="section-container">
          <SectionHeading title={content.introTitle} eyebrow="Our mission" />
          <div className="mx-auto max-w-2xl space-y-5">
            {content.introParagraphs.map((paragraph, i) => (
              <p
                key={paragraph.slice(0, 40)}
                className={`leading-relaxed ${i === 0 ? "text-lg font-medium text-ink sm:text-xl" : "text-base text-muted"}`}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-surface-warm">
        <div className="section-container">
          <SectionHeading
            title="Start Here"
            subtitle="Find the guidance that fits where you are right now."
            eyebrow="Pathways"
            centered
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {pathways.en.map((pathway) => (
              <PathwayCard key={pathway.title} {...pathway} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button href="/start-here" variant="primary">
              View all pathways
            </Button>
          </div>
        </div>
      </section>

      <BilingualBanner
        title={content.bilingualTitle}
        text={content.bilingualText}
        detail={content.bilingualDetail}
      />

      <section className="section-padding">
        <div className="section-container">
          <div className="mx-auto max-w-xl rounded-2xl border border-border bg-surface-warm p-10 text-center sm:p-12">
            <p className="text-base leading-relaxed text-ink sm:text-lg">
              {content.welcomeClosing}
            </p>
            <div className="mt-8">
              <Button href="/contact" variant="secondary">
                Get in touch
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
