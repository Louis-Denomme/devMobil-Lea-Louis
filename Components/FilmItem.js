import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

export default class FilmItem extends React.Component {
    render() {
        const { film, displayFilm } = this.props
        return (
            <View style={{backgroundColor: '#FFF' }}>
                <TouchableOpacity style={{ borderWidth: 1, borderColor: '#000'}} onPress={() => displayFilm(film._id)}>
                    <Text style={{ textAlign: 'center', padding: 10 }}>{film.title}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}