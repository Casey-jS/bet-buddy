import { React } from "react";
import { useParams } from "react-router-dom"; // to get url parameters

import PlayerPage from "../pages/PlayerPage";
import TeamPage from "../pages/TeamPage";
import FavPlayersPage from '../pages/FavPlayersPage';

// wrappers used to render pages based on url parameters
// params come from router

export function PlayerViewWrapper(){
    const { playerID } = useParams();
    return <PlayerPage playerID={playerID} />;
}

export function TeamViewWrapper(){
    const { teamID } = useParams();
    return <TeamPage teamID={teamID} />;  
}

export function FavPlayersWrapper(){
    const { userName } = useParams();
    return <FavPlayersPage userName={userName} />;
}