import React from 'react';
import { motion } from 'framer-motion';
import { HomeIcon, RotateCcwIcon } from 'lucide-react';
import Header from '../components/Header';
import ResultsSummary from '../components/ResultsSummary';
import AnalyticsChart from '../components/AnalyticsChart';
import { useExam } from '../context/ExamContext';
import { userPerformanceData } from '../utils/mockData';
interface ResultsProps {
  onRetry: () => void;
}
const Results: React.FC<ResultsProps> = ({
  onRetry
}) => {
  const {
    examData,
    results,
    resetExam
  } = useExam();
  const handleRetry = () => {
    resetExam();
    onRetry();
  };
  if (!results) return null;
  return <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow flex flex-col items-center justify-center p-6">
        <div className="w-full max-w-4xl space-y-8">
          <ResultsSummary score={results.score} totalQuestions={results.totalQuestions} correctAnswers={results.correctAnswers} incorrectAnswers={results.incorrectAnswers} unattempted={results.unattempted} passingScore={examData.passingScore} timeTaken={results.timeTaken} />
          <AnalyticsChart data={userPerformanceData} currentScore={results.score} />
          <motion.div className="flex justify-center space-x-4" initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          delay: 0.8
        }}>
            <motion.button className="flex items-center px-6 py-3 bg-white border border-indigo-600 text-indigo-600 rounded-lg font-semibold hover:bg-indigo-50" onClick={handleRetry} whileHover={{
            scale: 1.02
          }} whileTap={{
            scale: 0.98
          }}>
              <RotateCcwIcon className="h-4 w-4 mr-2" />
              Try Again
            </motion.button>
            <motion.button className="flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700" onClick={onRetry} whileHover={{
            scale: 1.02
          }} whileTap={{
            scale: 0.98
          }}>
              <HomeIcon className="h-4 w-4 mr-2" />
              Back to Home
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>;
};
export default Results;