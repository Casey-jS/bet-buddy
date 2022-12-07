import React, { useEffect, useState } from "react";
import NbaAPI from "../nbaAPI";
import { RingLoader } from "react-spinners";
import {TeamLogRow} from '../components/TableRows'
import {Table} from 'react-bootstrap'
import {TeamLogHeader} from '../components/Headers'
import {LeagueLeaderHeader} from '../components/Headers'
import {PlayerRow} from '../components/TableRows'


function Roster(props){

    return <Table striped bordered hover variant='dark'><tbody><LeagueLeaderHeader />{
        props.players.map((player, i) => (
            <PlayerRow id ={player["id"]} fullName={player["fullName"]} team ={player["team"]} age={player["age"]} gp ={player["games"]} ppg={player["ppg"]} apg={player["apg"]} rpg={player["rpg"]} spg={player["spg"]} bpg={player["bpg"]} fgpct={Math.round(player["fgpct"] * 10) / 10} fg3pct={Math.round(player["fg3pct"] * 10) / 10} ftpct={Math.round(player["ftpct"] * 10) / 10} key={i} />
        ))
    }</tbody></Table>
}

function TeamLog(props){

    return (<Table striped bordered hover variant='dark'><tbody><TeamLogHeader />{
            props.games.map((game, i) => (
                <TeamLogRow key={i} teamID={game['teamID']} opp={game['opp']} res={game['res']} pts={game['pts']} ast={game['ast']} reb={game['reb']} fg={game['fg']} fg3={game['fg3']} ft={game['ft']} tov={game['tov']} stl={game['stl']} blk={game['blk']} />
            ))
        }</tbody></Table>);
}

export default function TeamPage({teamID}){ // must use {} when passing in param from useParams()

    const [roster, setRoster] = useState([]);
    const [loading, setLoading] = useState(true);
    const [table, setTable] = useState([]);

    let api = new NbaAPI();

    let getRoster = () => {
        setLoading(true);
        api.fetchRoster(teamID).then(
            rosterData => {
                setRoster(rosterData);
                setLoading(false);
            }
        )
    }

    useEffect(getRoster, []);

    let getLog = () => {
        api.fetchTeamLog(teamID).then(
            logData => {
                setTable(logData)
            }
        )
    }
    useEffect(getLog, []);

    if (loading){
        console.log("loading...")
        return 
    }

    
    return(
        <>{loading ? <RingLoader color={"F89DBC21"}/> :
        <div className="mainWindow">
            <Roster players={roster} />
            <TeamLog games={table} /> 
        </div>}
        </>
    ) 
}