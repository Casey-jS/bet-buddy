export default function TeamRow(props){
    console.log("From TeamRow, props:")
    console.log(props);

    return <tr>
            <td>{props.teamName}</td>
            <td>{props.rank}</td>
            <td>{props.wins}</td>
            <td>{props.losses}</td>
            <td>{props.wpct}</td>
            <td>{props.plusminus}</td>
            <td>{props.ppg}</td>
            <td>{props.fg3pct}</td>
        </tr>;
}