import type { Question } from "../types";

export const moralQuestions: Question[] = [
  {
    id: "moral-01",
    text: "Tu mens pour éviter un reproche ou te sortir d'une situation gênante.",
    answers: [
      { label: "Jamais", points: 0 },
      { label: "Rarement", points: 1 },
      { label: "Parfois", points: 2 },
      { label: "Souvent", points: 3 },
      { label: "Tout le temps", points: 4 },
    ],
  },
  {
    id: "moral-02",
    text: "Tu as déjà triché à un examen ou un contrôle.",
    answers: [
      { label: "Jamais", points: 0 },
      { label: "Une fois", points: 1 },
      { label: "Quelques fois", points: 2 },
      { label: "Régulièrement", points: 3 },
    ],
  },
  {
    id: "moral-03",
    text: "Jusqu'où es-tu allé en trichant ?",
    requires: { question: "moral-02", minAnswerIndex: 1 },
    answers: [
      { label: "Un petit coup d'œil sur le voisin", points: 1 },
      { label: "Une antisèche préparée", points: 3 },
      { label: "Un examen important (bac, concours, diplôme)", points: 6 },
      { label: "Je me suis fait passer pour un autre / on a composé à ma place", points: 8 },
    ],
  },
  {
    id: "moral-04",
    text: "Tu gardes la monnaie quand un commerçant en rend trop.",
    answers: [
      { label: "Jamais, je rends toujours", points: 0 },
      { label: "Seulement si c'est quelques centimes", points: 1 },
      { label: "Parfois, sans culpabiliser", points: 2 },
      { label: "Toujours, c'est leur erreur", points: 3 },
    ],
  },
  {
    id: "moral-05",
    text: "Tu as déjà volé quelque chose.",
    answers: [
      { label: "Jamais", points: 0 },
      { label: "Un truc insignifiant, une fois", points: 2 },
      { label: "Quelques fois", points: 3 },
      { label: "Souvent", points: 4 },
    ],
  },
  {
    id: "moral-06",
    text: "Qu'as-tu volé de plus gros ?",
    requires: { question: "moral-05", minAnswerIndex: 1 },
    answers: [
      { label: "Un bonbon, un stylo, une broutille", points: 1 },
      { label: "En magasin (vêtement, alcool, cosmétique…)", points: 4 },
      { label: "À un proche ou sur un lieu de travail", points: 6 },
      { label: "Quelque chose de vraiment cher (high-tech, bijou, vélo…)", points: 8 },
    ],
  },
  {
    id: "moral-07",
    text: "Combien estimes-tu avoir volé en valeur cumulée dans ta vie ?",
    requires: { question: "moral-05", minAnswerIndex: 1 },
    answers: [
      { label: "Quelques euros", points: 1 },
      { label: "Moins de 100 €", points: 2 },
      { label: "Entre 100 € et 500 €", points: 4 },
      { label: "Plus de 500 €", points: 6 },
    ],
  },
  {
    id: "moral-08",
    text: "Tu te fais passer pour malade afin de sécher le travail ou les cours.",
    answers: [
      { label: "Jamais", points: 0 },
      { label: "Une fois", points: 1 },
      { label: "Quelques fois", points: 2 },
      { label: "Souvent", points: 3 },
    ],
  },
  {
    id: "moral-09",
    text: "Tu lis les messages ou fouilles le téléphone de quelqu'un sans son accord.",
    answers: [
      { label: "Jamais", points: 0 },
      { label: "Une fois", points: 1 },
      { label: "Quelques fois", points: 2 },
      { label: "Régulièrement", points: 3 },
    ],
  },
  {
    id: "moral-10",
    text: "Tu t'attribues le travail ou le mérite de quelqu'un d'autre.",
    answers: [
      { label: "Jamais", points: 0 },
      { label: "Une fois", points: 1 },
      { label: "Parfois", points: 2 },
      { label: "Souvent", points: 3 },
    ],
  },
  {
    id: "moral-11",
    text: "Tu balances un ami ou un collègue pour te couvrir ou avoir un avantage.",
    answers: [
      { label: "Jamais", points: 0 },
      { label: "Une fois", points: 1 },
      { label: "Quelques fois", points: 2 },
      { label: "Souvent", points: 3 },
    ],
  },
  {
    id: "moral-12",
    text: "Tu mens sur ton CV ou en entretien d'embauche.",
    answers: [
      { label: "Jamais", points: 0 },
      { label: "J'enjolive un détail", points: 1 },
      { label: "J'invente une compétence ou une expérience", points: 2 },
      { label: "Un faux diplôme ou une fausse référence", points: 3 },
    ],
  },
  {
    id: "moral-13",
    text: "Tu fraudes le fisc ou gonfles tes notes de frais.",
    answers: [
      { label: "Jamais", points: 0 },
      { label: "Un petit arrangement une fois", points: 1 },
      { label: "Régulièrement, pour de petits montants", points: 2 },
      { label: "Pour des sommes conséquentes", points: 3 },
    ],
  },
  {
    id: "moral-14",
    text: "Tu resquilles (transports sans ticket, files d'attente, entrées payantes).",
    answers: [
      { label: "Jamais", points: 0 },
      { label: "Rarement", points: 1 },
      { label: "Parfois", points: 2 },
      { label: "Souvent", points: 3 },
      { label: "C'est un mode de vie", points: 4 },
    ],
  },
  {
    id: "moral-15",
    text: "Tu profites de la générosité ou de la naïveté de quelqu'un.",
    answers: [
      { label: "Jamais", points: 0 },
      { label: "Une fois", points: 1 },
      { label: "Parfois", points: 2 },
      { label: "Souvent", points: 3 },
    ],
  },
  {
    id: "moral-16",
    text: "Tu manipules quelqu'un pour obtenir ce que tu veux.",
    answers: [
      { label: "Jamais", points: 0 },
      { label: "Une fois", points: 1 },
      { label: "Parfois", points: 2 },
      { label: "Souvent", points: 3 },
    ],
  },
  {
    id: "moral-17",
    text: "Tu colportes un secret intime qu'on t'avait confié.",
    answers: [
      { label: "Jamais", points: 0 },
      { label: "Une fois", points: 1 },
      { label: "Parfois", points: 2 },
      { label: "Souvent", points: 3 },
    ],
  },
  {
    id: "moral-18",
    text: "Tu empruntes de l'argent ou un objet sans jamais le rendre.",
    answers: [
      { label: "Jamais", points: 0 },
      { label: "Une fois", points: 1 },
      { label: "Parfois", points: 2 },
      { label: "C'est une habitude", points: 3 },
    ],
  },
  {
    id: "moral-19",
    text: "Tu as déjà ghosté quelqu'un (coupé tout contact sans un mot) pour éviter une explication.",
    answers: [
      { label: "Jamais", points: 0 },
      { label: "Une fois", points: 1 },
      { label: "Quelques fois", points: 2 },
      { label: "Souvent", points: 3 },
    ],
  },
  {
    id: "moral-20",
    text: "Tu t'es déjà battu physiquement avec quelqu'un.",
    answers: [
      { label: "Jamais", points: 0 },
      { label: "Une bagarre, une fois", points: 2 },
      { label: "Quelques fois", points: 3 },
      { label: "Souvent", points: 4 },
    ],
  },
  {
    id: "moral-21",
    text: "Lors d'une bagarre, as-tu déjà sérieusement blessé quelqu'un ?",
    requires: { question: "moral-20", minAnswerIndex: 1 },
    answers: [
      { label: "Non, jamais de vraie blessure", points: 1 },
      { label: "Quelques bleus, rien de grave", points: 2 },
      { label: "Du sang, une blessure nette", points: 4 },
      { label: "Hôpital, fractures, dégâts sérieux", points: 7 },
    ],
  },
  {
    id: "moral-22",
    text: "Tu dégrades volontairement un bien qui ne t'appartient pas (tag, rayure, casse).",
    answers: [
      { label: "Jamais", points: 0 },
      { label: "Une fois, un truc mineur", points: 1 },
      { label: "Quelques fois", points: 2 },
      { label: "Souvent", points: 3 },
    ],
  },
  {
    id: "moral-23",
    text: "Tu as un casier judiciaire ou as déjà eu affaire à la justice.",
    answers: [
      { label: "Non, rien du tout", points: 0 },
      { label: "Un simple rappel à la loi / une garde à vue", points: 2 },
      { label: "Une condamnation (amende, sursis)", points: 4 },
      { label: "Plusieurs condamnations / de la prison", points: 6 },
    ],
  },
  {
    id: "moral-24",
    text: "Tu répands une rumeur ou un ragot que tu sais faux.",
    answers: [
      { label: "Jamais", points: 0 },
      { label: "Une fois", points: 1 },
      { label: "Parfois", points: 2 },
      { label: "Souvent", points: 3 },
    ],
  },
];
