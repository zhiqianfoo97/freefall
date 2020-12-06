import React from 'react';
import {StatusBar, StyleSheet, View, Text, Alert, Button, ImageBackground, TouchableOpacity } from 'react-native';
import Constants from '../utils/constants';

const Trivia = (props) => {
    let fact = props.fact;

    return (
        <TouchableOpacity  style={styles.trivia} onPress={()=>props.hideTrivia()}>
            <Text style={{ fontSize: 20, justifyContent: 'flex-start', color:'white', textAlign:'center'}}>
                Did you know?
            </Text>
            <Text style={{ height:'70%', color:'white', textAlign:'center', textAlignVertical:'center'}}>
                {fact}
            </Text>
        </TouchableOpacity >

    )

}


const styles = StyleSheet.create({
    trivia: {
        position: "absolute",
        top: '75%',
        flexDirection: "column",
        elevation:3,
        width: Constants.WIDTH,
        height: 200,
        backgroundColor: '#FF647C',
        
    },
})

export default Trivia;