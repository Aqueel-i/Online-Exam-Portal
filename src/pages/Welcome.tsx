import React from 'react';
import { motion } from 'framer-motion';
import { BookOpenIcon, AwardIcon, ClockIcon, BrainIcon } from 'lucide-react';
interface WelcomeProps {
  onStart: () => void;
}
const Welcome: React.FC<WelcomeProps> = ({
  onStart
}) => {
  return <div className="min-h-screen flex flex-col items-center justify-center p-6">
      <motion.div className="max-w-2xl w-full bg-white rounded-xl shadow-xl overflow-hidden" initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      duration: 0.5
    }}>
        <div className="p-8">
          <div className="flex justify-center mb-6">
            <motion.div className="bg-indigo-100 p-4 rounded-full" initial={{
            scale: 0
          }} animate={{
            scale: 1
          }} transition={{
            delay: 0.2,
            type: 'spring',
            stiffness: 200
          }}>
              <BookOpenIcon className="h-12 w-12 text-indigo-600" />
            </motion.div>
          </div>
          <motion.h1 className="text-3xl font-bold text-center text-gray-800 mb-2" initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          delay: 0.3
        }}>
            Online Exam Portal
          </motion.h1>
          <motion.p className="text-center text-gray-600 mb-8" initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          delay: 0.4
        }}>
            Test your knowledge with our interactive exams
          </motion.p>
          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8" initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          delay: 0.5
        }}>
            <div className="bg-blue-50 p-4 rounded-lg flex flex-col items-center text-center">
              <BrainIcon className="h-8 w-8 text-blue-600 mb-2" />
              <h3 className="font-semibold text-gray-800">Adaptive Learning</h3>
              <p className="text-sm text-gray-600">
                Questions tailored to your skill level
              </p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg flex flex-col items-center text-center">
              <AwardIcon className="h-8 w-8 text-green-600 mb-2" />
              <h3 className="font-semibold text-gray-800">Instant Results</h3>
              <p className="text-sm text-gray-600">
                Get feedback immediately after completion
              </p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg flex flex-col items-center text-center">
              <ClockIcon className="h-8 w-8 text-purple-600 mb-2" />
              <h3 className="font-semibold text-gray-800">Timed Exams</h3>
              <p className="text-sm text-gray-600">
                Practice under exam conditions
              </p>
            </div>
          </motion.div>
          <motion.div className="text-center" initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          delay: 0.7
        }}>
            <motion.button className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:bg-indigo-700 transition-colors" onClick={onStart} whileHover={{
            scale: 1.03
          }} whileTap={{
            scale: 0.98
          }}>
              Start Now
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </div>;
};
export default Welcome;