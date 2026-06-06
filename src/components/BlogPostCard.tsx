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
    <article className="card group flex h-full flex-col overflow-hidden">
      <div className="relative mb-5 aspect-[16/9] overflow-hidden rounded-xl bg-gradient-to-br from-blush via-cream-dark to-sage/50">
        <div className="absolute inset-0 bg-gold-shimmer opacity-60" />
        <div className="absolute bottom-4 left-4 h-16 w-16 rounded-full border border-tech-gold/20 bg-white/30 backdrop-blur-sm" />
        <div className="absolute right-6 top-6 h-8 w-8 rounded-full bg-tech-gold/20" />
      </div>
      {comingSoon && <span className="badge-soon mb-3 w-fit">{comingSoonLabel}</span>}
      <h3 className="mb-2 font-display text-xl font-semibold text-gt-navy transition-colors group-hover:text-gt-navy-light">
        {title}
      </h3>
      <p className="flex-1 text-sm leading-relaxed text-warm-gray">{excerpt}</p>
    </article>
  );
}
