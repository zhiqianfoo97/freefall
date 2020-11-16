
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button
} from 'react-native';


const LandingPage = () => {
  return (
      <View style={styles.container}> 
          <View style={styles.nameContainer}>
            <Text style= {styles.name}>FreeFall</Text>
          </View>
          <Button title="Start"/>
          <Button title="Tutorial"/>
      </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  name:{
    alignItems: "center",
  }
});

export default LandingPage;
