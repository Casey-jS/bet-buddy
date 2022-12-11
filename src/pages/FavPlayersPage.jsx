import React, { useState, useEffect } from 'react';
import NbaAPI from '../nbaAPI';
import {Top10Table} from './LeagueLeadersPage';
export default function FavPlayersPage({userName}){


    const [players, setPlayers] = useState([])

    let api = new NbaAPI();

    let getPlayers = () => {
        api.fetchFavoritePlayers(userName).then(

            playerData => {
                if (playerData['found'] === false){
                    setPlayers([]);
                    return
                }

                playerData.pop()
                setPlayers(playerData);
            }
        )
    }
    useEffect(getPlayers, []);

    return  <>{players === [] ? <div className="position-relative"><div className="position-absolute">No Players Found</div></div> : <Top10Table players={players} />}</>
}