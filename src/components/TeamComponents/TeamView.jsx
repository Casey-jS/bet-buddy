import React, { useEffect, useState } from "react";
import NbaAPI from "../../nbaAPI";
import Roster from "./Roster";
import { RingLoader } from "react-spinners";
import TeamLog from "./TeamLog";

export default function TeamView({teamID}){ // must use {} when passing in param from useParams()

    const [roster, setRoster] = useState([]);
    const [loading, setLoading] = useState(true);
    const [table, setTable] = useState([]);

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

    if (loading){
        console.log("loading...")
        return 
    }

    
    return(
        <>{loading ? <RingLoader color={"F89DBC21"}/> :
        <div className="mainWindow">
            <Roster players={roster} />
            <TeamLog games={table} /> 
        </div>}
        </>
    ) 
}