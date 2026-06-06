export const CONTRAST_STORAGE_KEY = "fgc-contrast";

export type Contrast = "normal" | "high";

export function getStoredContrast(): Contrast | null {
  if (typeof window === "undefined") return null;
  const stored = localStorage.getItem(CONTRAST_STORAGE_KEY);
  return stored === "high" || stored === "normal" ? stored : null;
}

export function applyContrast(contrast: Contrast) {
  document.documentElement.classList.toggle("contrast-high", contrast === "high");
}
