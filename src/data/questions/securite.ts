import { Question } from '../../types/quiz';

export const securiteQuestions: Question[] = [
  {
    question: 'À quelle fréquence les crashs tests sont-ils effectués ?',
    possible_answers: [
      'Début de chaque saison',
      'Avant chaque course',
      'Chaque nouveau design',
    ],
    answers: ['Chaque nouveau design', 'Début de chaque saison'],
    explanation:
      'Avant chaque début de course ou de changements significatifs, des crash tests sont fait pour homologuer la voiture.',
    emoji: '💥',
    category: 'securite',
  },
  {
    question: 'Quelle est la résistance du Halo ?',
    possible_answers: ['5 tonnes', '12 tonnes', '15 tonnes'],
    answers: ['12 tonnes'],
    explanation:
      'Le Halo peut supporter une charge de 12 tonnes, soit le poids de 2 bus à impériale.',
    emoji: '💪',
    category: 'securite',
  },
  {
    question: 'En quelle année le Halo a-t-il été introduit ?',
    possible_answers: ['2017', '2018', '2019'],
    answers: ['2018'],
    explanation:
      'Le Halo est devenu obligatoire en F1 à partir de la saison 2018.',
    emoji: '📅',
    category: 'securite',
  },
  {
    question: "Quelle est la durée de vie d'un baquet en F1 ?",
    possible_answers: ['1 an', '2 ans', '3 ans'],
    answers: ['1 an'],
    explanation:
      'Un baquet F1 doit être remplacé toutes les années pour des raisons de sécurité.',
    emoji: '🪑',
    category: 'securite',
  },
  {
    question: "Quelle est la durée maximale d'intervention médicale ?",
    possible_answers: ['10 secondes', '20 secondes', '30 secondes'],
    answers: ['20 secondes'],
    explanation:
      "L'équipe médicale doit pouvoir intervenir en moins de 20 secondes n'importe où sur le circuit.",
    emoji: '🚑',
    category: 'securite',
  },
  {
    question: 'Quelle est la résistance minimale de la cellule de survie ?',
    possible_answers: ['15 tonnes', '25 tonnes', '35 tonnes'],
    answers: ['25 tonnes'],
    explanation:
      'La cellule de survie doit résister à une charge minimale de 25 tonnes en cas de choc.',
    emoji: '🛡️',
    category: 'securite',
  },
  {
    question: 'Combien de caméras de sécurité minimum par circuit ?',
    possible_answers: ['15', '20', '25'],
    answers: ['20'],
    explanation:
      'Chaque circuit doit avoir au minimum 20 caméras de sécurité pour surveiller la course.',
    emoji: '📹',
    category: 'securite',
  }
];