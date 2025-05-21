import React from 'react';
import { motion } from 'framer-motion';
import { BookOpenIcon } from 'lucide-react';
import ExamTimer from './ExamTimer';
import ProgressBar from './ProgressBar';
import { useExam } from '../context/ExamContext';
const Header: React.FC<{
  showTimer?: boolean;
  showProgress?: boolean;
}> = ({
  showTimer = false,
  showProgress = false
}) => {
  const {
    examData,
    currentQuestion,
    timeRemaining
  } = useExam();
  return <motion.header className="bg-white shadow-md py-4 px-6 flex flex-col sm:flex-row justify-between items-center" initial={{
    y: -50,
    opacity: 0
  }} animate={{
    y: 0,
    opacity: 1
  }} transition={{
    duration: 0.5
  }}>
      <div className="flex items-center mb-4 sm:mb-0">
        <BookOpenIcon className="h-8 w-8 text-indigo-600 mr-3" />
        <h1 className="text-xl font-bold text-gray-800">{examData.title}</h1>
      </div>
      <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
        {showProgress && <div className="w-full sm:w-64">
            <ProgressBar current={currentQuestion + 1} total={examData.questions.length} />
          </div>}
        {showTimer && <ExamTimer timeRemaining={timeRemaining} />}
      </div>
    </motion.header>;
};
export default Header;