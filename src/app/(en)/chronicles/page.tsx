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
        subtitle="Personal stories, lessons learned, and advice from my first-gen journey. New posts coming soon."
      />

      <div className="section-padding">
        <div className="section-container">
          <div className="mb-12 rounded-2xl border border-tech-gold/20 bg-blush/40 p-8 text-center">
            <p className="text-gt-navy">
              This blog section is being built out. Check back for new posts, or{" "}
              <a href="/contact" className="font-semibold text-gt-navy-light underline decoration-tech-gold/50">
                reach out
              </a>{" "}
              if there&apos;s a topic you&apos;d like to see covered.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
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
