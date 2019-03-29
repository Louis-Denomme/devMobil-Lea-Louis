// app/routes/Auth.js

import React, { Component } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import styles from './styles';
import { getMembersFromApi } from '../API/Api';
import { response } from 'express';

class Auth extends Component {

    constructor() {
        super();
        this.state = { email: null, 
            password: null }
            ;
    }

    userSignup() {
        Actions.HomePage();
    }

    userLogin() {
        if (!this.state.email || !this.state.password) return;
        getMembersFromApi(this.state.email)
            .then((responseData) => {
                if (responseData.password !== this.state.password) return;                
                
                saveitem('connected', true);
                Actions.Accueil();
            })
            .done();
    }

    async saveItem(item, selectedValue) {
        try {
            await AsyncStorage.setItem(item, selectedValue);
        } catch (error) {
            console.error('AsyncStorage error: ' + error.message);
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}> Bienvenue </Text>

                <View style={styles.form}>
                    <TextInput
                        editable={true}
                        onChangeText={(username) => this.setState({ username })}
                        placeholder='Utilisateur'
                        ref='username'
                        returnKeyType='next'
                        style={styles.inputText}
                        value={this.state.username}
                    />

                    <TextInput
                        editable={true}
                        onChangeText={(password) => this.setState({ password })}
                        placeholder='Mot de passe'
                        ref='password'
                        returnKeyType='next'
                        secureTextEntry={true}
                        style={styles.inputText}
                        value={this.state.password}
                    />

                    <TouchableOpacity style={styles.buttonWrapper} onPress={this.userLogin.bind(this)}>
                        <Text style={styles.buttonText}>Se connecter</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonWrapper} onPress={this.userSignup.bind(this)}>
                        <Text style={styles.buttonText}>S'enregistrer</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default Auth;