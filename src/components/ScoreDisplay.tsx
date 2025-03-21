import React from 'react';
import { Trophy, Flag, Gauge, Award } from 'lucide-react';

interface ScoreDisplayProps {
  score: number;
  totalQuestions: number;
  onRestart: () => void;
}

export function ScoreDisplay({ score, totalQuestions, onRestart }: ScoreDisplayProps) {
  const percentage = (score / totalQuestions) * 100;
  
  return (
    <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg p-8 text-center">
      <div className="flex justify-center gap-4 mb-6">
        <Trophy className="w-16 h-16 text-yellow-500 animate-bounce" />
        <Flag className="w-16 h-16 text-red-600" />
      </div>
      
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Course terminée ! 🏁</h2>
      
      <div className="flex items-center justify-center gap-3 mb-6">
        <Gauge className="w-8 h-8 text-blue-600" />
        <p className="text-4xl font-bold text-red-600">{score} / {totalQuestions}</p>
      </div>

      <div className="bg-gray-50 rounded-lg p-4 mb-6">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Award className="w-6 h-6 text-purple-600" />
          <p className="text-lg font-bold text-gray-800">
            {percentage === 100 && "Champion du Monde ! 🏆"}
            {percentage >= 70 && percentage < 100 && "Sur le Podium ! 🥈"}
            {percentage >= 40 && percentage < 70 && "Dans les Points ! 🏎️"}
            {percentage < 40 && "En Qualification ! 🔧"}
          </p>
        </div>
        <p className="text-gray-600">
          {percentage === 100 && "Tu es un véritable expert de la F1 !"}
          {percentage >= 70 && percentage < 100 && "Excellent niveau de connaissances !"}
          {percentage >= 40 && percentage < 70 && "Continue comme ça, tu progresses bien !"}
          {percentage < 40 && "Ne lâche rien, la F1 est un sport complexe !"}
        </p>
      </div>

      <button
        onClick={onRestart}
        className="bg-red-600 text-white px-6 py-3 rounded-lg font-medium
                 hover:bg-red-700 transition-colors duration-200 flex items-center justify-center gap-2 mx-auto"
      >
        <Flag className="w-5 h-5" />
        Nouveau Grand Prix
      </button>
    </div>
  );
}