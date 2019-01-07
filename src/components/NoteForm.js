import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Container, Button, Header,Textarea, Content, Form, Item, Input } from 'native-base';


export default class NoteForm extends Component {

  constructor(props) {
     
    super(props);
    const editNote = this.props.editNote;
    console.log("inside constrcutor edit:", editNote);
    
    this.state = {
      tittel:  editNote ? editNote.title : '', 
      content: editNote ? editNote.content : '', 

    };
  }

  tittelOnChangeHandler = (val) =>{
    this.setState(prevState => {
     return{
       ...prevState,
       tittel: val
     }

    })
  }

  contentOnChangeHandler = (val) =>{
    this.setState(prevContent => {
      return{
        ...prevContent,
        content: val
      }
    })
  }

   postNote = (note) => {
    
    fetch('http://localhost:3000/notes/', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(note),
    });

  }

  saveButton = () => {
    const title = this.state.tittel;
    const content = this.state.content;
    const note= {title, content};
     // post data to the server
     this.postNote(note);
     this.props.goToList(note);

  }
  

  render() {
    return (
      <Container style={styles.container}>
      <Header />
      <Content padder>
        <Form>
          <Item>
            <Input 
            onChangeText={this.tittelOnChangeHandler} 
            value={this.state.tittel} 
            placeholder="Tittel" />
          </Item>

          <Item >
           <View style={styles.textContainer}>
            <Textarea onChangeText={this.contentOnChangeHandler}
            value={this.state.content} 
            rowSpan={10} 
            bordered placeholder="Content" />
           </View>
             
          </Item>

          <Button block success onPress={this.saveButton}>
            <Text>Save</Text>
          </Button>
        </Form>
      </Content>
    </Container>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    
  },
  textContainer:{
    width: '100%'
  }
  
});