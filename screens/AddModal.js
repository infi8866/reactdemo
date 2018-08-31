import React, { Component } from 'react';
import {AppRegistry,Text, View,Image,ScrollView,Slider, TextInput,
    Dimensions,FlatList,Alert,TouchableHighlight, Platform} from 'react-native';

import FletListdata from '../data/FletListdata';
import Modal from 'react-native-modalbox';
import Button from 'react-native-button';

var screen = Dimensions.get('window');
export default class AddModal extends Component {
   
    constructor(props){
        
        super(props);
        
    }

    showAddModal = () => {
     
       this.refs.myModal.open();


    }



    render(){
        return(

            <Modal 
             ref={"myModal"}

            style={{
                justifyContent:'center',
                borderRadius : 0,
                shadowRadius:10,
                width:screen.width - 80,
                height:200
            }}

            position='center'
            backdrop={true}
            onClosed={() => {
                alert("Modal Closed");
            }}
            >



            <Text>Add New Food Details</Text>

             </Modal>
        );
    }
    
}
