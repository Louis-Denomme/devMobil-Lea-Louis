import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

export default class FilmItem extends React.Component {
    render() {
        const film = this.props.film
        return (
            <View>
                <Text>{film.title}</Text>
            </View>
        )
    }
}