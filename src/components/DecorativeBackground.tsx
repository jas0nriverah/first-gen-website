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
        className={`absolute inset-0 ${variant === "hero" ? "opacity-35" : "opacity-20"}`}
        style={{
          backgroundImage: "radial-gradient(circle, var(--color-dot-grid) 1px, transparent 1px)",
          backgroundSize: variant === "hero" ? "22px 22px" : "30px 30px",
        }}
      />
      {variant === "hero" && (
        <>
          <div className="absolute -right-24 -top-28 h-[26rem] w-[26rem] animate-soft-float rounded-full bg-accent-muted blur-3xl" />
          <div className="absolute -bottom-36 -left-24 h-80 w-80 rounded-full bg-surface blur-3xl opacity-80 [animation-delay:1.5s] animate-soft-float" />
        </>
      )}
    </div>
  );
}
