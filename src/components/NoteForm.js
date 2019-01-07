import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Container, Button, Header,Textarea, Content, Form, Item, Input } from 'native-base';


export default class NoteForm extends Component {

  constructor(props) {
 //   const note = this.props.note;
    super(props);
    this.state = {
      tittel:  "",
      content: ""

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


  saveButton = () => {
    const tit = this.state.tittel;
    const con = this.state.content;

    alert(tit + " " + con);
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