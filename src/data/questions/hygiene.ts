import type { Question } from "../types";

export const hygieneQuestions: Question[] = [
  {
    id: "hygiene-01",
    text: "À quelle fréquence prends-tu une douche complète, au savon ?",
    answers: [
      { label: "Tous les jours, voire deux fois", points: 0 },
      { label: "Un jour sur deux", points: 1 },
      { label: "Deux fois par semaine", points: 2 },
      { label: "Une fois par semaine", points: 3 },
      { label: "Quand je sens que ça commence à puer", points: 4 },
    ],
  },
  {
    id: "hygiene-02",
    text: "T'est-il déjà arrivé de passer plusieurs jours sans te doucher ?",
    answers: [
      { label: "Jamais, c'est impensable", points: 0 },
      { label: "Une fois, une flemme de week-end", points: 2 },
      { label: "Ça arrive de temps en temps", points: 3 },
      { label: "Régulièrement, ça ne me dérange pas", points: 4 },
    ],
  },
  {
    id: "hygiene-03",
    text: "Ton record de jours consécutifs sans douche, c'était combien ?",
    requires: { question: "hygiene-02", minAnswerIndex: 1 },
    answers: [
      { label: "2 jours", points: 2 },
      { label: "3 à 4 jours", points: 4 },
      { label: "Une semaine", points: 6 },
      { label: "Plus d'une semaine", points: 8 },
    ],
  },
  {
    id: "hygiene-04",
    text: "Combien de fois par jour te brosses-tu les dents ?",
    answers: [
      { label: "Matin et soir, sans faute", points: 0 },
      { label: "Une fois par jour", points: 1 },
      { label: "Quand j'y pense", points: 2 },
      { label: "Rarement, voire jamais", points: 3 },
    ],
  },
  {
    id: "hygiene-05",
    text: "À quelle fréquence changes-tu de sous-vêtements ?",
    answers: [
      { label: "Tous les jours", points: 0 },
      { label: "Tous les deux jours", points: 1 },
      { label: "Quand ils sont visiblement sales", points: 2 },
      { label: "Je les garde plusieurs jours sans souci", points: 3 },
    ],
  },
  {
    id: "hygiene-06",
    text: "Tes sous-vêtements, tu les gardes jusqu'à combien de jours d'affilée ?",
    requires: { question: "hygiene-05", minAnswerIndex: 2 },
    answers: [
      { label: "2 jours grand maximum", points: 2 },
      { label: "3 jours", points: 4 },
      { label: "Une semaine", points: 6 },
      { label: "Je préfère ne pas compter", points: 8 },
    ],
  },
  {
    id: "hygiene-07",
    text: "Tu te laves les mains après être allé aux toilettes ?",
    answers: [
      { label: "Toujours, au savon", points: 0 },
      { label: "Presque toujours, à l'eau", points: 1 },
      { label: "Vite fait, sans savon", points: 2 },
      { label: "Non, c'est facultatif pour moi", points: 3 },
    ],
  },
  {
    id: "hygiene-08",
    text: "À quelle fréquence changes-tu tes draps ?",
    answers: [
      { label: "Chaque semaine", points: 0 },
      { label: "Toutes les deux semaines", points: 1 },
      { label: "Une fois par mois", points: 2 },
      { label: "Tous les deux ou trois mois", points: 3 },
      { label: "Je ne me souviens plus de la dernière fois", points: 4 },
    ],
  },
  {
    id: "hygiene-09",
    text: "Tu utilises du déodorant...",
    answers: [
      { label: "Tous les matins", points: 0 },
      { label: "Les jours où je sors", points: 1 },
      { label: "Quand quelqu'un fait une remarque", points: 2 },
      { label: "Jamais, le naturel a du bon", points: 3 },
    ],
  },
  {
    id: "hygiene-10",
    text: "Tes ongles, en général, ils sont...",
    answers: [
      { label: "Toujours coupés et nets", points: 0 },
      { label: "Coupés régulièrement", points: 1 },
      { label: "Longs avec un peu de crasse dessous", points: 2 },
      { label: "Je les ronge et je recrache", points: 3 },
    ],
  },
  {
    id: "hygiene-11",
    text: "T'est-il déjà arrivé de manger un truc tombé par terre ?",
    answers: [
      { label: "Jamais, je jette direct", points: 0 },
      { label: "Seulement si je le rince avant", points: 1 },
      { label: "Règle des 5 secondes, sans hésiter", points: 2 },
      { label: "Même après une minute au sol, aucun problème", points: 3 },
    ],
  },
  {
    id: "hygiene-12",
    text: "Le sol sur lequel ça tombe, en général, il est comment ?",
    requires: { question: "hygiene-11", minAnswerIndex: 2 },
    answers: [
      { label: "Propre, je viens de passer la serpillère", points: 2 },
      { label: "Le sol normal de ma cuisine", points: 4 },
      { label: "Un sol public, dans la rue ou un resto", points: 6 },
      { label: "Peu importe, je ramasse et je mange", points: 8 },
    ],
  },
  {
    id: "hygiene-13",
    text: "À quelle fréquence te laves-tu les cheveux ?",
    answers: [
      { label: "Tous les jours ou presque", points: 0 },
      { label: "Deux fois par semaine", points: 1 },
      { label: "Une fois par semaine", points: 2 },
      { label: "Quand ils collent franchement", points: 3 },
    ],
  },
  {
    id: "hygiene-14",
    text: "Avant de remettre un vêtement, est-ce que tu le sens d'abord ?",
    answers: [
      { label: "Non, dans le doute il va au linge sale", points: 0 },
      { label: "Parfois, par réflexe", points: 1 },
      { label: "Oui, et si ça passe je le remets", points: 2 },
      { label: "Oui, et même quand ça sent je le remets quand même", points: 3 },
    ],
  },
  {
    id: "hygiene-15",
    text: "Après le sport ou une grosse suée, tu...",
    answers: [
      { label: "Douche immédiate", points: 0 },
      { label: "Douche dans l'heure", points: 1 },
      { label: "Un coup de déo et basta", points: 2 },
      { label: "Je laisse sécher et je continue ma journée", points: 3 },
    ],
  },
  {
    id: "hygiene-16",
    text: "La vaisselle sale dans ton évier, elle reste combien de temps ?",
    answers: [
      { label: "Jamais, je lave tout de suite", points: 0 },
      { label: "Une soirée maximum", points: 1 },
      { label: "Deux ou trois jours", points: 2 },
      { label: "Une semaine", points: 3 },
      { label: "Jusqu'à ce que ça moisisse", points: 4 },
    ],
  },
  {
    id: "hygiene-17",
    text: "Ta poubelle de cuisine, tu la sors...",
    answers: [
      { label: "Avant qu'elle déborde ou qu'elle sente", points: 0 },
      { label: "Quand elle est pleine", points: 1 },
      { label: "Quand l'odeur devient gênante", points: 2 },
      { label: "Quand il y a des mouches autour", points: 3 },
    ],
  },
  {
    id: "hygiene-18",
    text: "À quelle fréquence fais-tu le ménage chez toi ?",
    answers: [
      { label: "Chaque semaine", points: 0 },
      { label: "Une fois par mois", points: 1 },
      { label: "Quand la saleté devient visible", points: 2 },
      { label: "Quand quelqu'un doit venir", points: 3 },
      { label: "Quasiment jamais", points: 4 },
    ],
  },
  {
    id: "hygiene-19",
    text: "Ta serviette de bain, tu la laves...",
    answers: [
      { label: "Toutes les semaines", points: 0 },
      { label: "Tous les quinze jours", points: 1 },
      { label: "Une fois par mois", points: 2 },
      { label: "Quand elle sent le moisi", points: 3 },
    ],
  },
  {
    id: "hygiene-20",
    text: "Tes chaussettes, après une journée, elles...",
    answers: [
      { label: "Vont direct au linge sale", points: 0 },
      { label: "Resservent une fois", points: 1 },
      { label: "Resservent deux ou trois jours", points: 2 },
      { label: "Pourraient marcher toutes seules", points: 3 },
    ],
  },
  {
    id: "hygiene-21",
    text: "Te laves-tu après un rapport sexuel ?",
    answers: [
      { label: "Toujours, sans exception", points: 0 },
      { label: "La plupart du temps", points: 1 },
      { label: "Un coup de lingette et ça ira", points: 2 },
      { label: "Non, je me rendors directement", points: 3 },
    ],
  },
  {
    id: "hygiene-22",
    text: "Ta brosse à dents, tu la changes...",
    answers: [
      { label: "Tous les trois mois", points: 0 },
      { label: "Deux fois par an", points: 1 },
      { label: "Une fois par an", points: 2 },
      { label: "Quand les poils partent dans tous les sens", points: 3 },
    ],
  },
  {
    id: "hygiene-23",
    text: "Avant de cuisiner ou de manger, tu te laves les mains ?",
    answers: [
      { label: "Systématiquement", points: 0 },
      { label: "La plupart du temps", points: 1 },
      { label: "Si elles sont sales à l'œil", points: 2 },
      { label: "Jamais, un peu de microbes ça muscle", points: 3 },
    ],
  },
];
