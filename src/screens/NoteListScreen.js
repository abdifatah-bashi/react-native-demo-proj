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

   fetchNotes = async () => {
    const response =  await fetch("http://localhost:3000/notes");
    const notes = await response.json();
    console.log("notes before setState: ", notes);
    this.setState(prevState => {
      return {
        ...prevState, 
        notes: notes
      }
    }, ()=> console.log("update state: ", this.state.notes ))

  }
  

   async componentDidMount(){
    await this.fetchNotes();     
    const note = this.state.notes[0];
    console.log("fetched note: ", note);
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
   this.fetchNotes();
  }
  

  render() {
    const note = this.state.notes[0];
    let title = '';

    if(note) title = note.title;
      return (
      <View style={styles.container}>
        <HeaderTittel 
        onGoAdd={this.onGoAddHandler}
        />
        <TittelDelete 
        notes={this.state.notes}
         noteTitle={title}
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




/*

                        <ListItem noIndent style={{  fontSize: 20, color: '#000'}}> 
                       
                        <View >
                        <TouchableOpacity>
                        <View 
                       
                         onPress={this.openDetailsHandler}>
                         <Text> {item.title}</Text>
                        </View>
                         
                        </TouchableOpacity>
 
                        <TouchableOpacity>
                         <View style={styles.right}>
                         <Icon name="trash" style={styles.iconStyle}/>
                         </View>
                        </TouchableOpacity>
                        </View>
                      
                        
                  
                          
                    
                        </ListItem>
                   
*/