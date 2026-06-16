import { describe, it, expect } from "vitest";
import type { Category } from "../data/types";
import {
  scoreCategory,
  categoryMaxPoints,
  getProfile,
  PROFILES,
} from "./scoring";

const mockCategory: Category = {
  id: "sexe",
  label: "Test",
  emoji: "x",
  color: "#000",
  questions: [
    {
      id: "q1",
      text: "?",
      answers: [
        { label: "a", points: 0 },
        { label: "b", points: 1 },
        { label: "c", points: 2 },
        { label: "d", points: 3 },
      ],
    },
    {
      id: "q2",
      text: "?",
      answers: [
        { label: "a", points: 0 },
        { label: "b", points: 3 },
      ],
    },
  ],
};

describe("categoryMaxPoints", () => {
  it("sums the best answer of each question", () => {
    expect(categoryMaxPoints(mockCategory)).toBe(6); // 3 + 3
  });
});

describe("scoreCategory", () => {
  it("returns 0 with no answers", () => {
    const r = scoreCategory(mockCategory, {});
    expect(r.score).toBe(0);
    expect(r.answered).toBe(0);
    expect(r.completed).toBe(false);
  });

  it("returns 100 when all max answers are picked", () => {
    const r = scoreCategory(mockCategory, { q1: 3, q2: 1 });
    expect(r.score).toBe(100);
    expect(r.completed).toBe(true);
    expect(r.answered).toBe(2);
  });

  it("computes a normalized partial score", () => {
    // earned = 1 (q1->b) + 0 (q2->a) = 1 ; max = 6 -> round(16.67) = 17
    const r = scoreCategory(mockCategory, { q1: 1, q2: 0 });
    expect(r.score).toBe(17);
    expect(r.completed).toBe(true);
  });

  it("ignores out-of-range answer indices", () => {
    const r = scoreCategory(mockCategory, { q1: 99 });
    expect(r.score).toBe(0);
    expect(r.answered).toBe(1);
    expect(r.completed).toBe(false);
  });
});

describe("getProfile", () => {
  it("covers the full 0-500 range with contiguous bands", () => {
    expect(PROFILES[0].min).toBe(0);
    expect(PROFILES[PROFILES.length - 1].max).toBe(500);
    for (let i = 1; i < PROFILES.length; i++) {
      expect(PROFILES[i].min).toBe(PROFILES[i - 1].max + 1);
    }
  });

  it("maps boundary totals to the right profile", () => {
    expect(getProfile(0).title).toBe("Bébé ange");
    expect(getProfile(500).title).toBe("Légende vivante");
    expect(getProfile(50).title).toBe("Bébé ange");
    expect(getProfile(51).title).toBe("Petit joueur");
  });
});
