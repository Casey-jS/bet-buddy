let player_stats;

let api_url = "http://127.0.0.1:5000/top10/USER_CHOICE/"
fetch(api_url).then(
  f = (response) => response.json().then(
    f2 = (json_stats) => {
      console.log(json_stats);
      player_stats = json_stats;
    }
  )
)

function PlayerRow(props){
    return <tr>
        <td>{props.fullName}</td>
        <td>{props.ppg}</td>
        <td>{props.apg}</td>
        <td>{props.rpg}</td>
        <td>{props.spg}</td>
        <td>{props.bpg}</td>
    </tr>;
}


function StatsTable(props){
    return <table className = "statsTable"> {
        props.players.map((player, i) => (
            <PlayerRow fullName={player.fullname} ppg={player.ppg} apg={player.apg} rpg={player.rpg} spg={player.spg} bpg={player.bpg} key={i} />
        ))
    }
    </table>;
}

ReactDOM.render(
    <StatsTable players={players}/>,
    document.getElementById('main')
);