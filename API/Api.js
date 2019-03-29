const API_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbiI6dHJ1ZSwiaWF0IjoxNTUzNzgwNDAyLCJleHAiOjE1NTQwMzk2MDJ9.LcRF-ahO4ALLlWsDWEqnjX2kwDietNQHOjm09b5rFyw'
const API_URL = 'https://api.fakeflix.sherpa.one/'
const myHeaders = new Headers();

    myHeaders.append('Content-Type', 'application/json');
    myHeaders.append('x-access-token', API_TOKEN);

export function getFilmsFromApi() {
    const url = API_URL + 'movies/page/1';
    return _callApiGet(url);
}

export function getMembersFromApi(_email){
    const url = API_URL + 'members?email='+_email;
    return _callApiGet(url);        
}

function _callApiGet(url){
    return fetch(url, {
        method: 'GET',
        headers: myHeaders,
    }).then(response => {
        return response.json();
    })/*.then(result =>  result )*/;
}