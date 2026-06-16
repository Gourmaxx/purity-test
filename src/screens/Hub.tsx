import { Link } from "react-router-dom";
import { useQuiz } from "../state/QuizContext";
import { categories } from "../data/categories";
import { scoreAll } from "../lib/scoring";
import { Page } from "../components/Page";
import { Button } from "../components/Button";
import { CategoryCard } from "../components/CategoryCard";

export function Hub() {
  const { answers, resetAll } = useQuiz();
  const result = scoreAll(answers);
  const byId = Object.fromEntries(result.perCategory.map((r) => [r.id, r]));

  return (
    <Page>
      <header className="mb-5 flex items-center justify-between">
        <Link to="/" className="text-sm text-[var(--color-muted)]">
          ‹ Accueil
        </Link>
        <span className="text-sm text-[var(--color-muted)]">
          {result.completedCount}/{categories.length} tests
        </span>
      </header>

      <h1 className="text-2xl font-black tracking-tight">Choisis un test</h1>
      <p className="mt-1 mb-5 text-sm text-[var(--color-muted)]">
        Chaque catégorie est indépendante. Termine les 5 pour ton score global.
      </p>

      <div className="space-y-3">
        {categories.map((c) => (
          <CategoryCard key={c.id} category={c} result={byId[c.id]} />
        ))}
      </div>

      <div className="mt-8 space-y-3">
        {result.allCompleted ? (
          <Button to="/resultat" full>
            🏆 Voir mon score global
          </Button>
        ) : (
          <div className="rounded-2xl border border-dashed border-[var(--color-line)] p-4 text-center text-sm text-[var(--color-muted)]">
            Termine les {categories.length} tests pour débloquer ton score
            global ({result.completedCount}/{categories.length}).
          </div>
        )}

        {result.completedCount > 0 && (
          <Button
            variant="ghost"
            full
            onClick={() => {
              if (confirm("Effacer toutes tes réponses ?")) resetAll();
            }}
          >
            Tout recommencer
          </Button>
        )}
      </div>
    </Page>
  );
}
