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
      <div className="mb-1 flex items-center gap-3">
        <span className="h-8 w-1 rounded-full bg-tech-gold" />
        <h3 className="font-display text-xl font-semibold text-gt-navy">{category.title}</h3>
      </div>
      <p className="mb-6 ml-4 text-sm text-warm-gray">{category.description}</p>
      <ul className="space-y-3">
        {category.links.map((link) => (
          <li key={link.title}>
            {link.href && !link.comingSoon ? (
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-xl border border-gt-navy/[0.06] bg-cream/60 p-4 transition-all hover:border-tech-gold/30 hover:bg-white hover:shadow-card"
              >
                <span className="font-medium text-gt-navy group-hover:text-gt-navy-light">
                  {link.title}
                </span>
                <p className="mt-1 text-sm text-warm-gray">{link.description}</p>
              </a>
            ) : (
              <div className="rounded-xl border border-gt-navy/[0.06] bg-cream/40 p-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-medium text-gt-navy">{link.title}</span>
                  <span className="badge-soon">{comingSoonLabel}</span>
                </div>
                <p className="mt-1 text-sm text-warm-gray">{link.description}</p>
              </div>
            )}
          </li>
        ))}
      </ul>
    </article>
  );
}
