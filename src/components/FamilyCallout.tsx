import { Button } from "./Button";
import { familyCallout } from "@/lib/site-data";

type FamilyCalloutProps = {
  locale?: "en" | "es";
};

export function FamilyCallout({ locale = "en" }: FamilyCalloutProps) {
  const content = familyCallout[locale];

  return (
    <section className="border-y border-gt-navy bg-gt-navy">
      <div className="section-container py-12 sm:py-14">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div className="max-w-xl">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.15em] text-gt-gold">
              {locale === "es" ? "Para familias" : "For families"}
            </p>
            <h2 className="text-lg font-semibold text-white sm:text-xl">{content.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-white/80 sm:text-base">
              {content.text}
            </p>
          </div>
          <Button href={content.href} variant="secondary" className="flex-shrink-0">
            {content.cta}
          </Button>
        </div>
      </div>
    </section>
  );
}
