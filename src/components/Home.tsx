
import { useEffect, useState } from 'react';
import useAuthRedirect from '../hooks/useAuthRedirect';

const Home = () => {
    useAuthRedirect();
    
    const [userName, setUserName] = useState<string | null>(null);

    useEffect(() => {
      const user = localStorage.getItem('user');
      if (user) {
        const userData = JSON.parse(user);
        setUserName(userData.username);
      }
    }, []);

  return (
    <div>
      <h1>Welcome, {userName}!</h1>
      {/* Other content of the home page */}
    </div>
  );
};

export default Home;
