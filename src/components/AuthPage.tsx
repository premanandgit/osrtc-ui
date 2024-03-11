import React from 'react';
import AuthForm from './AuthForm';
// import axios from 'axios';

interface Props {
  type: 'signin' | 'signup';
}

const AuthPage: React.FC<Props> = ({ type }) => {
  const handleSubmit = async (username: string, password: string) => {
    const url = type === 'signin' ? '/login' : '/signup';
    // const response = await axios.post(url, { username, password });
    // const { token } = response.data;
    // localStorage.setItem('token', token);
    // Redirect or any other action upon successful authentication
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <AuthForm title={type === 'signin' ? 'Sign In' : 'Sign Up'} onSubmit={handleSubmit} />
    </div>
  );
};

export default AuthPage;
