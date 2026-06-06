import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/Button";
import { contactContent, siteConfig } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Stacy Lomeli for first-gen support, resources, and mentorship.",
};

export default function ContactPage() {
  const content = contactContent.en;

  return (
    <>
      <PageHero title={content.pageTitle} subtitle={content.intro} />

      <div className="section-padding">
        <div className="section-container">
          <div className="mx-auto grid max-w-4xl gap-8 lg:grid-cols-2">
            <div className="card-static">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-gt-navy/10 to-tech-gold/20 font-display text-2xl font-semibold text-gt-navy">
                SL
              </div>
              <h3 className="font-display text-2xl font-semibold text-gt-navy">{content.name}</h3>
              <p className="mt-1 font-medium text-tech-gold">{content.role}</p>
              <ul className="mt-5 space-y-2 text-warm-gray">
                {content.details.map((detail) => (
                  <li key={detail} className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-tech-gold" />
                    {detail}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button href={`mailto:${siteConfig.email}`} variant="primary">
                  Email Stacy
                </Button>
              </div>
              <p className="mt-6 text-sm italic text-warm-gray-light">{content.responseNote}</p>
            </div>

            <div className="card-static">
              <h3 className="mb-6 font-display text-xl font-semibold text-gt-navy">
                {content.topicsTitle}
              </h3>
              <ul className="space-y-4">
                {content.topics.map((topic) => (
                  <li key={topic} className="flex items-start gap-4 rounded-xl border border-gt-navy/[0.04] bg-cream/50 p-4">
                    <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-tech-gold" />
                    <span className="text-warm-gray">{topic}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
