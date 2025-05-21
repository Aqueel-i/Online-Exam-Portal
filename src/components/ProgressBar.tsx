import React from 'react';
import { motion } from 'framer-motion';
interface ProgressBarProps {
  current: number;
  total: number;
}
const ProgressBar: React.FC<ProgressBarProps> = ({
  current,
  total
}) => {
  const percentage = current / total * 100;
  return <div className="relative w-full h-2 bg-gray-200 rounded-full overflow-hidden">
      <motion.div className="absolute top-0 left-0 h-full bg-indigo-600" initial={{
      width: 0
    }} animate={{
      width: `${percentage}%`
    }} transition={{
      duration: 0.3
    }} />
      <div className="text-xs text-gray-600 mt-1 text-center">
        Question {current} of {total}
      </div>
    </div>;
};
export default ProgressBar;