import NbaAPI from "../nbaAPI";
import { useState } from "react";
import { useEffect } from "react";
import React from 'react'
import { Table } from 'react-bootstrap'
import {StandingsRow} from '../components/TableRows'
import { StandingsHeader } from '../components/Headers'

export function StandingsTable(props){
    
    return (
        <Table striped bordered hover size='sm' variant='dark'><tbody><StandingsHeader />{
            props.teams.map((team, i) => (
                <StandingsRow teamID={team["teamID"]} seed={i+1} name={team["teamName"]} record={team["record"]} home={team["home"]} away={team["away"]} last10={team["last10"]}key={i} />
            ))
        }</tbody></Table>
    )
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

    return <div className="position-relative" style={{display: "flex", padding: "40px", alignItems: "center", cbackgroundColor: '#8e9190'}}>
        <StandingsTable teams={east} style={{position: "relative", float: "right"}}/>
        <StandingsTable teams={west} className="position-absolute top-0 end-0"/>
    </div>

}