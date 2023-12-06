import {useContext, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import {AuthContext} from './AuthContext/AuthContext';

const AppEntry = () => {
    const {currentUser} = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (currentUser) {
            navigate('/home');
        } 
    }, [currentUser, navigate]);

    return (
        <div>
            <button onClick={() => navigate('/signin')}>Sign In</button>
            <button onClick={() => navigate('/signup')}>Sign Up</button>
            <button onClick={() => navigate('/home')}>Continue as Guest</button>
        </div>
    );
};

export default AppEntry;