import { Question } from '../../types/quiz';

export const saisonsQuestions: Question[] = [
  {
    question: "La saison 2024 est-elle la plus longue de l'histoire ?",
    possible_answers: ['Oui', 'Non'],
    answers: ['Oui'],
    explanation:
      "Oui, avec 24 courses, la saison 2024 est la plus longue de l'histoire de la F1.",
    emoji: '📅',
    category: 'saisons',
  },
  {
    question: 'Y a-t-il des courses sprint en 2024 ?',
    possible_answers: ['Oui', 'Non'],
    answers: ['Oui'],
    explanation: 'Oui, 6 courses sprint sont prévues pour la saison 2024.',
    emoji: '🏃',
    category: 'saisons',
  },
  {
    question: 'Quels Grands Prix sont nocturnes en 2024 ?',
    possible_answers: ['Bahreïn', 'Las Vegas', 'Singapour', 'Melbourne'],
    answers: ['Bahreïn', 'Las Vegas', 'Singapour'],
    explanation:
      'Bahreïn, Las Vegas et Singapour sont les courses nocturnes de la saison 2024.',
    emoji: '🌙',
    category: 'saisons',
  },
  {
    question: 'Quels continents accueillent le plus de courses en 2024 ?',
    possible_answers: ['Europe', 'Asie', 'Amérique'],
    answers: ['Europe', 'Asie'],
    explanation:
      "L'Europe et l'Asie accueillent la majorité des Grands Prix de la saison 2024.",
    emoji: '🌍',
    category: 'saisons',
  },
  {
    question: 'Quel est le premier Grand Prix de 2024 ?',
    possible_answers: ['Bahreïn', 'Australie', 'Arabie Saoudite'],
    answers: ['Bahreïn'],
    explanation: 'Le Grand Prix de Bahreïn ouvre la saison 2024.',
    emoji: '1️⃣',
    category: 'saisons',
  },
  {
    question: 'Combien y a-t-il de Grands Prix en Europe ?',
    possible_answers: ['9', '10', '11'],
    answers: ['9'],
    explanation: "L'Europe accueille 9 Grands Prix en 2024.",
    emoji: '🇪🇺',
    category: 'saisons',
  },
  {
    question: 'Quel est le dernier Grand Prix de 2024 ?',
    possible_answers: ['Abu Dhabi', 'Las Vegas', 'Qatar'],
    answers: ['Abu Dhabi'],
    explanation: "Le Grand Prix d'Abu Dhabi clôture la saison 2024.",
    emoji: '🏁',
    category: 'saisons',
  },
];
