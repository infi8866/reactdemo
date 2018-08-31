import React, { Component } from 'react';
import { Button, Text, View ,StyleSheet,Image} from 'react-native';


class BackgroundImage extends Component {

    render() {
        return (
            <Image source={require('..//images/login.jpg')}
                  style={styles.backgroundImage}>
                
                  {this.props.children}

            </Image>
        )
    }
}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover'
    },

    text: {
        textAlign: 'center',
        color: 'white',
        backgroundColor: 'rgba(0,0,0,0)',
        fontSize: 32
    }
});