
import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Image,
  View,
  Text,
  Button,
  Dimensions,
  TouchableOpacity
} from 'react-native';

const win = Dimensions.get('window');
const TutorialPage6 = props => {
  return (
      <View style={styles.container}> 
        <ImageBackground source = {require('../Image/space-background.jpeg')} style={styles.background} >
          <View style = {styles.wrapper}>
            <View style = {styles.headerWrapper}>
                <Text style={styles.planetName}>Terra</Text>
                <Text style={styles.velocity}>v = 140m/s</Text>
                <Text style={styles.gravity}>g = 9.81m/s^2</Text>
              </View>
              <View style = {styles.headerWrapper1}>
                <Text style = {styles.score}>Score: 1500</Text>
                <Text style = {styles.question}>Q: 0/30</Text>
              </View>
              <View style={styles.imageWrapper}>
                <Image style={styles.image1} source = {require('../Image/snake.png')}/>
                <Image style={styles.image2} source = {require('../Image/rock-raw.png')}/>
              </View>
              <View style = {styles.cloudImageWrapper}>
                <Image style={styles.cloudImage} source = {require('../Image/cloud.png')}/>
                <Image style={styles.cloudImage2} source = {require('../Image/cloud.png')}/>
                <Image style={styles.cloudImage3} source = {require('../Image/cloud.png')}/>
                <Image style={styles.image3} source = {require('../Image/apple.png')}/>
              </View>
            
              
              <View style = {styles.tutorialWrapper}>
                <Text style={styles.tutorialHeader}>Let’s START!</Text>
                <TouchableOpacity onPress={() => props.navigation.navigate('GameMap')} style={styles.button}>
                    <Text style={styles.buttonText}>START</Text>
                </TouchableOpacity>
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
  imageWrapper:{
    marginTop: 20,
    paddingLeft: 30,
    justifyContent:"center",
    alignItems:"center",
    height: 200,
  },
  image1:{
    resizeMode:'contain',
    height: 250,
    width: 400,
  },
  image2:{
    marginRight: 20,
    resizeMode:'contain',
    height: 50,
    width: 50,
  },
  image3:{
    position: "absolute",
    left: 300,
    resizeMode:'contain',
    height: 50,
    width: 50,
  },
  appleImageWrapper:{
    height: 50,
  },
  cloudImageWrapper:{
    height: 200,
  },
  cloudImage:{
    marginLeft: 20,
    height: 50,
    width: 100,
  },
  cloudImage2:{
    height: 50,
    alignSelf: "flex-end",
    marginRight: 50,
    width: 100,
  },
  cloudImage3:{
    height: 50,
    marginLeft: 100,
    width: 100,
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
  background:{
    flex: 1,
    width: '100%',
    height: '100%',
  },
  tutorialWrapper:{
    padding:20,
    width: win.width,
    justifyContent:"space-between",
    position: "absolute",
    bottom: 20,
    paddingLeft: 40,
    height: 150,
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

export default TutorialPage6;
