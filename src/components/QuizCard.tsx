import React, { useState, useMemo } from 'react';
import { Question } from '../types/quiz';
import { AnswerFeedback } from './AnswerFeedback';
import { Flag, Timer } from 'lucide-react';
import { shuffleArray } from '../utils/quiz';

interface QuizCardProps {
  question: Question;
  currentQuestion: number;
  totalQuestions: number;
  onAnswer: (answer: string) => void;
  showExplanation: boolean;
  onNextQuestion: () => void;
}

export function QuizCard({ 
  question, 
  currentQuestion, 
  totalQuestions, 
  onAnswer,
  showExplanation,
  onNextQuestion
}: QuizCardProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const shuffledAnswers = useMemo(
    () => shuffleArray(question.possible_answers),
    [question]
  );

  const handleAnswerClick = (answer: string) => {
    if (!showExplanation) {
      setSelectedAnswer(answer);
      onAnswer(answer);
    }
  };

  React.useEffect(() => {
    setSelectedAnswer(null);
  }, [question]);

  return (
    <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg p-8">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2">
          <Flag className="w-5 h-5 text-red-600" />
          <span className="text-sm font-medium text-gray-500">
            Question {currentQuestion + 1} sur {totalQuestions}
          </span>
        </div>
        <div className="h-2 flex-1 mx-4 bg-gray-200 rounded-full">
          <div 
            className="h-2 bg-red-600 rounded-full transition-all duration-300"
            style={{ width: `${((currentQuestion + 1) / totalQuestions) * 100}%` }}
          />
        </div>
        <Timer className="w-5 h-5 text-gray-400" />
      </div>
      
      <div className="flex items-center gap-3 mb-6">
        <span className="text-3xl" role="img" aria-label="category emoji">
          {question.emoji}
        </span>
        <h2 className="text-xl font-bold text-gray-800">
          {question.question}
        </h2>
      </div>
      
      <div className="grid gap-4">
        {shuffledAnswers.map((answer) => {
          const isSelected = selectedAnswer === answer;
          const isCorrect = showExplanation && question.answers.includes(answer);
          const isWrong = showExplanation && isSelected && !question.answers.includes(answer);

          return (
            <button
              key={answer}
              onClick={() => handleAnswerClick(answer)}
              disabled={showExplanation}
              className={`
                p-4 text-left border-2 rounded-lg transition-all duration-200 font-medium
                ${isSelected ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-red-500 hover:bg-red-50'}
                ${isCorrect ? 'border-green-500 bg-green-50' : ''}
                ${isWrong ? 'border-red-500 bg-red-50' : ''}
                disabled:cursor-not-allowed
              `}
            >
              {answer}
            </button>
          );
        })}
      </div>

      {showExplanation && selectedAnswer !== null && (
        <AnswerFeedback
          isCorrect={question.answers.includes(selectedAnswer)}
          explanation={question.explanation}
          onContinue={onNextQuestion}
        />
      )}
    </div>
  );
}