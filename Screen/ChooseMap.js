import React, { useState } from 'react';
import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  Button,
  Image,
  TouchableOpacity
} from 'react-native';


const ChooseMap = () => {
  const [mapChosen, setMap] = useState("Terra");
 
    return (
        <View style={{display:"flex", flexDirection:"column"}}>
          <ImageBackground source={require("../Image/space-background.jpeg")} style={{height:"100%", width:"100%"}}>
            <View style={{height:"20%", width:"100%"}}></View>

            <View style={{justifyContent:"center", width:"100%", paddingBottom:10}}>
                <Text style={{color:"white",textAlign:"center"}}>Select Map</Text>
            </View>

            <View style={styles.container1}>
              <View style={{width:"50%", justifyContent:"center"}}  >
                <TouchableOpacity>
                  <Image style={styles.imageStyle} source={require("../Image/earth.png")}>
                  </Image>
                  <Text style={styles.whiteFont2}>Terra</Text>
                </TouchableOpacity>
              </View>
                
            </View>

            <View style={styles.container2}>

              <View style={styles.container3}>
                <TouchableOpacity onPress={useState("Moon")}>
                  <Image style={styles.image2Style} source={require("../Image/moon.png")}>
                  </Image>
                  <Text style={styles.whiteFont2}>Moon</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.container3}>
                <TouchableOpacity onPress={useState("Mars")}>
                  <Image style={styles.image2Style} source={require("../Image/mars.png")}>
                  </Image>
                  <Text style={styles.whiteFont2}>Mars</Text>
                </TouchableOpacity>
              </View>
                
            </View>
          </ImageBackground>
        </View>

    );
};


const styles = StyleSheet.create({
  whiteFont:{
    color:"white",
  },
  whiteFont2:{
    color:"white",textAlign:"center",height:"10%"
  },
  imageStyle:{
    height:"90%",
    width:"50%",
    resizeMode:"contain",
    alignSelf:"center",
  },
  container1:{
    flexDirection:"row", justifyContent:"center", height:"30%", width:"100%",
  },
  container2:{
    display:"flex", height:"30%", width:"100%", flexDirection:"row"
  },
  container3:{
    display:"flex", flexDirection:"column", width:"50%"
  },
  image2Style:{
    resizeMode:"contain", height:"90%", width:"50%", alignSelf:"center",
  },
});

export default ChooseMap;