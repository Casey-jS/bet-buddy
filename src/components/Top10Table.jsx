import Top10Row from './Top10Row'
import LeagueLeaderHeader from './LeagueLeaderHeader';

export default function Top10Table(props){
    console.log("[Top10Table]")
    console.log(props);
    return  <table className="statsTable"> <LeagueLeaderHeader></LeagueLeaderHeader> {
        
        props.players.map((player, i) => (
            <Top10Row fullName={player["fullName"]} ppg={player["ppg"]} apg={player["apg"]} rpg={player["rpg"]} spg={player["spg"]} bpg={player["bpg"]} key={i} />
        ))
        
    }
    

    </table>
}