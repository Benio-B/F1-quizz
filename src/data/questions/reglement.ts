import { Question } from '../../types/quiz';

export const reglementQuestions: Question[] = [
  {
    question: "Quelle est la vitesse limite dans la voie des stands ?",
    possible_answers: [
      "60 km/h",
      "80 km/h",
      "100 km/h"
    ],
    answers: ["80 km/h"],
    explanation: "La vitesse est limitée à 80 km/h dans la voie des stands pendant la course.",
    emoji: "🚦",
    category: "reglement"
  },
  {
    question: "Combien de moteurs sont autorisés par saison ?",
    possible_answers: [
      "2",
      "3",
      "4"
    ],
    answers: ["3"],
    explanation: "Chaque pilote a droit à 3 moteurs thermiques pour toute la saison.",
    emoji: "🔧",
    category: "reglement"
  },
  {
    question: "Quelle est la durée maximale d'une course ?",
    possible_answers: [
      "2 heures",
      "3 heures",
      "4 heures"
    ],
    answers: ["3 heures"],
    explanation: "Une course ne peut pas dépasser 3 heures au total, interruptions comprises.",
    emoji: "⏰",
    category: "reglement"
  },
  {
    question: "Combien de points rapporte une victoire ?",
    possible_answers: [
      "20",
      "25",
      "30"
    ],
    answers: ["25"],
    explanation: "Une victoire rapporte 25 points (26 avec le meilleur tour).",
    emoji: "🏆",
    category: "reglement"
  },
  {
    question: "Combien de boîtes de vitesses sont autorisées par saison ?",
    possible_answers: [
      "3",
      "4",
      "5"
    ],
    answers: ["4"],
    explanation: "Chaque pilote a droit à 4 boîtes de vitesses pour la saison.",
    emoji: "⚙️",
    category: "reglement"
  },
  {
    question: "Quelle est la largeur maximale d'une F1 ?",
    possible_answers: [
      "1,8m",
      "2m",
      "2,2m"
    ],
    answers: ["2m"],
    explanation: "Une F1 ne peut pas dépasser 2 mètres de largeur.",
    emoji: "📏",
    category: "reglement"
  }
];