export function GameLogHeader(){
    return (<tr><th>Opp</th><th>W/L</th><th>PTS</th><th>FG</th><th>FG3</th><th>AST</th><th>REB</th><th>STL</th><th>BLK</th></tr>);
}

export function LeagueLeaderHeader(){
    return (<tr><th></th><th>Name</th><th>Team</th><th>Age</th><th>GP</th><th>PTS</th><th>AST</th><th>REB</th><th>STL</th><th>BLK</th><th>FG %</th><th>3P %</th><th>FT %</th></tr>);
}

export function TeamLogHeader(){
    return (
        <tr><th>OPP</th><th>W/L</th><th>PTS</th><th>AST</th><th>REB</th><th>FG</th><th>FG3</th><th>FT</th><th>TOV</th><th>STL</th><th>BLK</th></tr>
    );
}

export function TeamHeader(){
    return (<tr>

        <th>Name</th>
        <th>Rank</th>
        <th>Wins</th>
        <th>Losses</th>
        <th>Win %</th>
        <th>+/-</th>
        <th>PPG</th>
        <th>3pt %</th>
    </tr>);
}

export function StandingsHeader(){
    return (
        <tr><th>Rank</th><th>Name</th><th>Overall</th><th>Home</th><th>Away</th><th>Last 10</th></tr>
    );
}