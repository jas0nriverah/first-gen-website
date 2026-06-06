import type { Metadata } from "next";
import { BlogPostCard } from "@/components/BlogPostCard";
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
        subtitle="Historias personales, lecciones aprendidas y consejos de mi camino como estudiante de primera generación. Nuevas publicaciones próximamente."
      />

      <div className="section-padding">
        <div className="section-container">
          <div className="mb-12 rounded-2xl border border-tech-gold/20 bg-blush/40 p-8 text-center">
            <p className="text-gt-navy">
              Esta sección de blog se está construyendo. Vuelve pronto para nuevas publicaciones, o{" "}
              <a href="/es/contacto" className="font-semibold text-gt-navy-light underline decoration-tech-gold/50">
                escríbeme
              </a>{" "}
              si hay un tema que te gustaría ver cubierto.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
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
