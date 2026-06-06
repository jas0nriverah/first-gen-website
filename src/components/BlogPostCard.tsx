type BlogPostCardProps = {
  title: string;
  excerpt: string;
  comingSoon?: boolean;
  comingSoonLabel?: string;
};

export function BlogPostCard({
  title,
  excerpt,
  comingSoon = true,
  comingSoonLabel = "Coming Soon",
}: BlogPostCardProps) {
  return (
    <article className="card group flex h-full flex-col">
      <div className="mb-5 aspect-[16/9] rounded-xl bg-surface" />
      {comingSoon && <span className="badge-soon mb-3 w-fit">{comingSoonLabel}</span>}
      <h3 className="mb-2 text-base font-semibold text-ink">{title}</h3>
      <p className="flex-1 text-sm leading-relaxed text-muted">{excerpt}</p>
    </article>
  );
}
