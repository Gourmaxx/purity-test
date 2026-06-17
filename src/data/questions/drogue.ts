import type { Question } from "../types";

export const drogueQuestions: Question[] = [
  {
    id: "drogue-01",
    text: "As-tu déjà fumé une cigarette ou vapoté ?",
    answers: [
      { label: "Jamais", points: 0 },
      { label: "Une ou deux fois pour essayer", points: 1 },
      { label: "De temps en temps", points: 2 },
      { label: "Tous les jours", points: 3 },
    ],
  },
  {
    id: "drogue-02",
    text: "À quelle fréquence fumes-tu du cannabis (joint, pétard) ?",
    answers: [
      { label: "Jamais", points: 0 },
      { label: "Une seule fois dans ma vie", points: 1 },
      { label: "Quelques fois par an", points: 2 },
      { label: "Chaque mois", points: 3 },
      { label: "Chaque semaine", points: 3 },
      { label: "Tous les jours", points: 4 },
    ],
  },
  {
    id: "drogue-03",
    text: "As-tu déjà fumé du cannabis dès le réveil, à jeun ?",
    requires: { question: "drogue-02", minAnswerIndex: 1 },
    answers: [
      { label: "Jamais", points: 0 },
      { label: "Une fois", points: 2 },
      { label: "De temps en temps", points: 4 },
      { label: "C'est une routine quotidienne", points: 5 },
    ],
  },
  {
    id: "drogue-04",
    text: "À quelle fréquence te mets-tu en état d'ivresse avancée ?",
    answers: [
      { label: "Jamais", points: 0 },
      { label: "Une fois ou deux", points: 1 },
      { label: "Quelques fois par an", points: 2 },
      { label: "Chaque mois", points: 3 },
      { label: "Chaque semaine", points: 4 },
    ],
  },
  {
    id: "drogue-05",
    text: "As-tu déjà mélangé alcool et médicaments (somnifères, anxiolytiques…) pour l'effet ?",
    answers: [
      { label: "Jamais", points: 0 },
      { label: "Une fois", points: 2 },
      { label: "Quelques fois", points: 3 },
      { label: "Régulièrement", points: 4 },
    ],
  },
  {
    id: "drogue-06",
    text: "As-tu déjà inhalé du protoxyde d'azote (ballons, proto) ou des poppers ?",
    answers: [
      { label: "Jamais", points: 0 },
      { label: "Une fois pour essayer", points: 1 },
      { label: "Quelques fois", points: 2 },
      { label: "Régulièrement", points: 3 },
    ],
  },
  {
    id: "drogue-07",
    text: "As-tu déjà consommé des drogues festives (MDMA, ecstasy, cocaïne…) ?",
    answers: [
      { label: "Jamais", points: 0 },
      { label: "Une fois", points: 2 },
      { label: "Quelques fois", points: 4 },
      { label: "Chaque mois", points: 5 },
      { label: "Chaque semaine", points: 6 },
    ],
  },
  {
    id: "drogue-08",
    text: "Lesquelles as-tu déjà essayées ?",
    requires: { question: "drogue-07", minAnswerIndex: 1 },
    answers: [
      { label: "Juste une, par curiosité", points: 2 },
      { label: "Deux ou trois", points: 4 },
      { label: "Un peu tout ce qui passait", points: 7 },
    ],
  },
  {
    id: "drogue-09",
    text: "Avec quelle régularité ressors-tu ce genre de produit en soirée ?",
    requires: { question: "drogue-07", minAnswerIndex: 2 },
    answers: [
      { label: "Seulement dans des occasions exceptionnelles", points: 2 },
      { label: "Quelques fois par an", points: 4 },
      { label: "À presque chaque grosse soirée", points: 6 },
      { label: "Dès que l'occasion se présente", points: 8 },
    ],
  },
  {
    id: "drogue-10",
    text: "As-tu déjà sniffé de la cocaïne ou pris de la kétamine ?",
    answers: [
      { label: "Jamais", points: 0 },
      { label: "Une fois pour goûter", points: 2 },
      { label: "Quelques fois", points: 3 },
      { label: "Régulièrement", points: 4 },
    ],
  },
  {
    id: "drogue-11",
    text: "As-tu déjà pris des psychédéliques (LSD, champignons hallucinogènes) ?",
    answers: [
      { label: "Jamais", points: 0 },
      { label: "Un seul trip", points: 2 },
      { label: "Quelques fois", points: 3 },
      { label: "Souvent", points: 4 },
    ],
  },
  {
    id: "drogue-12",
    text: "As-tu déjà consommé des amphétamines ou du speed pour tenir le rythme ?",
    answers: [
      { label: "Jamais", points: 0 },
      { label: "Une fois", points: 1 },
      { label: "Quelques fois", points: 3 },
      { label: "Régulièrement", points: 4 },
    ],
  },
  {
    id: "drogue-13",
    text: "As-tu déjà touché à des drogues dures (héroïne, crack…) ?",
    answers: [
      { label: "Jamais", points: 0 },
      { label: "Une fois", points: 3 },
      { label: "Quelques fois", points: 5 },
      { label: "Régulièrement", points: 6 },
    ],
  },
  {
    id: "drogue-14",
    text: "Sous quelle forme as-tu déjà consommé ce type de produit ?",
    requires: { question: "drogue-13", minAnswerIndex: 1 },
    answers: [
      { label: "Sniffé ou fumé une fois", points: 3 },
      { label: "Fumé à plusieurs reprises", points: 5 },
      { label: "Je suis allé(e) jusqu'à l'injection", points: 8 },
    ],
  },
  {
    id: "drogue-15",
    text: "As-tu déjà mélangé plusieurs substances lors d'une même prise ?",
    answers: [
      { label: "Jamais", points: 0 },
      { label: "Une fois", points: 1 },
      { label: "Quelques fois", points: 2 },
      { label: "Souvent, ça fait partie du plan", points: 4 },
    ],
  },
  {
    id: "drogue-16",
    text: "Combien de substances différentes as-tu déjà essayées au total ?",
    answers: [
      { label: "Aucune", points: 0 },
      { label: "Une", points: 1 },
      { label: "Deux ou trois", points: 2 },
      { label: "Quatre à six", points: 3 },
      { label: "Plus que je ne peux compter", points: 4 },
    ],
  },
  {
    id: "drogue-17",
    text: "As-tu déjà pris le volant sous l'emprise de la drogue ?",
    answers: [
      { label: "Jamais", points: 0 },
      { label: "Une fois", points: 2 },
      { label: "Quelques fois", points: 3 },
      { label: "Régulièrement", points: 4 },
    ],
  },
  {
    id: "drogue-18",
    text: "As-tu déjà consommé seul(e), sans personne autour ?",
    answers: [
      { label: "Jamais", points: 0 },
      { label: "Une fois", points: 1 },
      { label: "Quelques fois", points: 2 },
      { label: "C'est devenu habituel", points: 3 },
    ],
  },
  {
    id: "drogue-19",
    text: "As-tu déjà ressenti un manque ou une vraie dépendance ?",
    answers: [
      { label: "Jamais", points: 0 },
      { label: "Une légère envie passagère", points: 1 },
      { label: "Un vrai manque déjà ressenti", points: 2 },
      { label: "Une dépendance que j'assume", points: 4 },
    ],
  },
  {
    id: "drogue-20",
    text: "As-tu déjà revendu ou dealé de la drogue, même un petit peu ?",
    answers: [
      { label: "Jamais", points: 0 },
      { label: "J'ai dépanné des potes une fois", points: 2 },
      { label: "J'ai revendu quelques fois pour me financer", points: 4 },
      { label: "J'en ai fait une activité régulière", points: 6 },
    ],
  },
  {
    id: "drogue-21",
    text: "Quelle ampleur ce business a-t-il pris ?",
    requires: { question: "drogue-20", minAnswerIndex: 1 },
    answers: [
      { label: "Juste rendre service, sans profit", points: 2 },
      { label: "De quoi payer ma propre conso", points: 4 },
      { label: "Un vrai revenu complémentaire", points: 6 },
      { label: "Un réseau et des quantités sérieuses", points: 8 },
    ],
  },
  {
    id: "drogue-22",
    text: "La drogue a-t-elle déjà eu un impact réel sur ta vie (travail, études, relations) ?",
    answers: [
      { label: "Jamais", points: 0 },
      { label: "Un léger contrecoup une fois", points: 1 },
      { label: "Quelques fois", points: 2 },
      { label: "Un impact lourd et répété", points: 4 },
    ],
  },
  {
    id: "drogue-23",
    text: "À quel âge as-tu touché à une drogue pour la première fois ?",
    answers: [
      { label: "Jamais touché", points: 0 },
      { label: "Après 25 ans", points: 1 },
      { label: "Entre 21 et 25 ans", points: 2 },
      { label: "Entre 18 et 20 ans", points: 3 },
      { label: "Avant 18 ans", points: 4 },
    ],
  },
  {
    id: "drogue-24",
    text: "As-tu déjà acheté de la drogue toi-même (à un dealer, en ligne) ?",
    answers: [
      { label: "Jamais", points: 0 },
      { label: "Une fois", points: 2 },
      { label: "Quelques fois", points: 3 },
      { label: "Régulièrement", points: 4 },
    ],
  },
  {
    id: "drogue-25",
    text: "As-tu déjà vécu un bad trip ou fini aux urgences à cause d'un produit ?",
    answers: [
      { label: "Jamais", points: 0 },
      { label: "Un mauvais moment passager", points: 2 },
      { label: "Un vrai bad trip", points: 3 },
      { label: "Une fois à l'hôpital", points: 4 },
    ],
  },
];
