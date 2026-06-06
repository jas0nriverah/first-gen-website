import Link from "next/link";
import { Button } from "@/components/Button";
import { uxLabels } from "@/lib/site-data";

export default function NotFound() {
  const labels = uxLabels.en;

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-page px-5 text-center">
      <p className="text-6xl font-bold text-ink">404</p>
      <h1 className="mt-4 text-xl font-semibold text-ink">{labels.notFoundTitle}</h1>
      <p className="mt-2 max-w-sm text-muted">{labels.notFoundText}</p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Button href="/start-here" variant="primary">
          Start here
        </Button>
        <Link href="/" className="text-sm text-muted underline underline-offset-2 hover:text-ink">
          {labels.notFoundCta}
        </Link>
      </div>
    </div>
  );
}
