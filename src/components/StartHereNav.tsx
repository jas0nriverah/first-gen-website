import { pathways } from "@/lib/site-data";

type StartHereNavProps = {
  locale?: "en" | "es";
  embedded?: boolean;
};

export function StartHereNav({ locale = "en", embedded = false }: StartHereNavProps) {
  const items = pathways[locale];
  const label = locale === "es" ? "Elige tu camino" : "Choose your path";

  return (
    <nav
      aria-label={label}
      className={`flex flex-wrap gap-2 ${embedded ? "" : "section-container mb-10"}`}
    >
      {items.map((item) => (
        <a
          key={item.title}
          href={item.href}
          className="rounded-full border border-border bg-card px-4 py-2 text-sm text-muted transition-colors hover:border-border-dark hover:text-ink"
        >
          {item.title}
        </a>
      ))}
    </nav>
  );
}
