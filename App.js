import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import NotatDetaljer from "./src/components/NotatDetaljer";
import HeaderTittel from "./src/components/HeaderTittel";
import TittelDelete from "./src/components/TittelDelete"
export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <HeaderTittel />
        <TittelDelete />
      </View>

      //<NotatDetaljer/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  }, 
  headerBox:{
    width : "100%"
  },
  tittelBox:{

    width : "100%"
  }
});
