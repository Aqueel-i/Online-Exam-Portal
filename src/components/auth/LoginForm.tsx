import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { UserIcon, LockIcon, LogInIcon } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const loggedInUser = await login(email, password);

      // Redirect based on role returned from login
      if (loggedInUser.role === 'admin') {
        navigate('/admin', { replace: true });
      } else if (loggedInUser.role === 'student') {
        navigate('/student', { replace: true });
      }
    } catch (err) {
      setError('Invalid email or password');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div
      className="w-full max-w-md bg-white rounded-xl shadow-xl overflow-hidden p-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-800">Welcome Back</h2>
        <p className="text-gray-600">Please sign in to continue</p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <div className="flex items-center border-2 rounded-lg px-3 py-2">
            <UserIcon className="h-5 w-5 text-gray-400" />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="flex-1 ml-2 outline-none"
              required
            />
          </div>
        </div>
        <div>
          <div className="flex items-center border-2 rounded-lg px-3 py-2">
            <LockIcon className="h-5 w-5 text-gray-400" />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="flex-1 ml-2 outline-none"
              required
            />
          </div>
        </div>
        {error && (
          <motion.div
            className="text-red-500 text-sm text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {error}
          </motion.div>
        )}
        <motion.button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold flex items-center justify-center"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          disabled={isLoading}
        >
          {isLoading ? (
            <motion.div
              className="h-5 w-5 border-2 border-white border-t-transparent rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
            />
          ) : (
            <>
              <LogInIcon className="h-5 w-5 mr-2" />
              Sign In
            </>
          )}
        </motion.button>
        <div className="text-center text-sm text-gray-600">
          <p>Demo Credentials:</p>
          <p>Admin: admin@example.com / admin123</p>
          <p>Student: student@example.com / student123</p>
        </div>
      </form>
    </motion.div>
  );
};

export default LoginForm;
