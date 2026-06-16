import { describe, it, expect } from "vitest";
import { createElement as h } from "react";
import { flushSync } from "react-dom";
import { createRoot } from "react-dom/client";
import { MemoryRouter } from "react-router-dom";
import App from "./App";
import { QuizProvider } from "./state/QuizContext";
import { encodeResult, type ScoreMap } from "./lib/share";

/** Mount the whole app at a given route and return the rendered HTML. */
function mount(path: string): string {
  const container = document.createElement("div");
  document.body.appendChild(container);
  const root = createRoot(container);
  flushSync(() => {
    root.render(
      h(
        MemoryRouter,
        { initialEntries: [path] },
        h(QuizProvider, null, h(App)),
      ),
    );
  });
  const html = container.innerHTML;
  root.unmount();
  container.remove();
  return html;
}

describe("app renders without crashing", () => {
  it("renders Home", () => {
    expect(mount("/")).toContain("Purity Test");
  });

  it("renders the Hub", () => {
    expect(mount("/hub")).toContain("Choisis un test");
  });

  it("renders a category quiz", () => {
    const html = mount("/test/sexe");
    expect(html).toContain("Question");
  });

  it("renders a shared result from a valid token", () => {
    const scores: ScoreMap = {
      sexe: 90,
      drogue: 90,
      alcool: 90,
      moral: 90,
      hygiene: 90,
    };
    const token = encodeResult(scores); // total 450 -> "Cas social confirmé"
    const html = mount(`/partage?d=${token}`);
    expect(html).toContain("Résultat partagé");
    expect(html).toContain("450");
  });
});
