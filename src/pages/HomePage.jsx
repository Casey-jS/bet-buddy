import NbaAPI from "../nbaAPI";
import { useState } from "react";
import { useEffect, useCallback } from "react";
import React from 'react'
import { Card, CardGroup, ListGroup, Table } from 'react-bootstrap'
import {StandingsRow} from '../components/TableRows'
import { StandingsHeader } from '../components/Headers'
import { RingLoader } from "react-spinners";
import {Container, Row, Col} from 'react-bootstrap'

function StandingsTable(props){
    
    return (
        <Table striped bordered hover size='sm' variant='dark'><caption className="fs-3 text-dark" style={{captionSide: "top"}}>{props.conf}</caption><tbody><StandingsHeader />{
            props.teams.map((team, i) => (
                <StandingsRow teamID={team["teamID"]} seed={i+1} name={team["teamName"]} record={team["record"]} home={team["home"]} away={team["away"]} last10={team["last10"]}key={i} />
            ))
        }</tbody></Table>
    )
}

function StatCard(props){
    console.log("Players passed into statcard: " + props.players)



    let stat_map = {
        "ppg" : "Points",
        "apg" : "Assists",
        "rpg" : "Rebounds",
        "bpg" : "Blocks"
    } 
    return <>
        
        <Card bg='dark' text='white' border="info" style={{width: "14rem"}}>
            <Card.Img variant="top" src={props.headshot} />
            <Card.Body>
                <Card.Title className="text-decoration-underline">{stat_map[props.stat]}</Card.Title>
                <Card.Text>{props.players[0]['fullName'] + "  |  " + props.players[0][props.stat]}</Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item variant='dark'>{props.players[1]['fullName'] + "   " + props.players[1][props.stat]}</ListGroup.Item>
                <ListGroup.Item variant='dark'>{props.players[2]['fullName'] + "   " + props.players[2][props.stat]}</ListGroup.Item>
                <ListGroup.Item variant='dark'>{props.players[3]['fullName'] + "   " + props.players[3][props.stat]}</ListGroup.Item>
            </ListGroup>
        </Card>
    
    </>
    
    
}

export default function HomePage(){

    let api = new NbaAPI();
    const [west, setWest] = useState([]);
    const [east, setEast] = useState([]);
    const [players, setPlayers] = useState([]);
    const [headShotIDs, setHeadShotIDs] = useState([]);
    const [headShots, setHeadShots] = useState([]);
    const [loading, setLoading] = useState(true);
    const [count, setCount] = useState(0);

    let getWest = () => {
        api.get_west_standings().then(
            standings => {
                setWest(standings);
                console.log("Set the west standings")
            }
        )
    }
    useEffect(getWest, []);

    let getEast = () => {
        api.get_east_standings().then(
            standings => {
                setEast(standings);
                console.log("Set the east standings")
            }
        )
    }
    useEffect(getEast, []);

    useEffect(() => {
        if (count ===  4){
            return
        }
        for (let i = 0; i < 4; i++){
            console.log("Iteration #: " + i)
            api.fetch_top4(stats[i]).then(
                playerData => {
                    setPlayers(current => [...current, playerData])
                    setHeadShotIDs(current => [...current, playerData[0]['id']])
                    setCount(count + 1);
                    console.log("Count: " + count)    
                }
            )
        }
    }, [count]);



    useEffect(() => {

        if (count === 4){
        
            for (let i = 0; i < 4; i++){
                console.log("Fetching player headshot for " + headShotIDs[i])
                api.fetchHeadshot(headShotIDs[i]).then(
                    imageBlob => {
                        let image = URL.createObjectURL(imageBlob);
                        setHeadShots(current => [...current, image]);
                        
                    }
                )  
                if (i == 3){
                    setLoading(false);
                } 
            } 
        }
        
    }, [count]);

    let stats = ["ppg", "apg", "rpg", "bpg"];

    return !loading && players[3] ? 
                <div style={{backgroundColor: "#8e9190"}}>
                <p className="text-center fs-1">League Leaders</p>
                <Container style={{marginBottom: "10"}}>
                    <Row>
                        <Col>
                            <CardGroup>
                                {stats.map((stat, i) => (
                                    <StatCard className="p-2" stat={stat} headshot={headShots[i]} players={players[i]} key={i}/>
                                ))}
                            </CardGroup>
                        </Col>
                    </Row>
                    <p className="text-center fs-2">Standings</p>
                    <Row>
                        <Col><StandingsTable conf={"East"} teams={east} /></Col>
                        <Col><StandingsTable conf={"West"} teams={west} /></Col>
                    </Row>

                </Container></div> : <RingLoader />
}