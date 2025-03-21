import { Question } from '../../types/quiz';

export const circuitsQuestions: Question[] = [
  {
    question: 'Quel est le plus long circuit du calendrier 2024 ?',
    possible_answers: ['Spa-Francorchamps', 'Silverstone', 'Monza'],
    answers: ['Spa-Francorchamps'],
    explanation:
      'Le circuit de Spa-Francorchamps en Belgique est le plus long avec 7,004 km',
    emoji: '🏆',
    category: 'circuits',
  },
  {
    question: 'Quel circuit a le plus de virages ?',
    possible_answers: ['Marina Bay', 'Jeddah', 'Hungaroring'],
    answers: ['Marina Bay'],
    explanation: 'Le circuit de Marina Bay à Singapour compte 23 virages.',
    emoji: '↩️',
    category: 'circuits',
  },
  {
    question: 'Quel est le circuit le plus rapide du calendrier ?',
    possible_answers: ['Monza', 'Silverstone', 'Spa-Francorchamps'],
    answers: ['Monza'],
    explanation: 'Monza, surnommé "Le Temple de la Vitesse", est le circuit le plus rapide.',
    emoji: '⚡',
    category: 'circuits',
  },
  {
    question: 'Quel circuit a la plus longue ligne droite ?',
    possible_answers: ['Bakou', 'Las Vegas', 'Shanghai'],
    answers: ['Las Vegas'],
    explanation: 'Le circuit de Las Vegas possède la plus longue ligne droite avec 1.9 km.',
    emoji: '➡️',
    category: 'circuits',
  },
  {
    question: 'Quel est le circuit urbain le plus ancien ?',
    possible_answers: ['Monaco', 'Melbourne', 'Singapour'],
    answers: ['Monaco'],
    explanation: 'Monaco est le plus ancien circuit urbain, présent depuis 1929.',
    emoji: '🏰',
    category: 'circuits',
  },
  {
    question: 'Quel circuit a le plus de zones DRS ?',
    possible_answers: ['Bakou', 'Red Bull Ring', 'Jeddah'],
    answers: ['Jeddah'],
    explanation: 'Le circuit de Jeddah en Arabie Saoudite compte 4 zones DRS.',
    emoji: '💨',
    category: 'circuits',
  }
];