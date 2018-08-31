import React from 'react';
import { Button, Text, View,Image,ImageBackground ,StyleSheet,TextInput,TouchableHighlight,KeyboardAvoidingView, ScrollView,Alert} from 'react-native';
const util = require('util');


export default class login extends React.Component {

    constructor(props) {
        super(props)
        this.state ={
        Username : '',Password : ''}
      }
    
    Loginhere = () => {
       
      
        
        const { navigate } = this.props.navigation;
           
        const { Username }  = this.state ;
        const { Password }  = this.state ;
            
            console.log('Login here'+ Username);

 

            if (Username == "Umang" && Password == "123456") {
                navigate('Home',{Username})
            }
           else 
           {
            Alert.alert(this.state.Username  + " Wrong Username and Password");
           }
      }
    
    static navigationOptions = {
        header:null, 
      };


      Registerhere = () => {

        const { navigate } = this.props.navigation;
        var {params} = this.props.navigation.state;
        console.log('go');
        navigate('Register', { })
      }

      skip = () => {

        const { navigate } = this.props.navigation;
        var {params} = this.props.navigation.state;
        console.log('go');
        navigate('Hscroll', { })
      }




    render(){
       // console.log("This props Navigation =" + util.inspect(this.props.navigation,false,null));
        var {params} = this.props.navigation.state;
        
        return(
            <ImageBackground source={require('../images/login.jpg')} style={{width: '100%', height: '100%'}}>
       
       
        <KeyboardAvoidingView  style={styles.Container} behavior="padding" enabled>
        <Image style={styles.image}  source={require('../images/logo.png') }/>
        <Text style={styles.TextDecoration1}>Login</Text>
        <ScrollView keyboardDismissMode='on-drag'>
           <View style={styles.Container2}>
            
           <View style={styles.subContainer2}>
           
            </View>

            <View style={styles.subContainer2}>
            <Image style={styles.icon}  source={require('../images/user.png') }/>
            <TextInput style={styles.UserTextDecoration1}   underlineColorAndroid="transparent" placeholder="User Name" onChangeText={(Username) => this.setState({Username})} value={this.state.Username}/>
            </View>

            <View style={styles.subContainer2}>
            <Image style={styles.icon}   source={require('../images/pass.png') }/>
            <TextInput style={styles.UserTextDecoration1}  underlineColorAndroid="transparent" secureTextEntry={true} placeholder="Password" onChangeText={(Password) => this.setState({Password})} value={this.state.Password} />
            </View>

            <View style={styles.subContainer2}>
            <TouchableHighlight style={styles.button} onPress={this.Loginhere}>
            <Text style={styles.NumDecoration} > Login </Text>
            </TouchableHighlight>

            <TouchableHighlight style={styles.button} onPress={this.Registerhere}>
            <Text style={styles.NumDecoration} > Register </Text>
            </TouchableHighlight>
            </View>


            <View style={styles.subContainer3}>
            <TouchableHighlight style={styles.skipbutton} onPress={this.skip}>
            <Text style={styles.NumDecoration} > Skip </Text>
            </TouchableHighlight>
            </View>


           </View >

             </ScrollView>
           
            </KeyboardAvoidingView>
                
          
        
      </ImageBackground>
        )
    }
  }
  
  const styles = StyleSheet.create({
    image: {
        width: 150,
        height: 150,
        resizeMode: 'cover',
        alignContent:'center'
    },
    icon: {
        width: 40,
        height: 40,
        resizeMode: 'cover',
        alignContent:'center',
        marginRight:20
    },
    Container: {
       flex:1,
        
        alignContent:'center',
        alignItems:'center',
       
    },
    TextDecoration1: {
        
         
         fontSize : 40,
         color: '#000',
         fontWeight:'bold'
     },
     UserTextDecoration1: {
        
         
        fontSize : 20,
        color: '#000',
        fontWeight:'bold',
        width:200,
        borderColor: '#fff'
    },
     Container2: {
             flex:2,
         alignContent:'center',
         alignItems:'center',
         justifyContent: 'center',
         marginBottom:30,
        
     },
     subContainer2: {
        flex:1,
        margin:10,
    alignContent:'center',
    alignItems:'center',
    justifyContent: 'center',
    flexDirection: 'row',
   
},

subContainer3: {
    flex:5,
  
alignContent:'flex-end',
alignItems:'flex-end',
justifyContent: 'flex-end',
flexDirection: 'row',


},
button: {
    width : '25%',
    height : '50%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    
    marginTop : 50,
    marginRight : 20,
    marginLeft : 40,
    borderRadius:16
    
  },
  skipbutton: {
    width : '25%',
    height : '50%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    
    marginTop : 50,
    marginRight : 20,
    marginLeft : 40,
    borderRadius:16
    
  }
});