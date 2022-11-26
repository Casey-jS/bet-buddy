let api_url = "http://127.0.0.1:5000/"

export default async function fetchTop10(stat){
    const response = await fetch('http://127.0.0.1:5000/top10/' + stat + '/');
    return await response.json();
}
