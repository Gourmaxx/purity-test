import type {
  AnswersByCategory,
  Category,
  CategoryAnswers,
  CategoryId,
} from "../data/types";
import { categories } from "../data/categories";
import { visibleQuestions } from "./questions";

export interface CategoryResult {
  id: CategoryId;
  /** 0-100 */
  score: number;
  answered: number;
  total: number;
  completed: boolean;
}

export interface Profile {
  min: number;
  max: number;
  title: string;
  blurb: string;
}

export interface GlobalResult {
  /** sum of completed category scores, 0..maxTotal */
  total: number;
  /** 100 * number of categories */
  maxTotal: number;
  perCategory: CategoryResult[];
  completedCount: number;
  allCompleted: boolean;
  /** profile is only resolved once every category is completed */
  profile: Profile | null;
}

/**
 * Max reachable points for a category. Counts every question in the bank,
 * including conditional follow-ups: not unlocking a topic earns 0 on it, which
 * keeps the score low — the "purity test" model where exploring raises the score.
 */
export function categoryMaxPoints(category: Category): number {
  return category.questions.reduce((sum, q) => {
    const best = q.answers.reduce((m, a) => Math.max(m, a.points), 0);
    return sum + best;
  }, 0);
}

/** Points earned across the questions actually shown to the user. */
export function categoryEarnedPoints(
  category: Category,
  answers: CategoryAnswers,
): number {
  return visibleQuestions(category, answers).reduce((sum, q) => {
    const idx = answers[q.id];
    if (idx == null) return sum;
    const answer = q.answers[idx];
    return sum + (answer ? answer.points : 0);
  }, 0);
}

export function scoreCategory(
  category: Category,
  answers: CategoryAnswers = {},
): CategoryResult {
  // Progress and completion track the questions currently unlocked; the score
  // denominator stays the full bank (cumulative model).
  const visible = visibleQuestions(category, answers);
  const total = visible.length;
  const answered = visible.filter((q) => answers[q.id] != null).length;
  const max = categoryMaxPoints(category);
  const earned = categoryEarnedPoints(category, answers);
  const score = max > 0 ? Math.round((earned / max) * 100) : 0;
  return {
    id: category.id,
    score,
    answered,
    total,
    completed: total > 0 && answered === total,
  };
}

export const PROFILES: Profile[] = [
  { min: 0, max: 50, title: "Bébé ange", blurb: "Pur comme la neige fraîche. Soit tu mens, soit tu as vraiment loupé ta jeunesse." },
  { min: 51, max: 110, title: "Petit joueur", blurb: "Sage, mais tu commences à tremper un orteil dans le vice." },
  { min: 111, max: 170, title: "Curieux discret", blurb: "Tu fais l'innocent, mais on sait que tu testes en douce." },
  { min: 171, max: 230, title: "Dans la moyenne", blurb: "Ni saint ni démon. Un humain normalement abîmé par la vie." },
  { min: 231, max: 290, title: "Bien dégourdi", blurb: "Tu as de l'expérience au compteur et ça commence à se voir." },
  { min: 291, max: 350, title: "Sacré numéro", blurb: "Tu as fait des choses. Beaucoup de choses. On préfère ne pas savoir." },
  { min: 351, max: 410, title: "Gros vicelard", blurb: "À ce stade, c'est plus de l'expérience, c'est un CV." },
  { min: 411, max: 460, title: "Cas social confirmé", blurb: "Tu es l'avertissement que les parents donnent à leurs enfants." },
  { min: 461, max: 500, title: "Légende vivante", blurb: "Tu as coché des cases qu'on pensait théoriques. Respect, et un peu d'inquiétude." },
];

export function getProfile(total: number): Profile {
  return (
    PROFILES.find((p) => total >= p.min && total <= p.max) ??
    PROFILES[PROFILES.length - 1]
  );
}

export function scoreAll(answersByCategory: AnswersByCategory): GlobalResult {
  const perCategory = categories.map((c) =>
    scoreCategory(c, answersByCategory[c.id] ?? {}),
  );
  const completed = perCategory.filter((r) => r.completed);
  const total = completed.reduce((sum, r) => sum + r.score, 0);
  const allCompleted = completed.length === categories.length;
  return {
    total,
    maxTotal: categories.length * 100,
    perCategory,
    completedCount: completed.length,
    allCompleted,
    profile: allCompleted ? getProfile(total) : null,
  };
}
