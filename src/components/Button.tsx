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
    "bg-btn-primary text-btn-primary-text shadow-sm hover:bg-btn-primary-hover hover:-translate-y-0.5",
  secondary:
    "bg-accent text-white shadow-sm hover:bg-accent-soft hover:-translate-y-0.5",
  outline:
    "border border-border bg-card text-ink shadow-sm hover:border-border-dark hover:-translate-y-0.5",
  ghost: "text-muted hover:text-ink",
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  external = false,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-2xl px-5 py-2.5 text-sm font-semibold tracking-wide transition-all duration-200 sm:px-6 sm:py-3";

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
