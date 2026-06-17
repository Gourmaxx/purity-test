export type CategoryId = "sexe" | "drogue" | "alcool" | "moral" | "hygiene";

export interface Answer {
  label: string;
  /** >= 0 ; 0 = innocent, plus haut = plus expérimenté / trash */
  points: number;
}

/**
 * Gate that conditionally unlocks a follow-up question. The follow-up is shown
 * (and scored) only when the gateway question has been answered with an option
 * whose index is >= minAnswerIndex. The gateway must be declared earlier in the
 * same category so visibility can be resolved without cycles.
 */
export interface QuestionGate {
  /** id of the gateway question in the same category */
  question: string;
  /** show the follow-up when the chosen answer index is >= this threshold */
  minAnswerIndex: number;
}

export interface Question {
  id: string;
  text: string;
  answers: Answer[];
  /** when set, the question is a conditional follow-up gated by another answer */
  requires?: QuestionGate;
}

export interface Category {
  id: CategoryId;
  label: string;
  emoji: string;
  /** hex accent color */
  color: string;
  questions: Question[];
}

/** questionId -> index of the selected answer */
export type CategoryAnswers = Record<string, number>;

/** answers grouped by category, as persisted */
export type AnswersByCategory = Partial<Record<CategoryId, CategoryAnswers>>;
