
import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button
} from 'react-native';


const TutorialPage2 = () => {
  return (
      <View style={styles.container}> 
        <ImageBackground source = {require('./Image/background.png')} style={styles.background} >
          <View style = {styles.wrapper}>
            <View style = {styles.headerWrapper}>
                <Text style={styles.planetName}>Terra</Text>
                <Text style={styles.velocity}>v = 140m/s</Text>
                <Text style={styles.gravity}>g = 9.81m/s^2</Text>
              </View>
              <View style = {styles.headerWrapper1}>
                <Text style = {styles.score}>Score: 1400</Text>
                <Text style = {styles.question}>Q: 0/100</Text>
              </View>
              <View style = {styles.tutorialWrapper}>
                <Text style={styles.tutorialHeader}>This Is Your Character </Text>
                <Text style={styles.tutorialContent}>Use the Left and Right navigation arrows to move your snake. Your snake’s length decreases every 2 seconds due to fire! The degree of reduction depends on current free falling speed!</Text>
              </View>
            </View>
        </ImageBackground>          
      </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  wrapper:{
    padding: 20,
    flex: 1,
    flexDirection: "column",
  },
  headerWrapper:{
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerWrapper1:{
    flexDirection: "row",
    justifyContent: "space-between",
  },
  planetName:{
    color: "white",
    fontFamily: "Fredoka One",
    fontWeight: "400",
    fontSize: 40,
  },
  velocity:{
    color: "white",
    fontFamily: "Roboto",
    fontWeight: "400",
    fontSize: 20,
    marginTop: 15,
  },
  gravity:{
    color: "white",
    fontFamily: "Roboto",
    fontWeight: "400",
    fontSize: 20,
    marginTop: 15,
  },
  score: {
    color: "white",
    fontFamily: "Roboto",
    fontWeight: "400",
    fontSize: 25,
    color: 'rgba(255,100,124,1)',
  },
  question:{
    color: "white",
    fontFamily: "Roboto",
    fontWeight: "400",
    fontSize: 25,
    color: 'rgba(144,218,251,1)',
  },
  tutorialHeader:{
    color: "white",
    fontFamily: "Roboto",
    fontWeight: "400",
    flexWrap: 'wrap',
    fontSize: 30,
    textAlign: "center",
  },
  tutorialContent:{
    color: "white",
    fontFamily: "Roboto",
    fontWeight: "400",
    flexWrap: 'wrap',
    textAlign: "center",
    fontSize: 15,
  },
  background:{
    flex: 1,
    width: '100%',
    height: '100%',
  },
  tutorialWrapper:{
    position: "absolute",
    bottom: 20,
    paddingLeft: 40,
  }
});

export default TutorialPage2;
