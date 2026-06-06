import { Button } from "./Button";
import { DecorativeBackground } from "./DecorativeBackground";
import { siteConfig } from "@/lib/site-data";

type HeroProps = {
  subtitle: string;
  locale?: "en" | "es";
  ctaStart: string;
  ctaResources: string;
  ctaAbout: string;
  ctaContact: string;
};

export function Hero({
  subtitle,
  locale = "en",
  ctaStart,
  ctaResources,
  ctaAbout,
  ctaContact,
}: HeroProps) {
  const startHref = locale === "es" ? "/es/comienza-aqui" : "/start-here";
  const resourcesHref = locale === "es" ? "/es/recursos" : "/resources";
  const aboutHref = locale === "es" ? "/es/sobre-mi" : "/about";
  const contactHref = locale === "es" ? "/es/contacto" : "/contact";

  return (
    <section className="relative overflow-hidden">
      <DecorativeBackground />
      <div className="section-container relative section-padding pb-14 sm:pb-20">
        <div className="mx-auto max-w-4xl text-center">
          <div className="animate-fade-up">
            <span className="badge mb-8">
              <span className="h-1.5 w-1.5 rounded-full bg-tech-gold" />
              {locale === "es"
                ? "Estudiante de Primera Generación · Georgia Tech"
                : "First-Generation Student · Georgia Tech"}
            </span>
          </div>

          <h1 className="animate-fade-up font-display text-5xl font-semibold leading-[1.1] tracking-tight text-gt-navy sm:text-6xl lg:text-7xl">
            {siteConfig.name}
          </h1>

          <p className="animate-fade-up mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-warm-gray sm:text-xl [animation-delay:100ms]">
            {locale === "es" ? siteConfig.taglineEs : siteConfig.tagline}
          </p>

          <p className="animate-fade-up mx-auto mt-4 max-w-xl text-base italic text-warm-gray-light [animation-delay:150ms]">
            {subtitle}
          </p>

          <div className="animate-fade-up mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap [animation-delay:200ms]">
            <Button href={startHref} variant="primary">
              {ctaStart}
            </Button>
            <Button href={resourcesHref} variant="secondary">
              {ctaResources}
            </Button>
            <Button href={aboutHref} variant="outline">
              {ctaAbout}
            </Button>
            <Button href={contactHref} variant="ghost">
              {ctaContact}
            </Button>
          </div>
        </div>
      </div>
      <div className="gold-line" />
    </section>
  );
}
