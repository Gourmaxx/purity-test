import type { CategoryId } from "../data/types";
import { categoryIds } from "../data/categories";

export type ScoreMap = Record<CategoryId, number>;

const VERSION = 1;

function toBase64Url(input: string): string {
  const b64 = btoa(unescape(encodeURIComponent(input)));
  return b64.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

function fromBase64Url(input: string): string {
  const b64 = input.replace(/-/g, "+").replace(/_/g, "/");
  const padded = b64.length % 4 ? b64 + "=".repeat(4 - (b64.length % 4)) : b64;
  return decodeURIComponent(escape(atob(padded)));
}

/** Encode per-category scores into a compact URL-safe token. */
export function encodeResult(scores: ScoreMap): string {
  const ordered = categoryIds.map((id) =>
    Math.max(0, Math.min(100, Math.round(scores[id] ?? 0))),
  );
  return toBase64Url(JSON.stringify({ v: VERSION, s: ordered }));
}

/** Decode a share token. Returns null on any malformed input. */
export function decodeResult(token: string): ScoreMap | null {
  try {
    const parsed: unknown = JSON.parse(fromBase64Url(token));
    if (
      typeof parsed !== "object" ||
      parsed === null ||
      (parsed as { v?: unknown }).v !== VERSION
    ) {
      return null;
    }
    const list = (parsed as { s?: unknown }).s;
    if (!Array.isArray(list) || list.length !== categoryIds.length) return null;

    const scores = {} as ScoreMap;
    for (let i = 0; i < categoryIds.length; i++) {
      const value = list[i];
      if (
        typeof value !== "number" ||
        !Number.isFinite(value) ||
        value < 0 ||
        value > 100
      ) {
        return null;
      }
      scores[categoryIds[i]] = Math.round(value);
    }
    return scores;
  } catch {
    return null;
  }
}
