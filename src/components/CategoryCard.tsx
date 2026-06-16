import { Link } from "react-router-dom";
import type { Category } from "../data/types";
import type { CategoryResult } from "../lib/scoring";

interface CategoryCardProps {
  category: Category;
  result: CategoryResult;
}

export function CategoryCard({ category, result }: CategoryCardProps) {
  const started = result.answered > 0;
  const status = result.completed
    ? `Terminé · ${result.score}/100`
    : started
      ? `En cours · ${result.answered}/${result.total}`
      : "À faire";

  return (
    <Link
      to={`/test/${category.id}`}
      className="group flex items-center gap-4 rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)] p-4 transition active:scale-[0.99]"
      style={{ borderLeft: `4px solid ${category.color}` }}
    >
      <div
        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-2xl"
        style={{ backgroundColor: `${category.color}22` }}
      >
        {category.emoji}
      </div>
      <div className="min-w-0 flex-1">
        <div className="font-semibold">{category.label}</div>
        <div
          className="text-sm"
          style={{ color: result.completed ? category.color : "var(--color-muted)" }}
        >
          {status}
        </div>
      </div>
      <div className="text-[var(--color-muted)] transition group-active:translate-x-0.5">
        ›
      </div>
    </Link>
  );
}
