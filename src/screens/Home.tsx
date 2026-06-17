import { useQuiz } from "../state/QuizContext";
import { categories } from "../data/categories";
import { Page } from "../components/Page";
import { Button } from "../components/Button";

export function Home() {
  const { answers } = useQuiz();
  const hasProgress = categories.some(
    (c) => Object.keys(answers[c.id] ?? {}).length > 0,
  );

  return (
    <Page>
      <div className="flex flex-1 flex-col items-center justify-center text-center animate-pop-in">
        <div className="mb-6 flex gap-1 text-4xl">
          {categories.map((c) => (
            <span key={c.id}>{c.emoji}</span>
          ))}
        </div>
        <h1 className="text-4xl font-black tracking-tight">Purity Test</h1>
        <p className="mt-3 text-[var(--color-muted)]">
          5 tests, 100+ questions, zéro tabou.
          <br />
          Sexe, drogue, alcool, moral, hygiène.
          <br />
          Quel est ton vrai score ?
        </p>

        <div className="mt-10 w-full space-y-3">
          <Button to="/hub" full>
            {hasProgress ? "Reprendre" : "Commencer"}
          </Button>
        </div>

        <div className="mt-8 rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)] p-4 text-left text-xs leading-relaxed text-[var(--color-muted)]">
          <p className="mb-2 font-semibold text-[var(--color-ink)]">
            ⚠️ Réservé aux 18+ · contenu cru
          </p>
          <p>
            Test à but de divertissement, sans jugement. Tout reste sur ton
            téléphone : aucune réponse n'est envoyée sur un serveur, aucun
            compte requis.
          </p>
        </div>
      </div>
    </Page>
  );
}
