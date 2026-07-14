import Image from "next/image";
import type { AboutImage, AboutSection } from "@/lib/site-data";

type AboutSectionsProps = {
  sections: AboutSection[];
};

const objectPositionClass = {
  left: "object-left",
  center: "object-center",
  right: "object-right",
} as const;

function AboutImageCard({ image }: { image: AboutImage }) {
  const isLandscape = image.orientation === "landscape";
  const fit = image.fit ?? (isLandscape ? "contain" : "cover");
  const position = image.objectPosition ?? "center";

  return (
    <div
      className={`group relative overflow-hidden rounded-3xl border border-border bg-surface shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-hover ${
        isLandscape ? "aspect-[4/3]" : "aspect-[3/4]"
      }`}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        className={`${fit === "contain" ? "object-contain" : "object-cover"} ${objectPositionClass[position]} transition-transform duration-700 group-hover:scale-[1.03]`}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />
    </div>
  );
}

export function AboutSections({ sections }: AboutSectionsProps) {
  return (
    <div className="space-y-16">
      {sections.map((section) => (
        <section key={section.id} id={section.id} className="scroll-mt-24">
          <h2 className="font-display text-xl font-semibold text-ink sm:text-2xl">{section.title}</h2>
          <div className="mt-5 space-y-4">
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className="text-base leading-relaxed text-muted">
                {paragraph}
              </p>
            ))}
          </div>

          {section.bullets && (
            <ul className="mt-6 space-y-2 rounded-2xl border border-border bg-surface-warm p-5">
              {section.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3 text-sm text-muted">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                  {bullet}
                </li>
              ))}
            </ul>
          )}

          {section.images && section.images.length > 0 && (
            <div
              className={`mt-8 grid gap-4 ${
                section.images.length === 1
                  ? "max-w-sm"
                  : section.images.length === 2
                    ? "sm:grid-cols-2"
                    : "sm:grid-cols-2"
              }`}
            >
              {section.images.map((image, index) => (
                <div
                  key={image.src}
                  className={
                    section.images!.length === 3 && index === 2
                      ? "sm:col-span-2 sm:mx-auto sm:max-w-sm"
                      : undefined
                  }
                >
                  <AboutImageCard image={image} />
                </div>
              ))}
            </div>
          )}
        </section>
      ))}
    </div>
  );
}
