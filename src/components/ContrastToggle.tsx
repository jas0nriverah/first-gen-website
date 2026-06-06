"use client";

import { useEffect, useState } from "react";
import {
  applyContrast,
  CONTRAST_STORAGE_KEY,
  getStoredContrast,
  type Contrast,
} from "@/lib/contrast";
import { uxLabels } from "@/lib/site-data";

type ContrastToggleProps = {
  className?: string;
  locale?: "en" | "es";
};

function getInitialContrast(): Contrast {
  if (typeof document === "undefined") return "normal";
  return document.documentElement.classList.contains("contrast-high") ? "high" : "normal";
}

export function ContrastToggle({ className = "", locale = "en" }: ContrastToggleProps) {
  const [contrast, setContrast] = useState<Contrast>(getInitialContrast);
  const labels = uxLabels[locale];

  useEffect(() => {
    const initial = getStoredContrast() ?? "normal";
    setContrast(initial);
    applyContrast(initial);
  }, []);

  const toggle = () => {
    const next: Contrast = contrast === "high" ? "normal" : "high";
    setContrast(next);
    applyContrast(next);
    localStorage.setItem(CONTRAST_STORAGE_KEY, next);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={contrast === "high"}
      className={`rounded-md border border-border p-2 text-muted transition-colors hover:border-border-dark hover:text-ink ${className}`}
      aria-label={contrast === "high" ? labels.contrastOff : labels.contrastOn}
      title={contrast === "high" ? labels.contrastOff : labels.contrastOn}
    >
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 3a9 9 0 0 1 0 18Z" fill="currentColor" stroke="none" />
      </svg>
    </button>
  );
}
