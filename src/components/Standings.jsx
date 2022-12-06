import React from 'react'
import { Table } from 'react-bootstrap'
import StandingsRow from './StandingsRow'
import { StandingsHeader } from './Headers'

export default function Standings(props){
    
    return (
        <Table striped bordered hover size='sm' variant='dark'><tbody><StandingsHeader />{
            props.teams.map((team, i) => (
                <StandingsRow teamID={team["teamID"]} seed={i+1} name={team["teamName"]} record={team["record"]} home={team["home"]} away={team["away"]} last10={team["last10"]}key={i} />
            ))
        }
            
            </tbody></Table>
    )
}