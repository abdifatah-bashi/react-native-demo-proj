import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Container, Button, Header,Textarea, Content, Form, Item, Input } from 'native-base';


export default class NotatDetaljer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Container style={styles.container}>
      <Header />
      <Content padder>
        <Form>
          <Item>
            <Input name={} placeholder="Titel" />
          </Item>

          <Item >
           <View style={styles.textContainer}>
           <Textarea rowSpan={10} bordered placeholder="Content" />
           </View>
             
          </Item>

          <Button block success>
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