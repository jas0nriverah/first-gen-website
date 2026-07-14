import { Button } from "./Button";
import { familyCallout } from "@/lib/site-data";

type FamilyCalloutProps = {
  locale?: "en" | "es";
};

export function FamilyCallout({ locale = "en" }: FamilyCalloutProps) {
  const content = familyCallout[locale];

  return (
    <section className="border-y border-border bg-accent-muted">
      <div className="section-container py-12 sm:py-14">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div className="max-w-xl">
            <p className="eyebrow mb-2">
              {locale === "es" ? "Para familias" : "For families"}
            </p>
            <h2 className="font-display text-xl font-semibold text-ink sm:text-2xl">
              {content.title}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">
              {content.text}
            </p>
          </div>
          <Button href={content.href} variant="primary" className="flex-shrink-0">
            {content.cta}
          </Button>
        </div>
      </div>
    </section>
  );
}
