
import './App.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import HomePage from './HomePage/HomePage'
import WorkoutsPage from './WorkoutsPage/WorkoutsPage'
import QuestsPage from './QuestsPage/QuestsPage'
import LeaderboardPage from './LeaderboardPage/LeaderboardPage'
import { AuthProvider } from './AuthContext/AuthContext'
import SignIn from './AuthContext/SignIn'
import SignUp from './AuthContext/SignUp'
import AppEntry from './AppEntry'



const App = () => (
  <AuthProvider>
  <Router>
    <Routes>
      <Route exact path="/" element = {<AppEntry/>}/>
      <Route path="/home" element = {<HomePage/>}/>
      <Route path="/signin" element = {<SignIn/>}/>
      <Route path="/signup" element = {<SignUp/>}/>
      <Route path="/workouts" element = {<WorkoutsPage/>}/>
      <Route path="/quests" element = {<QuestsPage/>}/>
      <Route path="/leaderboard" element = {<LeaderboardPage/>}/>
    </Routes>
  </Router>
  </AuthProvider>
);

export default App
