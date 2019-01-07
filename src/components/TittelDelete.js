import React, { Component } from 'react';
import {Container, Header, Content, List, ListItem, Left, Text, Right, Icon } from "native-base"
import {StyleSheet} from "react-native"
export default class TittelDelete extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (

                    <List>
                        <ListItem noIndent style={{ backgroundColor: "#cde1f9" }}>
                            <Left>
                                <Text>Tittel</Text>
                            </Left>
                            <Right>
                                <Icon name="trash" style={styles.iconStyle}/>
                            </Right>
                        </ListItem>
                    </List>

        );
    }
}

const styles= StyleSheet.create({
    iconStyle:{
        color: "red"
    }
});