import React from 'react';
import {StatusBar, StyleSheet, View, Text, Alert, Button, ImageBackground, TouchableOpacity} from 'react-native';


const checkAnswer = (updateScore, ques, answer) =>{
    if (ques === answer){
        updateScore(500);
    }else{
        updateScore(0);
    }
}

const Quiz = (props) => {
    let question = props.questionL[0].question;
    let answer = props.questionL[0].answer;

    let realAnswer = props.questionL[0].answer[4];
    return(
      <View style={styles.quiz}>
        <Text style={styles.textS}>
            {question}
        </Text>
        <View style={styles.quizC1}>
            <View style={{flex:1, width:'50%'}}>
                <TouchableOpacity style={styles.button1}  onPress={()=>checkAnswer(props.updateScore, '0', realAnswer)}>
                    <Text style={{textAlign:'center', color:'white'}}>{answer[0]}</Text>
                </TouchableOpacity>
            </View> 
            <View style={{flex:1, width:'50%'}}>
                <TouchableOpacity style={styles.button2}  onPress={()=>checkAnswer(props.updateScore, '1', realAnswer)}>
                    <Text style={{textAlign:'center', color:'white'}}>{answer[1]}</Text>
                </TouchableOpacity>
            </View> 
        </View>
        <View style={styles.quizC1}>
            <View style={{flex:1, width:'50%'}}>
                <TouchableOpacity style={styles.button3}  onPress={()=>checkAnswer(props.updateScore, '2', realAnswer)}>
                    <Text style={{textAlign:'center', color:'white'}}>{answer[2]}</Text>
                </TouchableOpacity>
            </View> 
            <View style={{flex:1, width:'50%'}}>
                <TouchableOpacity style={styles.button4}  onPress={()=>checkAnswer(props.updateScore, '3', realAnswer)}>
                    <Text style={{textAlign:'center', color:'white'}}>{answer[3]}</Text>
                </TouchableOpacity>
            </View> 
        </View>
      </View>
    )

}

const styles = StyleSheet.create({
    quiz: {
        position: "absolute",
        top: '25%',
        left: '15%',
        flexDirection: "column",
        elevation:3,
        width: 300,
        height: 300,
        backgroundColor: 'white',
        justifyContent: "center",
        flex:1,
    
      },
      quizC1:{
        flexDirection: "row",
        width: '100%',
        height: 200,
        backgroundColor:'gray',
        flex:1,
        elevation:3,

      },
      textS:{
        backgroundColor: 'blue',
        width: '100%',
        height: 150,
        textAlign: 'center',
        textAlignVertical: 'center',
        color:'white'

      },
      button1:{
        height:'100%',
        backgroundColor:'green',
        justifyContent:'center',
        

      },
      button2:{
        height:'100%',
        backgroundColor:'violet',
        justifyContent:'center',


      },
      button3:{
        height:'100%',
        backgroundColor:'red',
        justifyContent:'center',
      },
      button4:{
        height:'100%',
        backgroundColor:'teal',
        justifyContent:'center',
      }
})

export default Quiz;
