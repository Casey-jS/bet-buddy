import React, { useState, useEffect } from 'react'
import LeagueLeaders  from './LeagueLeaders';
import Teams from './components/TeamComponents/Teams'
import HomePage from './HomePage';
import {Routes, Route} from 'react-router-dom'
import NavMenu from './components/NavMenu';
import TeamViewWrapper from './components/TeamComponents/TeamViewWrapper';
import SignIn from './SignIn'
import SignUp from './SignUp'
import PlayerViewWrapper from './components/PlayerViewWrapper';
import FavPlayersWrapper from './components/FavPlayersWrapper';
import NbaAPI from './nbaAPI';
import FavPlayers from './FavPlayers';


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
                <NavMenu />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/teams/" element={<Teams />} />
                    <Route path="/signin/" element={<SignIn />} />
                    <Route path="/signup/" element={<SignUp />} />
                    <Route path="/favplayers/:userName/" element={<FavPlayersWrapper />} />
                    <Route path="/teams/:teamID/" element={<TeamViewWrapper />} />
                    <Route path="/players/:playerID/" element={<PlayerViewWrapper />} />
                    <Route path="players/sort/ppg/" element={<LeagueLeaders stat="ppg" />} />
                    <Route path="players/sort/apg/" element={<LeagueLeaders stat="apg" />} />
                    <Route path="players/sort/rpg/" element={<LeagueLeaders stat="rpg" />} />
                    <Route path="players/sort/spg/" element={<LeagueLeaders stat="spg" />} />
                    <Route path="players/sort/bpg/" element={<LeagueLeaders stat="bpg" />} />
                </Routes>

        </>
    )   
}
export default App;

