import React from 'react'
import {StyleSheet, View, TextInput, Button, Text, TouchableOpacity, ActivityIndicator, Image} from 'react-native'
import {getFilmDetails} from "../API/Api";

export default class Film extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            film: [],
            isLoading: true
        }
    }

    componentDidMount() {
        getFilmDetails(this.props.navigation.state.params.idFilm).then(data => {

            this.setState({
                film: data,
                isLoading: false
            })
        })


    }

    _watchFilm(url) {
        this.props.navigation.navigate("Watch", { url: url })
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor:'#000'}}>
                <View style={{ marginLeft: 40, marginRight: 40 }}>

                    <Image
                        source={{ uri: this.state.film.poster }}
                    />

                    <Text style={{ color: '#FFF', fontWeight: 'bold', textAlign: 'center', fontSize: 20, marginTop: 20 }}> { this.state.film.title }</Text>

                    <Text style={{ color: '#FFF', textAlign: 'justify', fontSize: 15, marginTop: 20 }}> { this.state.film.synopsis } </Text>

                    <Text style={{ color: '#FFF', fontSize: 14, marginTop: 20 }}>Année de sortie : { this.state.film.released } Genre : { this.state.film.genre }</Text>

                    <View style={{ backgroundColor: '#4158D0', marginTop: 20, borderRadius: 20 }}>
                        <TouchableOpacity style={{ padding: 10 }} onPress={() => this._watchFilm(this.state.film.online_trailer)}>
                            <Text style={{ textAlign: 'center', color: '#FFF' }}>Regarder</Text>
                        </TouchableOpacity>
                    </View>
                </View>

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
    main_container: {
        flex: 1
    },
    loading_container: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    }
})