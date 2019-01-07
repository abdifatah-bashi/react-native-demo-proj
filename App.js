import React,  {Component} from "react";
import { View, StyleSheet  } from "react-native";
import  NotatDetaljer  from "./src/components/NotatDetaljer";

export default class App extends Component {
  render() {
    return (
     <NotatDetaljer/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  }
});
