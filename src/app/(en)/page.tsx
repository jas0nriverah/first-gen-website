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
          <SectionHeading title={content.introTitle} eyebrow="Our Mission" />
          <div className="mx-auto max-w-3xl space-y-5">
            {content.introParagraphs.map((paragraph, i) => (
              <p
                key={paragraph.slice(0, 40)}
                className={`text-lg leading-relaxed text-warm-gray ${i === 0 ? "font-display text-xl text-gt-navy sm:text-2xl" : ""}`}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="relative section-padding bg-section-warm">
        <div className="section-container">
          <SectionHeading
            title="Start Here"
            subtitle="Find the guidance that fits where you are right now."
            eyebrow="Pathways"
            centered
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {pathways.en.map((pathway) => (
              <PathwayCard key={pathway.title} {...pathway} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button href="/start-here" variant="primary">
              View All Pathways
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
          <div className="mx-auto max-w-2xl rounded-3xl border border-tech-gold/20 bg-gradient-to-br from-white via-cream to-blush/30 p-10 text-center shadow-soft sm:p-14">
            <p className="font-display text-xl leading-relaxed text-gt-navy sm:text-2xl">
              {content.welcomeClosing}
            </p>
            <div className="mt-8">
              <Button href="/contact" variant="secondary">
                Get in Touch
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
