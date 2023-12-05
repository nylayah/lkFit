import React, {useState} from 'react'
import {auth} from './firebase'

const SignUp = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSignUp = async () => {
        try {
            await auth.createUserWithEmailAndPassword(email, password);
        } catch (error) {
            console.log(error);
        }
        };

    return (
        <div>
            <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
            <button onClick={handleSignUp}>Sign Up</button>
        </div>
    );
};

export default SignUp;