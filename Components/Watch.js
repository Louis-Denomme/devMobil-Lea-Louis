import React from 'react'
import {WebView} from 'react-native'

export default class Film extends React.Component {

    render() {
        return (
            <WebView
                javaScriptEnabled={true}
                domStorageEnabled={true}
                source={{uri: this.props.navigation.state.params.url }}
            />
        )
    }
}