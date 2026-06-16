interface CategoryBarProps {
  label: string;
  emoji: string;
  score: number;
  color: string;
  /** when false, render a muted "non terminé" state */
  completed?: boolean;
}

export function CategoryBar({
  label,
  emoji,
  score,
  color,
  completed = true,
}: CategoryBarProps) {
  return (
    <div className="w-full">
      <div className="mb-1 flex items-center justify-between text-sm">
        <span className="font-medium">
          <span className="mr-1.5">{emoji}</span>
          {label}
        </span>
        <span className="tabular-nums text-[var(--color-muted)]">
          {completed ? `${score}/100` : "—"}
        </span>
      </div>
      <div className="h-2.5 w-full overflow-hidden rounded-full bg-[var(--color-surface-2)]">
        <div
          className="h-full rounded-full transition-[width] duration-700 ease-out"
          style={{
            width: completed ? `${score}%` : "0%",
            backgroundColor: color,
          }}
        />
      </div>
    </div>
  );
}
