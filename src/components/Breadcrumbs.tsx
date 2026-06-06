import Link from "next/link";
import { uxLabels } from "@/lib/site-data";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
  locale?: "en" | "es";
};

export function Breadcrumbs({ items, locale = "en" }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="section-container py-4">
      <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted">
        <li>
          <Link
            href={locale === "es" ? "/bienvenidos" : "/"}
            className="transition-colors hover:text-ink"
          >
            {uxLabels[locale].breadcrumbHome}
          </Link>
        </li>
        {items.map((item, i) => (
          <li key={item.label} className="flex items-center gap-1.5">
            <span aria-hidden="true" className="text-muted-light">/</span>
            {item.href && i < items.length - 1 ? (
              <Link href={item.href} className="transition-colors hover:text-ink">
                {item.label}
              </Link>
            ) : (
              <span className="font-medium text-ink" aria-current="page">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
