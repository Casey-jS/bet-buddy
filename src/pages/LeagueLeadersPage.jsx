import React from 'react'
import {useState, useEffect, useCallback} from 'react'
import Top10Table from './Top10Table';
import NbaAPI from '../nbaAPI';
import {PlayerRow} from '../components/TableRows'
import {LeagueLeaderHeader} from '../components/Headers';
import {Table} from 'react-bootstrap'

export function Top10Table(props){
  return  <Table striped bordered hover variant='dark'> <tbody><LeagueLeaderHeader />{    
      props.players.map((player, i) => (
          <PlayerRow id ={player["id"]} fullName={player["fullName"]} team ={player["team"]} age={player["age"]} gp ={player["games"]} ppg={player["ppg"]} apg={player["apg"]} rpg={player["rpg"]} spg={player["spg"]} bpg={player["bpg"]} fgpct={Math.round(player["fgpct"] * 10) / 10} fg3pct={Math.round(player["fg3pct"] * 10) / 10} ftpct={Math.round(player["ftpct"] * 10) / 10} key={i} />
      ))  
  }</tbody></Table>
}

export default function LeagueLeadersPage({stat}){
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



