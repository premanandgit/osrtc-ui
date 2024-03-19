import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const useRedirectIfLoggedIn = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        const user = localStorage.getItem('user');
        if (token && user) {
            // Redirect to home page if logged in
            navigate('/');
        }
    }, [navigate]);

    return null;
};

export default useRedirectIfLoggedIn;
