import React, { Component } from 'react';
import { Button, Text, View ,StyleSheet,ImageBackground,Image} from 'react-native';
const util = require('util');
import { NavigationActions } from 'react-navigation'



export default class splesh extends React.Component {
    


    static navigationOptions = {
        header: null,
    };


    componentDidMount() {
       
            //Start counting when the page is loaded
            this.timeoutHandle = setTimeout(()=>{
                const { navigate } = this.props.navigation;
                var {params} = this.props.navigation.state;
                console.log('go');
                navigate('Login', { })
          
              }, 500);
       
      }

   
   
    
   componentWillUnmount(){
       console.log("Call back")
        clearTimeout(this.timeoutHandle); // This is just necessary in the case that the screen is closed before the timeout fires, otherwise it would cause a memory leak that would trigger the transition regardless, breaking the user experience.
   }

   jump(){
    navigate('Login', {})
           } 





           
    render() {

     
      return (
        <ImageBackground source={require('../images/login.jpg')} style={{width: '100%', height: '100%'}}>
        <View  style={styles.Container}>
        <Image style={styles.image}  source={require('../images/logo.png') }/>
        <Text style={styles.TextDecoration}>Infinity</Text>
            </View>

      </ImageBackground>
      


    


    
      );
    }
  }



  const styles = StyleSheet.create({
    image: {
        width: 200,
        height: 200,
        resizeMode: 'cover',
        alignContent:'center'
    },
    Container: {
       flex:1,
        
        alignContent:'center',
        alignItems:'center',
        justifyContent: 'center',
        
    },
    TextDecoration: {
        
         
         fontSize : 40,
         color: '#fff',
         fontWeight:'bold'
     }
});