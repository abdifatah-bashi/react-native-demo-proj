import React, { Component } from 'react';
import { View, Text } from 'react-native';
import NoteForm from "../components/NoteForm"

export default class NoteFormScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

   goToListHandler = (note) => {
     console.log("to be pass forward: ", note);
    this.props.navigation.navigate('NoteList', {note: note})
  }

  render() {
    return (
     <NoteForm
       goToList={this.goToListHandler}
     />
    );
  }
}
