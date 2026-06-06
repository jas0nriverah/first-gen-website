import type { ResourceCategory } from "@/lib/site-data";

type ResourceCategoryCardProps = {
  category: ResourceCategory;
  comingSoonLabel?: string;
};

export function ResourceCategoryCard({
  category,
  comingSoonLabel = "Coming Soon",
}: ResourceCategoryCardProps) {
  return (
    <article id={category.id} className="card-static scroll-mt-24">
      <h3 className="mb-1 text-base font-semibold text-ink">{category.title}</h3>
      <p className="mb-5 text-sm text-muted">{category.description}</p>
      <ul className="space-y-2">
        {category.links.map((link) => (
          <li key={link.title}>
            {link.href && !link.comingSoon ? (
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-lg border border-border bg-surface-warm p-4 transition-colors hover:border-border-dark"
              >
                <span className="text-sm font-medium text-ink">{link.title}</span>
                <p className="mt-1 text-xs text-muted">{link.description}</p>
              </a>
            ) : (
              <div className="rounded-lg border border-border bg-surface-warm p-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-sm font-medium text-ink">{link.title}</span>
                  <span className="badge-soon">{comingSoonLabel}</span>
                </div>
                <p className="mt-1 text-xs text-muted">{link.description}</p>
              </div>
            )}
          </li>
        ))}
      </ul>
    </article>
  );
}
