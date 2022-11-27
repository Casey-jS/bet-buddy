import React from 'react'
import ReactDOM from 'react-dom/client'
import {useState, useEffect} from 'react'
import BasePage from './BasePage'
import  LeagueLeaders  from './LeagueLeaders';
import Teams from './Teams'
import HomePage from './HomePage';


function App(){

    const [TabToShow, showTab] = useState("home");

    let setView = (viewToShow) => {
        showTab(viewToShow);
    }


    useEffect(setView, []);
    
    return (
        <div>
            <button id="showTeams" onClick={() => setView("teams")}>Teams Dashboard</button>
            <button id="showLeagueLeaders" onClick={() => setView("leagueleaders")}>Show League Leaders</button>
          
            {TabToShow === "leagueleaders" ? <LeagueLeaders /> : ''}
            {TabToShow === "teams" ? <Teams /> : ''}
            {TabToShow === "home" ? <HomePage /> : ''}
        </div>
    );
}


export default App;




{/* <Routes>
            <Route path="/" element={
                <>
                    <NavBar /> 
                </>}
            />
            <Route path="/home" element={<Home />} />
            <Route path="/newBet" element={<NewBet />} />
            <Route path="/leagueLeaders" element={<LeagueLeadersTab />} />
            <Route path="*" element={<NotFound />} />
          </Routes>  */}
