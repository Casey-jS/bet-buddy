import NbaAPI from "../nbaAPI";
import {useState, useEffect, useCallback} from 'react'
export default function PlayerRow(props){

    const [image, setImage] = useState("/");

    let api = new NbaAPI();
    const getHeadshot = useCallback(() => {
        api.fetchHeadshot(props.id).then(
            imageBlob => {
                setImage(URL.createObjectURL(imageBlob)); // occupy image with img fetched
            }
        )
      }, [props.id])
    
      useEffect(() => {
        getHeadshot();
      }, [getHeadshot]);

    return <tr>
        <td style={{width: 60}}><img src={image} style={{width: 50}}></img></td>
        <td><a href={"/players/" + props.id + "/"}>{props.fullName}</a></td>
        <td>{props.team}</td>
        <td>{props.age}</td>
        <td>{props.gp}</td>
        <td>{props.ppg}</td>
        <td>{props.apg}</td>
        <td>{props.rpg}</td>
        <td>{props.spg}</td>
        <td>{props.bpg}</td>
        <td>{props.fgpct}</td>
        <td>{props.fg3pct}</td>
        <td>{props.ftpct}</td>
    </tr>;
}