import { Question } from '../../types/quiz';

export const pilotesQuestions: Question[] = [
  {
    question: "Qui sont les pilotes de réserve rookies en 2024 ?",
    possible_answers: [
      "Oliver Bearman",
      "Liam Lawson",
      "Oliver Goethe",
      "Théo Pourchaire"
    ],
    answers: ["Oliver Bearman", "Théo Pourchaire"],
    explanation: "Oliver Bearman (Ferrari) et Théo Pourchaire (Stake F1) sont les principaux pilotes de réserve rookies en 2024.",
    emoji: "👶",
    category: "pilotes"
  },
  {
    question: "Quel pilote a le plus de podiums sans victoire ?",
    possible_answers: [
      "Nick Heidfeld",
      "Nico Hulkenberg",
      "Romain Grosjean"
    ],
    answers: ["Nick Heidfeld"],
    explanation: "Nick Heidfeld détient le record avec 13 podiums sans victoire en F1.",
    emoji: "🏆",
    category: "pilotes"
  },
  {
    question: "Qui est le plus jeune pilote de la grille 2024 ?",
    possible_answers: [
      "Oscar Piastri",
      "Lando Norris",
      "Logan Sargeant"
    ],
    answers: ["Oscar Piastri"],
    explanation: "Oscar Piastri, né en 2001, est le plus jeune pilote de la grille 2024.",
    emoji: "👶",
    category: "pilotes"
  },
  {
    question: "Quel pilote a fait le plus de départs en F1 ?",
    possible_answers: [
      "Fernando Alonso",
      "Kimi Räikkönen",
      "Lewis Hamilton"
    ],
    answers: ["Fernando Alonso"],
    explanation: "Fernando Alonso détient le record avec plus de 380 départs en F1.",
    emoji: "🚦",
    category: "pilotes"
  },
  {
    question: "Combien de rookies y a-t-il en 2024 ?",
    possible_answers: [
      "0",
      "1",
      "2"
    ],
    answers: ["0"],
    explanation: "Il n'y a aucun rookie (débutant) sur la grille de départ en 2024.",
    emoji: "🆕",
    category: "pilotes"
  },
  {
    question: "Quel pilote a le plus de victoires à Monaco ?",
    possible_answers: [
      "Ayrton Senna",
      "Michael Schumacher",
      "Graham Hill"
    ],
    answers: ["Ayrton Senna"],
    explanation: "Ayrton Senna détient le record avec 6 victoires à Monaco.",
    emoji: "🏎️",
    category: "pilotes"
  }
];