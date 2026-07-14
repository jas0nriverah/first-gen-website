import Image from "next/image";
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

  const photoAlt =
    locale === "es"
      ? "Stacy Lomeli con bata de laboratorio y estetoscopio"
      : "Stacy Lomeli in a white lab coat with a stethoscope";

  return (
    <section className="relative overflow-hidden border-b border-border">
      <DecorativeBackground />
      <div className="section-container relative py-20 sm:py-28 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="max-w-xl">
            <span className="badge mb-8 animate-fade-up">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
              {locale === "es"
                ? "Estudiante de primera generación"
                : "First-generation student"}
            </span>

            <h1 className="animate-fade-up font-display text-4xl font-semibold leading-[1.1] tracking-tight text-ink sm:text-5xl lg:text-[3.35rem] [animation-delay:50ms]">
              {siteConfig.name}
            </h1>

            <p className="animate-fade-up mt-6 text-lg leading-relaxed text-muted sm:text-xl [animation-delay:100ms]">
              {locale === "es" ? siteConfig.taglineEs : siteConfig.tagline}
            </p>

            <p className="animate-fade-up mt-4 max-w-xl text-base leading-relaxed text-muted-light [animation-delay:150ms]">
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

          <div className="animate-fade-up relative mx-auto w-full max-w-md lg:max-w-none [animation-delay:250ms]">
            <div
              className="absolute -inset-4 rounded-[2rem] bg-accent-muted blur-2xl opacity-70"
              aria-hidden="true"
            />
            <div className="group relative overflow-hidden rounded-[1.75rem] border border-border bg-card shadow-card transition-transform duration-500 hover:-translate-y-1 hover:shadow-hover">
              <div className="relative aspect-[4/5]">
                <Image
                  src="/images/about/stacy-lab-coat.png"
                  alt={photoAlt}
                  fill
                  priority
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  sizes="(max-width: 1024px) 90vw, 420px"
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent p-5 sm:p-6">
                <p className="font-display text-lg font-semibold text-white">
                  {siteConfig.creator}
                </p>
                <p className="mt-0.5 text-sm text-white/85">
                  {locale === "es"
                    ? "Neurociencia · Pre-medicina · Georgia Tech"
                    : "Neuroscience · Pre-med · Georgia Tech"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
