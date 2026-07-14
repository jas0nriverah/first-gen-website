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
    <div className={`mb-12 sm:mb-16 ${centered ? "text-center" : ""} ${className}`}>
      {eyebrow && (
        <p className={`eyebrow mb-3 ${centered ? "mx-auto" : ""}`}>{eyebrow}</p>
      )}
      <h2 className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl lg:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 max-w-xl text-base leading-relaxed text-muted sm:text-lg ${centered ? "mx-auto" : ""}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
