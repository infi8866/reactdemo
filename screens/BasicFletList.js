import React, { Component } from 'react';
import {  AppRegistry,Text, View,Image,ScrollView,Slider, Dimensions,FlatList,Alert,TouchableHighlight, TextInput,StyleSheet} from 'react-native';
const util = require('util');
import FletListdata from '../data/FletListdata';
import Swipeout from 'react-native-swipeout';

import Modal from 'react-native-modalbox';
import Button from 'react-native-button';



class FletListItem extends Component{

constructor(props){
    super(props);
    this.state = {
        activeRowKey:null
    }
}

    render(){
        const swipeSetting = {
            autoClose:true,
            onClose:(secId, rowId, direction)=>{

                this.setState({activeRowKey:null})
            },
            onOpen:(secId, rowId, direction)=>{
                this.setState({activeRowKey: this.props.item.key})
            },


            right: [
{
   
//Edit Button


onPress:() => {
  
    this._onPressEdit
  //  alert("update");


},
text:'Edit', type:'primary'
},
//Delete Button

   
   {
    onPress:() => {
        const deletingRow = this.state.activeRowKey;
        Alert.alert(
            'Alert',
            'Are you sure you want to delete?',
       [
            {text:'No', onPress: () => console.log('Cancel Pressed'), style:'cancel'},
            {text:'Yes', onPress: () => {
                FletListdata.splice(this.props.index,1);


                //Refresh  Flat List

                this.props.parentFletList.refreshFletList(deletingRow);
            }},
        ],
    {cancelable:true}
);

    },
    text:'Delete', type:'delete'
}
            ],
            rowId: this.props.index,
            sectionId:1
        }

        return(
            <View style={{
                flex:1,
                flexDirection:'column',
             }} >
            
            <Swipeout {...swipeSetting}>
            
                
            <View style={{
                flex:1,
                flexDirection:'row',
                backgroundColor:'powderblue',
                marginTop:10,
                padding:10
            }}>
            <Image source={{uri:this.props.item.imageUrl}} 
            style={{width:100 , height:100, margin:5}}>
                </Image>

                <View style={{flex:1, flexDirection:'column'}}>
            <Text style={{color:'red' , fontWeight:'bold' , fontSize:16}}> {this.props.item.name}</Text>
            <Text> {this.props.item.foodDescription}</Text>
            </View>

                </View>
               
                </Swipeout>
                </View>
        );
    }
}



export default class BasicFletList extends Component {
   
    static navigationOptions = {
        header:null, 
      };
      generateKey = (numberOfCharacters) => {
           
        return require('random-string')({length:numberOfCharacters});
    }

      constructor(props){
        
        super(props);
        this.state = ({
            newFoodname : '',
            newFoodDetails: '',
            newFoodImage:'',
            deletedRowKey:null
        });
        this._onPressAdd = this._onPressAdd.bind(this);
        this._onPressEdit = this._onPressEdit.bind(this);
        this.Adddata = this.Adddata.bind(this);
     

    }



    refreshFletList = (deletedKey) => {
        this.setState((prvState) => {
            return{
                deletedRowKey:deletedKey
            };
        });

      
    }
    

    _onPressAdd () {
     // alert('Add your data');

     this.refs.myModal.open();
     
       }

       _onPressEdit () {
        // alert('Add your data');
   
        this.refs.myModal2.open();
        
          }


