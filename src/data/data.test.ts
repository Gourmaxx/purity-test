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

  it("has at least one conditional follow-up across the banks", () => {
    const conditionals = categories.flatMap((c) =>
      c.questions.filter((q) => q.requires),
    );
    expect(conditionals.length).toBeGreaterThan(0);
  });

  for (const category of categories) {
    describe(category.id, () => {
      const base = category.questions.filter((q) => !q.requires);

      it("has a solid base of questions (>= 18) and a sane total (<= 40)", () => {
        expect(base.length).toBeGreaterThanOrEqual(18);
        expect(category.questions.length).toBeLessThanOrEqual(40);
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
          // Base questions must offer an innocent (0-point) option. Conditional
          // follow-ups are already gated behind an "experienced" answer, so their
          // mildest option may legitimately start above 0.
          if (!q.requires) expect(Math.min(...points)).toBe(0);
          expect(Math.max(...points)).toBeGreaterThan(0); // an experienced option exists
          for (const a of q.answers) {
            expect(Number.isFinite(a.points)).toBe(true);
            expect(a.points).toBeGreaterThanOrEqual(0);
            expect(a.label.trim().length).toBeGreaterThan(0);
          }
        }
      });

      it("conditional gates reference an earlier question with a valid threshold", () => {
        const seen = new Map<string, number>(); // id -> answers count
        for (const q of category.questions) {
          if (q.requires) {
            const gateCount = seen.get(q.requires.question);
            // gateway must be declared earlier in the same category
            expect(gateCount).toBeDefined();
            // threshold must point at a real, non-innocent answer of the gateway
            expect(q.requires.minAnswerIndex).toBeGreaterThanOrEqual(1);
            expect(q.requires.minAnswerIndex).toBeLessThan(gateCount as number);
          }
          seen.set(q.id, q.answers.length);
        }
      });
    });
  }
});
