import React from 'react';
import { CheckCircle2, XCircle } from 'lucide-react';

interface AnswerFeedbackProps {
  isCorrect: boolean;
  explanation: string;
  onContinue: () => void;
}

export function AnswerFeedback({ isCorrect, explanation, onContinue }: AnswerFeedbackProps) {
  return (
    <div className="mt-6 p-4 rounded-lg border-2 animate-fade-in">
      <div className={`flex items-center gap-3 mb-3 ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
        {isCorrect ? (
          <>
            <CheckCircle2 className="w-6 h-6" />
            <span className="font-bold">Correct ! 🏆</span>
          </>
        ) : (
          <>
            <XCircle className="w-6 h-6" />
            <span className="font-bold">Incorrect ! 😔</span>
          </>
        )}
      </div>
      <p className="text-gray-700">{explanation}</p>
      <button
        onClick={onContinue}
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
      >
        Continuer →
      </button>
    </div>
  );
}