import React from 'react'
import { StyleSheet, View, TextInput, Button } from 'react-native'

export default class Inscription extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', padding: 50, borderRadius: 4 }}>
                <TextInput placeholder='Nom'/>
                <TextInput placeholder='Prénoom'/>
                <TextInput placeholder='Adresse email'/>
                <TextInput placeholder='Mot de passe'/>
                <TextInput placeholder='Mot de passe'/>
                <Button title='Valider' onPress={() => {}}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({

})