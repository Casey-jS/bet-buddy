import { React } from "react";
import { useParams } from "react-router-dom"; // to get url parameters

import PlayerView from "./PlayerView";
import TeamView from "../pages/TeamPage";
import FavPlayers from '../FavPlayers';

// wrappers used to render pages based on url parameters
// params come from router

export function PlayerViewWrapper(){
    const { playerID } = useParams();
    return <PlayerView playerID={playerID} />;
}

export function TeamViewWrapper(){
    const { teamID } = useParams();
    return <TeamView teamID={teamID} />;  
}

export function FavPlayersWrapper(){
    const { userName } = useParams();
    return <FavPlayers userName={userName} />;
}