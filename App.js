import React from 'react';
import Login from './Components/Login';
import Accueil from './Components/Accueil';
import Inscription from './Components/Inscription';
import {Router, Scene} from 'react-native-router-flux';

export default class App extends React.Component {
  render() {
    return(
      <Router>
        <Scene key='root'>
          <Scene
            component={Auth}
            hideNavBar={true}
            initial={true}
            key='Auth'
            title='Auth'
          />
          <Scene
            component={Accueil}
            hideNavBar={true}
            key='Accueil'
            title='Accueil'
          />
        </Scene>
      </Router>
    )
  }
}


