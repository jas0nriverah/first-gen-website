type PageHeroProps = {
  title: string;
  subtitle?: string;
  centered?: boolean;
};

export function PageHero({ title, subtitle, centered = false }: PageHeroProps) {
  return (
    <section className="border-b border-border bg-surface-warm">
      <div className="section-container py-16 sm:py-20">
        <div className={`max-w-2xl ${centered ? "mx-auto text-center" : ""}`}>
          <p className={`eyebrow mb-4 ${centered ? "mx-auto" : ""}`}>
            First Gen Chronicles
          </p>
          <h1 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl lg:text-5xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
