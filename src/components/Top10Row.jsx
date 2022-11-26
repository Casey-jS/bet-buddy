export default function Top10Row(props){
    console.log("[Top10Row]")
    console.log(props)
    return <tr>
        <td>{props.fullName}</td>
        <td>{props.ppg}</td>
        <td>{props.apg}</td>
        <td>{props.rpg}</td>
        <td>{props.spg}</td>
        <td>{props.bpg}</td>
    </tr>;
}