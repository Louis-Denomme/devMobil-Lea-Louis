const API_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbiI6dHJ1ZSwiaWF0IjoxNTUzNzgwNDAyLCJleHAiOjE1NTQwMzk2MDJ9.LcRF-ahO4ALLlWsDWEqnjX2kwDietNQHOjm09b5rFyw'
const API_URL = 'https://api.fakeflix.sherpa.one/'

export function getFilmsFromApi(page) {
    const url = API_URL + 'movies/page/' + page

    // var myHeaders = new Headers({
    //     'Content-Type': 'application/json',
    //     'Access-Control-Allow-Headers': 'x-access-token',
    //     "x-access-token": API_TOKEN,
    // });

    const myHeaders = new Headers();

    myHeaders.append('Content-Type', 'application/json');
    myHeaders.append('x-access-token', API_TOKEN);

    // var myInit = { method: 'GET',
    //     headers: myHeaders,
    //     mode: 'cors',
    //     cache: 'default' };

    // var myRequest = new Request(url, myInit)

    return fetch(url, {
        method: 'GET',
        headers: myHeaders,
    }).then(response => {
        //console.log(response.json());
        return response.json();
    }).then(result =>  result );

    // console.log("API : "+ JSON.stringify(test));
    //return test;
}

export function getGenresFromApi() {

    const url = API_URL + 'movies'

    const myHeaders = new Headers();

    myHeaders.append('Content-Type', 'application/json');
    myHeaders.append('x-access-token', API_TOKEN);

    return fetch('https://api.fakeflix.sherpa.one/movies/page/1', {
        method: 'GET',
        headers: myHeaders,
    }).then(response => {
        return response.json();
    }).then(result =>  result );
}

export function getFilmDetails(idFilm) {

    const url = API_URL + 'movies/' + idFilm

    const myHeaders = new Headers();

    myHeaders.append('Content-Type', 'application/json');
    myHeaders.append('x-access-token', API_TOKEN);

    return fetch(url, {
        method: 'GET',
        headers: myHeaders,
    }).then(response => {
        return response.json()
    }).then(result =>  result );


}