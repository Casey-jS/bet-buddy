import React, { useState, useEffect } from 'react'
import LeagueLeadersPage  from './pages/LeagueLeadersPage';
import TeamsPage from './pages/TeamsPage'
import HomePage from './pages/HomePage';
import {Routes, Route} from 'react-router-dom'
import NavMenu from './components/NavMenu';
import {TeamViewWrapper, PlayerViewWrapper, FavPlayersWrapper} from './components/Wrappers';
import SignInPage from './pages/SignInPage'
import SignUpPage from './pages/SignUpPage'
import NbaAPI from './nbaAPI';



function App(){

    const [user, setUser] = useState("")
    let api = new NbaAPI();
    let getUser = () => {
        api.get_active_user().then(
            res => {
                setUser(res['user'])
            }
        )
    }
    useEffect(getUser, []);

    return (
        <> 
                <NavMenu user={user}/>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/teams/" element={<TeamsPage />} />
                    <Route path="/signin/" element={<SignInPage />} />
                    <Route path="/signup/" element={<SignUpPage />} />
                    <Route path="/favplayers/:userName/" element={<FavPlayersWrapper />} />
                    <Route path="/teams/:teamID/" element={<TeamViewWrapper />} />
                    <Route path="/players/:playerID/" element={<PlayerViewWrapper />} />
                    <Route path="players/sort/ppg/" element={<LeagueLeadersPage stat="ppg" />} />
                    <Route path="players/sort/apg/" element={<LeagueLeadersPage stat="apg" />} />
                    <Route path="players/sort/rpg/" element={<LeagueLeadersPage stat="rpg" />} />
                    <Route path="players/sort/spg/" element={<LeagueLeadersPage stat="spg" />} />
                    <Route path="players/sort/bpg/" element={<LeagueLeadersPage stat="bpg" />} />
                </Routes>

        </>
    )   
}
export default App;

