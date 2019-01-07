import React, { Component } from 'react';
import {Container, Header, Content, List, ListItem, Left, Text, Right, Icon } from "native-base"
import {StyleSheet, TouchableOpacity} from "react-native"
export default class TittelDelete extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

     openDetailsHandler = (params) => {
        // open edit form 
        console.log("Inside openDetailsHandler");
        this.props.onGoEdit();

    }

    render() {
        return (

                    <List>
                        <ListItem  onPress={this.openDetailsHandler} noIndent style={{ backgroundColor: "#cde1f9" }}>
                       
                        <Left>
                       
                                <Text>{this.props.name}</Text>
                                
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