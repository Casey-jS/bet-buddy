import React, { useState, useEffect, useCallback } from "react";
import { Card, ListGroup, Button, OverlayTrigger, Tooltip } from "react-bootstrap";

import NbaAPI from "../nbaAPI";
import {GameLogHeader} from "./Headers";
import {GameLogRow} from "./TableRows";
import { Table } from "react-bootstrap";


function GameLogTable(props){

    return <Table striped bordered hover variant='dark' style={{width: "50%"}}><tbody><GameLogHeader />{
        props.games.map((game, i) => (
            <GameLogRow opp={game['opp']} result={game['result']} pts={game['pts']} fg={game['fg']} fg3={game['fg3']} ast={game['ast']} reb={game['reb']} stl={game['stl']} blk={game['blk']} key={i} />
        ))
    }</tbody></Table>
}

export default function PlayerView({playerID}){

    let api = new NbaAPI();
    const [user, setUser] = useState("");

    // get the active user
    let getUser = () => {
        api.get_active_user().then(
            response => {
                setUser(response['user'])
            }
        )
    }
    useEffect(getUser, [])

    const [player, setPlayer] = useState([]);
    const [picture, setPicture] = useState("/");
    const [gameLog, setGameLog] = useState([]);
    

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

      let addToFavorites = () => {
        api.addFavoritePlayer(user, player['id']).then(
            response => {
                console.log("Added player to favorites")
            }
        )
      }


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
                {user === "" ? 
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Sign in to add to favorites!</Tooltip>}>
                    <Button variant='secondary'>Add to favorites</Button>
                </OverlayTrigger>
                     : 
                <OverlayTrigger overlay={<Tooltip id="tooltip-enabled">Double click to add to favorites!</Tooltip>}>
                    <Button onDoubleClick={() => addToFavorites()}variant='info'>Add to favorites</Button>
                </OverlayTrigger>
                }
                
            </Card>
            <h1>Last 5 Games</h1>
            <GameLogTable className="position-absolute top-0 end-0" games={gameLog} style={{marginLeft: "20px"}} />
            
        </div>
    )
}