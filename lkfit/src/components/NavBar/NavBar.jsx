import './NavBar.css';



const NavBar = () => {
    return (
        <nav className='navbar'>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/workouts">Workouts</a></li>
                <li><a href="/quests">Quests</a></li>
                <li><a href="/leaderboard">Leaderboard</a></li>
            </ul>
        </nav>
    )
}

export default NavBar;