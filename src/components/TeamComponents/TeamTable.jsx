import {Table} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';

import {TeamRow} from "../TableRows"
import {TeamHeader} from '../Headers'
export default function TeamTable(props){

    return (
    <Table striped bordered hover variant="dark"> <tbody><TeamHeader /> {
        props.teams.map((team, i) => (
            <TeamRow teamID={team["id"]}teamName={team["teamName"]} rank={i+1} wins={team["wins"]} losses={team["losses"]} wpct={Math.round(team["wpct"] * 10) / 10} plusminus={team["plusminus"]} ppg={Math.round(team["ppg"] * 10) / 10} fg3pct={Math.round(team["fg3pct"] * 10) / 10} key={i} />
        ))
    } </tbody></Table>);

}