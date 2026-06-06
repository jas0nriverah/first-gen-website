import type { Metadata } from "next";
import { BlogPostCard } from "@/components/BlogPostCard";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHero } from "@/components/PageHero";
import { blogPosts, chroniclesContent } from "@/lib/site-data";

export const metadata: Metadata = {
  title: chroniclesContent.es.pageTitle,
  description: chroniclesContent.es.metaDescription,
};

export default function CronicasPage() {
  const content = chroniclesContent.es;

  return (
    <>
      <PageHero title={content.pageTitle} subtitle={content.subtitle} />
      <Breadcrumbs items={[{ label: content.breadcrumb }]} locale="es" />

      <div className="section-padding">
        <div className="section-container">
          <div className="mb-10 rounded-xl border border-border bg-surface-warm p-6 text-center">
            <p className="text-sm text-muted">
              {content.bannerText}{" "}
              <a
                href={content.bannerLinkHref}
                className="font-medium text-ink underline underline-offset-2"
              >
                {content.bannerLinkText}
              </a>{" "}
              {content.bannerSuffix}
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {blogPosts.es.map((post) => (
              <BlogPostCard
                key={post.slug}
                title={post.title}
                excerpt={post.excerpt}
                comingSoon={post.comingSoon}
                comingSoonLabel={content.comingSoonLabel}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
