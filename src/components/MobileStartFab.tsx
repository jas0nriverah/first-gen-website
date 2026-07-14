"use client";

import Link from "next/link";
import { uxLabels } from "@/lib/site-data";

type MobileStartFabProps = {
  locale?: "en" | "es";
};

export function MobileStartFab({ locale = "en" }: MobileStartFabProps) {
  const href = locale === "es" ? "/es/comienza-aqui" : "/start-here";
  const label = uxLabels[locale].startHereFab;

  return (
    <Link
      href={href}
      className="fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-2xl bg-accent px-5 py-3 text-sm font-semibold text-white shadow-hover transition-all hover:-translate-y-0.5 hover:bg-accent-soft lg:hidden"
      aria-label={label}
    >
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
      </svg>
      {label}
    </Link>
  );
}
