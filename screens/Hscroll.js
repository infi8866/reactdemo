import React, { Component } from 'react';
import { Button, Text, View,Image,ScrollView,Slider, Dimensions,} from 'react-native';
const util = require('util');

export default class Hscroll extends Component {
    static navigationOptions = {
        header:null, 
      };
render(){
    let screenwidth = Dimensions.get('window').width;
    let screenheight = Dimensions.get('window').height;
    return(
       
        <ScrollView 
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        >


            <View style={{
        backgroundColor:'red',
        flex:1,
        width:screenwidth,
       
     
        justifyContent:'center',
        alignItems:'center'}}>

        <Text>Screen 1</Text>

        </View>

        <View style={{
        backgroundColor:'green',
        flex:1,
        width:screenwidth,
       
     
        justifyContent:'center',
        alignItems:'center'}}>

        <Text>Screen 2</Text>

        </View>


        <View style={{
        backgroundColor:'blue',
        flex:1,
        width:screenwidth,
       
     
        justifyContent:'center',
        alignItems:'center'}}>

        <Text>Screen 3</Text>

        </View>
            </ScrollView>

    );
}
    
}
