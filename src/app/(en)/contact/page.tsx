import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
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
      <Breadcrumbs items={[{ label: "Contact" }]} locale="en" />

      <div className="section-padding">
        <div className="section-container">
          <div className="mx-auto grid max-w-4xl gap-6 lg:grid-cols-2">
            <div className="card-static">
              <h3 className="text-lg font-semibold text-ink">{content.name}</h3>
              <p className="mt-1 text-sm text-muted">{content.role}</p>
              <ul className="mt-4 space-y-1.5 text-sm text-muted">
                {content.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
              <div className="mt-8">
                <Button href={`mailto:${siteConfig.email}`} variant="primary">
                  Email Stacy
                </Button>
              </div>
              <p className="mt-6 text-xs text-muted-light">{content.responseNote}</p>
            </div>

            <div className="card-static">
              <h3 className="mb-5 text-sm font-semibold text-ink">{content.topicsTitle}</h3>
              <ul className="space-y-3">
                {content.topics.map((topic) => (
                  <li key={topic} className="flex items-start gap-3 text-sm text-muted">
                    <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-accent" />
                    {topic}
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
