import { createStackNavigator, createAppContainer } from 'react-navigation'

import Accueil from '../Components/Accueil'
import Login from '../Components/Login'
import Inscription from '../Components/Inscription'
import Film from '../Components/Film'
import Watch from '../Components/Watch'

const FakeflixStackNavigator = createStackNavigator({
    Accueil: {
        screen: Accueil,
        navigationOptions: {
            title: 'Accueil - Fakeflix'
        }
    },
    Film: {
        screen: Film
    },
    Login: {
        screen: Login,
        navigationOptions: {
            title: 'Se connecter - Fakeflix'
        }
    },
    Inscription: {
        screen: Inscription,
        navigationOptions: {
            title: 'Inscription - Fakeflix'
        }
    },
    Watch: {
        screen: Watch,
    }
})

export default createAppContainer(FakeflixStackNavigator)