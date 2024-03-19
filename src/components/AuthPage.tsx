import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthForm from './AuthForm';
import { login } from '../service/authService';
import useRedirectIfLoggedIn from '../hooks/useRedirectIfLoggedIn';

interface Props {
  type: 'signin' | 'signup';
}

const AuthPage: React.FC<Props> = ({ type }) => {
  useRedirectIfLoggedIn();

  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');
    console.log('user', user)
    if (token && user) {
      setIsLoggedIn(true);
      setUserName(JSON.parse(user).username); // Parse user data from JSON string
    }
  }, []);

  const handleSubmit = async (username: string, password: string) => {
    try {
      const response = await login({ username, password });
      const { token, user } = response;
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user)); // Store user as JSON string
      setIsLoggedIn(true);
      setUserName(user.username);
      navigate('/'); // Redirect to home page after successful login
    } catch (error) {
      console.error('Login error:', error);
      // Handle login error (e.g., display error message to the user)
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <AuthForm title={type === 'signin' ? 'Sign In' : 'Sign Up'} onSubmit={handleSubmit} />
      {userName && <div>Welcome, {userName}!</div>}
    </div>
  );
};

export default AuthPage;
