import { React } from "react";
import { useParams } from "react-router-dom";
import TeamView from "../TeamView";

export default function TeamViewWrapper(){

    const { teamID } = useParams();

    return <TeamView teamID={teamID} />;
    
}