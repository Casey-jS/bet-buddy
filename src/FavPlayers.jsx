import React, { useState, useEffect } from 'react';
import NbaAPI from './nbaAPI';
import Top10Table from './components/Top10Table';
export default function FavPlayers({userName}){


    const [players, setPlayers] = useState([])

    let api = new NbaAPI();

    let getPlayers = () => {
        api.fetchFavoritePlayers(userName).then(

            playerData => {
                console.log("Fetching favorite players for " + userName);
                setPlayers(playerData);
            }
        )
    }
    useEffect(getPlayers, []);

    return <Top10Table players={players} />
}