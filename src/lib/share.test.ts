import { describe, it, expect } from "vitest";
import { encodeResult, decodeResult, type ScoreMap } from "./share";

const sample: ScoreMap = {
  sexe: 80,
  drogue: 33,
  alcool: 100,
  moral: 0,
  hygiene: 47,
};

describe("share encode/decode", () => {
  it("round-trips a score map", () => {
    const token = encodeResult(sample);
    expect(decodeResult(token)).toEqual(sample);
  });

  it("produces a URL-safe token (no +, /, =)", () => {
    const token = encodeResult(sample);
    expect(token).not.toMatch(/[+/=]/);
  });

  it("clamps out-of-range scores on encode", () => {
    const token = encodeResult({ ...sample, sexe: 250, moral: -10 });
    const decoded = decodeResult(token)!;
    expect(decoded.sexe).toBe(100);
    expect(decoded.moral).toBe(0);
  });

  it("returns null for garbage input", () => {
    expect(decodeResult("not-base64!!!")).toBeNull();
    expect(decodeResult("")).toBeNull();
    expect(decodeResult(btoa(JSON.stringify({ v: 1, s: [1, 2] })))).toBeNull();
    expect(decodeResult(btoa(JSON.stringify({ v: 2, s: [0, 0, 0, 0, 0] })))).toBeNull();
  });
});
