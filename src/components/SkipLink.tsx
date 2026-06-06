import { uxLabels } from "@/lib/site-data";

type SkipLinkProps = {
  locale?: "en" | "es";
};

export function SkipLink({ locale = "en" }: SkipLinkProps) {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-btn-primary focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-btn-primary-text"
    >
      {uxLabels[locale].skipToContent}
    </a>
  );
}
