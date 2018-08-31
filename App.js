
import {StyleSheet, Text, View } from 'react-native';
import {createStackNavigator,} from 'react-navigation';


import splesh from './screens/splesh';
import Login from './screens/login';
import Home from './screens/Home';
import Register from './screens/Register';
import RagisterView from './screens/RagisterView';
import Hscroll from './screens/Hscroll';
import BasicFletList from './screens/BasicFletList';
      





const App = createStackNavigator({
  splesh: { screen: splesh },
  Login: { screen: Login },
  Home: { screen: Home },
  Register:{screen :Register},
  RagisterView:{screen : RagisterView},
  Hscroll:{screen : Hscroll},
  BasicFletList:{screen : BasicFletList}
});




export default App;