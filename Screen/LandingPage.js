import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  Button,
  TouchableOpacity
} from 'react-native';


const LandingPage = props => {
  return (
      <View style={styles.container}> 
        <ImageBackground source = {require('../Image/space-background.jpeg')} style={styles.background} >
            <View style={styles.nameContainer}>
              <Text style= {styles.name}>FreeFall</Text>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={() => props.navigation.navigate('ChooseMap')} style={styles.button}>
                    <Text style={styles.buttonText}>START</Text>
                </TouchableOpacity>
                <View style ={styles.space}/>
                <TouchableOpacity onPress={() => props.navigation.navigate('TutorialPage1')} style={styles.button}>
                    <Text style={styles.buttonText}>TUTORIAL</Text>
                </TouchableOpacity>
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
  background:{
    flex: 1,
    width: '100%',
    height: '100%',
  },
  space:{
    height: 20,
  },
  button: {
    backgroundColor: "#7A56B1",
    padding: 10,
    borderRadius: 10
  },
  buttonText: {
      color: "white",
      textAlign: "center"
  }
 
});

export default LandingPage;
