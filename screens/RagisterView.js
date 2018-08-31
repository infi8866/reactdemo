import React, { Component } from 'react';
import { Button,ImageBackground,StyleSheet, Platform, View, ActivityIndicator, FlatList, Text, Image, Alert, YellowBox,TextInput,TouchableHighlight} from 'react-native';
const util = require('util');
import { NavigationActions } from 'react-navigation'




export default class RagisterView extends React.Component {
    

    constructor(props) {
 
        super(props);
      
        this.state = {
      
          isLoading: true
      
        }
      
        YellowBox.ignoreWarnings([
         'Warning: componentWillMount is deprecated',
         'Warning: componentWillReceiveProps is deprecated',
       ]);
      
      }

     
      


    static navigationOptions = {
        header: null,
    };
    render() {
       
            
            const { navigate } = this.props.navigation;
            var {params} = this.props.navigation.state;
            console.log(params.FirstName); 
         
     
      return (
    
        <View  style={styles.Container}>
        <Image style={styles.image}  source={require('../images/logo.png') }/>
        <Text style={styles.HeadertDecoration}>Welcome</Text>
        <Text style={styles.TextDecoration}>FirstName : {params.FirstName}</Text>
        <Text style={styles.TextDecoration}> LastName : {params.LastName}</Text>
        <Text style={styles.TextDecoration}>Email : {params.Email}</Text>
        <Text style={styles.TextDecoration}>Password : {params.Password}</Text>
        <Text style={styles.TextDecoration}>Password : {params.CNPassword}</Text>
        <Text style={styles.TextDecoration}>Country : {params.language}</Text>
        <Text style={styles.TextDecoration}>Mobile : {params.language1},{params.Mobile}</Text>
        <Text style={styles.TextDecoration}>Age : {params.value} </Text>


        </View>
          
        
      );
    }
  }



  const styles = StyleSheet.create({
    image: {
        marginTop:30,
        width: 50,
        height: 50,
        resizeMode: 'cover',
        alignContent:'center'
    },
    MainContainer :{
 
        justifyContent: 'center',
        flex:1,
        margin: 5,
        marginTop: (Platform.OS === 'ios') ? 20 : 0,
     
    },
    Container: {
       flex:1,
        alignContent:'center',
        alignItems:'center',
        backgroundColor:'#000'
      
    },
    subContainer2: {
        flex:1,
        margin:10,
    alignContent:'center',
    alignItems:'center',
    justifyContent: 'center',
    flexDirection: 'row',
   
},
UserTextDecoration: {
        
         
    fontSize : 14,
    color: '#fff',
    fontWeight:'bold',
    width:200,
    borderColor: '#fff'
},
HeadertDecoration: {
        
         
         fontSize : 40,
         color: '#fff',
         fontWeight:'bold'
     },
     TextDecoration: {
        
         
        fontSize : 20,
        color: '#fff',
        fontWeight:'bold'
    },
     imageView: {
 
        width: '50%',
        height: 100 ,
        margin: 7,
        borderRadius :100
     
    },
    icon: {
        width: 40,
        height: 40,
        resizeMode: 'cover',
        alignContent:'center',
        marginRight:10,
        marginLeft:10
    },
     
    textView: {
     
        width:'50%', 
        textAlignVertical:'center',
        padding:10,
        color: '#000'
     
    },
    button: {
        width : '25%',
        height : '30%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        
       
    
        marginLeft : 40
        
      }
});