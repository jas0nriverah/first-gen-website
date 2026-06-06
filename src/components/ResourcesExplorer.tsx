"use client";

import { useMemo, useState } from "react";
import { ResourceCategoryCard } from "./ResourceCategoryCard";
import {
  categoryAudiences,
  resourceFilters,
  uxLabels,
  type ResourceCategory,
  type ResourceAudience,
} from "@/lib/site-data";

type ResourcesExplorerProps = {
  categories: ResourceCategory[];
  locale?: "en" | "es";
};

export function ResourcesExplorer({ categories, locale = "en" }: ResourcesExplorerProps) {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [search, setSearch] = useState("");

  const labels = uxLabels[locale];
  const filters = resourceFilters[locale];
  const comingSoonLabel = locale === "es" ? "Próximamente" : "Coming Soon";

  const filtered = useMemo(() => {
    const query = search.trim().toLowerCase();

    return categories.filter((cat) => {
      const audiences = categoryAudiences[cat.id] ?? [];
      const matchesFilter =
        activeFilter === "all" ||
        audiences.includes(activeFilter as ResourceAudience);

      if (!matchesFilter) return false;
      if (!query) return true;

      const inCategory =
        cat.title.toLowerCase().includes(query) ||
        cat.description.toLowerCase().includes(query);
      const inLinks = cat.links.some(
        (l) =>
          l.title.toLowerCase().includes(query) ||
          l.description.toLowerCase().includes(query)
      );

      return inCategory || inLinks;
    });
  }, [categories, activeFilter, search]);

  return (
    <div className="section-container">
      <div className="mb-8 rounded-xl border border-border bg-card p-4">
        <p className="text-sm text-muted">
          <span className="badge-soon mr-2">{comingSoonLabel}</span>
          {labels.comingSoonNote}
        </p>
      </div>

      <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter resources">
          {filters.map((filter) => (
            <button
              key={filter.id}
              type="button"
              role="tab"
              aria-selected={activeFilter === filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                activeFilter === filter.id
                  ? "bg-ink text-inverse-foreground"
                  : "border border-border bg-card text-muted hover:text-ink"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="relative w-full lg:max-w-xs">
          <svg
            className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-light"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={labels.searchResources}
            className="w-full rounded-lg border border-border bg-card py-2.5 pl-10 pr-4 text-sm text-ink placeholder:text-muted-light focus:border-border-dark focus:outline-none"
            aria-label={labels.searchResources}
          />
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-[220px_1fr]">
        <aside className="hidden lg:block">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted">
            {labels.jumpTo}
          </p>
          <nav aria-label="Resource categories">
            <ul className="sticky top-24 space-y-1">
              {filtered.map((cat) => (
                <li key={cat.id}>
                  <a
                    href={`#${cat.id}`}
                    className="block rounded-md px-2 py-1.5 text-sm text-muted transition-colors hover:bg-surface hover:text-ink"
                  >
                    {cat.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        <div>
          {filtered.length === 0 ? (
            <div className="rounded-2xl border border-border bg-card p-10 text-center">
              <p className="text-muted">{labels.noResults}</p>
            </div>
          ) : (
            <div className="grid gap-6">
              {filtered.map((category) => (
                <ResourceCategoryCard
                  key={category.id}
                  category={category}
                  comingSoonLabel={comingSoonLabel}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
