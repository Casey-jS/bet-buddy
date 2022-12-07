import React from 'react'
import TeamTable from './TeamTable'
import NbaAPI from '../nbaAPI'
import {useEffect, useState} from 'react'
import { RingLoader } from "react-spinners";
import {Table} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';

import {TeamRow} from "../components/TableRows"
import {TeamHeader} from '../components/Headers'
function TeamTable(props){

    return (
    <Table striped bordered hover variant="dark"> <tbody><TeamHeader /> {
        props.teams.map((team, i) => (
            <TeamRow teamID={team["id"]}teamName={team["teamName"]} rank={i+1} wins={team["wins"]} losses={team["losses"]} wpct={Math.round(team["wpct"] * 10) / 10} plusminus={team["plusminus"]} ppg={Math.round(team["ppg"] * 10) / 10} fg3pct={Math.round(team["fg3pct"] * 10) / 10} key={i} />
        ))
    } </tbody></Table>);

}



export default function TeamsPage(){

    const [table, setTable] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (loading) {
          setTimeout(() => {
          setLoading(false);
        }, 100000);
        }
      }, [loading]);

    let api = new NbaAPI();
    let getTeams = () => {
        setLoading(true);
        api.fetchTeamStats().then(
            teamData => {
                setTable(teamData);
                setLoading(false);
            },
        )
    }

    useEffect(getTeams, [])

    

    return <React.Fragment>
        {loading ? 
            <RingLoader size={300} color={"#61DBFB"}
            style={{position: "absolute", 
                    top: "30%",
                    right: "60%"
                     }}/> 
        : 
            <TeamTable teams={table} />}
        </React.Fragment>
}