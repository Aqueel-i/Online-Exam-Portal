import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircleIcon } from 'lucide-react';
interface OptionButtonProps {
  option: string;
  index: number;
  isSelected: boolean;
  onSelect: () => void;
}
const OptionButton: React.FC<OptionButtonProps> = ({
  option,
  index,
  isSelected,
  onSelect
}) => {
  const letters = ['A', 'B', 'C', 'D', 'E', 'F'];
  return <motion.button className={`w-full text-left p-4 rounded-lg border-2 flex items-center ${isSelected ? 'border-indigo-600 bg-indigo-50' : 'border-gray-200 hover:border-indigo-300 hover:bg-indigo-50/50'}`} onClick={onSelect} whileHover={{
    scale: 1.01
  }} whileTap={{
    scale: 0.99
  }} transition={{
    duration: 0.1
  }}>
      <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mr-3 ${isSelected ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-700'}`}>
        {letters[index]}
      </span>
      <span className="flex-grow text-gray-700">{option}</span>
      {isSelected && <CheckCircleIcon className="h-5 w-5 text-indigo-600 ml-2" />}
    </motion.button>;
};
export default OptionButton;