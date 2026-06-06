import type { Metadata } from "next";
import { BlogPostCard } from "@/components/BlogPostCard";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHero } from "@/components/PageHero";
import { blogPosts } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Crónicas",
  description:
    "Historias, consejos y reflexiones del camino de una estudiante de primera generación.",
};

export default function CronicasPage() {
  return (
    <>
      <PageHero
        title="Crónicas"
        subtitle="Historias personales, lecciones aprendidas y consejos de mi camino como estudiante de primera generación."
      />
      <Breadcrumbs items={[{ label: "Crónicas" }]} locale="es" />

      <div className="section-padding">
        <div className="section-container">
          <div className="mb-10 rounded-xl border border-border bg-surface-warm p-6 text-center">
            <p className="text-sm text-muted">
              Nuevas publicaciones próximamente.{" "}
              <a href="/es/contacto" className="font-medium text-ink underline underline-offset-2">
                Escríbeme
              </a>{" "}
              si hay un tema que te gustaría ver cubierto.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {blogPosts.es.map((post) => (
              <BlogPostCard
                key={post.slug}
                title={post.title}
                excerpt={post.excerpt}
                comingSoon={post.comingSoon}
                comingSoonLabel="Próximamente"
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
