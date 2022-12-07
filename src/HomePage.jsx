import NbaAPI from "./nbaAPI";
import { useState } from "react";
import { useEffect } from "react";
import Standings from "./components/Standings";
export default function HomePage(){

    let api = new NbaAPI();
    const [west, setWest] = useState([]);
    const [east, setEast] = useState([]);

    let getWest = () => {
        api.get_west_standings().then(
            standings => {
                setWest(standings);
            }
        )
    }
    useEffect(getWest, []);


    let getEast = () => {
        api.get_east_standings().then(
            standings => {
                setEast(standings);
            }
        )
    }
    useEffect(getEast, []);

    return <div className="position-relative" style={{display: "flex", padding: "40px", backgroundColor: '#8e9190'}}>
        <Standings teams={east} style={{position: "relative"}}/>{' '}
        <Standings teams={west} />
    </div>

}