
import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Image,
  View,
  Text,
  Button
} from 'react-native';


const TutorialPage5 = props => {
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
                <Image style={styles.image2} source = {require('../Image/apple.png')}/>
              </View>

              <View style = {styles.tutorialWrapper}>
                <Text style={styles.tutorialHeader}>Eat apples for Quizzes!</Text>
                <Text style={styles.tutorialContent}>Test your understanding of each terrain. Complete 5 Quizzes on a terrain to demonstrate your knowledge! Every quiz answered correctly will increase your score!</Text>
                <View style = {styles.buttonWrapper}>
                    <Button style={styles.button1} onPress={() => props.navigation.navigate('TutorialPage4')} title="Previous"/>
                    <Button style={styles.button2} onPress={() => props.navigation.navigate('TutorialPage6')} title="Next"/>
                  </View>
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
    height: 300,
  },
  image1:{
    resizeMode:'contain',
    height: 300,
    width: 400,
  },
  image2:{
    marginRight: 20,
    resizeMode:'contain',
    height: 50,
    width: 50,
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
  },
  buttonWrapper:{
    marginTop: 20,
    flexDirection: "row",
    justifyContent:"space-between"
  },
});

export default TutorialPage5;
