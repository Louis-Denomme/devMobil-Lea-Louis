const API_TOKEN = 'dc11fb4194f434c23e75d7aac9bd32a2'

export function getFilmsFromApiWithSearchedText (text) {

    const url = 'http://api.tmdb.org/3/search/movie?api_key=' + API_TOKEN + '&query=' + text

    return fetch()
        .then((response) => response.json())
        .catch((error) => console.error(error))
}

export function getFilmsFromApi () {

    return fetch(url)
        .then((response) => response.json())
        .catch((error) => console.error(error))
}