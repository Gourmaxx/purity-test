import { describe, it, expect } from "vitest";
import { categories } from "./categories";

describe("question banks integrity", () => {
  it("has the 5 expected categories", () => {
    expect(categories.map((c) => c.id)).toEqual([
      "sexe",
      "drogue",
      "alcool",
      "moral",
      "hygiene",
    ]);
  });

  for (const category of categories) {
    describe(category.id, () => {
      it("has exactly 20 questions", () => {
        expect(category.questions).toHaveLength(20);
      });

      it("has unique, prefixed question ids", () => {
        const ids = category.questions.map((q) => q.id);
        expect(new Set(ids).size).toBe(ids.length);
        for (const id of ids) expect(id.startsWith(category.id)).toBe(true);
      });

      it("every question has >= 2 answers with valid ascending-capable points", () => {
        for (const q of category.questions) {
          expect(q.text.trim().length).toBeGreaterThan(0);
          expect(q.answers.length).toBeGreaterThanOrEqual(2);
          const points = q.answers.map((a) => a.points);
          expect(Math.min(...points)).toBe(0); // an innocent option exists
          expect(Math.max(...points)).toBeGreaterThan(0); // and an experienced one
          for (const a of q.answers) {
            expect(Number.isFinite(a.points)).toBe(true);
            expect(a.points).toBeGreaterThanOrEqual(0);
            expect(a.label.trim().length).toBeGreaterThan(0);
          }
        }
      });
    });
  }
});
