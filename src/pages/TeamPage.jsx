import React, { useEffect, useState } from "react";
import NbaAPI from "../nbaAPI";
import { RingLoader } from "react-spinners";
import {TeamLogRow} from '../components/TableRows'
import {Container, ListGroup, Row, Table, Card} from 'react-bootstrap'
import {TeamLogHeader} from '../components/Headers'
import {LeagueLeaderHeader} from '../components/Headers'
import {PlayerRow} from '../components/TableRows'
import { NBALogo } from "../staticTeams";




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

function TeamCard(props){
    const { info } = props

    return (
        <Card bg='dark' text='white' border="info" style={{width: '16rem'}}>
            <Card.Body>
                <Card.Title className="text-decoration-underline">{info.teamName}</Card.Title>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item variant='dark'>{"Record: " + String(info.wins) + "-" + String(props.info['losses'])}</ListGroup.Item>
                    <ListGroup.Item variant='dark'>{"League Rank: " + info.wrank}</ListGroup.Item>
                </ListGroup>
            </Card.Body>
            
        </Card>  
    )
}


export default function TeamPage({teamID}){ // must use {} when passing in param from useParams()

    const [roster, setRoster] = useState([]);
    const [loading, setLoading] = useState(true);
    const [table, setTable] = useState([]);
    const [info, setInfo] = useState({});

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

    let getTeamInfo = () => {
        api.fetch_team_info(teamID).then(
            teamInfo => {
                setInfo(teamInfo)
                console.log(info)
            }
        )
    }
    useEffect(getTeamInfo, []);

    return(
        <div style={{backgroundColor: "#8e9190"}}>{loading ? <RingLoader color={"F89DBC21"}/> :
            <Container>
                <NBALogo team={roster[0]['team']} size={200}/>
                <TeamCard info={info} />
                <p className="text-center fs-2">Last 5 Games</p>
                <Row>
                    <TeamLog games={table} /> 
                </Row>
                <p className='text-center fs-2'>Roster</p>
                <Row>
                    <Roster players={roster} />
                </Row>
            </Container>    
            }
        </div>
    ) 
}