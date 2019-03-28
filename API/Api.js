const API_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbiI6dHJ1ZSwiaWF0IjoxNTUzNzgwNDAyLCJleHAiOjE1NTQwMzk2MDJ9.LcRF-ahO4ALLlWsDWEqnjX2kwDietNQHOjm09b5rFyw'
const API_URL = 'https://api.fakeflix.sherpa.one/'

export function getFilmsFromApi () {
    const url = API_URL + 'movies'

    var myHeaders = new Headers({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Headers': 'x-access-token',
        "x-access-token": API_TOKEN,
    });

    var myInit = { method: 'GET',
        headers: myHeaders,
        mode: 'cors',
        cache: 'default' };

    var myRequest = new Request(url, myInit)

    fetch(myRequest, myInit)
        .then((response) => {return response.json()})
        .catch((error) => console.error(error))
}

export function getGenresFromApi () {

    const url = API_URL + 'movies/tags'

    axios({
        method: 'get',
        url: url,
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Headers': 'x-access-token',
            'x-access-token': API_TOKEN
        }
    })
        .then((response) => response.json())
        .catch((error) => console.error(error))
}

export function getFilmsFromApiWithSearchedText (text) {

    const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&language=fr&query=' + text

    return fetch(url)
        .then((response) => response.json())
        .catch((error) => console.error(error))
}

export function getFilmsFromApiByGenre (id) {

    const url = 'https://api.themoviedb.org/3/discover/movie?api_key=' + API_TOKEN + '&language=fr&with_genres=' + id

    return fetch(url)
        .then((response) => response.json())
        .catch((error) => console.error(error))
}

export function getLatestFilmsFromApi () {

    const url = 'https://api.themoviedb.org/3/movie/latest?api_key=' + API_TOKEN + '&language=fr'

    return fetch(url)
        .then((response) => response.json())
        .catch((error) => console.error(error))
}