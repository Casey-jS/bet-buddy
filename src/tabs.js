/* import React from 'react'
import {Link, useLocation} from 'react-router-dom'
import  LeagueLeaders  from './LeagueLeaders'

export function Home() {
    return (
        <div>
            <h1>[HOME PAGE]</h1>
        </div>
    )
}


export function NewBet() {
    return (
        <div>
            <h1>[NEW BET PAGE]</h1>
        </div>
    )
}

export function LeagueLeadersTab() {
    return  <LeagueLeaders />;
}

export function NotFound(){
    let location = useLocation();
    return (
        <div>
            <h1>Path {location.pathname} is not valid!</h1>
        </div>
    )
}

export function NavBar(){
    return (
        <nav id="navBar">
            <Link to="home">Home</Link>
            <Link to="newBet">New Bet</Link>
            <Link to="leagueLeaders">League Leaders</Link>
        </nav>
    )
}
 */