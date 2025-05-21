import React from 'react';
import { motion } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import LoginPage from './pages/LoginPage';
import AdminDashboard from './pages/AdminDashboard';
import StudentDashboard from './pages/StudentDashboard';
import Welcome from './pages/Welcome';
import Instructions from './pages/Instructions';
import ExamPage from './pages/ExamPage';
import Results from './pages/Results';
import { ExamProvider } from './context/ExamContext';
const PrivateRoute: React.FC<{
  element: React.ReactElement;
  allowedRole?: 'admin' | 'student';
}> = ({
  element,
  allowedRole
}) => {
  const {
    user,
    isAuthenticated
  } = useAuth();
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  if (allowedRole && user?.role !== allowedRole) {
    return <Navigate to={`/${user?.role}`} replace />;
  }
  return element;
};
export function App() {
  return <AuthProvider>
      <ExamProvider>
        <Router>
          <motion.div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100 w-full" initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          duration: 0.5
        }}>
            <Routes>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/admin" element={<PrivateRoute element={<AdminDashboard />} allowedRole="admin" />} />
              <Route path="/student" element={<PrivateRoute element={<StudentDashboard />} allowedRole="student" />} />
              <Route path="/exam/:examId" element={<PrivateRoute element={<ExamPage onComplete={() => {}} />} allowedRole="student" />} />
              <Route path="/" element={<Navigate to="/login" replace />} />
            </Routes>
          </motion.div>
        </Router>
      </ExamProvider>
    </AuthProvider>;
}