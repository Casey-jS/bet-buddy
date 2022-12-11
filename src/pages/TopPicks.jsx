import React from 'react';
import { useEffect } from 'react';
import { useState, useCallback } from 'react';
import {Table} from 'react-bootstrap'
import NbaAPI from '../nbaAPI';
import * as logos from 'react-nba-logos'
import { NBALogo } from '../staticTeams';

export function BetSlip(props){

    const [image, setImage] = useState("/");

    let statMap = {
        "pts" : "Points",
        "ast" : "Assists",
        "reb" : "Rebounds",
        "blk" : "Blocks",
        "3pt" : "3PT" 
    }

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


    return (
        <tr>
        <td><img src={image} height={100}/></td>
        <td>{props.name}</td>
        <td>{"+" + props.amount}</td>   
        <td>{statMap[props.stat]}</td>
        <td>{"vs. " + props.opp}</td>
        <td>{<NBALogo team={props.opp} />}</td>
        </tr>
    )
}

export default function TopPicks(){
    let api = new NbaAPI();
    const [picks, setPicks] = useState([]);

    let getPlayers = () => {
        api.fetch_top_picks().then(
            pickData => {
                setPicks(pickData)
            }
        )
    }

    useEffect(getPlayers, []);

    return <>
        <Table className="align-middle" striped variant='dark' style={{fontSize: 40, alignItems: "center"}}><tbody>
            {picks.map((pick, i) => (
                <BetSlip name={pick['playerName']} id={pick['playerID']} amount={pick['amount']} stat={pick['stat']} opp={pick['opp']} />
            ))}
            </tbody></Table>
        </>
}