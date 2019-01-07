import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Container, Header, Left, Body, Right, Title, Icon } from 'native-base';

export default class HeaderTittel extends Component {
  constructor(props) {
    super(props);
    this.state = {
  
    };
  }

   goToAdd = () => {
    this.props.onGoAdd();
  }

  render() {
    return (
        <Header >
          <Left>
          <Body>
          
            <Title>Notater</Title>
        
          </Body>
          </Left>
          <Right>
          <TouchableOpacity onPress={this.goToAdd}>
          <Icon  name="add" style={styles.iconStyle}/>
          </TouchableOpacity>
          
          </Right>
        
        </Header>
    );
  }
}


const styles= StyleSheet.create({
  iconStyle:{
      color: "blue"
  }
});
 

