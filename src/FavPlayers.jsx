import React, { useState, useEffect, useCallback, useContext } from 'react';
import NbaAPI from './nbaAPI';
import Top10Table from './components/Top10Table';
import UserContext from './UserContext';
export default function FavPlayers({userName}){

    const {user} = useContext(UserContext)
    const [players, setPlayers] = useState([]);

    let api = new NbaAPI();

    let getPlayers = () => {
        api.fetchFavoritePlayers(user).then(
            playerData => {
                setPlayers(playerData);
            }
        )
    }
    useEffect(getPlayers, []);

    return <Top10Table players={players} />
}