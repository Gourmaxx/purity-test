# SUIVI — Purity Test

## 🧭 Ligne directrice
*(maj 2026-06-17)* — **v1 EN LIGNE** : https://gourmaxx.github.io/purity-test/
(repo public `Gourmaxx/purity-test`, déploiement auto via GitHub Actions à chaque
push sur `main`). PWA installable, scoring /500, partage par lien. **Nouveau (local,
pas encore déployé)** : questions **conditionnelles** (une réponse « expérimentée »
débloque des questions de suivi ciblées, ex. BDSM) + **échelles de réponses
variables** (4–6 options chiffrées, plus seulement 4). **125 questions** (99 base +
26 conditionnelles), **45/45 tests verts**, build propre. **Prochaine priorité** :
pousser sur `main` pour déployer, puis vérif visuelle téléphone et nom définitif.

## ✅ Fait
- [x] Cadrage (QCM pondéré, 5 catégories, ton sérieux + questions trash)
- [x] Architecture (100 % local, PWA, React + Vite + Tailwind, score /500)
- [x] Spec de design (`docs/2026-06-16-purity-test-design.md`)
- [x] Scaffold Vite + React + TS + Tailwind v4 + PWA
- [x] `lib/scoring.ts` + tests (7)
- [x] `lib/storage.ts` (localStorage tolérant aux erreurs)
- [x] `lib/share.ts` (encode/décode URL) + tests (4)
- [x] 100 questions (20 × 5, générées par 5 sous-agents) + test d'intégrité (16)
- [x] Écrans : Accueil, Hub, Quiz, Résultat catégorie, Résultat global, Partage
- [x] Composants UI (ProgressBar, ScoreRing, CategoryBar, CategoryCard, Button)
- [x] Titres de profil (9 paliers /500)
- [x] Gate 18+ / avertissement
- [x] Icônes + manifest PWA
- [x] Smoke test de rendu (monte l'app sur toutes les routes) (4)
- [x] Build + typecheck propres
- [x] Moteur de **questions conditionnelles** : type `requires`, visibilité
  dynamique (`lib/questions.ts`), Quiz qui révèle les suivis inline, complétion
  sur les questions visibles, score **cumulatif** (max = banque complète)
- [x] **Échelles de réponses variables** (4–6 options, quantitatives) sur les 5 catégories
- [x] Contenu réécrit par 5 sous-agents + tests de branchement (`lib/questions.test.ts`, 8) → **45 tests**

## ⏳ Reste à faire
- [x] Déploiement statique → GitHub Pages (Actions, repo public)
- [ ] Vérification visuelle réelle sur téléphone + install PWA
- [x] Relecture/édition fine des questions (revue par 5 sous-agents + corrections appliquées)
- [ ] Choisir le nom définitif (actuel : « Purity Test »)
- [ ] (Option) Générer des icônes PNG en plus du SVG pour l'installabilité

## 📋 Notes / gotchas
- Sens du score : **haut = expérimenté**, bas = innocent.
- Score global = **somme** des 5 catégories (/100 chacune) → **/500**.
- Spec à plat dans `docs/` (préférence utilisateur).
- Aucun backend : partage = état encodé base64 dans l'URL (`/#/partage?d=...`).
- **Config tests séparée** : `vitest.config.ts` distinct de `vite.config.ts`
  pour éviter le conflit de double version de Vite (vitest embarque la sienne) —
  le champ `test` dans `vite.config.ts` cassait le typecheck.
- `HashRouter` choisi pour un déploiement statique sans réécriture serveur.
- **Questions conditionnelles** : `requires: { question, minAnswerIndex }` sur la
  question de suivi ; elle doit être déclarée **après** sa déclencheuse (pas de
  cycle). Suivi visible si l'index de réponse choisi à la déclencheuse ≥ seuil.
- **Score cumulatif** : le dénominateur = **toute** la banque (base + conditionnelles).
  Ne pas débloquer un sujet = 0 point dessus = score bas. La complétion, elle, ne
  porte que sur les questions **visibles**. Les réponses à une question re-verrouillée
  sont ignorées dans le score.
- **Gotcha test d'intégrité** : la règle « une option à 0 point » ne s'applique qu'aux
  questions de **base** ; une conditionnelle (déjà derrière une réponse expérimentée)
  peut démarrer > 0.
