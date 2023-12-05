import React, {useContext} from 'react';
import NavBar from '../components/NavBar/NavBar';
import {AuthContext} from '../AuthContext/AuthContext';



const HomePage = () => {
    const {currentUser} = useContext(AuthContext);
    const workouts = ['squats', 'pushups', 'situps', 'pullups']
   
    return (
        <div>
            <NavBar/>
            <h1>Welcome, {currentUser ? currentUser.email : 'Guest'}!</h1>
            <h2>Workouts</h2>
            {workouts.map((workout, index) => (
                <div key={index}>
                    <h3>{workout}</h3>
                </div>
            ))}
        
        </div>

    )
}

export default HomePage;