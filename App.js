import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import {createStackNavigator, createAppContainer} from "react-navigation";
import NoteFormScreen from "./src/screens/NoteFormScreen";
import NoteListScreen from "./src/screens/NoteListScreen";


const AppNavigator = createStackNavigator(
  {
  NoteForm: NoteFormScreen,
  NoteList: NoteListScreen
  }, {initialRouteName: "NoteList"}
  

);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
  render() {
    return <AppContainer/>;
  }
}


