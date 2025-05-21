import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PlusIcon, LogOutIcon, UsersIcon, BookOpenIcon } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useExamStore } from '../store/examStore';
const AdminDashboard: React.FC = () => {
  const {
    user,
    logout
  } = useAuth();
  const {
    exams
  } = useExamStore();
  const [activeTab, setActiveTab] = useState<'exams' | 'users'>('exams');
  return <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <BookOpenIcon className="h-8 w-8 text-indigo-600 mr-3" />
            <div>
              <h1 className="text-xl font-bold text-gray-800">
                Admin Dashboard
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
        <div className="flex justify-between items-center mb-8">
          <div className="flex space-x-4">
            <motion.button className={`px-4 py-2 rounded-lg flex items-center ${activeTab === 'exams' ? 'bg-indigo-600 text-white' : 'bg-white text-gray-600'}`} onClick={() => setActiveTab('exams')} whileHover={{
            scale: 1.02
          }} whileTap={{
            scale: 0.98
          }}>
              <BookOpenIcon className="h-5 w-5 mr-2" />
              Exams
            </motion.button>
            <motion.button className={`px-4 py-2 rounded-lg flex items-center ${activeTab === 'users' ? 'bg-indigo-600 text-white' : 'bg-white text-gray-600'}`} onClick={() => setActiveTab('users')} whileHover={{
            scale: 1.02
          }} whileTap={{
            scale: 0.98
          }}>
              <UsersIcon className="h-5 w-5 mr-2" />
              Users
            </motion.button>
          </div>
          <motion.button className="bg-indigo-600 text-white px-4 py-2 rounded-lg flex items-center" whileHover={{
          scale: 1.02
        }} whileTap={{
          scale: 0.98
        }}>
            <PlusIcon className="h-5 w-5 mr-2" />
            Create New Exam
          </motion.button>
        </div>
        {activeTab === 'exams' ? <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold mb-4">All Exams</h2>
            <div className="space-y-4">
              {exams.map(exam => <div key={exam.id} className="border rounded-lg p-4 hover:border-indigo-300 transition-colors">
                  <h3 className="font-semibold">{exam.title}</h3>
                  <p className="text-sm text-gray-600">{exam.description}</p>
                  <div className="mt-2 text-sm text-gray-500">
                    Assigned to: {exam.assignedTo.length} students
                  </div>
                </div>)}
            </div>
          </div> : <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold mb-4">All Users</h2>
            {/* User list will be implemented in the next phase */}
            <p className="text-gray-600">User management coming soon...</p>
          </div>}
      </main>
    </div>;
};
export default AdminDashboard;