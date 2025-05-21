import React from 'react';
import { motion } from 'framer-motion';
import OptionButton from './OptionButton';
interface QuestionCardProps {
  question: {
    id: number;
    text: string;
    options: string[];
  };
  selectedAnswer?: number;
  onSelectAnswer: (index: number) => void;
  questionNumber: number;
}
const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  selectedAnswer,
  onSelectAnswer,
  questionNumber
}) => {
  return <motion.div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-3xl mx-auto" initial={{
    opacity: 0,
    y: 20
  }} animate={{
    opacity: 1,
    y: 0
  }} transition={{
    duration: 0.4
  }}>
      <div className="mb-6">
        <span className="inline-block bg-indigo-100 text-indigo-800 text-sm font-semibold px-3 py-1 rounded-full mb-2">
          Question {questionNumber}
        </span>
        <h2 className="text-xl font-semibold text-gray-800">{question.text}</h2>
      </div>
      <div className="space-y-3">
        {question.options.map((option, index) => <OptionButton key={index} option={option} index={index} isSelected={selectedAnswer === index} onSelect={() => onSelectAnswer(index)} />)}
      </div>
    </motion.div>;
};
export default QuestionCard;