import React, { useState, useEffect, useCallback } from "react";
import { Card, ListGroup, Button, OverlayTrigger, Tooltip, Container, Row, Table } from "react-bootstrap";

import NbaAPI from "../nbaAPI";
import {GameLogHeader} from "../components/Headers";



function PlayerViewStats(props){
    return (<Table striped bordered hover variant='dark' style={{marginTop: 40}}><tbody>
        <tr><th>Team</th><th>Age</th><th>Games</th><th>Points</th><th>Assists</th><th>Rebounds</th><th>Steals</th><th>Blocks</th><th>FG%</th><th>3P%</th><th>FT%</th></tr>
    <tr>
        <td>{props.team}</td>
        <td>{props.age}</td>
        <td>{props.games}</td>
        <td>{props.ppg}</td>
        <td>{props.apg}</td>
        <td>{props.rpg}</td>
        <td>{props.spg}</td>
        <td>{props.bpg}</td>
        <td>{props.fgpct}</td>
        <td>{props.fg3pct}</td>
        <td>{props.ftpct}</td>
        </tr>
        </tbody></Table>
        
    );
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

    // total player stats row
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

      let addToFavorites = () => {
        api.addFavoritePlayer(user, player['id']).then(
            response => {
                console.log("Added player to favorites")
            }
        )
      }


    return (
        <div style={{backgroundColor: "#8e9190", padding: "50px"}}>
            <Container>
                <Row className="justify-content-md-center">
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
            </Row>
            <Row>
                <PlayerViewStats team={player['team']} age={player['age']} games={player['games']} ppg={player['ppg']} apg={player['apg']} rpg={player['rpg']} spg={player['spg']} bpg={player['bpg']} fgpct={player['fgpct']} fg3pct={player['fg3pct']} ftpct={player['ftpct']} />
            </Row>
            </Container>

            
        </div>
    )
}