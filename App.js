import React, {PureComponent} from 'react';
import {StatusBar, StyleSheet, View, Text, Alert, Button} from 'react-native';
import Entities from './src/entities';
import {GameEngine} from 'react-native-game-engine';
import Systems from './src/systems';


export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      running: true,
      score: 0
    };
    this.gameEngine = null;
    console.disableYellowBox = true;
  }

  onEvent = e => {
    if (e.type === 'gameOver') {
      this.setState({
        running: false,
      });
    } else if (e.type === 'score') {
      this.setState(prevState => {
        return {score: prevState.score + 1};
      });
    }
  };

  restart = () => {
    this.setState({running: true, score: 0});
    this.gameEngine.swap(Entities());
  };

  render() {
    return (
      <View style={styles.container}>
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
        {this.state.running ? (
           <Text style={styles.score}>{this.state.score}</Text>   
        ) : (
          <View style={styles.centerButton}>
            <Text style={{color:'red'}}>Score: {this.state.score}</Text>
            <View style={styles.inView}>
              <Button title='OK' onPress={()=> this.setState({running: true})}></Button>
              <Button title="Restart" onPress={this.restart}></Button>
            </View>
          </View>
        )}
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
    backgroundColor: 'white',
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
  }
});