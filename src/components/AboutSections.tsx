import Image from "next/image";
import type { AboutSection } from "@/lib/site-data";

type AboutSectionsProps = {
  sections: AboutSection[];
};

export function AboutSections({ sections }: AboutSectionsProps) {
  return (
    <div className="space-y-16">
      {sections.map((section) => (
        <section key={section.id} id={section.id} className="scroll-mt-24">
          <h2 className="text-xl font-bold text-ink sm:text-2xl">{section.title}</h2>
          <div className="mt-5 space-y-4">
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className="text-base leading-relaxed text-muted">
                {paragraph}
              </p>
            ))}
          </div>

          {section.bullets && (
            <ul className="mt-6 space-y-2 rounded-xl border border-border bg-surface-warm p-5">
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
                    : "sm:grid-cols-2 lg:grid-cols-3"
              }`}
            >
              {section.images.map((image) => (
                <div
                  key={image.src}
                  className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-border bg-surface"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              ))}
            </div>
          )}
        </section>
      ))}
    </div>
  );
}
