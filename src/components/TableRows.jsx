import NbaAPI from "../nbaAPI";
import React, {useState, useEffect, useCallback} from 'react'
import { NBALogo } from "../staticTeams";

// Exports all table rows used by the app

export function PlayerRow(props){

    const [image, setImage] = useState("/");

    let api = new NbaAPI();
    const getHeadshot = useCallback(() => {
        api.fetchHeadshot(props.id).then(
            imageBlob => {
                setImage(URL.createObjectURL(imageBlob)); // occupy image with img fetched
            }
        )
      }, [props.id])
    
      useEffect(() => {
        getHeadshot();
      }, [getHeadshot]);

    return <tr>
        <td style={{width: 60}}><img src={image} style={{width: 50}}></img></td>
        <td><a href={"/players/" + props.id + "/"}>{props.fullName}</a></td>
        <td>{props.team}</td>
        <td>{props.age}</td>
        <td>{props.gp}</td>
        <td>{props.ppg}</td>
        <td>{props.apg}</td>
        <td>{props.rpg}</td>
        <td>{props.spg}</td>
        <td>{props.bpg}</td>
        <td>{props.fgpct}</td>
        <td>{props.fg3pct}</td>
        <td>{props.ftpct}</td>
    </tr>;
}


export function StandingsRow(props){
    return <tr>
        <td>{props.seed}</td>
        <td><a href={"teams/" + props.teamID + "/"}>{props.name}</a></td>
        <td>{props.record}</td>
        <td>{props.home}</td>
        <td>{props.away}</td>
        <td>{props.last10}</td>
    </tr>;
}

export function TeamRow(props){

    return <tr>

            <td><a href={"/teams/" + props.teamID + "/"}>{props.teamName}</a></td>
            <td>{props.rank}</td>
            <td>{props.wins}</td>
            <td>{props.losses}</td>
            <td>{props.wpct}</td>
            <td>{props.plusminus}</td>
            <td>{props.ppg}</td>
            <td>{props.fg3pct}</td>
        </tr>;
}


export function GameLogRow(props){
    return <tr>
        <td>{props.opp}</td>
        <td>{props.result}</td>
        <td>{props.pts}</td>
        <td>{props.fg}</td>
        <td>{props.fg3}</td>
        <td>{props.ast}</td>
        <td>{props.reb}</td>
        <td>{props.stl}</td>
        <td>{props.blk}</td>
    </tr>;
}

export function TeamLogRow(props){
    return <tr>
        
        <td><a href={"/teams/" + props.teamID + "/"}>{props.opp}</a></td>
        <td>{props.res}</td>
        <td>{props.pts}</td>
        <td>{props.ast}</td>
        <td>{props.reb}</td>
        <td>{props.fg}</td>
        <td>{props.fg3}</td>
        <td>{props.ft}</td>
        <td>{props.tov}</td>
        <td>{props.stl}</td>
        <td>{props.blk}</td>
    </tr>;
}