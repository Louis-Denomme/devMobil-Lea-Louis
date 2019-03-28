import React from 'react';
import { StyleSheet, View, FlatList, TextInput, Button, Text, ActivityIndicator } from 'react-native';
import FilmItem from './FilmItem';
import GenreItem from './GenreItem';
import { getFilmsFromApi, getFilmsFromApiWithSearchedText, getGenresFromApi, getFilmsFromApiByGenre, getLatestFilmsFromApi } from '../API/Api.js';
//import console = require('console');

export default class Accueil extends React.Component {

    constructor(props) {
        super(props)
        this.searchedText = ''
        this.state = {
            films: [],
            genres: [],
            isLoading: false
        }
    }

    componentDidMount(){
        getFilmsFromApi().then(data => {
            // console.log(Object.keys(data));
            this.setState({ films: data })
            console.log(data[0]);
        });

        /*getGenresFromApi().then(data => {

        })*/
    }

    

    _loadFilms() {
        if (this.searchedText.length > 0) {
            this.setState({ isLoading: true })
            getFilmsFromApiWithSearchedText(this.searchedText).then(data => {
                this.setState({
                    films: data.results,
                    isLoading: false
                })
            })
        }
    }

    _loadLatestFilms() {
        getLatestFilmsFromApi().then(data => {
            this.setState({ films: data.results })
        })
    }

    _loadFilmsByGenre(id) {
        getFilmsFromApiByGenre().then(data => {
            this.setState({ films: data.results })
        })
    }

    _searchTextInputChanged(text) {
        this.searchedText = text
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', margin: 50 }}>
                <TextInput placeholder='Rechercher'
                           onChangeText={(text) => this._searchTextInputChanged(text) }
                           onSubmitEditing={() => this._loadFilms()}/>

                <Button title='Nouveautés' onPress={() => this._loadLatestFilms()} />

                {/* { <FlatList
                    data={this.state.genres}
                    keyExtractor={(item) => item._id.toString()}
                    renderItem={({item}) => <GenreItem genre={item}/>}
                /> } */}

                <FlatList
                    data={this.state.films}
                    keyExtractor={(item) => item._id.toString()}
                    renderItem={({item}) => <FilmItem film={item}/>}
                />

                { this.state.isLoading ?
                    <View style={styles.loading_container}>
                        <ActivityIndicator size='large' />
                    </View>
                    : null
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    loading_container: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 100,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    }
})