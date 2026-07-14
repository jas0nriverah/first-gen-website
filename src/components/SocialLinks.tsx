import { socialLinks } from "@/lib/site-data";

type SocialLinksProps = {
  variant?: "default" | "footer" | "large";
  className?: string;
};

const icons = {
  linkedin: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-full w-full" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  ),
  tiktok: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-full w-full" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
    </svg>
  ),
};

const sizeClasses = {
  default: "h-9 w-9",
  footer: "h-9 w-9",
  large: "h-11 w-11",
};

const colorClasses = {
  default:
    "border border-border bg-card text-muted hover:border-border-dark hover:text-ink",
  footer:
    "border border-border bg-transparent text-footer-muted hover:border-border-dark hover:text-inverse-foreground",
  large:
    "border border-border bg-card text-ink hover:border-accent hover:text-accent",
};

export function SocialLinks({ variant = "default", className = "" }: SocialLinksProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {socialLinks.map((link) => (
        <a
          key={link.platform}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.label}
          className={`inline-flex items-center justify-center rounded-lg p-2 transition-colors ${sizeClasses[variant]} ${colorClasses[variant]}`}
        >
          {icons[link.platform]}
        </a>
      ))}
    </div>
  );
}
