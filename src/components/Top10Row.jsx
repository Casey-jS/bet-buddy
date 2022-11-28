export default function Top10Row(props){
    console.log("[Top10Row]")
    console.log(props)
    return <tr>
        <td>{props.fullName}</td>
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