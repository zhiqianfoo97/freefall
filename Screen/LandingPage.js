import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  Button
} from 'react-native';


const LandingPage = () => {
  return (
      <View style={styles.container}> 
        <ImageBackground source = {require('./Image/background.png')} style={styles.background} >
            <View style={styles.nameContainer}>
              <Text style= {styles.name}>FreeFall</Text>
            </View>
            <View style={styles.buttonContainer}>
              <Button style={styles.button1} title="Start"/>
              <Button style={styles.button} title="Tutorial"/>
            </View>

        </ImageBackground>
          
      </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  nameContainer:{
    flex: 2,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  name:{
    fontFamily: "Roboto",
    fontWeight: "400",
    fontSize: 50,
    color: "white",
  },
  buttonContainer:{
    flex: 2,
    justifyContent: "center",
    paddingLeft: 80,
    paddingRight: 80,
  },
  button:{
    borderRadius: 50,
    marginBottom: 20,
    color: "red",
  },
  background:{
    flex: 1,
    width: '100%',
    height: '100%',
  }
});

export default LandingPage;
