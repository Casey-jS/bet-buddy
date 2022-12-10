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

function StatCard({stat}){

    const [players, setPlayers] = useState([]);
    const [picture, setPicture] = useState("");
    const [loading, setLoading] = useState(true);
    const [playerID, setPlayerID] = useState(0);

    let stat_map = {
        "ppg" : "Points",
        "apg" : "Assists",
        "rpg" : "Rebounds",
        "bpg" : "Blocks",
        "fg3pct" : "Three %"
    } 
    let api = new NbaAPI();
    const getPlayers = useCallback(() => {

        api.fetch_top4(stat).then(
            top4 => {
                setPlayers(top4);
                setPlayerID(top4[0]['id'])
            }
        )
    }, [stat])
    useEffect(() => {
        getPlayers();
    }, [getPlayers]);

    

    const getHeadshot = useCallback(() => {
        api.fetchHeadshot(playerID).then(
            imageBlob => {
                setPicture(URL.createObjectURL(imageBlob)); // occupy image with img fetched
                setLoading(false);
            }
        )
      }, [playerID])
    
      useEffect(() => {
        getHeadshot();
      }, [getHeadshot]);

    
    return <>
        {loading ? <RingLoader /> :
        <Card bg='dark' text='white' border="info" style={{width: "14rem"}}>
            <Card.Img variant="top" src={picture} />
            <Card.Body>
                <Card.Title className="text-decoration-underline">{stat_map[stat]}</Card.Title>
                <Card.Text>{players[0]['fullName'] + "  |  " + players[0][stat]}</Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item variant='dark'>{players[1]['fullName'] + "   " + players[1][stat]}</ListGroup.Item>
                <ListGroup.Item variant='dark'>{players[2]['fullName'] + "   " + players[2][stat]}</ListGroup.Item>
                <ListGroup.Item variant='dark'>{players[3]['fullName'] + "   " + players[3][stat]}</ListGroup.Item>
            </ListGroup>
        </Card>
    }
    </>
    
    
}

export default function HomePage(){

    let api = new NbaAPI();
    const [west, setWest] = useState([]);
    const [east, setEast] = useState([]);

    let getWest = () => {
        api.get_west_standings().then(
            standings => {
                setWest(standings);
            }
        )
    }
    useEffect(getWest, []);


    let getEast = () => {
        api.get_east_standings().then(
            standings => {
                setEast(standings);
            }
        )
    }
    useEffect(getEast, []);


    let stats = ["ppg", "apg", "rpg", "bpg"];

    return (

        <div style={{backgroundColor: "#8e9190"}}>
        <p className="text-center fs-1">League Leaders</p>
        <Container style={{marginBottom: "10"}}>
            <Row>
                <Col>
                    <CardGroup>
                        {stats.map((stat, i) => (
                            <StatCard className="p-2" stat={stat} key={i}/>
                        ))}
                    </CardGroup>
                </Col>
            </Row>
            <p className="text-center fs-2">Standings</p>
            <Row>
                <Col><StandingsTable conf={"East"} teams={east} /></Col>
                <Col><StandingsTable conf={"West"} teams={west} /></Col>
            </Row>

        </Container></div>)

}