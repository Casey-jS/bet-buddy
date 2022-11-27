import Top10Row from './Top10Row'
import LeagueLeaderHeader from './LeagueLeaderHeader';
import {Table} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';



export default function Top10Table(props){

    console.log("[Top10Table]")
    console.log(props);
    return  <Table striped bordered hover > <tbody><LeagueLeaderHeader />{    
        props.players.map((player, i) => (
            <Top10Row fullName={player["fullName"]} ppg={player["ppg"]} apg={player["apg"]} rpg={player["rpg"]} spg={player["spg"]} bpg={player["bpg"]} key={i} />
        ))  
    }</tbody></Table>
}