import { Question } from '../types/quiz';

export function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export function selectRandomQuestions(questions: Question[], count: number): Question[] {
  return shuffleArray(questions).slice(0, count);
}

export function getCategoryEmoji(category: string): string {
  const emojiMap: Record<string, string> = {
    pilotes: "👨‍🏎️",
    circuits: "🏎️",
    technique: "⚙️",
    histoire: "📜",
    records: "🏆",
    equipes: "🏢",
    reglement: "📋"
  };
  return emojiMap[category] || "🏁";
}