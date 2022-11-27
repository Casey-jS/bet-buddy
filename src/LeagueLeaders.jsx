import React from 'react'
import {useState, useEffect} from 'react'
import Top10Table from './components/Top10Table';
import NbaAPI from './nbaAPI';



export default function LeagueLeaders(){
    const [table, setTable] = useState([]);
    const [stat, setStat] = useState("ppg");
    let api = new  NbaAPI();
    let getPlayers = () => {
        api.fetchTop10(stat).then(
                data => {
                    setTable(data); // occupy table with data from fetch
                }
        )
    }

    useEffect(getPlayers, [])

    return (
        <div> 
            <label htmlFor="sortBy"></label>
            <select name="sortBy" id="sortBy" onchange={(event) => {
                setStat(event.target.value);
                getPlayers();
            }}>
                <option value="ppg">PTS</option>
                <option value="apg">AST</option>
                <option value="rpg">REB</option>
                <option value="spg">STL</option>
                <option value="bpg">BLK</option>
            </select>
            <Top10Table players={table} />
        </div> 
    )


}



