import React from 'react'
import { StyleSheet, View, FlatList, TextInput, Button, Text } from 'react-native'
import FilmItem from './FilmItem'
import { getFilmsFromApiWithSearchedText } from '../API/Api.js'

export default class Accueil extends React.Component {

    constructor(props) {
        super(props)
        this.state = { films: [] }
    }

    _loadFilms() {
        getFilmsFromApiWithSearchedText("star").then(data => {
            this.setState({ films: data.results })
        })
    }

    render() {
        return (
            <View>
                <TextInput placeholder='Rechercher' />
                <Button title='Rechercher' onPress={() => this._loadFilms()} />
                <FlatList
                    data={this.state.films}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) => <FilmItem film={item}/>}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({

})