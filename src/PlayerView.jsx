import React, { useState, useEffect } from "react";
import NbaAPI from "./nbaAPI";


export default function PlayerView({playerID}){

    const [player, setPlayer] = useState([]);
    let api = new NbaAPI();

    let getPlayer = () => {
        api.fetchPlayer(playerID).then(
            playerData => {
                setPlayer(playerData);
            }
        )
    }
    useEffect(getPlayer, []);

    return (
        <div>
            {player["fullName"]}
        </div>
    )
}