import { describe, it, expect } from "vitest";
import type { Category } from "../data/types";
import { visibleQuestions } from "./questions";
import { scoreCategory } from "./scoring";

/** Synthetic category: one gateway + a follow-up gated on its non-innocent answer. */
const cat: Category = {
  id: "sexe",
  label: "Test",
  emoji: "🔬",
  color: "#000",
  questions: [
    {
      id: "t-01",
      text: "gateway",
      answers: [
        { label: "Jamais", points: 0 },
        { label: "Oui", points: 3 },
      ],
    },
    {
      id: "t-02",
      text: "follow-up",
      requires: { question: "t-01", minAnswerIndex: 1 },
      answers: [
        { label: "Un peu", points: 4 },
        { label: "Beaucoup", points: 10 },
      ],
    },
    {
      id: "t-03",
      text: "deep follow-up",
      requires: { question: "t-02", minAnswerIndex: 1 },
      answers: [
        { label: "Soft", points: 2 },
        { label: "Hardcore", points: 6 },
      ],
    },
  ],
};

describe("visibleQuestions", () => {
  it("hides a follow-up until its gateway clears the threshold", () => {
    expect(visibleQuestions(cat, {}).map((q) => q.id)).toEqual(["t-01"]);
    expect(visibleQuestions(cat, { "t-01": 0 }).map((q) => q.id)).toEqual(["t-01"]);
  });

  it("reveals the follow-up right after its gateway once unlocked", () => {
    expect(visibleQuestions(cat, { "t-01": 1 }).map((q) => q.id)).toEqual([
      "t-01",
      "t-02",
    ]);
  });

  it("supports chained follow-ups (a follow-up gating a deeper one)", () => {
    expect(
      visibleQuestions(cat, { "t-01": 1, "t-02": 1 }).map((q) => q.id),
    ).toEqual(["t-01", "t-02", "t-03"]);
  });

  it("re-hides a deep follow-up when an intermediate gateway is relocked", () => {
    // t-03 was unlocked, but t-02 is hidden again -> t-03 must vanish too.
    expect(
      visibleQuestions(cat, { "t-01": 0, "t-02": 1 }).map((q) => q.id),
    ).toEqual(["t-01"]);
  });
});

describe("scoreCategory with conditional questions (cumulative model)", () => {
  it("counts the full bank in the denominator: the innocent path scores low", () => {
    // Max = best(t-01)=3 + best(t-02)=10 + best(t-03)=6 = 19.
    const r = scoreCategory(cat, { "t-01": 0 });
    expect(r.score).toBe(0); // 0 / 19
    expect(r.total).toBe(1); // only the gateway is visible
    expect(r.completed).toBe(true); // every visible question answered
  });

  it("marks the category incomplete the moment a follow-up unlocks", () => {
    const r = scoreCategory(cat, { "t-01": 1 });
    expect(r.total).toBe(2);
    expect(r.answered).toBe(1);
    expect(r.completed).toBe(false);
    expect(r.score).toBe(Math.round((3 / 19) * 100)); // 16
  });

  it("rewards exploring the unlocked topic", () => {
    const r = scoreCategory(cat, { "t-01": 1, "t-02": 1, "t-03": 1 });
    expect(r.score).toBe(100); // 3 + 10 + 6 = 19 / 19
    expect(r.completed).toBe(true);
  });

  it("ignores answers stored for a now-hidden question", () => {
    // t-02 answered high, but t-01 relocks it -> its points must not count.
    const r = scoreCategory(cat, { "t-01": 0, "t-02": 1 });
    expect(r.score).toBe(0);
  });
});
