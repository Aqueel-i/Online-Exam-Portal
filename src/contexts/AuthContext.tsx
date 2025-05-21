import React, { useState, createContext, useContext } from 'react';
import { User } from '../utils/types';
import { MOCK_USERS, DEFAULT_ADMIN_CREDENTIALS, DEFAULT_STUDENT_CREDENTIALS } from '../utils/constants';

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<User>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = async (email: string, password: string): Promise<User> => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    if (email === DEFAULT_ADMIN_CREDENTIALS.email && password === DEFAULT_ADMIN_CREDENTIALS.password) {
      setUser(MOCK_USERS[0]); // Admin user
      return MOCK_USERS[0];
    } else if (email === DEFAULT_STUDENT_CREDENTIALS.email && password === DEFAULT_STUDENT_CREDENTIALS.password) {
      setUser(MOCK_USERS[1]); // Student user
      return MOCK_USERS[1];
    } else {
      throw new Error('Invalid credentials');
    }
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
