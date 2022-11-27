import React from 'react'
import TeamTable from './components/TeamTable'
import NbaAPI from './nbaAPI'
import {useEffect, useState} from 'react'



export default function Teams(){

    const [table, setTable] = useState([]);
    let api = new NbaAPI();
    let getTeams = () => {
        api.fetchTeamStats().then(
            teamData => {
                console.log("Team data fetched:");
                console.log(teamData);
                setTable(teamData);
            }
        )
    }

    useEffect(getTeams, [])

    return (
        <TeamTable teams={table} />
    )
}