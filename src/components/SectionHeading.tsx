type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  eyebrow?: string;
};

export function SectionHeading({
  title,
  subtitle,
  centered = false,
  className = "",
  eyebrow,
}: SectionHeadingProps) {
  return (
    <div className={`mb-10 sm:mb-14 ${centered ? "text-center" : ""} ${className}`}>
      {eyebrow && (
        <p
          className={`mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-tech-gold ${centered ? "mx-auto" : ""}`}
        >
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-3xl font-semibold tracking-tight text-gt-navy sm:text-4xl lg:text-[2.75rem]">
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-5 max-w-2xl text-lg leading-relaxed text-warm-gray ${centered ? "mx-auto" : ""}`}
        >
          {subtitle}
        </p>
      )}
      <div className={`mt-6 flex items-center gap-3 ${centered ? "justify-center" : ""}`}>
        <span className="h-px w-12 bg-tech-gold/60" />
        <span className="h-1.5 w-1.5 rounded-full bg-tech-gold" />
        <span className={`h-px bg-tech-gold/30 ${centered ? "w-12" : "w-24"}`} />
      </div>
    </div>
  );
}
