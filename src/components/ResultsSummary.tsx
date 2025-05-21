import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircleIcon, XCircleIcon, AlertCircleIcon, TrophyIcon } from 'lucide-react';
interface ResultsSummaryProps {
  score: number;
  totalQuestions: number;
  correctAnswers: number;
  incorrectAnswers: number;
  unattempted: number;
  passingScore: number;
  timeTaken: number;
}
const ResultsSummary: React.FC<ResultsSummaryProps> = ({
  score,
  totalQuestions,
  correctAnswers,
  incorrectAnswers,
  unattempted,
  passingScore,
  timeTaken
}) => {
  const isPassed = score >= passingScore;
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}m ${remainingSeconds}s`;
  };
  return <motion.div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-2xl mx-auto" initial={{
    opacity: 0,
    scale: 0.9
  }} animate={{
    opacity: 1,
    scale: 1
  }} transition={{
    duration: 0.5
  }}>
      <div className="text-center mb-6">
        <motion.div initial={{
        scale: 0
      }} animate={{
        scale: 1,
        rotate: [0, 10, -10, 0]
      }} transition={{
        delay: 0.3,
        duration: 0.7,
        type: 'spring'
      }} className="inline-flex justify-center items-center w-24 h-24 rounded-full mb-4">
          {isPassed ? <TrophyIcon className="w-16 h-16 text-yellow-500" /> : <AlertCircleIcon className="w-16 h-16 text-orange-500" />}
        </motion.div>
        <h2 className="text-2xl font-bold mb-1">
          {isPassed ? 'Congratulations!' : 'Almost there!'}
        </h2>
        <p className="text-gray-600 mb-4">
          {isPassed ? "You've successfully passed the exam." : 'Keep practicing and try again soon.'}
        </p>
        <div className="flex justify-center">
          <div className={`text-4xl font-bold ${isPassed ? 'text-green-600' : 'text-orange-600'}`}>
            {score}%
          </div>
          <div className="text-sm text-gray-500 self-end ml-1 mb-1">
            (Passing: {passingScore}%)
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <motion.div className="bg-green-50 p-4 rounded-lg flex flex-col items-center" initial={{
        y: 20,
        opacity: 0
      }} animate={{
        y: 0,
        opacity: 1
      }} transition={{
        delay: 0.2
      }}>
          <CheckCircleIcon className="h-8 w-8 text-green-600 mb-2" />
          <div className="text-xl font-semibold text-green-700">
            {correctAnswers}
          </div>
          <div className="text-sm text-green-600">Correct</div>
        </motion.div>
        <motion.div className="bg-red-50 p-4 rounded-lg flex flex-col items-center" initial={{
        y: 20,
        opacity: 0
      }} animate={{
        y: 0,
        opacity: 1
      }} transition={{
        delay: 0.3
      }}>
          <XCircleIcon className="h-8 w-8 text-red-600 mb-2" />
          <div className="text-xl font-semibold text-red-700">
            {incorrectAnswers}
          </div>
          <div className="text-sm text-red-600">Incorrect</div>
        </motion.div>
        <motion.div className="bg-gray-50 p-4 rounded-lg flex flex-col items-center" initial={{
        y: 20,
        opacity: 0
      }} animate={{
        y: 0,
        opacity: 1
      }} transition={{
        delay: 0.4
      }}>
          <AlertCircleIcon className="h-8 w-8 text-gray-600 mb-2" />
          <div className="text-xl font-semibold text-gray-700">
            {unattempted}
          </div>
          <div className="text-sm text-gray-600">Unattempted</div>
        </motion.div>
      </div>
      <div className="text-center text-gray-600">
        <p>Time taken: {formatTime(timeTaken)}</p>
        <p>Total questions: {totalQuestions}</p>
      </div>
    </motion.div>;
};
export default ResultsSummary;