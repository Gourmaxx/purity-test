import { Navigate, useParams } from "react-router-dom";
import { useQuiz } from "../state/QuizContext";
import { getCategory } from "../data/categories";
import { scoreCategory } from "../lib/scoring";
import { Page } from "../components/Page";
import { Button } from "../components/Button";
import { ScoreRing } from "../components/ScoreRing";

function categoryComment(score: number): string {
  if (score <= 20) return "Quasi immaculé. Étonnant.";
  if (score <= 40) return "Tu restes très sage sur ce coup.";
  if (score <= 60) return "Une expérience honnête, sans excès.";
  if (score <= 80) return "Tu as clairement roulé ta bosse.";
  return "Là, on est sur du niveau professionnel.";
}

export function CategoryResult() {
  const { categoryId } = useParams();
  const category = getCategory(categoryId);
  const { answers } = useQuiz();

  if (!category) return <Navigate to="/hub" replace />;

  const result = scoreCategory(category, answers[category.id] ?? {});

  return (
    <Page>
      <div className="flex flex-1 flex-col items-center justify-center text-center animate-pop-in">
        <span className="text-sm font-medium" style={{ color: category.color }}>
          {category.emoji} {category.label}
        </span>

        <div className="my-8">
          <ScoreRing
            value={result.score}
            max={100}
            color={category.color}
            caption="score"
          />
        </div>

        <p className="max-w-xs text-[var(--color-muted)]">
          {categoryComment(result.score)}
        </p>
      </div>

      <div className="space-y-3">
        <Button to="/hub" full color={category.color}>
          Retour aux tests
        </Button>
      </div>
    </Page>
  );
}
