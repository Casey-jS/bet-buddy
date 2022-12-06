import React from "react";

export default function GameLogRow(props){
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