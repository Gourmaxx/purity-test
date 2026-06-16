import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import type { AnswersByCategory, CategoryId } from "../data/types";
import { loadState, saveState, resetState } from "../lib/storage";

interface QuizContextValue {
  answers: AnswersByCategory;
  setAnswer: (category: CategoryId, questionId: string, answerIndex: number) => void;
  resetCategory: (category: CategoryId) => void;
  resetAll: () => void;
}

const QuizContext = createContext<QuizContextValue | null>(null);

export function QuizProvider({ children }: { children: ReactNode }) {
  const [answers, setAnswers] = useState<AnswersByCategory>(() => loadState().answers);

  // Persist on every change (skip the very first render).
  const firstRender = useRef(true);
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    saveState({ answers });
  }, [answers]);

  const setAnswer = useCallback(
    (category: CategoryId, questionId: string, answerIndex: number) => {
      setAnswers((prev) => ({
        ...prev,
        [category]: { ...(prev[category] ?? {}), [questionId]: answerIndex },
      }));
    },
    [],
  );

  const resetCategory = useCallback((category: CategoryId) => {
    setAnswers((prev) => {
      const next = { ...prev };
      delete next[category];
      return next;
    });
  }, []);

  const resetAll = useCallback(() => {
    resetState();
    setAnswers({});
  }, []);

  const value = useMemo<QuizContextValue>(
    () => ({ answers, setAnswer, resetCategory, resetAll }),
    [answers, setAnswer, resetCategory, resetAll],
  );

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
}

export function useQuiz(): QuizContextValue {
  const ctx = useContext(QuizContext);
  if (!ctx) throw new Error("useQuiz must be used within a QuizProvider");
  return ctx;
}
