import { Navigate, useSearchParams } from "react-router-dom";
import { categories } from "../data/categories";
import { getProfile } from "../lib/scoring";
import { decodeResult } from "../lib/share";
import { Page } from "../components/Page";
import { Button } from "../components/Button";
import { ScoreRing } from "../components/ScoreRing";
import { CategoryBar } from "../components/CategoryBar";

export function SharedResult() {
  const [params] = useSearchParams();
  const token = params.get("d");
  const scores = token ? decodeResult(token) : null;

  // Malformed or missing token -> back to home gracefully.
  if (!scores) return <Navigate to="/" replace />;

  const maxTotal = categories.length * 100;
  const total = categories.reduce((sum, c) => sum + (scores[c.id] ?? 0), 0);
  const profile = getProfile(total);

  return (
    <Page>
      <div className="flex flex-col items-center text-center animate-pop-in">
        <span className="text-sm text-[var(--color-muted)]">
          Résultat partagé
        </span>

        <div className="my-6">
          <ScoreRing value={total} max={maxTotal} color="#ef4444" caption="score global" />
        </div>

        <h1 className="text-3xl font-black tracking-tight">{profile.title}</h1>
        <p className="mt-2 max-w-xs text-[var(--color-muted)]">{profile.blurb}</p>
      </div>

      <div className="mt-8 space-y-4 rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)] p-5">
        {categories.map((c) => (
          <CategoryBar
            key={c.id}
            label={c.label}
            emoji={c.emoji}
            color={c.color}
            score={scores[c.id] ?? 0}
          />
        ))}
      </div>

      <div className="mt-8">
        <Button to="/" full>
          😏 À ton tour, fais le test
        </Button>
      </div>
    </Page>
  );
}
