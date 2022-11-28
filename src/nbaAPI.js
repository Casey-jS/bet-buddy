// This module contains the methods that will return a promise

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
}







