/**
 * Maps English and Spanish page routes for the language switcher.
 * Add a new pair here when you add a new bilingual page.
 */
export const localeRoutes: Record<string, string> = {
  "/": "/bienvenidos",
  "/bienvenidos": "/",
  "/start-here": "/es/comienza-aqui",
  "/es/comienza-aqui": "/start-here",
  "/about": "/es/sobre-mi",
  "/es/sobre-mi": "/about",
  "/resources": "/es/recursos",
  "/es/recursos": "/resources",
  "/chronicles": "/es/cronicas",
  "/es/cronicas": "/chronicles",
  "/contact": "/es/contacto",
  "/es/contacto": "/contact",
  "/links": "/es/enlaces",
  "/es/enlaces": "/links",
};

export function getAlternateLocaleHref(pathname: string): string {
  const normalized = pathname.split("?")[0].split("#")[0];
  return localeRoutes[normalized] ?? (normalized.startsWith("/es") ? "/" : "/bienvenidos");
}

export function isSpanishPath(pathname: string): boolean {
  const normalized = pathname.split("?")[0].split("#")[0];
  return normalized === "/bienvenidos" || normalized.startsWith("/es/");
}
