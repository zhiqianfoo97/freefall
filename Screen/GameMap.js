import React, {PureComponent} from 'react';
import {StatusBar, StyleSheet, View, Text, Alert, Button, ImageBackground} from 'react-native';
import Entities from '../src/entities';
import {GameEngine} from 'react-native-game-engine';
import Systems from '../src/systems';
import Constants from '../src/utils/constants';
import Question from '../src/utils/question';
import Quiz from '../src/components/Quiz';
import Trivia from '../src/components/Trivia';
import TriviaList from '../src/utils/trivia';



export default class GameMap extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      running: true,
      score: 0,
      questionList: Question,
      questionCounter: 0,
      showQuestion: false,
      gameOv: false,
      showTrivia: false,
      triviaList: TriviaList,
      triviaCounter: 0,
      questionLength: Question.length -1,
    };
    this.gameEngine = null;

  }

  updateScore = (addScore) =>{
    this.setState({running: true, showQuestion: false});
    this.updateCounter();
    this.setState(prevState => {
      return {score: prevState.score + addScore};
    })
    
  }

  updateCounter = () =>{
    this.setState(prevState =>{
      return {questionCounter: prevState.questionCounter + 1};
    })
    if (this.state.questionCounter >= this.state.questionLength){
      this.setState({running: false, gameOv: true});
    }
  }
  
  

  hideTrivia = () => {
    this.setState({showTrivia : false, running: true});

    this.setState(prevState => {
      return {triviaCounter: (prevState.triviaCounter < 2) ? prevState.triviaCounter + 1 : 0}
    })

  }

  onEvent = e => {


    if (e.type === 'gameOver') {
      this.setState({
        running: false,
        gameOv: true
      });
      
    } 
    else if (e.type === 'cloud') {
      this.setState({showTrivia: true, running: false});

    } else if (e.type === 'apple'){
      this.setState({showQuestion: true, running:false});     

    }
  };

  restart = () => {
    this.setState({running: true, score: 0, gameOv: false, triviaCounter:0, questionCounter:0});
    this.gameEngine.swap(Entities());
  };

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={require("./Image/space-background.png")} style={styles.backgroundImageAnim}>
        <GameEngine
          ref={ref => {
            this.gameEngine = ref;
          }}
          style={styles.gameContainer}
          entities={Entities()}
          running={this.state.running}
          systems={Systems}
          onEvent={this.onEvent}
          >
          <StatusBar hidden={true} />
        </GameEngine>
        {!this.state.gameOv ? (
          <View style={styles.scoreView}>
            <Text style={{color:'white'}}>Score: {this.state.score}</Text>   
          </View>
           
        ) : (
          
          <View style={styles.centerButton}>
            <Text style={{color:'white', textAlign:'center'}}>Game over!</Text>
            <Text style={{color:'white', textAlign:'center'}}>Score: {this.state.score}</Text>
            <View style={styles.inView}>
              <Button title='OK' onPress={()=> this.setState({running: true, gameOv: false})}></Button>
              <Button title="Restart" onPress={this.restart}></Button>
            </View>
          </View>
        )}
         {this.state.showQuestion && <Quiz updateScore={this.updateScore} questionL={this.state.questionList[this.state.questionCounter]}></Quiz>}
         {this.state.showTrivia && <Trivia hideTrivia={this.hideTrivia} fact={this.state.triviaList[this.state.triviaCounter]}></Trivia>}
        
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  gameContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  centerButton:{
    position: 'absolute',
    top: '50%',
    left: '25%',
    backgroundColor: 'gray',
    width: 150,
    height: 150,
    flexDirection: 'column',
    justifyContent: 'space-between',
    elevation: 3,
    
    //zIndex: '100'
    
  },
  inView: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  backgroundImageAnim: {
    width: '100%',
    height: '100%',
  },
  trivia:{
    position: 'absolute',
    top: Constants.HEIGHT - 100,

  },
  quiz: {
    position: "absolute",
    top: '25%',
    left: '25%',
    flexDirection: "column",
    elevation:3 ,
    width: 400,
    height: 400,
    backgroundColor: 'white',
    flex: 1,


  },
  quizC1:{
    flexDirection: "row",
    width: 100,
    height: 100,
    elevation:3,
  },
  scoreView:{
    position:'absolute',
    top: '0%',
    left: '0%'
  }


});