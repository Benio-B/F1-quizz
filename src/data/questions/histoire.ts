import { Question } from '../../types/quiz';

export const histoireQuestions: Question[] = [
  {
    question: "Qui est le plus jeune vainqueur d'un Grand Prix ?",
    possible_answers: [
      "Max Verstappen",
      "Sebastian Vettel",
      "Charles Leclerc"
    ],
    answers: ["Max Verstappen"],
    explanation: "Max Verstappen a gagné son premier GP à 18 ans et 228 jours en Espagne 2016.",
    emoji: "👶",
    category: "histoire"
  },
  {
    question: "Quelle écurie a dominé les années 1980 ?",
    possible_answers: [
      "McLaren",
      "Williams",
      "Ferrari"
    ],
    answers: ["McLaren"],
    explanation: "McLaren a dominé les années 1980 avec Prost et Senna.",
    emoji: "🏆",
    category: "histoire"
  },
  {
    question: "Quel pilote a le plus de victoires consécutives ?",
    possible_answers: [
      "Sebastian Vettel",
      "Max Verstappen",
      "Michael Schumacher"
    ],
    answers: ["Max Verstappen"],
    explanation: "Max Verstappen détient le record avec 10 victoires consécutives en 2023.",
    emoji: "🔥",
    category: "histoire"
  },
  {
    question: "En quelle année a eu lieu le premier GP de F1 ?",
    possible_answers: [
      "1950",
      "1955",
      "1960"
    ],
    answers: ["1950"],
    explanation: "Le premier championnat du monde de F1 a débuté en 1950.",
    emoji: "📅",
    category: "histoire"
  },
  {
    question: "Qui est le premier champion du monde de F1 ?",
    possible_answers: [
      "Juan Manuel Fangio",
      "Giuseppe Farina",
      "Alberto Ascari"
    ],
    answers: ["Giuseppe Farina"],
    explanation: "Giuseppe Farina a remporté le premier titre mondial en 1950.",
    emoji: "👑",
    category: "histoire"
  },
  {
    question: "Quelle écurie a participé au plus de GP ?",
    possible_answers: [
      "Ferrari",
      "McLaren",
      "Williams"
    ],
    answers: ["Ferrari"],
    explanation: "Ferrari est la seule écurie présente depuis 1950 sans interruption.",
    emoji: "🏎️",
    category: "histoire"
  }
];