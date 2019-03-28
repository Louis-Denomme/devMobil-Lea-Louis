import React from 'react'
import { View, Button } from 'react-native'
//import { getFilmsFromApiByGenre } from '../API/Api.js'

export default class GenreItem extends React.Component {
    render() {
        const genre = this.props.genre
        return (
            <View>
                <Button title={genre.genre} onPress={() => this._loadFilmsByGenre(genre.id)} />
            </View>
        )
    }
}