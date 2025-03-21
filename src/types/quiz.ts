export interface Question {
  question: string;
  possible_answers: string[];
  answers: string[];
  explanation: string;
  emoji: string;
  category: QuestionCategory;
}

export type QuestionCategory =
  | 'pilotes'
  | 'circuits'
  | 'technique'
  | 'histoire'
  | 'records'
  | 'equipes'
  | 'reglement'
  | 'saisons'
  | 'securite';
