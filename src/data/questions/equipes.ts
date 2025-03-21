import { Question } from '../../types/quiz';

export const equipesQuestions: Question[] = [
  {
    question: 'Quelle écurie a le plus de titres constructeurs ?',
    possible_answers: ['Ferrari', 'Mercedes'],
    answers: ['Ferrari'],
    explanation: 'Ferrari détient le record avec 16 titres constructeurs.',
    emoji: '🏆',
    category: 'equipes',
  },
  {
    question: 'Alpine est-elle une équipe française ?',
    possible_answers: ['Oui', 'Non'],
    answers: ['Oui'],
    explanation:
      "Oui, Alpine est l'équipe française de F1, basée à Enstone (UK) et Viry-Châtillon (France).",
    emoji: '🇫🇷',
    category: 'equipes',
  },
  {
    question: 'Quelles écuries utilisent des moteurs Ferrari en 2024 ?',
    possible_answers: ['Haas', 'Sauber', 'Williams', 'AlphaTauri'],
    answers: ['Haas', 'Sauber'],
    explanation:
      'Haas F1 Team et Stake F1 Team Sauber utilisent des moteurs Ferrari en 2024.',
    emoji: '🔧',
    category: 'equipes',
  },
  {
    question: 'Quelles écuries ont changé de nom en 2024 ?',
    possible_answers: ['AlphaTauri', 'Sauber', 'Williams'],
    answers: ['AlphaTauri', 'Sauber'],
    explanation:
      'AlphaTauri devient Visa Cash App RB et Alfa Romeo devient Stake F1 Team Sauber.',
    emoji: '✨',
    category: 'equipes',
  },
  {
    question: 'Quelle écurie a le plus petit budget en 2024 ?',
    possible_answers: ['Haas', 'Williams', 'AlphaTauri'],
    answers: ['Williams'],
    explanation:
      'Williams Racing opère avec le plus petit budget de la grille en 2024.',
    emoji: '💰',
    category: 'equipes',
  },
  {
    question: "Combien d'écuries utilisent des moteurs Mercedes ?",
    possible_answers: ['2', '3', '4'],
    answers: ['4'],
    explanation:
      'Mercedes, McLaren, Aston Martin et Williams utilisent des moteurs Mercedes.',
    emoji: '⚡',
    category: 'equipes',
  },
  {
    question: 'Quelle est la plus jeune écurie de F1 ?',
    possible_answers: ['Haas', 'RB', 'Alpine'],
    answers: ['Haas'],
    explanation:
      'Haas F1 Team est la plus jeune écurie, ayant rejoint la F1 en 2016.',
    emoji: '👶',
    category: 'equipes',
  },
  {
    question: 'Quelle écurie a remporté le plus de courses en 2023 ?',
    possible_answers: ['Red Bull', 'Ferrari', 'Mercedes'],
    answers: ['Red Bull'],
    explanation:
      'Red Bull Racing a remporté 21 des 22 courses de la saison 2023.',
    emoji: '🏆',
    category: 'equipes',
  },
];
