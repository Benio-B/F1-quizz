import { Question } from '../../types/quiz';

export const recordsQuestions: Question[] = [
  {
    question: "Qui a le plus de pole positions en F1 ?",
    possible_answers: ["Lewis Hamilton", "Michael Schumacher"],
    answers: ["Lewis Hamilton"],
    explanation: "Lewis Hamilton détient le record avec plus de 100 pole positions en carrière.",
    emoji: "⚡",
    category: "records"
  },
  {
    question: "Max Verstappen détient-il le record de victoires sur une saison ?",
    possible_answers: ["Oui", "Non"],
    answers: ["Oui"],
    explanation: "Oui, Max Verstappen détient le record avec 19 victoires sur la saison 2023.",
    emoji: "🏆",
    category: "records"
  },
  {
    question: "Le record du tour le plus rapide rapporte-t-il un point ?",
    possible_answers: ["Oui", "Non"],
    answers: ["Oui"],
    explanation: "Oui, depuis 2019, le meilleur tour en course rapporte 1 point (si le pilote finit dans le top 10).",
    emoji: "⏱️",
    category: "records"
  },
  {
    question: "Quels pilotes ont plus de 50 victoires en carrière ?",
    possible_answers: [
      "Lewis Hamilton",
      "Michael Schumacher",
      "Max Verstappen",
      "Sebastian Vettel"
    ],
    answers: ["Lewis Hamilton", "Michael Schumacher", "Max Verstappen", "Sebastian Vettel"],
    explanation: "Lewis Hamilton (103), Michael Schumacher (91), Max Verstappen (54) et Sebastian Vettel (53) ont dépassé les 50 victoires.",
    emoji: "🏁",
    category: "records"
  },
  {
    question: "Quels constructeurs ont plus de 100 victoires ?",
    possible_answers: [
      "Ferrari",
      "McLaren",
      "Red Bull"
    ],
    answers: ["Ferrari", "McLaren"],
    explanation: "Ferrari (243 victoires) et McLaren (183 victoires) ont dépassé les 100 victoires en F1.",
    emoji: "🏭",
    category: "records"
  },
  {
    question: "Qui détient le record de tours en tête ?",
    possible_answers: [
      "Lewis Hamilton",
      "Michael Schumacher",
      "Max Verstappen"
    ],
    answers: ["Lewis Hamilton"],
    explanation: "Lewis Hamilton détient le record avec plus de 5,400 tours en tête.",
    emoji: "👑",
    category: "records"
  }
];