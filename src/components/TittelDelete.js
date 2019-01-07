import React, { Component } from 'react';
import {Container, Header, Content, List, ListItem, Left, Text, Right, Icon } from "native-base"
import {StyleSheet, FlatList, TouchableOpacity, View} from "react-native"
export default class TittelDelete extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

     openDetailsHandler = (note) => {
        // open edit form 
        console.log("Inside openDetailsHandler", note);
        this.props.onGoEdit(note);

    }
    render() {
        return (
           <View >
            <FlatList
                data={this.props.notes}
                renderItem={({item}) => 
                <ListItem >  
                    <Left>
                        <TouchableOpacity onPress={()=>this.openDetailsHandler({item})}>
                            <Text>{item.title}</Text>
                            </TouchableOpacity>
                        </Left>
                    <Right>
                        <TouchableOpacity>
                        <Icon name="trash" style={styles.iconStyle}/>
                        </TouchableOpacity>
                    </Right>
                </ListItem>
                }
                />

           </View>

        );
    }
}

const styles = StyleSheet.create({
    iconStyle:{
        color: "red"
    },
    
    

   
});


