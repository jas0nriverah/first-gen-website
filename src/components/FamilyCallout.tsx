import Image from "next/image";
import { Button } from "./Button";
import { familyCallout } from "@/lib/site-data";

type FamilyCalloutProps = {
  locale?: "en" | "es";
};

export function FamilyCallout({ locale = "en" }: FamilyCalloutProps) {
  const content = familyCallout[locale];
  const photoAlt =
    locale === "es"
      ? "La familia de Stacy en una celebración de cumpleaños"
      : "Stacy's family at a birthday celebration";

  return (
    <section className="border-y border-border bg-accent-muted">
      <div className="section-container py-12 sm:py-14">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
            <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-2xl border border-border shadow-sm transition-transform duration-300 hover:-rotate-2 hover:scale-105 sm:h-24 sm:w-24">
              <Image
                src="/images/about/family-birthday.png"
                alt={photoAlt}
                fill
                className="object-cover"
                sizes="96px"
              />
            </div>
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
          </div>
          <Button href={content.href} variant="primary" className="flex-shrink-0">
            {content.cta}
          </Button>
        </div>
      </div>
    </section>
  );
}
