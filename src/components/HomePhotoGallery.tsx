import Image from "next/image";
import Link from "next/link";

type GalleryItem = {
  src: string;
  alt: string;
  caption: string;
};

type HomePhotoGalleryProps = {
  locale?: "en" | "es";
};

const galleryEn: GalleryItem[] = [
  {
    src: "/images/about/graduation-family.png",
    alt: "Stacy at high school graduation with her family",
    caption: "Family first",
  },
  {
    src: "/images/about/gt-celebration.png",
    alt: "Stacy celebrating her Georgia Tech acceptance",
    caption: "Big moments",
  },
  {
    src: "/images/about/hhf-speaking.png",
    alt: "Stacy speaking at the Hispanic Heritage Foundation summit",
    caption: "Giving back",
  },
];

const galleryEs: GalleryItem[] = [
  {
    src: "/images/about/graduation-family.png",
    alt: "Stacy en su graduación de secundaria con su familia",
    caption: "La familia primero",
  },
  {
    src: "/images/about/gt-celebration.png",
    alt: "Stacy celebrando su aceptación a Georgia Tech",
    caption: "Grandes momentos",
  },
  {
    src: "/images/about/hhf-speaking.png",
    alt: "Stacy hablando en la cumbre de la Hispanic Heritage Foundation",
    caption: "Devolver a la comunidad",
  },
];

export function HomePhotoGallery({ locale = "en" }: HomePhotoGalleryProps) {
  const items = locale === "es" ? galleryEs : galleryEn;
  const aboutHref = locale === "es" ? "/es/sobre-mi" : "/about";
  const eyebrow = locale === "es" ? "Un vistazo" : "A little peek";
  const title =
    locale === "es" ? "Momentos del camino" : "Moments from the journey";
  const subtitle =
    locale === "es"
      ? "Fotos reales de mi historia — familia, hitos y comunidad."
      : "Real photos from my story — family, milestones, and community.";
  const cta = locale === "es" ? "Conoce más sobre mí" : "Meet more of my story";

  return (
    <section className="section-padding">
      <div className="section-container">
        <div className="mb-10 max-w-2xl sm:mb-12">
          <p className="eyebrow mb-3">{eyebrow}</p>
          <h2 className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
            {title}
          </h2>
          <p className="mt-3 text-base leading-relaxed text-muted sm:text-lg">
            {subtitle}
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3 sm:gap-5">
          {items.map((item, index) => (
            <Link
              key={item.src}
              href={aboutHref}
              className={`group relative block overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-hover ${
                index === 1 ? "sm:translate-y-4" : ""
              }`}
            >
              <div className="relative aspect-[4/5]">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-100" />
                <p className="absolute bottom-4 left-4 right-4 font-display text-base font-semibold text-white sm:text-lg">
                  {item.caption}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center sm:mt-10">
          <Link
            href={aboutHref}
            className="inline-flex items-center gap-2 text-sm font-semibold text-accent transition-all hover:gap-3 hover:text-accent-soft"
          >
            {cta}
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
