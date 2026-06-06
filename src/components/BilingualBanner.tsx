type BilingualBannerProps = {
  title: string;
  text: string;
  detail?: string;
};

export function BilingualBanner({ title, text, detail }: BilingualBannerProps) {
  return (
    <section className="relative overflow-hidden bg-navy-gradient text-white">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -left-20 top-0 h-64 w-64 rounded-full bg-tech-gold/10 blur-3xl" />
        <div className="absolute -right-10 bottom-0 h-48 w-48 rounded-full bg-white/5 blur-3xl" />
      </div>
      <div className="section-container relative section-padding">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-8 inline-flex items-center gap-4 rounded-full border border-white/15 bg-white/5 px-6 py-2.5 backdrop-blur-sm">
            <span className="text-sm font-semibold tracking-widest text-tech-gold-light">
              EN
            </span>
            <span className="h-4 w-px bg-white/20" />
            <span className="text-sm font-semibold tracking-widest text-tech-gold-light">
              ES
            </span>
          </div>
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">{title}</h2>
          <p className="mt-6 text-lg leading-relaxed text-white/85">{text}</p>
          {detail && (
            <p className="mt-5 text-base leading-relaxed text-white/55">{detail}</p>
          )}
        </div>
      </div>
      <div className="gold-line opacity-40" />
    </section>
  );
}
