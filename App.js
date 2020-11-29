import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

import ChooseMap from './Screen/ChooseMap';
import GameMap from './Screen/GameMap';
import GameMap2 from './Screen/GameMap2';
import GameMap3 from './Screen/GameMap3';
import LandingPage from './Screen/LandingPage';
import TutorialPage1 from './Screen/TutorialPage1';
import TutorialPage2 from './Screen/TutorialPage2';
import TutorialPage3 from './Screen/TutorialPage3';
import TutorialPage4 from './Screen/TutorialPage4';
import TutorialPage5 from './Screen/TutorialPage5';
import TutorialPage6 from './Screen/TutorialPage6';

const App = createStackNavigator({
  LandingPage: {
    screen: LandingPage
  },
  GameMap: {
    screen: GameMap
  },
  GameMap2:{
    screen: GameMap2
  },
  GameMap3:{
    screen: GameMap3
  },
  ChooseMap: {
    screen: ChooseMap
  },
  TutorialPage1: {
    screen: TutorialPage1
  },
  TutorialPage2: {
    screen: TutorialPage2
  },
  TutorialPage3: {
    screen: TutorialPage3
  },
  TutorialPage4: {
    screen: TutorialPage4
  },
  TutorialPage5: {
    screen: TutorialPage5
  },
  TutorialPage6: {
    screen: TutorialPage6
  },
},
{
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  }
});



export default createAppContainer(App);


