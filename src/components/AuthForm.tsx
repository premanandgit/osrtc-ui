import React, { useState } from 'react';

interface Props {
  title: string;
  onSubmit: (username: string, password: string) => void;
}

const AuthForm: React.FC<Props> = ({ title, onSubmit }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await onSubmit(username, password);
    } catch (error) {
      console.error('Authentication failed:', error);
    }
  };

  return (
    <div className="max-w-sm mx-auto">
      <form onSubmit={handleSubmit} className="mt-8 bg-white rounded-lg overflow-hidden shadow-md p-8">
        <h2 className="text-2xl font-bold mb-8 text-center">{title}</h2>
        <div>
          <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} className="w-full border rounded-md p-2 mb-4" />
        </div>
        <div>
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full border rounded-md p-2 mb-4" />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">{title}</button>
      </form>
    </div>
  );
};

export default AuthForm;
