import type { Category, CategoryAnswers, Question } from "../data/types";

/**
 * Is a single question currently unlocked, given the answers chosen so far?
 * A base question (no `requires`) is always visible. A conditional follow-up is
 * visible only when its gateway is itself visible AND its gateway answer index
 * meets the threshold. Recursion supports chained follow-ups; the integrity test
 * guarantees gateways are declared earlier, so there are no cycles.
 */
export function isQuestionVisible(
  question: Question,
  byId: Map<string, Question>,
  answers: CategoryAnswers,
): boolean {
  const gate = question.requires;
  if (!gate) return true;
  const gateway = byId.get(gate.question);
  if (!gateway) return false;
  if (!isQuestionVisible(gateway, byId, answers)) return false;
  const chosen = answers[gate.question];
  return chosen != null && chosen >= gate.minAnswerIndex;
}

/** Questions currently shown for a category, kept in declared order. */
export function visibleQuestions(
  category: Category,
  answers: CategoryAnswers = {},
): Question[] {
  const byId = new Map(category.questions.map((q) => [q.id, q]));
  return category.questions.filter((q) => isQuestionVisible(q, byId, answers));
}
