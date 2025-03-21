import { Question } from '../../types/quiz';
import { pilotesQuestions } from './pilotes';
import { techniqueQuestions } from './technique';
import { circuitsQuestions } from './circuits';
import { histoireQuestions } from './histoire';
import { recordsQuestions } from './records';
import { equipesQuestions } from './equipes';
import { reglementQuestions } from './reglement';
import { strategiesQuestions } from './strategies';
import { saisonsQuestions } from './saisons';
import { securiteQuestions } from './securite';

export const questions: Question[] = [
  ...pilotesQuestions,
  ...techniqueQuestions,
  ...circuitsQuestions,
  ...histoireQuestions,
  ...recordsQuestions,
  ...equipesQuestions,
  ...reglementQuestions,
  ...strategiesQuestions,
  ...saisonsQuestions,
  ...securiteQuestions
];

console.log(questions.map((q) => ({question: q.question, answers: q.answers})))