import React from 'react'
import { StyleSheet, View, TextInput, Button } from 'react-native'

export default class Login extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', padding: 50, borderRadius: 4 }}>
                <TextInput placeholder='Adresse email'/>
                <TextInput placeholder='Mot de passe'/>
                <Button title='Connexion' onPress={() => {}}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({

})