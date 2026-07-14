type BilingualBannerProps = {
  title: string;
  text: string;
  detail?: string;
};

export function BilingualBanner({ title, text, detail }: BilingualBannerProps) {
  return (
    <section className="border-y border-border bg-accent-muted/60">
      <div className="section-container py-20 sm:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-border bg-card px-4 py-2 text-xs font-semibold tracking-wide text-muted shadow-sm">
            <span>EN</span>
            <span className="h-3 w-px bg-border" />
            <span>ES</span>
          </div>
          <h2 className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
            {title}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">{text}</p>
          {detail && (
            <p className="mt-4 text-sm leading-relaxed text-muted-light">{detail}</p>
          )}
        </div>
      </div>
    </section>
  );
}
