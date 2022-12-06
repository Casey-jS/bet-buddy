import TeamLogRow from './TeamLogRow.jsx'
import React, { useState } from 'react'
import {Table} from 'react-bootstrap'
import TeamLogHeader from './TeamLogHeader'

export default function TeamLog(props){

    return (<Table striped bordered hover variant='dark'><tbody><TeamLogHeader />{
            props.games.map((game, i) => (
                <TeamLogRow key={i} teamID={game['teamID']} opp={game['opp']} res={game['res']} pts={game['pts']} ast={game['ast']} reb={game['reb']} fg={game['fg']} fg3={game['fg3']} ft={game['ft']} tov={game['tov']} stl={game['stl']} blk={game['blk']} />
            ))
        }</tbody></Table>);
}