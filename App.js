
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import In from './screens/In'
import Fb from './screens/Fb'
import {createAppContainer} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'

export default class App extends React.Component{
  render(){
    return(
      <AppContainer/>
    )
  }
}
const TabNavigator=createBottomTabNavigator({
  Facebook:{screen:Fb},
  Instagram:{screen:In}
})
const AppContainer=createAppContainer(TabNavigator)