import React from 'react'
import {useState, useEffect} from 'react'
import  LeagueLeaders  from './LeagueLeaders';
import Teams from './Teams'
import HomePage from './HomePage';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import NavMenu from './components/NavMenu';


function App(){

    return (
        <>
            <NavMenu />
            <Routes>
                <Route path="/" component={HomePage} />
            </Routes>
        </>
    )

    
    
}


export default App;







{/* <div>
            <button id="showTeams" onClick={() => setView("teams")}>Teams Dashboard</button>
            <button id="showLeagueLeaders" onClick={() => setView("leagueleaders")}>Show League Leaders</button>
          
            {TabToShow === "leagueleaders" ? <LeagueLeaders /> : ''}
            {TabToShow === "teams" ? <Teams /> : ''}
            {TabToShow === "home" ? <HomePage /> : ''}
        </div> */}
