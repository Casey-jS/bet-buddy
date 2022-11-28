import {Table} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';

import TeamRow from "./TeamRow"
import TeamHeader from './TeamHeader'
export default function TeamTable(props){

    console.log("props passed into TeamTable:");
    console.log(props);
    console.log(props.teams[0]);
    return (<Table striped bordered hover variant="dark"> <tbody><TeamHeader /> {
        props.teams.map((team, i) => (
            <TeamRow teamName={team["teamName"]} rank={team["wrank"]} wins={team["wins"]} losses={team["losses"]} wpct={Math.round(team["wpct"] * 10) / 10} plusminus={team["plusminus"]} ppg={Math.round(team["ppg"] * 10) / 10} fg3pct={Math.round(team["fg3pct"] * 10) / 10} key={i} />
        ))
    } </tbody></Table>);

}