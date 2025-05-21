import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeftIcon, ArrowRightIcon, CheckIcon } from 'lucide-react';
import Header from '../components/Header';
import QuestionCard from '../components/QuestionCard';
import { useExam } from '../context/ExamContext';
interface ExamPageProps {
  onComplete: () => void;
}
const ExamPage: React.FC<ExamPageProps> = ({
  onComplete
}) => {
  const {
    examData,
    currentQuestion,
    setCurrentQuestion,
    answers,
    selectAnswer,
    completeExam
  } = useExam();
  const handleNext = () => {
    if (currentQuestion < examData.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };
  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };
  const handleComplete = () => {
    completeExam();
    onComplete();
  };
  const [direction, setDirection] = useState(0);
  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 200 : -200,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 200 : -200,
      opacity: 0
    })
  };
  const navigateWithDirection = (newDirection: number, callback: () => void) => {
    setDirection(newDirection);
    callback();
  };
  return <div className="min-h-screen flex flex-col">
      <Header showTimer={true} showProgress={true} />
      <div className="flex-grow flex flex-col items-center justify-center p-6">
        <AnimatePresence custom={direction} mode="wait">
          <motion.div key={currentQuestion} custom={direction} variants={variants} initial="enter" animate="center" exit="exit" transition={{
          duration: 0.3
        }} className="w-full">
            <QuestionCard question={examData.questions[currentQuestion]} selectedAnswer={answers[currentQuestion]} onSelectAnswer={index => selectAnswer(currentQuestion, index)} questionNumber={currentQuestion + 1} />
          </motion.div>
        </AnimatePresence>
        <motion.div className="flex justify-between w-full max-w-3xl mt-6" initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        delay: 0.3
      }}>
          <motion.button className={`flex items-center px-4 py-2 rounded-lg ${currentQuestion > 0 ? 'bg-white text-indigo-600 hover:bg-indigo-50' : 'bg-gray-100 text-gray-400 cursor-not-allowed'}`} onClick={() => navigateWithDirection(-1, handlePrevious)} disabled={currentQuestion === 0} whileHover={currentQuestion > 0 ? {
          scale: 1.02
        } : {}} whileTap={currentQuestion > 0 ? {
          scale: 0.98
        } : {}}>
            <ArrowLeftIcon className="h-4 w-4 mr-2" />
            Previous
          </motion.button>
          {currentQuestion < examData.questions.length - 1 ? <motion.button className="flex items-center px-6 py-2 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700" onClick={() => navigateWithDirection(1, handleNext)} whileHover={{
          scale: 1.02
        }} whileTap={{
          scale: 0.98
        }}>
              Next
              <ArrowRightIcon className="h-4 w-4 ml-2" />
            </motion.button> : <motion.button className="flex items-center px-6 py-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700" onClick={handleComplete} whileHover={{
          scale: 1.02
        }} whileTap={{
          scale: 0.98
        }}>
              Complete Exam
              <CheckIcon className="h-4 w-4 ml-2" />
            </motion.button>}
        </motion.div>
      </div>
    </div>;
};
export default ExamPage;