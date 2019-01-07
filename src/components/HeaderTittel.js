import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Container, Header, Left, Body, Right, Title } from 'native-base';

export default class HeaderTittel extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <Container>
        <Header>
          <Left/>
          <Body>
            <Title>Notater</Title>
          </Body>
          <Right />
        </Header>
      </Container>
    );
  }
}
