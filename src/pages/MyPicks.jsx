import { BetSlip } from "./TopPicks";
import React from 'react'
import NbaAPI from "../nbaAPI";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

export function MyPicks({user}){
    let api = new NbaAPI();

    const [bets, setBets] = useState([]);
    const [loading, setLoading] = useState(true);

    let getPicks = () => {
        api.get_bets(user).then(
            response => {
                setBets(response);
                setLoading(false);
            }
        )
    }
    useEffect(getPicks, []);
    return <>
        <Table className="align-middle" striped variant='dark' style={{fontSize: 40, alignItems: "center"}}><tbody>
            {bets.map((pick, i) => (
                <BetSlip name={pick['playerName']} id={pick['playerID']} amount={pick['amount']} stat={pick['stat']} opp={pick['opp']} key={i}/>
            ))}
            </tbody></Table>
        </>
}