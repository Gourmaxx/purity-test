export type CategoryId = "sexe" | "drogue" | "alcool" | "moral" | "hygiene";

export interface Answer {
  label: string;
  /** >= 0 ; 0 = innocent, plus haut = plus expérimenté / trash */
  points: number;
}

export interface Question {
  id: string;
  text: string;
  answers: Answer[];
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
