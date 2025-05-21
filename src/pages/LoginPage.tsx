import React from 'react';
import LoginForm from '../components/auth/LoginForm';
const LoginPage: React.FC = () => {
  return <div className="min-h-screen flex items-center justify-center p-6 bg-gradient-to-br from-indigo-50 to-blue-100">
      <LoginForm />
    </div>;
};
export default LoginPage;