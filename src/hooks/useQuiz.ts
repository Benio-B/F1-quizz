import { useState, useCallback, useMemo } from 'react';
import { Question } from '../types/quiz';
import { selectRandomQuestions } from '../utils/quiz';

interface QuizState {
  questions: Question[];
  currentQuestionIndex: number;
  score: number;
  isFinished: boolean;
  showExplanation: boolean;
}

export function useQuiz(
  allQuestions: Question[],
  questionsPerGame: number = 15
) {
  const [state, setState] = useState<QuizState>(() => ({
    questions: selectRandomQuestions(allQuestions, questionsPerGame),
    currentQuestionIndex: 0,
    score: 0,
    isFinished: false,
    showExplanation: false,
  }));

  const currentQuestion = useMemo(
    () => state.questions[state.currentQuestionIndex],
    [state.questions, state.currentQuestionIndex]
  );

  const handleAnswer = useCallback(
    (selectedAnswer: string) => {
      setState((prev) => ({
        ...prev,
        score: currentQuestion.answers.includes(selectedAnswer)
          ? prev.score + 1
          : prev.score,
        showExplanation: true,
      }));
    },
    [currentQuestion]
  );

  const handleNextQuestion = useCallback(() => {
    setState((prev) => {
      const nextIndex = prev.currentQuestionIndex + 1;
      return {
        ...prev,
        currentQuestionIndex: nextIndex,
        showExplanation: false,
        isFinished: nextIndex >= prev.questions.length,
      };
    });
  }, []);

  const handleRestart = useCallback(() => {
    setState({
      questions: selectRandomQuestions(allQuestions, questionsPerGame),
      currentQuestionIndex: 0,
      score: 0,
      isFinished: false,
      showExplanation: false,
    });
  }, [allQuestions, questionsPerGame]);

  return {
    currentQuestion,
    currentQuestionIndex: state.currentQuestionIndex,
    totalQuestions: state.questions.length,
    score: state.score,
    isFinished: state.isFinished,
    showExplanation: state.showExplanation,
    handleAnswer,
    handleNextQuestion,
    handleRestart,
  };
}