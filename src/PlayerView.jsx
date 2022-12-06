import React, { useState, useEffect, useCallback, useContext } from "react";
import { Card, ListGroup, Button } from "react-bootstrap";
import GameLog from "./GameLog";
import NbaAPI from "./nbaAPI";
import UserContext from "./UserContext";


export default function PlayerView({playerID}){

    const { user, setUser } = useContext(UserContext);

    const [player, setPlayer] = useState([]);
    const [picture, setPicture] = useState("/");
    const [gameLog, setGameLog] = useState([]);
    let api = new NbaAPI();

    // total player stats row
    let getPlayer = () => {
        api.fetchPlayer(playerID).then(
            playerData => {
                setPlayer(playerData);
            }
        )
    }
    useEffect(getPlayer, []);

    let getLog = () => {
        api.getLastFiveGames(playerID).then(
            logData => {
                setGameLog(logData)
            }
        )
    }
    useEffect(getLog, []);


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
        <div className="position-relative" style={{display: "flex"}}>
            <Card className="shadow" border="info" style={{width: "25%", backgroundColor: '#8e9190', margin: "0"}}>
                <Card.Img variant="top" src={picture} />
                <Card.Body>  
                    <Card.Title>{player['fullName']}</Card.Title>
                    <Card.Subtitle>{player['team']} | PG</Card.Subtitle>
                    
                </Card.Body>
                <ListGroup className="list-group-flush" style={{backgroundColor : "#8e9190"}}>
                    <ListGroup.Item variant='dark'>PPG: {player['ppg']}</ListGroup.Item>
                    <ListGroup.Item variant='dark'>APG: {player['apg']}</ListGroup.Item>
                    <ListGroup.Item variant='dark'>RPG: {player['rpg']}</ListGroup.Item>
                </ListGroup>
                {user === "" ? <Button variant='secondary'>Sign in to access</Button> : <Button variant='info'>+ Add to favorites</Button>}
                
            </Card>
            <h1>Last 5 Games</h1>
            <GameLog className="position-absolute top-0 end-0" games={gameLog} style={{marginLeft: "20px"}} />
            
        </div>
    )
}