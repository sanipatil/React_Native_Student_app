/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './components/HomeScreen';
import ShowData from './components/ShowData';
import Coordinates from './components/Coordinates';
import EditData from './components/EditData';


const Navigator = createStackNavigator(
  {HomeScreen, ShowData, EditData, Coordinates},
  {initialRouteName :'HomeScreen'},
);

const App = createAppContainer(Navigator);

export default App;
