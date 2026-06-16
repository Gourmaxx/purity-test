import { useState } from "react";
import { Navigate, useNavigate, useParams, Link } from "react-router-dom";
import { useQuiz } from "../state/QuizContext";
import { getCategory } from "../data/categories";
import type { CategoryId } from "../data/types";
import { Page } from "../components/Page";
import { ProgressBar } from "../components/ProgressBar";

export function Quiz() {
  const { categoryId } = useParams();
  const category = getCategory(categoryId);
  const navigate = useNavigate();
  const { answers, setAnswer } = useQuiz();

  const catAnswers = (category && answers[category.id]) || {};

  // Start on the first unanswered question (or the first one).
  const [index, setIndex] = useState(() => {
    if (!category) return 0;
    const firstUnanswered = category.questions.findIndex(
      (q) => catAnswers[q.id] == null,
    );
    return firstUnanswered === -1 ? 0 : firstUnanswered;
  });

  if (!category) return <Navigate to="/hub" replace />;

  const total = category.questions.length;
  const question = category.questions[index];
  const selected = catAnswers[question.id];

  function choose(answerIndex: number) {
    if (!category) return;
    setAnswer(category.id as CategoryId, question.id, answerIndex);
    window.setTimeout(() => {
      if (index < total - 1) {
        setIndex((i) => i + 1);
      } else {
        navigate(`/resultat/${category.id}`);
      }
    }, 220);
  }

  return (
    <Page>
      <header className="mb-5 flex items-center justify-between">
        <Link to="/hub" className="text-sm text-[var(--color-muted)]">
          ‹ Tests
        </Link>
        <span className="text-sm font-medium" style={{ color: category.color }}>
          {category.emoji} {category.label}
        </span>
      </header>

      <ProgressBar current={index + 1} total={total} color={category.color} />

      <div key={question.id} className="mt-8 flex-1 animate-pop-in">
        <h2 className="text-xl font-bold leading-snug">{question.text}</h2>

        <div className="mt-6 space-y-3">
          {question.answers.map((answer, i) => {
            const isSelected = selected === i;
            return (
              <button
                key={i}
                type="button"
                onClick={() => choose(i)}
                className="flex w-full items-center gap-3 rounded-2xl border p-4 text-left transition active:scale-[0.99]"
                style={{
                  borderColor: isSelected ? category.color : "var(--color-line)",
                  backgroundColor: isSelected
                    ? `${category.color}22`
                    : "var(--color-surface)",
                }}
              >
                <span
                  className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border"
                  style={{
                    borderColor: isSelected
                      ? category.color
                      : "var(--color-line)",
                    backgroundColor: isSelected ? category.color : "transparent",
                  }}
                >
                  {isSelected && (
                    <span className="h-2 w-2 rounded-full bg-white" />
                  )}
                </span>
                <span className="text-[0.95rem]">{answer.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between">
        <button
          type="button"
          onClick={() => setIndex((i) => Math.max(0, i - 1))}
          disabled={index === 0}
          className="text-sm text-[var(--color-muted)] disabled:opacity-30"
        >
          ‹ Précédent
        </button>
        {selected != null && (
          <button
            type="button"
            onClick={() => {
              if (index < total - 1) setIndex((i) => i + 1);
              else navigate(`/resultat/${category.id}`);
            }}
            className="text-sm font-medium"
            style={{ color: category.color }}
          >
            {index < total - 1 ? "Suivant ›" : "Terminer ›"}
          </button>
        )}
      </div>
    </Page>
  );
}
