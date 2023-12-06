import {useState} from 'react'
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth'
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const auth = getAuth();
    const navigate = useNavigate();

    const handleSignUp = async () => {
        if (email.trim() === '' || !email.includes('@')) {
            alert('Please enter a valid email');
            return;
        }

        if (password.trim().length < 6) {
            alert('Password should be at least 6 characters long');
            return;
        }
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            alert('User created successfully');
            navigate('/home');

        } catch (error) {
            console.log(error);
        }
        };

    return (
        <div>
            <input name="email" autoComplete="email" type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
            <input name="password" autoComplete="password" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
            <button onClick={handleSignUp}>Sign Up</button>
        </div>
    );
};

export default SignUp;