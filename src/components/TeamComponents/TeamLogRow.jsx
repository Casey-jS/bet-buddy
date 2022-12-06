import React from 'react'
export default function TeamLogRow(props){
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