import React from 'react'
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native'
//import { getFilmsFromApiByGenre } from '../API/Api.js'

export default class GenreItem extends React.Component {
    render() {
        const genre = this.props.genre
        return (
            <TouchableOpacity style={{ width: '40%', backgroundColor: '#FFF' }} onPress={() => {}}>
                <Text style={{ textAlign: 'center', fontWeight: 'bold', padding: 10, color: 'white'}}>{genre.genre}</Text>
            </TouchableOpacity>
        )
    }
}