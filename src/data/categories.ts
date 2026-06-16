import type { Category, CategoryId } from "./types";
import { sexeQuestions } from "./questions/sexe";
import { drogueQuestions } from "./questions/drogue";
import { alcoolQuestions } from "./questions/alcool";
import { moralQuestions } from "./questions/moral";
import { hygieneQuestions } from "./questions/hygiene";

export const categories: Category[] = [
  { id: "sexe", label: "Sexe", emoji: "🔥", color: "#ef4444", questions: sexeQuestions },
  { id: "drogue", label: "Drogue", emoji: "💊", color: "#a855f7", questions: drogueQuestions },
  { id: "alcool", label: "Alcool", emoji: "🍺", color: "#f59e0b", questions: alcoolQuestions },
  { id: "moral", label: "Moral", emoji: "😈", color: "#3b82f6", questions: moralQuestions },
  { id: "hygiene", label: "Hygiène", emoji: "🧼", color: "#10b981", questions: hygieneQuestions },
];

export const categoryIds: CategoryId[] = categories.map((c) => c.id);

export function getCategory(id: string | undefined): Category | undefined {
  return categories.find((c) => c.id === id);
}
