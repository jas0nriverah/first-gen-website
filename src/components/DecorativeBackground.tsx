type DecorativeBackgroundProps = {
  variant?: "hero" | "subtle";
};

export function DecorativeBackground({ variant = "hero" }: DecorativeBackgroundProps) {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      <div
        className={`absolute inset-0 ${variant === "hero" ? "opacity-40" : "opacity-25"}`}
        style={{
          backgroundImage: `radial-gradient(circle, #E5E5E5 1px, transparent 1px)`,
          backgroundSize: variant === "hero" ? "24px 24px" : "32px 32px",
        }}
      />
      {variant === "hero" && (
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-accent-muted blur-3xl" />
      )}
    </div>
  );
}
