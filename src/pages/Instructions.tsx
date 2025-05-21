import React from 'react';
import { motion } from 'framer-motion';
import { ClipboardListIcon, ArrowLeftIcon, ArrowRightIcon, ClockIcon, CheckSquareIcon, AlertTriangleIcon } from 'lucide-react';
import Header from '../components/Header';
import { useExam } from '../context/ExamContext';
interface InstructionsProps {
  onContinue: () => void;
  onBack: () => void;
}
const Instructions: React.FC<InstructionsProps> = ({
  onContinue,
  onBack
}) => {
  const {
    examData
  } = useExam();
  return <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow flex items-center justify-center p-6">
        <motion.div className="max-w-3xl w-full bg-white rounded-xl shadow-xl overflow-hidden" initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.5
      }}>
          <div className="p-8">
            <div className="flex items-center mb-6">
              <ClipboardListIcon className="h-8 w-8 text-indigo-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-800">
                Exam Instructions
              </h2>
            </div>
            <div className="mb-6">
              <h3 className="font-semibold text-lg text-gray-800 mb-2">
                {examData.title}
              </h3>
              <p className="text-gray-600 mb-4">{examData.description}</p>
            </div>
            <div className="bg-indigo-50 rounded-lg p-4 mb-6 flex items-start">
              <ClockIcon className="h-5 w-5 text-indigo-600 mr-2 mt-0.5" />
              <div>
                <h4 className="font-semibold text-indigo-800">Time Limit</h4>
                <p className="text-indigo-700">
                  You have{' '}
                  <span className="font-semibold">
                    {examData.timeLimit} minutes
                  </span>{' '}
                  to complete this exam.
                </p>
              </div>
            </div>
            <div className="space-y-4 mb-8">
              <motion.div className="flex items-start" initial={{
              opacity: 0,
              x: -20
            }} animate={{
              opacity: 1,
              x: 0
            }} transition={{
              delay: 0.2
            }}>
                <CheckSquareIcon className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-gray-800">
                    Question Format
                  </h4>
                  <p className="text-gray-600">
                    This exam consists of {examData.questions.length}{' '}
                    multiple-choice questions.
                  </p>
                </div>
              </motion.div>
              <motion.div className="flex items-start" initial={{
              opacity: 0,
              x: -20
            }} animate={{
              opacity: 1,
              x: 0
            }} transition={{
              delay: 0.3
            }}>
                <CheckSquareIcon className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-gray-800">Navigation</h4>
                  <p className="text-gray-600">
                    You can navigate between questions using the previous and
                    next buttons.
                  </p>
                </div>
              </motion.div>
              <motion.div className="flex items-start" initial={{
              opacity: 0,
              x: -20
            }} animate={{
              opacity: 1,
              x: 0
            }} transition={{
              delay: 0.4
            }}>
                <CheckSquareIcon className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-gray-800">Scoring</h4>
                  <p className="text-gray-600">
                    Each question is worth 1 point. The passing score is{' '}
                    {examData.passingScore}%.
                  </p>
                </div>
              </motion.div>
              <motion.div className="flex items-start" initial={{
              opacity: 0,
              x: -20
            }} animate={{
              opacity: 1,
              x: 0
            }} transition={{
              delay: 0.5
            }}>
                <AlertTriangleIcon className="h-5 w-5 text-orange-600 mr-3 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-gray-800">
                    Important Note
                  </h4>
                  <p className="text-gray-600">
                    Once you submit the exam, you cannot return to review or
                    change your answers.
                  </p>
                </div>
              </motion.div>
            </div>
            <div className="flex justify-between">
              <motion.button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors" onClick={onBack} whileHover={{
              scale: 1.02
            }} whileTap={{
              scale: 0.98
            }}>
                <ArrowLeftIcon className="h-4 w-4 mr-2" />
                Back
              </motion.button>
              <motion.button className="flex items-center px-6 py-2 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-colors" onClick={onContinue} whileHover={{
              scale: 1.02
            }} whileTap={{
              scale: 0.98
            }}>
                Start Exam
                <ArrowRightIcon className="h-4 w-4 ml-2" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>;
};
export default Instructions;