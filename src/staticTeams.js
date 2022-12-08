import React from 'react';
import * as Logos from 'react-nba-logos'


// since there aren't many good api's for fetching logos, render them as components manually
// 1 - 1 map of database team abbrev entries to react components



export function NBALogo(props){
    let abbrevToComponents = {
        "TOR" : <Logos.TOR size={props.size}/>,
        "UTA" : <Logos.UTA size={props.size}/>,
        "MEM" : <Logos.MEM size={props.size}/>,
        "LAL" : <Logos.LAL size={props.size}/>,
        "LAC" : <Logos.LAC size={props.size}/>,
        "SAC" : <Logos.SAC size={props.size}/>,
        "DET" : <Logos.DET size={props.size}/>,
        "HOU" : <Logos.HOU size={props.size}/>,
        "MIL" : <Logos.MIL size={props.size}/>,
        "GSW" : <Logos.GSW size={props.size}/>,
        "DAL" : <Logos.DAL size={props.size}/>,
        "POR" : <Logos.POR size={props.size}/>,
        "MIN" : <Logos.MIN size={props.size}/>,
        "CHI" : <Logos.CHI size={props.size}/>,
        "NYK" : <Logos.NYK size={props.size}/>,
        "BKN" : <Logos.BKN size={props.size}/>,
        "BOS" : <Logos.BOS size={props.size}/>,
        "CHA" : <Logos.CHA size={props.size}/>,
        "MIA" : <Logos.MIA size={props.size}/>,
        "ORL" : <Logos.ORL size={props.size}/>,
        "CLE" : <Logos.CLE size={props.size}/>,
        "ATL" : <Logos.ATL size={props.size}/>,
        "NOP" : <Logos.NOP size={props.size}/>,
        "OKC" : <Logos.OKC size={props.size}/>,
        "DEN" : <Logos.DEN size={props.size}/>,
        "IND" : <Logos.IND size={props.size}/>,
        "PHI" : <Logos.PHI size={props.size}/>,
        "PHX" : <Logos.PHX size={props.size}/>,
        "WAS" : <Logos.WAS size={props.size}/>,
        "SAS" : <Logos.SAS size={props.size}/>
    }
    return abbrevToComponents[props.team]
}
