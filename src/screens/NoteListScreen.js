import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import TittelDelete from "../components/TittelDelete";
import HeaderTittel from "../components/HeaderTittel";
import { connect } from 'react-redux';
import fetchStore from '../store/actions/actionNotes';

 class NoteListScreen extends Component {
 

   componentDidMount(){
     console.log("on diimont");
    this.props.onShowNotes();
  
  }

   onGoEdit = (item) => {
    const id = item.item.id;
    const title = item.item.title;
    const content = item.item.content;
    const editNote ={id, title, content}
    console.log("editNote1:" , editNote)

    this.props.navigation.navigate('NoteForm', {editNote: editNote});
  }

  onGoAddHandler = () => {
    this.props.navigation.navigate('NoteForm');
  }


  
  componentWillReceiveProps(nextProps){ 
   //this.fetchNotes();
  }
  

  render() {
   // const note = this.state.notes[0];
   // let title = '';

   // if(note) title = note.title;
      return (
      <View style={styles.container}>
        <HeaderTittel 
        onGoAdd={this.onGoAddHandler}
        />
        <TittelDelete 
       // notes={this.state.notes}
       notes={this.props.notes}
        // noteTitle={title}
          onGoEdit={this.onGoEdit}
        />
      </View>

     
    );
  }
}

const mapStateToProps = state =>{
  console.log("map  :", state.root.notes);
  return {
    notes : state.root.notes
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onShowNotes :() => dispatch(fetchStore())

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


export default connect(mapStateToProps,mapDispatchToProps) (NoteListScreen);

