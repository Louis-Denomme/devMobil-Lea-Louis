import React from 'react';
import { StyleSheet, View, FlatList, TextInput, Button, Text, ActivityIndicator, TouchableOpacity, ScrollView } from 'react-native';
import { LinearGradient } from 'expo';
import FilmItem from './FilmItem';
import GenreItem from './GenreItem';
import { getFilmsFromApi, getFilmsFromApiWithSearchedText, getGenresFromApi, getFilmsFromApiByGenre, getLatestFilmsFromApi } from '../API/Api.js';
//import console = require('console');

export default class Accueil extends React.Component {

    constructor(props) {
        super(props)
        this.searchedText = ''
        this.page = 0,
        this.state = {
            films: [],
            genres: [],
            isLoading: false
        }
    }

    componentDidMount(){
        getFilmsFromApi(this.page).then(data => {
            // console.log(Object.keys(data));
            this.setState({ films: data })
            console.log(data[0]);
        });

        getGenresFromApi().then(data => {
            this.setState({ genres: data })
        })
    }

    _loadFilms() {
        if (this.searchedText.length > 0) {
            this.setState({ isLoading: true })
            getFilmsFromApi(this.page+1).then(data => {
                this.setState({
                    films: data,
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

    _displayFilm = (idFilm) => {
        this.props.navigation.navigate("Film", { idFilm: idFilm })
    }

    renderPages() {
        if(this.page > 1) {
            return <TouchableOpacity onPress={() => this._loadFilms()}>
                <Text style={{ color: "#FFF", textAlign: "left"}}>Précédent</Text>
            </TouchableOpacity>
        }

        return <TouchableOpacity onPress={() => this._loadFilms()}>
            <Text style={{ color: "#FFF", textAlign: "right"}}>Suivant</Text>
        </TouchableOpacity>
    }

    render() {
        return (
            <ScrollView
                alwaysBounceVertical={false}
                >
            <View style={{flex: 1, backgroundColor: '#000'}}>
                <View style={{ marginLeft: 40, marginRight: 40}}>
                    <View style={{ marginTop: 20 }}>
                        <TextInput placeholder='Rechercher'
                                   onChangeText={(text) => this._searchTextInputChanged(text) }
                                   onSubmitEditing={() => this._loadFilms()}/>
                    </View>

                    <View style={{ backgroundColor: '#4158D0', marginTop: 20, borderRadius: 20 }}>
                        <TouchableOpacity style={{ padding: 10 }} onPress={() => this._loadLatestFilms()}>
                            <Text style={{ textAlign: 'center', color: '#FFF'}}>Nouveautés</Text>
                        </TouchableOpacity>
                    </View>

                        {/*<FlatList
                            data={this.state.genres}
                            keyExtractor={(item) => item._id.toString()}
                            renderItem={({item}) => <GenreItem genre={item}/>}
                        />*/}


                    <View style={{ marginTop: 20}}>
                        <FlatList
                            data={this.state.films}
                            keyExtractor={(item) => item._id.toString()}
                            renderItem={({item}) => <FilmItem film={item} displayFilm={this._displayFilm}/>}
                        />
                    </View>

                    <View style={{ marginTop: 20 }}>
                        { this.renderPages() }
                    </View>

                    { this.state.isLoading ?
                        <View style={styles.loading_container}>
                            <ActivityIndicator size='large' />
                        </View>
                        : null
                    }
                </View>
            </View>
            </ScrollView>
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