import React from 'react'

export default function StandingsRow(props){
    return <tr>
        <td>{props.seed}</td>
        <td><a href={"teams/" + props.teamID + "/"}>{props.name}</a></td>
        <td>{props.record}</td>
        <td>{props.home}</td>
        <td>{props.away}</td>
        <td>{props.last10}</td>
    </tr>;
}