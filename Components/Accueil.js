import React from 'react'
import { StyleSheet, View, FlatList, TextInput, Button, Text } from 'react-native'
import FilmItem from './FilmItem'
import { getFilmsFromApiWithSearchedText } from '../API/Api.js'

export default class Accueil extends React.Component {

    constructor(props) {
        super(props)
        this.searchedText = ''
        this.state = {
            films: []
        }
    }

    _loadFilms() {
        if (this.searchedText.length > 0) {
            getFilmsFromApiWithSearchedText(this.searchedText).then(data => {
                this.setState({ films: data.results })
            })
        }
    }

    _searchTextInputChanged(text) {
        this.searchedText = text
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', margin: 50 }}>
                <TextInput placeholder='Rechercher' onChangeText={(text) => this._searchTextInputChanged(text)}/>
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