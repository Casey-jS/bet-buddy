import { React } from "react";
import { useParams } from "react-router-dom";
import PlayerView from "../PlayerView";

export default function PlayerViewWrapper(){
    const { playerID } = useParams();
    return <PlayerView playerID={playerID} />;
}