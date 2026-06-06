import type { Metadata } from "next";
import { BlogPostCard } from "@/components/BlogPostCard";
import { PageHero } from "@/components/PageHero";
import { blogPosts } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Chronicles",
  description: "Stories, advice, and reflections from a first-generation student's journey.",
};

export default function ChroniclesPage() {
  return (
    <>
      <PageHero
        title="Chronicles"
        subtitle="Personal stories, lessons learned, and advice from my first-gen journey."
      />

      <div className="section-padding">
        <div className="section-container">
          <div className="mb-10 rounded-xl border border-border bg-surface-warm p-6 text-center">
            <p className="text-sm text-muted">
              New posts coming soon.{" "}
              <a href="/contact" className="font-medium text-ink underline underline-offset-2">
                Reach out
              </a>{" "}
              if there&apos;s a topic you&apos;d like covered.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {blogPosts.en.map((post) => (
              <BlogPostCard
                key={post.slug}
                title={post.title}
                excerpt={post.excerpt}
                comingSoon={post.comingSoon}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
