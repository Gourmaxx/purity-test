import { useState } from "react";
import { Navigate, useNavigate, useParams, Link } from "react-router-dom";
import { useQuiz } from "../state/QuizContext";
import { getCategory } from "../data/categories";
import { visibleQuestions } from "../lib/questions";
import type { CategoryId } from "../data/types";
import { Page } from "../components/Page";
import { ProgressBar } from "../components/ProgressBar";

export function Quiz() {
  const { categoryId } = useParams();
  const category = getCategory(categoryId);
  const navigate = useNavigate();
  const { answers, setAnswer } = useQuiz();

  const catAnswers = (category && answers[category.id]) || {};

  // The list of shown questions grows/shrinks as gateway answers unlock follow-ups.
  const visible = category ? visibleQuestions(category, catAnswers) : [];

  // Start on the first unanswered visible question (or the first one).
  const [index, setIndex] = useState(() => {
    const firstUnanswered = visible.findIndex((q) => catAnswers[q.id] == null);
    return firstUnanswered === -1 ? 0 : firstUnanswered;
  });

  if (!category) return <Navigate to="/hub" replace />;

  const total = visible.length;
  const safeIndex = Math.min(index, Math.max(0, total - 1));
  const question = visible[safeIndex];
  if (!question) return <Navigate to="/hub" replace />;
  const selected = catAnswers[question.id];

  function goAfter(answeredId: string, nextAnswers: Record<string, number>) {
    if (!category) return;
    // Recompute visibility against the freshly chosen answer so a just-unlocked
    // follow-up (inserted right after its gateway) becomes the next question.
    const nextVisible = visibleQuestions(category, nextAnswers);
    const pos = nextVisible.findIndex((q) => q.id === answeredId);
    if (pos !== -1 && pos < nextVisible.length - 1) {
      setIndex(pos + 1);
      return;
    }
    const firstUnanswered = nextVisible.findIndex(
      (q) => nextAnswers[q.id] == null,
    );
    if (firstUnanswered === -1) navigate(`/resultat/${category.id}`);
    else setIndex(firstUnanswered);
  }

  function choose(answerIndex: number) {
    if (!category) return;
    const answeredId = question.id;
    setAnswer(category.id as CategoryId, answeredId, answerIndex);
    const nextAnswers = { ...catAnswers, [answeredId]: answerIndex };
    window.setTimeout(() => goAfter(answeredId, nextAnswers), 220);
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

      <ProgressBar current={safeIndex + 1} total={total} color={category.color} />

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
          onClick={() => setIndex(Math.max(0, safeIndex - 1))}
          disabled={safeIndex === 0}
          className="text-sm text-[var(--color-muted)] disabled:opacity-30"
        >
          ‹ Précédent
        </button>
        {selected != null && (
          <button
            type="button"
            onClick={() => goAfter(question.id, catAnswers)}
            className="text-sm font-medium"
            style={{ color: category.color }}
          >
            {safeIndex < total - 1 ? "Suivant ›" : "Terminer ›"}
          </button>
        )}
      </div>
    </Page>
  );
}
