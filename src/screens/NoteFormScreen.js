import React, { Component } from 'react';
import { View, Text } from 'react-native';
import NoteForm from "../components/NoteForm"

export default class NoteFormScreen extends Component {

  constructor(props) {
    console.log("inside FOrm Screen constructor", props);
    super(props);
    this.state = {
    };
  }

   goToListHandler = (note) => {
     console.log("to be pass forward: ", note);
    this.props.navigation.navigate('NoteList', {note: note})
  }
  componentWillReceiveProps(nextProps){
    console.log("will recieve: ", nextProps);
    if(nextProps.editNote){
      console.log("recieved prop: ", nextProps.editNote);
    }
  }

  render() {
    const {navigation} = this.props;
    const note = navigation.getParam('editNote', null);
    console.log("note to be sent: ", note);
    return (
     <NoteForm
     editNote={note}
       goToList={this.goToListHandler}
     />
    );
  }
}
