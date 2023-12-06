import { useState } from 'react'
import {auth} from './firebase'
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();

    const handleSignIn = async () => {
        try {
            await auth.signInWithEmailAndPassword(email, password);
            navigate('/home');
        } catch (error) {
            console.log(error);
        }
        
        };

    return (
        <div>
            <input name="email" autoComplete="email" type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
            <input name="password" autoComplete="password" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
            <button onClick={handleSignIn}>Sign In</button>
        </div>
    );
}

export default SignIn;