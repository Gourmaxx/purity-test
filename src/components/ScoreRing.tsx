interface ScoreRingProps {
  value: number;
  max: number;
  size?: number;
  stroke?: number;
  color?: string;
  caption?: string;
}

export function ScoreRing({
  value,
  max,
  size = 200,
  stroke = 14,
  color = "#ef4444",
  caption,
}: ScoreRingProps) {
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const ratio = max > 0 ? Math.max(0, Math.min(1, value / max)) : 0;
  const offset = circumference * (1 - ratio);

  return (
    <div className="relative inline-flex items-center justify-center">
      <svg width={size} height={size} className="-rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="var(--color-surface-2)"
          strokeWidth={stroke}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          style={{ transition: "stroke-dashoffset 0.8s ease-out" }}
        />
      </svg>
      <div className="absolute flex flex-col items-center">
        <span className="text-4xl font-black tracking-tight">{value}</span>
        <span className="text-sm text-[var(--color-muted)]">/ {max}</span>
        {caption && (
          <span className="mt-1 text-xs font-medium text-[var(--color-muted)]">
            {caption}
          </span>
        )}
      </div>
    </div>
  );
}
