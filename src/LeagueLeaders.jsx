import React from 'react'



export function LeagueLeaders(){
    return (
        <div>
            <h1>League Leaders</h1>
            <select id="statSelect">
                <option value="PTS">PTS</option>
                <option value="AST">AST</option>
                <option value="REB">REB</option>
                <option value="STL">STL</option>
                <option value="BLK">BLK</option>
            </select>
        </div>
    )
}