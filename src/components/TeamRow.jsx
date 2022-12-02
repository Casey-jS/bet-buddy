import React from "react";
import { LinkContainer } from "react-router-bootstrap";

export default function TeamRow(props){
    console.log("From TeamRow, props:")
    console.log(props);

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