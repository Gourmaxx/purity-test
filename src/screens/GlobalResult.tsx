import { useState } from "react";
import { Navigate, Link } from "react-router-dom";
import { useQuiz } from "../state/QuizContext";
import { categories } from "../data/categories";
import { scoreAll } from "../lib/scoring";
import { encodeResult, type ScoreMap } from "../lib/share";
import { Page } from "../components/Page";
import { Button } from "../components/Button";
import { ScoreRing } from "../components/ScoreRing";
import { CategoryBar } from "../components/CategoryBar";

export function GlobalResult() {
  const { answers, resetAll } = useQuiz();
  const result = scoreAll(answers);
  const [copied, setCopied] = useState(false);

  if (!result.allCompleted) return <Navigate to="/hub" replace />;

  const scoreById = Object.fromEntries(
    result.perCategory.map((r) => [r.id, r.score]),
  );

  async function share() {
    const scores = Object.fromEntries(
      result.perCategory.map((r) => [r.id, r.score]),
    ) as ScoreMap;
    const token = encodeResult(scores);
    const url = `${window.location.origin}${window.location.pathname}#/partage?d=${token}`;
    const text = `Mon Purity Test : ${result.total}/${result.maxTotal} — ${result.profile?.title}. Et toi ?`;
    try {
      if (navigator.share) {
        await navigator.share({ title: "Purity Test", text, url });
      } else {
        await navigator.clipboard.writeText(url);
        setCopied(true);
        window.setTimeout(() => setCopied(false), 2000);
      }
    } catch {
      // user cancelled the share sheet — ignore
    }
  }

  return (
    <Page>
      <header className="mb-2">
        <Link to="/hub" className="text-sm text-[var(--color-muted)]">
          ‹ Tests
        </Link>
      </header>

      <div className="flex flex-col items-center text-center animate-pop-in">
        <div className="my-6">
          <ScoreRing
            value={result.total}
            max={result.maxTotal}
            color="#ef4444"
            caption="score global"
          />
        </div>

        {result.profile && (
          <>
            <h1 className="text-3xl font-black tracking-tight">
              {result.profile.title}
            </h1>
            <p className="mt-2 max-w-xs text-[var(--color-muted)]">
              {result.profile.blurb}
            </p>
          </>
        )}
      </div>

      <div className="mt-8 space-y-4 rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)] p-5">
        {categories.map((c) => (
          <CategoryBar
            key={c.id}
            label={c.label}
            emoji={c.emoji}
            color={c.color}
            score={scoreById[c.id] ?? 0}
          />
        ))}
      </div>

      <div className="mt-8 space-y-3">
        <Button onClick={share} full>
          {copied ? "Lien copié ✓" : "Partager mon résultat"}
        </Button>
        <Button
          variant="outline"
          full
          onClick={() => {
            if (confirm("Effacer toutes tes réponses et recommencer ?"))
              resetAll();
          }}
        >
          Recommencer
        </Button>
      </div>
    </Page>
  );
}
