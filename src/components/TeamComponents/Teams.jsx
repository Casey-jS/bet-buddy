import React from 'react'
import TeamTable from './TeamTable'
import NbaAPI from '../../nbaAPI'
import {useEffect, useState} from 'react'
import { RingLoader } from "react-spinners";



export default function Teams(){

    const [table, setTable] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (loading) {
          setTimeout(() => {
          setLoading(false);
        }, 100000);
        }
      }, [loading]);

    let api = new NbaAPI();
    let getTeams = () => {
        setLoading(true);
        api.fetchTeamStats().then(
            teamData => {
                setTable(teamData);
                setLoading(false);
            },
        )
    }

    useEffect(getTeams, [])

    

    return <React.Fragment>
        {loading ? 
            <RingLoader size={300} color={"#61DBFB"}
            style={{position: "absolute", 
                    top: "30%",
                    right: "60%"
                     }}/> 
        : 
            <TeamTable teams={table} />}
        </React.Fragment>
}