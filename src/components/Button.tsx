import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
  external?: boolean;
};

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-navy-gradient text-white shadow-soft hover:shadow-lift hover:-translate-y-0.5",
  secondary:
    "bg-tech-gold text-gt-navy shadow-card hover:bg-tech-gold-light hover:shadow-lift hover:-translate-y-0.5",
  outline:
    "border border-gt-navy/15 bg-white/60 text-gt-navy backdrop-blur-sm hover:border-tech-gold/40 hover:bg-white hover:shadow-card",
  ghost:
    "text-gt-navy/80 hover:bg-gt-navy/5 hover:text-gt-navy",
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  external = false,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-300 sm:px-7 sm:py-3.5 sm:text-base";

  const classes = `${base} ${variants[variant]} ${className}`;

  if (external || href.startsWith("mailto:") || href.startsWith("http")) {
    return (
      <a
        href={href}
        className={classes}
        {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
