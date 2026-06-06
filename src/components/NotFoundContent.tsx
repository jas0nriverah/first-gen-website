"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/Button";
import { isSpanishPath } from "@/lib/locale-routes";
import { uxLabels } from "@/lib/site-data";

export function NotFoundContent() {
  const pathname = usePathname();
  const locale = isSpanishPath(pathname) ? "es" : "en";
  const labels = uxLabels[locale];

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-page px-5 text-center">
      <p className="text-6xl font-bold text-ink">404</p>
      <h1 className="mt-4 text-xl font-semibold text-ink">{labels.notFoundTitle}</h1>
      <p className="mt-2 max-w-sm text-muted">{labels.notFoundText}</p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Button href={labels.notFoundStartHref} variant="primary">
          {labels.notFoundStartCta}
        </Button>
        <Link
          href={locale === "es" ? "/bienvenidos" : "/"}
          className="text-sm text-muted underline underline-offset-2 hover:text-ink"
        >
          {labels.notFoundCta}
        </Link>
      </div>
    </div>
  );
}
