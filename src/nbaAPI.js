
// This module contains the methods that will return a promise
let apiURL = "http://127.0.0.1:5000/"
export default class NbaAPI{

    async fetchTop10(stat){
        const response = await fetch(apiURL + "top10/" + stat + '/');
        return await response.json();
    }

    async fetchTeamStats(){
        const response = await fetch(apiURL + "teams/");
        return await response.json();
    }

    async fetchHeadshot(id){
        console.log("Fetching headshot for player " + id)
        const response = await fetch("https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/" + id + ".png");
        return await response.blob();
    }

    async fetchRoster(teamID){
        console.log("Fetching data for TeamID " + teamID);
        const response = await fetch(apiURL + "teams/" + teamID + "/")
        return await response.json();
    }

    async validateSignIn(user, pswd){
        console.log("Value passed into api: " + user);
        const postOptions = {
            method: 'POST',
            mode: 'cors',
            headers: { 'Content-Type': 'application/json',
                        'Accept' : 'application/json'},
            body: JSON.stringify({ username: user, password: pswd })
        };
        // send username and password to api
        const response = await fetch(apiURL + "validateuser/", postOptions);
        return await response.json();
    }

    async fetchPlayer(playerID){
        
        const response = await fetch(apiURL + "players/" + playerID + "/");
        return await response.json();
    }

    async getLastFiveGames(playerID){
        const response = await fetch(apiURL + "last5/" + playerID + "/");
        return await response.json();
    }

    async addFavoritePlayer(user, playerID){

        const postOptions = {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({userName: user, player: playerID})
        };
        const response = await fetch(apiURL + "newfavplayer/", postOptions);
        return await response.json();
    }

    async checkFavorited(user, playerID){
        const postOptions = {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({userName: user, playerID: playerID})
        };
        const response = await fetch(apiURL + "isfavorited/", postOptions)
        return await response.json();
    }

    async fetchFavoritePlayers(userName){

        const response = await fetch(apiURL + "favplayers/" + userName + "/");
        return await response.json();
    }

    async fetchTeamLog(teamID){
        const response = await fetch(apiURL + "teamlogs/" + teamID + "/")
        return await response.json();
    }

    async get_west_standings(){
        const response = await fetch(apiURL + "standings/0/")
        return await response.json();
    }
    async get_east_standings(){
        const response = await fetch(apiURL + "standings/1/")
        return await response.json();
    }

    async get_active_user(){
        const response = await fetch(apiURL + "getuser/")
        return await response.json();
    }

    async server_signout(){
        const response = await fetch(apiURL + "signout/")
        return await response.json()
    }

    async fetch_top4(stat){
        const response = await fetch(apiURL + "top4/" + stat + "/")
        return await response.json();
    }

    async fetch_team_info(teamID){
        const response = await fetch(apiURL + "teaminfo/" + teamID + "/");
        return await response.json();
    }

    async fetch_top_picks(){
        const response = await fetch(apiURL + "toppicks/")
        return await response.json()
    }

    async new_bet(player, playerID, user, amount, stat, opp){
        const postOptions = {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                user: user, 
                playerID: playerID,
                player: player,
                amount: amount, 
                stat: stat, 
                opp: opp
            })
        };
        const response = await fetch(apiURL+ "bets/new/", postOptions)
        return await response.json();
    }

    async get_bets(user){
        const response = await fetch(apiURL + "bets/" + user + "/");
        return await response.json();
    }

    async validateSignUp(userName, password){
        const postOptions = {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                userName: userName,
                password: password
            })
        };
        const response = await fetch(apiURL + "signup/", postOptions);
        return await response.json();
    }

}







