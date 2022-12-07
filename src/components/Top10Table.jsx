import {PlayerRow} from './TableRows'
import {LeagueLeaderHeader} from './Headers';
import {Table} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';

// id, name, team, gp, age, ppg, apg, rpg, spg, bpg, fgpct, fg3pct, ftpct

export default function Top10Table(props){

    return  <Table striped bordered hover variant='dark'> <tbody><LeagueLeaderHeader />{    
        props.players.map((player, i) => (
            <PlayerRow id ={player["id"]} fullName={player["fullName"]} team ={player["team"]} age={player["age"]} gp ={player["games"]} ppg={player["ppg"]} apg={player["apg"]} rpg={player["rpg"]} spg={player["spg"]} bpg={player["bpg"]} fgpct={Math.round(player["fgpct"] * 10) / 10} fg3pct={Math.round(player["fg3pct"] * 10) / 10} ftpct={Math.round(player["ftpct"] * 10) / 10} key={i} />
        ))  
    }</tbody></Table>
}