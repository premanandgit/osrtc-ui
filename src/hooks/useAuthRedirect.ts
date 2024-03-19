import { useEffect } from "react";
import { useNavigate } from "react-router-dom"

const useAuthRedirect = () => {
    const navigate = useNavigate();

    useEffect(()=>{
        const token = localStorage.getItem('token');
        const user = localStorage.getItem('user');
        if(!token || !user) {
            navigate('/signin');
        }
    }, []);
    return null;
}

export default useAuthRedirect;