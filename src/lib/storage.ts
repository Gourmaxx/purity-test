import type { AnswersByCategory } from "../data/types";

const KEY = "purity-test:v1";

export interface StoredState {
  answers: AnswersByCategory;
}

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

/** Load persisted state, tolerant to missing / corrupted data. */
export function loadState(): StoredState {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return { answers: {} };
    const parsed: unknown = JSON.parse(raw);
    if (!isPlainObject(parsed) || !isPlainObject(parsed.answers)) {
      return { answers: {} };
    }
    return { answers: parsed.answers as AnswersByCategory };
  } catch {
    return { answers: {} };
  }
}

export function saveState(state: StoredState): void {
  try {
    localStorage.setItem(KEY, JSON.stringify(state));
  } catch {
    // Storage unavailable or quota exceeded — fail silently.
  }
}

export function resetState(): void {
  try {
    localStorage.removeItem(KEY);
  } catch {
    // ignore
  }
}
