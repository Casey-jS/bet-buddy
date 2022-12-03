import React, { useState, useEffect, useCallback } from "react";
import NbaAPI from "./nbaAPI";


export default function PlayerView({playerID}){

    const [player, setPlayer] = useState([]);
    const [picture, setPicture] = useState("/");
    let api = new NbaAPI();

    let getPlayer = () => {
        api.fetchPlayer(playerID).then(
            playerData => {
                setPlayer(playerData);
            }
        )
    }
    useEffect(getPlayer, []);


    const getHeadshot = useCallback(() => {
        api.fetchHeadshot(playerID).then(
            imageBlob => {
                setPicture(URL.createObjectURL(imageBlob)); // occupy image with img fetched
            }
        )
      }, [playerID])
    
      useEffect(() => {
        getHeadshot();
      }, [getHeadshot]);

    return (
        <div>
            <img src={picture}></img>
            {player["fullName"]}
        </div>
    )
}