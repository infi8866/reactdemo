import React, { Component } from 'react';
import { Button,ImageBackground,StyleSheet, Platform, View, ActivityIndicator, FlatList, Text, Image, Alert, YellowBox,TextInput,TouchableHighlight} from 'react-native';
const util = require('util');
import { NavigationActions } from 'react-navigation'




export default class Home extends React.Component {
    

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

     
      Flist = () => {

        const { navigate } = this.props.navigation;
        var {params} = this.props.navigation.state;
        console.log('go');
        navigate('BasicFletList', { })
      }



      GetItem (flower_name) {
  
        Alert.alert(flower_name);
      }       

      FlatListItemSeparator = () => {
        return (
          <View
            style={{
              height: .5,
              width: "100%",
              backgroundColor: "#000",
            }}
          />
        );
      }
      
      webCall=()=>{
      
       return fetch('https://itunes.apple.com/search?term=jack+johnson')
              .then((response) => response.json())
              .then((responseJson) => {
                this.setState({
                  isLoading: false,
                  dataSource: responseJson.results
                }, function() {
                  // In this block you can do something with new state.
                });
              })
              .catch((error) => {
                console.error(error);
              });
      
      }
      
      componentDidMount(){
      
       this.webCall();
      
      }

    static navigationOptions = {
        header: null,
    };
    render() {
        if (this.state.isLoading) {
            return (
        
             <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        
                <ActivityIndicator size="large" color='red' /> 
                <Text>your data will loading....</Text>
        
              </View>
              
            );
        
          }
            
            const { navigate } = this.props.navigation;
            var {params} = this.props.navigation.state;
            console.log(params.Username); 
            if (Platform.OS == 'android')
            {
                console.log(Platform.OS)
            }
     
      return (
          
       <View>
        <View  style={styles.Container}>
        <Image style={styles.image}  source={require('../images/logo.png') }/>
        <Text style={styles.TextDecoration}>Welcome</Text>
        <Text style={styles.TextDecoration}>{params.Username}</Text>

        <View style={styles.subContainer2}>
            <Image style={styles.icon}  source={require('../images/search.png') }/>
            <TextInput style={styles.UserTextDecoration} placeholder="Search Here" onChangeText={(Username) => this.setState({Username})}/>
            <TouchableHighlight style={styles.button} onPress={this.Registerhere}>
            <Text style={styles.NumDecoration} > Search </Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.button} onPress={this.Flist}>
            <Text style={styles.NumDecoration} > List </Text>
            </TouchableHighlight>
            
            </View>
        </View>


           
 
 <FlatList
 
  data={ this.state.dataSource }
  
  ItemSeparatorComponent = {this.FlatListItemSeparator}

  renderItem={({item}) => 
  
      <View style={{flex:1, flexDirection: 'row'}}>

        <Image source = {{ uri: item.artworkUrl100 }} style={styles.imageView} />
      
        <Text onPress={this.GetItem.bind(this, item.trackName)} style={styles.textView} >{item.trackName}</Text>

      </View>
  
    }

  keyExtractor={(item, index) => index.toString()}
  
  />


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
    width:120,
    borderColor: '#fff'
},
    TextDecoration: {
        
         
         fontSize : 40,
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
        width: 20,
        height: 20,
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
        height : '25%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        
       
    
        marginLeft : 10
        
      }
});