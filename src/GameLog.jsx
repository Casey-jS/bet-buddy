import React from "react";
import {GameLogHeader} from "./components/Headers";
import GameLogRow from "./components/GameLogRow";
import { Table } from "react-bootstrap";


export default function GameLog(props){

    return <Table striped bordered hover variant='dark' style={{width: "50%"}}><tbody><GameLogHeader />{
        props.games.map((game, i) => (
            <GameLogRow opp={game['opp']} result={game['result']} pts={game['pts']} fg={game['fg']} fg3={game['fg3']} ast={game['ast']} reb={game['reb']} stl={game['stl']} blk={game['blk']} key={i} />
        ))
    }</tbody></Table>
}