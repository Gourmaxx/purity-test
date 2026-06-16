import type { Question } from "../types";

export const hygieneQuestions: Question[] = [
  {
    id: "hygiene-01",
    text: "À quelle fréquence prends-tu une douche complète ?",
    answers: [
      { label: "Tous les jours, voire deux fois", points: 0 },
      { label: "Un jour sur deux", points: 1 },
      { label: "Deux fois par semaine", points: 2 },
      { label: "Quand je sens que ça pue", points: 3 },
    ],
  },
  {
    id: "hygiene-02",
    text: "Combien de fois par jour te brosses-tu les dents ?",
    answers: [
      { label: "Matin et soir, sans faute", points: 0 },
      { label: "Une fois par jour", points: 1 },
      { label: "Quand j'y pense", points: 2 },
      { label: "Rarement, voire jamais", points: 3 },
    ],
  },
  {
    id: "hygiene-03",
    text: "Tu changes de sous-vêtements...",
    answers: [
      { label: "Tous les jours", points: 0 },
      { label: "Tous les deux jours", points: 1 },
      { label: "Quand ils sont visiblement sales", points: 2 },
      { label: "Je les retourne pour gagner un jour", points: 3 },
    ],
  },
  {
    id: "hygiene-04",
    text: "Tu te laves les mains après être allé aux toilettes ?",
    answers: [
      { label: "Toujours, au savon", points: 0 },
      { label: "Presque toujours, à l'eau", points: 1 },
      { label: "Vite fait, sans savon", points: 2 },
      { label: "Non, c'est facultatif pour moi", points: 3 },
    ],
  },
  {
    id: "hygiene-05",
    text: "À quelle fréquence changes-tu tes draps ?",
    answers: [
      { label: "Chaque semaine", points: 0 },
      { label: "Une fois par mois", points: 1 },
      { label: "Tous les deux ou trois mois", points: 2 },
      { label: "Je ne me souviens plus de la dernière fois", points: 3 },
    ],
  },
  {
    id: "hygiene-06",
    text: "Tu utilises du déodorant...",
    answers: [
      { label: "Tous les matins", points: 0 },
      { label: "Les jours où je sors", points: 1 },
      { label: "Quand quelqu'un fait une remarque", points: 2 },
      { label: "Jamais, le naturel a du bon", points: 3 },
    ],
  },
  {
    id: "hygiene-07",
    text: "Tes ongles sont...",
    answers: [
      { label: "Toujours coupés et nets", points: 0 },
      { label: "Coupés régulièrement", points: 1 },
      { label: "Longs avec un peu de crasse dessous", points: 2 },
      { label: "Je les ronge et recrache", points: 3 },
    ],
  },
  {
    id: "hygiene-08",
    text: "Quand tu fais tomber un truc par terre, tu...",
    answers: [
      { label: "Je le jette direct", points: 0 },
      { label: "Je le rince avant", points: 1 },
      { label: "Règle des 5 secondes", points: 2 },
      { label: "Je le mange même après 1 min", points: 3 },
    ],
  },
  {
    id: "hygiene-09",
    text: "À quelle fréquence te laves-tu les cheveux ?",
    answers: [
      { label: "Tous les jours ou presque", points: 0 },
      { label: "Deux fois par semaine", points: 1 },
      { label: "Une fois par semaine", points: 2 },
      { label: "Quand ils collent franchement", points: 3 },
    ],
  },
  {
    id: "hygiene-10",
    text: "Ta serviette de bain, tu la laves...",
    answers: [
      { label: "Toutes les semaines", points: 0 },
      { label: "Tous les quinze jours", points: 1 },
      { label: "Une fois par mois", points: 2 },
      { label: "Quand elle sent le moisi", points: 3 },
    ],
  },
  {
    id: "hygiene-11",
    text: "Après le sport ou une grosse suée, tu...",
    answers: [
      { label: "Douche immédiate", points: 0 },
      { label: "Douche dans l'heure", points: 1 },
      { label: "Un coup de déo et basta", points: 2 },
      { label: "Je laisse sécher et je continue ma journée", points: 3 },
    ],
  },
  {
    id: "hygiene-12",
    text: "Tu portes la même tenue combien de jours d'affilée ?",
    answers: [
      { label: "Une seule journée", points: 0 },
      { label: "Deux jours", points: 1 },
      { label: "Trois ou quatre jours", points: 2 },
      { label: "Jusqu'à ce qu'elle tienne debout seule", points: 3 },
    ],
  },
  {
    id: "hygiene-13",
    text: "Tes chaussettes, après une journée, elles...",
    answers: [
      { label: "Vont direct au linge sale", points: 0 },
      { label: "Resservent une fois", points: 1 },
      { label: "Resservent deux ou trois jours", points: 2 },
      { label: "Pourraient marcher toutes seules", points: 3 },
    ],
  },
  {
    id: "hygiene-14",
    text: "La vaisselle sale dans ton évier reste...",
    answers: [
      { label: "Jamais, je lave tout de suite", points: 0 },
      { label: "Une soirée maxi", points: 1 },
      { label: "Quelques jours", points: 2 },
      { label: "Jusqu'à ce que ça moisisse", points: 3 },
    ],
  },
  {
    id: "hygiene-15",
    text: "Tu nettoies tes toilettes...",
    answers: [
      { label: "Chaque semaine", points: 0 },
      { label: "Une fois par mois", points: 1 },
      { label: "Quand ça devient visible", points: 2 },
      { label: "Jamais, c'est pas mon problème", points: 3 },
    ],
  },
  {
    id: "hygiene-16",
    text: "Ta brosse à dents, tu la changes...",
    answers: [
      { label: "Tous les trois mois", points: 0 },
      { label: "Deux fois par an", points: 1 },
      { label: "Une fois par an", points: 2 },
      { label: "Quand les poils partent dans tous les sens", points: 3 },
    ],
  },
  {
    id: "hygiene-17",
    text: "Quand tu éternues ou tu tousses, tu...",
    answers: [
      { label: "Dans le coude, toujours", points: 0 },
      { label: "Dans un mouchoir", points: 1 },
      { label: "Dans la main", points: 2 },
      { label: "Dans le vide, à l'air libre", points: 3 },
    ],
  },
  {
    id: "hygiene-18",
    text: "Tes pieds et tes orteils, tu les laves...",
    answers: [
      { label: "À chaque douche, au savon", points: 0 },
      { label: "Souvent, vite fait", points: 1 },
      { label: "L'eau qui coule suffit", points: 2 },
      { label: "Je n'y touche jamais vraiment", points: 3 },
    ],
  },
  {
    id: "hygiene-19",
    text: "Tu utilises du fil dentaire ou un gratte-langue ?",
    answers: [
      { label: "Quotidiennement", points: 0 },
      { label: "De temps en temps", points: 1 },
      { label: "Uniquement avant le dentiste", points: 2 },
      { label: "Je ne sais même pas à quoi ça sert", points: 3 },
    ],
  },
  {
    id: "hygiene-20",
    text: "Avant de cuisiner ou de manger, tu te laves les mains ?",
    answers: [
      { label: "Systématiquement", points: 0 },
      { label: "La plupart du temps", points: 1 },
      { label: "Si elles sont sales à l'œil", points: 2 },
      { label: "Jamais, un peu de microbes ça muscle", points: 3 },
    ],
  },
  // …jusqu'à hygiene-20
];
