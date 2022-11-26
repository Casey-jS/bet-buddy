import React from 'react'
import ReactDOM from 'react-dom/client'
import Top10Table from './components/Top10Table';
import fetchTop10 from './nbaAPI';
import {useState, useEffect} from 'react'
import BasePage from './BasePage'
import { LeagueLeaders } from './LeagueLeaders';
import {Routes, Route } from 'react-router-dom'


import {
    Home,
    NavBar,
    NewBet,
    LeagueLeadersTab,
    NotFound
} from './tabs'

function App(){

    /* const [table, setTable] = useState([]);

    let getTop10Stat = () => {
        fetchTop10("rpg").then(
            data => {
                setTable(data)
            }
        )
    }

    useEffect(getTop10Stat, []); */
                
    return (
        <div>
          <Routes>
            <Route path="/" element={
                <>
                    <NavBar />
                    <BasePage />
                </>}
            />
            <Route path="/home" element={<Home />} />
            <Route path="/newBet" element={<NewBet />} />
            <Route path="/leagueLeaders" element={<LeagueLeadersTab />} />
            <Route path="*" element={<NotFound />} />
          </Routes>    
        </div>
    );
}


export default App;
