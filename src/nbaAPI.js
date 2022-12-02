// This module contains the methods that will return a promise
let apiURL = "http://127.0.0.1:5000/"
export default class NbaAPI{
    async fetchTop10(stat){
        const response = await fetch('http://127.0.0.1:5000/top10/' + stat + '/');
        return await response.json();
    }

    async fetchTeamStats(){
        const response = await fetch('http://127.0.0.1:5000/teams/');
        return await response.json();
    }

    async fetchHeadshot(id){
        const response = await fetch("https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/" + id + ".png");
        return await response.blob();
    }

    async fetchRoster(teamID){
        console.log("Fetching data for TeamID " + teamID);
        const response = await fetch("http://127.0.0.1:5000/teams/" + teamID + "/")
        return await response.json();
    }

    async validateSignIn(user, pswd){
        const postOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: user, password: pswd })
        };

    
        // send username and password to api
        const response = await fetch("http://127.0.0.1:5000/validateuser/", postOptions)
        return await response.json()
    }

    async fetchPlayer(playerID){
        
        const response = await fetch("http://127.0.0.1:5000/players/" + playerID + "/")
        return await response.json();
    }
}







