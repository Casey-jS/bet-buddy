import React from 'react'
import {useState, useEffect, useCallback} from 'react'
import Top10Table from './components/Top10Table';
import NbaAPI from './nbaAPI';

export default function LeagueLeaders({stat}){
    const [table, setTable] = useState([]);
    let api = new NbaAPI();

    const getPlayers = useCallback(() => {
        api.fetchTop10(stat).then(
            data => {
                setTable(data); // occupy table with data from fetch
            }
        )
      }, [stat])
    
      useEffect(() => {
        getPlayers();
      }, [getPlayers]);


    return  <Top10Table players={table} />;
}



