import React, { useState } from 'react'
import {auth} from './firebase'

const SignIn = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSignIn = async () => {
        try {
            await auth.signInWithEmailAndPassword(email, password);
        } catch (error) {
            console.log(error);
        }
        };

    return (
        <div>
            <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
            <button onClick={handleSignIn}>Sign In</button>
        </div>
    );
}

export default SignIn;