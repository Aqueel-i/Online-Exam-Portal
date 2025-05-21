import React, { useEffect, useState, createContext, useContext } from 'react';
import { mockExamData } from '../utils/mockData';
interface ExamContextType {
  examData: any;
  currentQuestion: number;
  answers: Record<number, number>;
  timeRemaining: number;
  isExamComplete: boolean;
  setCurrentQuestion: (index: number) => void;
  selectAnswer: (questionIndex: number, answerIndex: number) => void;
  completeExam: () => void;
  results: {
    score: number;
    totalQuestions: number;
    correctAnswers: number;
    incorrectAnswers: number;
    unattempted: number;
    timeTaken: number;
  } | null;
  resetExam: () => void;
}
const ExamContext = createContext<ExamContextType | undefined>(undefined);
export const ExamProvider: React.FC<{
  children: React.ReactNode;
}> = ({
  children
}) => {
  const [examData, setExamData] = useState(mockExamData);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [timeRemaining, setTimeRemaining] = useState(mockExamData.timeLimit * 60); // in seconds
  const [isExamComplete, setIsExamComplete] = useState(false);
  const [results, setResults] = useState<ExamContextType['results']>(null);
  const [examStarted, setExamStarted] = useState(false);
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (timeRemaining > 0 && examStarted && !isExamComplete) {
      timer = setTimeout(() => {
        setTimeRemaining(prev => prev - 1);
      }, 1000);
    } else if (timeRemaining === 0 && !isExamComplete) {
      completeExam();
    }
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [timeRemaining, examStarted, isExamComplete]);
  useEffect(() => {
    if (currentQuestion === 0 && !examStarted) {
      setExamStarted(true);
    }
  }, [currentQuestion]);
  const selectAnswer = (questionIndex: number, answerIndex: number) => {
    setAnswers(prev => ({
      ...prev,
      [questionIndex]: answerIndex
    }));
  };
  const calculateResults = () => {
    const totalQuestions = examData.questions.length;
    let correctAnswers = 0;
    let incorrectAnswers = 0;
    examData.questions.forEach((question: any, index: number) => {
      if (answers[index] === question.correctAnswer) {
        correctAnswers++;
      } else if (answers[index] !== undefined) {
        incorrectAnswers++;
      }
    });
    const unattempted = totalQuestions - (correctAnswers + incorrectAnswers);
    const score = Math.round(correctAnswers / totalQuestions * 100);
    const timeTaken = mockExamData.timeLimit * 60 - timeRemaining;
    return {
      score,
      totalQuestions,
      correctAnswers,
      incorrectAnswers,
      unattempted,
      timeTaken
    };
  };
  const completeExam = () => {
    setIsExamComplete(true);
    setResults(calculateResults());
  };
  const resetExam = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setTimeRemaining(mockExamData.timeLimit * 60);
    setIsExamComplete(false);
    setResults(null);
    setExamStarted(false);
  };
  return <ExamContext.Provider value={{
    examData,
    currentQuestion,
    answers,
    timeRemaining,
    isExamComplete,
    setCurrentQuestion,
    selectAnswer,
    completeExam,
    results,
    resetExam
  }}>
      {children}
    </ExamContext.Provider>;
};
export const useExam = () => {
  const context = useContext(ExamContext);
  if (context === undefined) {
    throw new Error('useExam must be used within an ExamProvider');
  }
  return context;
};