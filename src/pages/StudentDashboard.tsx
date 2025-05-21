import React from 'react';
import { motion } from 'framer-motion';
import { LogOutIcon, BookOpenIcon } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useExamStore } from '../store/examStore';
const StudentDashboard: React.FC = () => {
  const {
    user,
    logout
  } = useAuth();
  const {
    getExamsForUser
  } = useExamStore();
  const assignedExams = user ? getExamsForUser(user.id) : [];
  return <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <BookOpenIcon className="h-8 w-8 text-indigo-600 mr-3" />
            <div>
              <h1 className="text-xl font-bold text-gray-800">
                Student Dashboard
              </h1>
              <p className="text-sm text-gray-600">Welcome, {user?.name}</p>
            </div>
          </div>
          <motion.button className="flex items-center px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg" onClick={logout} whileHover={{
          scale: 1.02
        }} whileTap={{
          scale: 0.98
        }}>
            <LogOutIcon className="h-5 w-5 mr-2" />
            Logout
          </motion.button>
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-4">Your Assigned Exams</h2>
          {assignedExams.length === 0 ? <p className="text-gray-600">No exams assigned yet.</p> : <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {assignedExams.map(exam => <motion.div key={exam.id} className="border rounded-lg p-4 hover:border-indigo-300 transition-colors" whileHover={{
            scale: 1.02
          }} whileTap={{
            scale: 0.98
          }}>
                  <h3 className="font-semibold">{exam.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {exam.description}
                  </p>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500">
                      Time: {exam.timeLimit} minutes
                    </span>
                    <motion.button className="bg-indigo-600 text-white px-4 py-1 rounded-lg" whileHover={{
                scale: 1.05
              }} whileTap={{
                scale: 0.95
              }}>
                      Start Exam
                    </motion.button>
                  </div>
                </motion.div>)}
            </div>}
        </div>
      </main>
    </div>;
};
export default StudentDashboard;