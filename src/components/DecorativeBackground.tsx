type DecorativeBackgroundProps = {
  variant?: "hero" | "subtle";
};

export function DecorativeBackground({ variant = "hero" }: DecorativeBackgroundProps) {
  if (variant === "subtle") {
    return (
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -right-20 top-10 h-64 w-64 rounded-full bg-tech-gold/8 blur-3xl" />
        <div className="absolute -left-16 bottom-10 h-48 w-48 rounded-full bg-gt-navy/5 blur-3xl" />
      </div>
    );
  }

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-hero-glow" />
      <div className="absolute -left-24 top-20 h-72 w-72 animate-float rounded-full bg-tech-gold/12 blur-3xl" />
      <div className="absolute -right-16 top-40 h-56 w-56 animate-float-delayed rounded-full bg-blush blur-3xl" />
      <div className="absolute bottom-0 left-1/3 h-48 w-48 rounded-full bg-sage/60 blur-3xl" />
      <svg
        className="absolute right-8 top-24 hidden h-32 w-32 text-tech-gold/15 lg:block"
        viewBox="0 0 100 100"
        fill="currentColor"
      >
        <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" />
        <circle cx="50" cy="50" r="28" fill="none" stroke="currentColor" strokeWidth="0.5" />
        <circle cx="50" cy="50" r="16" fill="none" stroke="currentColor" strokeWidth="0.5" />
      </svg>
      <svg
        className="absolute bottom-32 left-8 hidden h-24 w-24 text-gt-navy/8 lg:block"
        viewBox="0 0 60 60"
        fill="currentColor"
      >
        <path d="M30 5 L55 30 L30 55 L5 30 Z" fill="none" stroke="currentColor" strokeWidth="0.5" />
      </svg>
    </div>
  );
}
