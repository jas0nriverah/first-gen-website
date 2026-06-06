import { DecorativeBackground } from "./DecorativeBackground";

type PageHeroProps = {
  title: string;
  subtitle?: string;
  centered?: boolean;
};

export function PageHero({ title, subtitle, centered = false }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-gt-navy/[0.06] bg-section-warm">
      <DecorativeBackground variant="subtle" />
      <div className="section-container relative py-14 sm:py-16 lg:py-20">
        <div className={`max-w-3xl ${centered ? "mx-auto text-center" : ""}`}>
          <div className={`mb-4 flex items-center gap-3 ${centered ? "justify-center" : ""}`}>
            <span className="h-px w-8 bg-tech-gold" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-tech-gold">
              First Gen Chronicles
            </span>
          </div>
          <h1 className="font-display text-4xl font-semibold leading-tight text-gt-navy sm:text-5xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-4 text-lg leading-relaxed text-warm-gray sm:text-xl">
              {subtitle}
            </p>
          )}
        </div>
      </div>
      <div className="gold-line" />
    </section>
  );
}
