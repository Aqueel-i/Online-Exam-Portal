import React from 'react';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
interface AnalyticsChartProps {
  data: Array<{
    name: string;
    score: number;
  }>;
  currentScore: number;
}
const AnalyticsChart: React.FC<AnalyticsChartProps> = ({
  data,
  currentScore
}) => {
  // Update the current exam score
  const updatedData = data.map(item => item.name === 'Current' ? {
    ...item,
    score: currentScore
  } : item);
  return <motion.div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-2xl mx-auto" initial={{
    opacity: 0,
    y: 20
  }} animate={{
    opacity: 1,
    y: 0
  }} transition={{
    duration: 0.5,
    delay: 0.3
  }}>
      <h3 className="text-lg font-semibold text-gray-800 mb-4">
        Performance History
      </h3>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={updatedData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis domain={[0, 100]} />
            <Tooltip />
            <Bar dataKey="score" fill="#6366f1" radius={[4, 4, 0, 0]} animationDuration={1500} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>;
};
export default AnalyticsChart;