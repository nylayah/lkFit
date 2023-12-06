import {useContext} from 'react';
import {AuthContext} from '../AuthContext/AuthContext';
import NavBar from '../components/NavBar/NavBar';
import './HomePage.css';




const HomePage = () => {
    const {currentUser} = useContext(AuthContext);
    const workouts = ['squats', 'pushups', 'situps', 'pullups']
   
    return (
        <div className='HomePage'>
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