       ///////////////////////Edit Data ///////////////////////////////////
       Editdata(){
          
if(this.state.newFoodname.length == 0 || this.state.newFoodDetails.length == 0  || this.state.newFoodImage.length == 0  )
{
    alert("You must enter Details");
    return;

}

//update data
var foundIndex = FletListdata.findIndex(item => this.state.key == item.key);
if(foundIndex < 0)
{
    return;//not found
}

FletListdata[foundIndex].name =this.state.newFoodname;
FletListdata[foundIndex].foodDescription =this.state.newFoodDetails;
FletListdata[foundIndex].imageUrl =this.state.newFoodImage;


FletListdata.push(newFood);


alert('Data Edit Succesfully');
this.refs.myModal2.close();

      }

/////////////////////Add Data //////////////////////////////////////
 Adddata () {

if(this.state.newFoodname.length == 0 || this.state.newFoodDetails.length == 0  || this.state.newFoodImage.length == 0  )
{
    alert("You must enter Details");
    return;

}
const newkey = this.generateKey(24);
const newFood = {
    key:newkey,
    name:this.state.newFoodname,
    imageUrl:this.state.newFoodImage,
    foodDescription:this.state.newFoodDetails
};

FletListdata.push(newFood);


alert('Data Add Succesfully');
this.refs.myModal.close();

       }

render(){
    return(
      <View style={{flex:1,marginTop:22}}> 


      <View style={{backgroundColor:'tomato',
                    flexDirection:'row',
                    justifyContent:'flex-end',
                    alignItems:'center',
                    height:64}}>
                    <View style={{alignItems:'center',alignContent:'center'}}>
                    <Text style={styles.TextDecoration1}>Food List</Text>
                    </View>
                     <TouchableHighlight
                    style={{marginRight:10 }}
                    underlayColor='tomato'
                    onPress={this._onPressAdd}
                    >
                    <Image source={require('../images/add.png')} style={{width:35 , 
                    heigh:35 , 
                    
                    alignContent:'center',}} 
                     />

             </TouchableHighlight>

          </View>

             <FlatList data={FletListdata}
             renderItem={({item,index})=>{
               //  console.log(`Item = ${JSON.stringify(item)}, index = ${index}`);
               return(<FletListItem item={item} index={index} parentFletList={this}> </FletListItem>);
             }}>

          </FlatList>
          
          <Modal 
             ref={"myModal"}

            style={{
                justifyContent:'center',
                borderRadius : 9,
                shadowRadius:10,
                width:300,
                height:300
            }}

            position='center'
            backdrop={true}
            
            >



<View style={{ flex: 1 ,flexDirection:'column', alignContent:'center' , alignItems:'center'}}>
            <Text style={styles.UserTextDecoration1}>Add New Data</Text>


            <TextInput style={styles.UserTextDecoration1}   underlineColorAndroid="transparent" placeholder="New Food Name" onChangeText={(text) => this.setState({newFoodname : text})} value={this.state.newFoodname}/>

            <TextInput style={styles.UserTextDecoration1}   underlineColorAndroid="transparent" placeholder="New Food Details" onChangeText={(text) => this.setState({newFoodDetails : text})} value={this.state.newFoodDetails}/>
            
            <TextInput style={styles.UserTextDecoration1}   underlineColorAndroid="transparent" placeholder="Image Link" onChangeText={(text) => this.setState({newFoodImage : text})} value={this.state.newFoodImage}/>
            <TouchableHighlight style={styles.skipbutton} onPress={this.Adddata}>
            <Text style={styles.NumDecoration} > Add Data </Text>
            </TouchableHighlight>
          </View>

             </Modal>



             <Modal 
             ref={"myModal2"}

            style={{
                justifyContent:'center',
                borderRadius : 9,
                shadowRadius:10,
                width:300,
                height:300
            }}

            position='center'
            backdrop={true}
            
            >



<View style={{ flex: 1 ,flexDirection:'column', alignContent:'center' , alignItems:'center'}}>
            <Text style={styles.UserTextDecoration1}>Edit Data</Text>


            <TextInput style={styles.UserTextDecoration1}   underlineColorAndroid="transparent" placeholder="New Food Name" onChangeText={(text) => this.setState({newFoodname : text})} value={this.state.newFoodname}/>

            <TextInput style={styles.UserTextDecoration1}   underlineColorAndroid="transparent" placeholder="New Food Details" onChangeText={(text) => this.setState({newFoodDetails : text})} value={this.state.newFoodDetails}/>
            
            <TextInput style={styles.UserTextDecoration1}   underlineColorAndroid="transparent" placeholder="Image Link" onChangeText={(text) => this.setState({newFoodImage : text})} value={this.state.newFoodImage}/>
            <TouchableHighlight style={styles.skipbutton} onPress={this.Editdata}>
            <Text style={styles.NumDecoration} > Add Data </Text>
            </TouchableHighlight>
          </View>

             </Modal>
          
          </View>

    );
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
        
         marginRight:70,
         fontSize : 40,
         color: '#000',
         fontWeight:'bold'
     },
     UserTextDecoration1: {
        
         
        fontSize : 20,
        color: '#000',
        fontWeight:'bold',
        width:200,
        marginTop:20,
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
    width : 100,
    height : 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#CCC',
    marginTop : 50,
   
    
    borderRadius:16
    
  }
});