import React from 'react';
import { questions } from './data/questions';
import { QuizCard } from './components/QuizCard';
import { ScoreDisplay } from './components/ScoreDisplay';
import { Flag, Trophy } from 'lucide-react';
import { useQuiz } from './hooks/useQuiz';

export function App() {
  const {
    currentQuestion,
    currentQuestionIndex,
    totalQuestions,
    score,
    isFinished,
    showExplanation,
    handleAnswer,
    handleNextQuestion,
    handleRestart,
  } = useQuiz(questions);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-red-900 to-gray-900 flex flex-col items-center py-12 px-4 relative">
      <div className="flex items-center gap-4 mb-8">
        <Flag className="w-10 h-10 text-white" />
        <h1 className="text-4xl font-bold text-white">F1 Quiz Challenge</h1>
        <Trophy className="w-10 h-10 text-yellow-500" />
      </div>

      {!isFinished ? (
        <QuizCard
          question={currentQuestion}
          currentQuestion={currentQuestionIndex}
          totalQuestions={totalQuestions}
          onAnswer={handleAnswer}
          showExplanation={showExplanation}
          onNextQuestion={handleNextQuestion}
        />
      ) : (
        <ScoreDisplay
          score={score}
          totalQuestions={totalQuestions}
          onRestart={handleRestart}
        />
      )}

      <div className="absolute bottom-4 right-4 text-white/50 text-sm">
        v1.0.0
      </div>
    </div>
  );
}