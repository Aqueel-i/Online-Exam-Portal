import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { ClockIcon } from 'lucide-react';
interface ExamTimerProps {
  timeRemaining: number;
}
const ExamTimer: React.FC<ExamTimerProps> = ({
  timeRemaining
}) => {
  const formatTime = useMemo(() => {
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }, [timeRemaining]);
  const isLowTime = timeRemaining < 60; // Less than 1 minute
  return <motion.div className={`flex items-center px-4 py-2 rounded-full ${isLowTime ? 'bg-red-100 text-red-700' : 'bg-indigo-100 text-indigo-700'}`} animate={isLowTime ? {
    scale: [1, 1.05, 1]
  } : {}} transition={{
    repeat: isLowTime ? Infinity : 0,
    duration: 1
  }}>
      <ClockIcon className="h-5 w-5 mr-2" />
      <span className="font-semibold">{formatTime}</span>
    </motion.div>;
};
export default ExamTimer;