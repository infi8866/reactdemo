import React from 'react';
import { Button, Text, View,Image,ImageBackground ,StyleSheet,TextInput,TouchableHighlight,ScrollView,Slider,Picker,KeyboardAvoidingView, Alert} from 'react-native';
const util = require('util');


export default class Register extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
        FirstName : '',
        LastName : '',
        Email: '',
        Password:'',
        CNPassword: '',
        language:'',
         language1:'',
         Mobile:'',
           value :50}}
    

           
        
    
    

      Clear = () => {

        this.setState({
            FirstName: this.state.FirstName = '',
            LastName: this.state.LastName = '',
            Email: this.state.Email = '',
            Password: this.state.Password = '',
            CNPassword: this.state.CNPassword = '',
            language: this.state.language = '',
            language1: this.state.language1 = '',
            Mobile: this.state.Mobile = '',
            value: this.state.value = 50,
         
           });
         
     
       

      }

      Save = () => {
       
      
        
        const { navigate } = this.props.navigation;
           
        const { FirstName }  = this.state ;
        const { LastName }  = this.state ;
        const { Email }  = this.state ;
        const { Password }  = this.state ;
        const { CNPassword }  = this.state ;
        const { language }  = this.state ;
        const { language1 }  = this.state ;
        const { Mobile }  = this.state ;
        const { value }  = this.state ;

        if (Password == CNPassword) {
            console.log('Login here'+ FirstName);
            navigate('RagisterView',{FirstName,LastName,Email,Password,CNPassword,language,language1,Mobile,value})
        }
        else
        {
            Alert.alert("Password not Mach");
        }
            
           
           
          
      }
    
    
    static navigationOptions = {
        header:null, 
      };
    render(){
       // console.log("This props Navigation =" + util.inspect(this.props.navigation,false,null));
        //var {params} = this.props.navigation.state;
        
        return(
       
       <View style={styles.Container}>
       
        <Text style={styles.MainTextDecoration}>Register Here</Text>
        <Text>Create your account.</Text>

        <KeyboardAvoidingView  style={styles.Container} behavior="padding" enabled>
        <ScrollView  >  
        <View style={styles.Container2}>

       
        <View style={styles.subContainer2}>
        <TextInput style={styles.UserTextDecoration} underlineColorAndroid="transparent" placeholder="First Name"  onChangeText={(FirstName) => this.setState({FirstName})}  value={this.state.FirstName}/>  
        <TextInput style={styles.UserTextDecoration}  underlineColorAndroid="transparent" placeholder="Last Name" onChangeText={(LastName) => this.setState({LastName})} value={this.state.LastName}/>
        </View>
        <View style={styles.subContainer2}>
        <TextInput style={styles.UserTextDecoration} width="90%" placeholder="Email Here" underlineColorAndroid="transparent" onChangeText={(Email) => this.setState({Email})} value={this.state.Email}/>
        </View>
        <View style={styles.subContainer2}>
        <TextInput style={styles.UserTextDecoration} underlineColorAndroid="transparent"  placeholder="Password" secureTextEntry={true} onChangeText={(Password) => this.setState({Password})} value={this.state.Password}/>
        <TextInput style={styles.UserTextDecoration} underlineColorAndroid="transparent"  placeholder="Conform Password" secureTextEntry={true} onChangeText={(CNPassword) => this.setState({CNPassword})} value={this.state.CNPassword}/>
        </View>
        <View style={styles.subContainer2}>
        <Slider thumbTintColor='#000' step={1} maximumValue={100} width='70%'
    value={this.state.value }
    onValueChange={(value) => this.setState({value})} />
  <Text style={{marginLeft:30}}>Age: {this.state.value}</Text>
        </View>
        <View style={styles.subContainer2}>
        <Text  style={{ height:20, width: 150 ,marginLeft:10}}  >Country:</Text>  
        <Picker
  selectedValue={this.state.language}
  style={{ height:20, width: 200 }}
  onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
  <Picker.Item label="Select Country" value="1" />
  <Picker.Item label="Albania" value="Al" />
  <Picker.Item label="Bahrain" value="B" />
  <Picker.Item label="Belarus" value="Be" />
  <Picker.Item label="Canada" value="C" />
  <Picker.Item label="Denmark" value="D" />
  <Picker.Item label="Ecuador" value="E" />
  <Picker.Item label="Finland" value="F" />
  <Picker.Item label="Haiti" value="H" />
  <Picker.Item label="India" value="I" />
  <Picker.Item label="Japan" value="J" />
  <Picker.Item label="Kenya" value="K" />
  <Picker.Item label="Laos" value="L" />
  <Picker.Item label="Madagascar" value="M" />
  <Picker.Item label="Nauru" value="N" />
</Picker>
        </View>
        <View style={styles.subContainer2}>
        <Text style={{marginRight:10}}>Mobile:</Text>  


        <Picker
  selectedValue={this.state.language1}  style={{ height:20, width: 140}}  onValueChange={(itemValue, itemIndex) => this.setState({language1: itemValue})}>
  <Picker.Item label="Code" value="10" />
  <Picker.Item label="+91" value="11" />
  <Picker.Item label="+1" value="12" />
  <Picker.Item label="+92" value="13" />
  <Picker.Item label="+93" value="14" />
  <Picker.Item label="+12" value="15" />
  <Picker.Item label="+66" value="16" />
  <Picker.Item label="+97" value="17" />
  <Picker.Item label="+88" value="18" />
  <Picker.Item label="+66" value="19" />
  <Picker.Item label="+99" value="20" />
  <Picker.Item label="+101" value="21" />
  <Picker.Item label="+111" value="22" />
  <Picker.Item label="+123" value="23" />
  <Picker.Item label="+123" value="24" />
</Picker>

        <TextInput style={styles.UserTextDecoration2} width="35%" placeholder="Mobile Number" onChangeText={(Mobile) => this.setState({Mobile})} value={this.state.Mobile}/>
        </View>
       
        <View style={styles.subContainer2}>
        <TouchableHighlight style={styles.button} onPress={this.Clear}>
            <Text style={styles.NumDecoration} > Clear </Text>
            </TouchableHighlight>

            <TouchableHighlight style={styles.button} onPress={this.Save}>
            <Text style={styles.NumDecoration} > Register </Text>
            </TouchableHighlight>
        </View>    

        
        </View>
        </ScrollView>
        </KeyboardAvoidingView>    
        </View>
    
        
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
       flex:2,
         marginTop:20,
        
        alignContent:'center',
        alignItems:'center',
        backgroundColor: '#fff',
       
    },
    TextDecoration: {
         width:120,   
         marginRight:20,
         fontSize : 20,
         color: '#CCC',
         fontWeight:'bold'
     },
     UserTextDecoration: {
        
      
        fontSize : 14,
        color: '#000',
        fontWeight:'bold',
        width:'43%',
        height:30,
        borderColor: '#CCC',
        borderWidth: 1,
        marginLeft:20
        
        
    
    },
    UserTextDecoration2: {
        
      
        fontSize : 14,
        color: '#000',
        fontWeight:'bold',
        width:'40%',
        height:30,
        borderColor: '#CCC',
        borderWidth: 1,
        marginLeft:10
        
        
    
    },
    MainTextDecoration: {
        
         
        fontSize : 20,
        color: '#000',
        fontWeight:'bold',
        marginTop:22 ,
        marginBottom:30,
     
    },

     Container2: {
             marginTop:50,
             flex:4,
             backgroundColor: '#fff',
             marginBottom:20,
         
        
     },
     subContainer2: {
        flex:2,
        margin:10,
        flexDirection: 'row',
   
},

subContainer3: {
    flex:2,
alignContent:'center',
alignItems:'center',
justifyContent: 'center',
flexDirection: 'row',

},
button: {
    width : '25%',
    height : '50%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#CCC',
    
    marginTop : 50,
    marginRight : 20,
    marginLeft : 60,
    marginBottom : 40,
    borderRadius:16
    
  }
});