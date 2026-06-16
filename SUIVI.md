# SUIVI — Purity Test

## 🧭 Ligne directrice
*(maj 2026-06-16)* — **v1 fonctionnelle et testée** : app React/Vite/Tailwind
complète, PWA, 100 questions, scoring /500, partage par lien. Build OK,
typecheck OK, **31/31 tests verts**. **Prochaine priorité** : vérification
visuelle dans un navigateur (mobile) + relecture du ton des questions, puis
déploiement statique.

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

## ⏳ Reste à faire
- [ ] Vérification visuelle réelle en navigateur mobile (`npm run dev`)
- [ ] Relecture/édition fine du ton et de la justesse des questions
- [ ] Choisir le nom définitif (actuel : « Purity Test »)
- [ ] Déploiement statique (Vercel / Netlify / Pages)
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
