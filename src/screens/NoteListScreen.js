import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import TittelDelete from "../components/TittelDelete";
import HeaderTittel from "../components/HeaderTittel";

export default class NoteListScreen extends Component {
  constructor(props) {
    console.log("inside constructor");
    super(props);
    this.state = {
      notes: []
    };
  }

  async componentDidMount(){
    // fetch data 
    // fetch("http://localhost:3000/notes")
    // .then(resp => resp.json())
    // .then(data => console.log(data));

    const response =  await fetch("http://localhost:3000/notes");
    const data = await response.json();
    console.log(data);
      
        
  }
   onGoEdit = () => {
    this.props.navigation.navigate('NoteForm');
  }

  onGoAddHandler = () => {
    this.props.navigation.navigate('NoteForm');
  }


  
  componentWillReceiveProps(nextProps){ 
    console.log("inside will recieve props");
    const { navigation } = this.props;
    const note = navigation.getParam('note', null);
    console.log("note inside will recieve. ", note);
    // this.setState(prevState => ({
    //   notes: [...prevState.notes, note]
    // }))
  }
  

  render() {
    const { navigation } = this.props;
    const note = navigation.getParam('note', null);
    console.log("note inside render: ", note);
      return (
      <View style={styles.container}>
        <HeaderTittel name={note ? note.name : ""}
        onGoAdd={this.onGoAddHandler}
        />
        <TittelDelete name={note ? note.name : ""}
          onGoEdit={this.onGoEdit}
        />
      </View>

     
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