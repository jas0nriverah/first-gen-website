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
    <section className="relative overflow-hidden border-b border-border">
      <DecorativeBackground />
      <div className="section-container relative py-24 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-3xl">
          <span className="badge mb-8 animate-fade-up">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            {locale === "es"
              ? "Estudiante de primera generación"
              : "First-generation student"}
          </span>

          <h1 className="animate-fade-up text-4xl font-bold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-6xl [animation-delay:50ms]">
            {siteConfig.name}
          </h1>

          <p className="animate-fade-up mt-6 text-lg leading-relaxed text-muted sm:text-xl [animation-delay:100ms]">
            {locale === "es" ? siteConfig.taglineEs : siteConfig.tagline}
          </p>

          <p className="animate-fade-up mt-4 max-w-xl text-base text-muted-light [animation-delay:150ms]">
            {subtitle}
          </p>

          <div className="animate-fade-up mt-10 flex flex-wrap gap-3 [animation-delay:200ms]">
            <Button href={startHref} variant="primary">
              {ctaStart}
            </Button>
            <Button href={resourcesHref} variant="primary">
              {ctaResources}
            </Button>
            <Button href={aboutHref} variant="primary">
              {ctaAbout}
            </Button>
            <Button href={contactHref} variant="primary">
              {ctaContact}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
