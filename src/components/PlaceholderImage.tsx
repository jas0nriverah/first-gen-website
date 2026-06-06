type PlaceholderImageProps = {
  label: string;
  aspectRatio?: "square" | "portrait" | "wide";
  className?: string;
};

const aspectClasses = {
  square: "aspect-square",
  portrait: "aspect-[3/4]",
  wide: "aspect-[16/9]",
};

export function PlaceholderImage({
  label,
  aspectRatio = "square",
  className = "",
}: PlaceholderImageProps) {
  return (
    <div
      className={`relative flex ${aspectClasses[aspectRatio]} items-center justify-center overflow-hidden rounded-2xl border border-gt-navy/[0.08] bg-gradient-to-br from-blush via-cream to-sage/30 ${className}`}
      role="img"
      aria-label={label}
    >
      <div className="absolute inset-0 bg-gold-shimmer opacity-40" />
      <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-tech-gold/10 blur-2xl" />
      <div className="relative px-6 text-center">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-tech-gold/25 bg-white/60 shadow-card backdrop-blur-sm">
          <svg
            className="h-7 w-7 text-tech-gold"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0 0 22.5 18.75V5.25A2.25 2.25 0 0 0 20.25 3H3.75A2.25 2.25 0 0 0 1.5 5.25v13.5A2.25 2.25 0 0 0 3.75 21Z"
            />
          </svg>
        </div>
        <p className="text-sm font-medium text-warm-gray">{label}</p>
      </div>
    </div>
  );
}
