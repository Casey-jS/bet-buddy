import React, { useEffect, useState } from "react";
import NbaAPI from "./nbaAPI";
import Roster from "./components/Roster";
import { RingLoader } from "react-spinners";

export default function TeamView({teamID}){ // must use {} when passing in param from useParams()

    const [roster, setRoster] = useState([]);
    const [loading, setLoading] = useState(false);

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

    if (loading){
        return <RingLoader color={"F89DBC21"}/>
    }

    
    return <Roster players={roster} />
}