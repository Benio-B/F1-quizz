import { Question } from '../../types/quiz';

export const strategiesQuestions: Question[] = [
  {
    question: "Qu'est-ce que l'overcut ?",
    possible_answers: [
      "Rester en piste plus longtemps",
      "S'arrêter plus tôt",
      "Doubler hors-piste"
    ],
    answers: ["Rester en piste plus longtemps"],
    explanation: "L'overcut consiste à rester en piste plus longtemps que ses adversaires pour gagner des positions.",
    emoji: "🔄",
    category: "strategies"
  },
  {
    question: "Combien dure un arrêt aux stands en moyenne ?",
    possible_answers: [
      "2 secondes",
      "2.5 secondes",
      "3 secondes"
    ],
    answers: ["2.5 secondes"],
    explanation: "Un arrêt aux stands dure en moyenne 2.5 secondes pour changer les 4 roues.",
    emoji: "⏱️",
    category: "strategies"
  },
  {
    question: "Qu'est-ce que le DRS ?",
    possible_answers: [
      "Un système d'aide au dépassement",
      "Un type de pneus",
      "Une stratégie d'arrêt"
    ],
    answers: ["Un système d'aide au dépassement"],
    explanation: "Le DRS (Drag Reduction System) permet de réduire la traînée pour faciliter les dépassements.",
    emoji: "💨",
    category: "strategies"
  },
  {
    question: "À quelle distance doit-on être pour activer le DRS ?",
    possible_answers: [
      "Moins d'une seconde",
      "Moins de 2 secondes",
      "Moins de 3 secondes"
    ],
    answers: ["Moins d'une seconde"],
    explanation: "Il faut être à moins d'une seconde du pilote devant pour pouvoir activer le DRS.",
    emoji: "📏",
    category: "strategies"
  },
  {
    question: "Combien de types de pneus sont disponibles par week-end ?",
    possible_answers: [
      "3",
      "4",
      "5"
    ],
    answers: ["3"],
    explanation: "Pirelli fournit 3 types de pneus secs par week-end : tendre, medium et dur.",
    emoji: "🛞",
    category: "strategies"
  },
  {
    question: "Combien de trains de pneus sont alloués par week-end ?",
    possible_answers: [
      "11",
      "13",
      "15"
    ],
    answers: ["13"],
    explanation: "Chaque pilote dispose de 13 trains de pneus secs par week-end.",
    emoji: "🛞",
    category: "strategies"
  }
];