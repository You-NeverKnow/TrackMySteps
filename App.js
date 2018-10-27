import React from 'react';
import { createStackNavigator } from 'react-navigation';
import MainScreen from "./Pages/Mainscreen";
import HomeScreen from "./Pages/HomeScreen";
import OutputScreen from "./Pages/OutputScreen";

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Main: MainScreen,
    Output: OutputScreen
  },
  {
    initialRouteName: 'Home',
  }
);

export default class App extends React.Component{
  render() {
    return <RootStack />
  }
}

