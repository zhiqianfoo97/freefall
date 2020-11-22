import Plane from '../components/Plane';
import Matter from 'matter-js';
import Floor from '../components/Floor';
import Ceiling from '../components/Ceiling';
import {Dimensions} from 'react-native';
import Obstacle from '../components/Obstacles';
import {getRandom, topObstacleHeight, bottomObstacleHeight} from '../utils/random';
import Constants from '../utils/constants';

Matter.Common.isElement = () => false; //-- Overriding this function because the original references HTMLElement
const {height, width} = Dimensions.get('window');
export default restart => {
  //-- Cleanup existing entities..
  if (restart) {
    Matter.Engine.clear(restart.physics.engine);
  }

  let engine = Matter.Engine.create({enableSleeping: false});
  let world = engine.world;
  world.gravity.y = 0;
  world.gravity.x = 0;
  const boxSize = 50;

  return {
    physics: {engine: engine, world: world},
    Plane: Plane(
      world,
      'pink',
      {x: width/2, y: 100},
      {height: boxSize, width: boxSize},
    ),
    //Floor: Floor(world,'white',{x: width / 2, y: height - 50},{height: 100, width: width}),
    LeftCeiling: Ceiling(world,'white',{x: 0 / 2, y: 0},{height: height, width: 50}),
    RightCeiling: Ceiling(world,'red',{x: width , y: 0},{height: height, width: 50}),
    //Obstacle1: Obstacle(world,'top',{x: width * 2 - Constants.TOP_PIPE_WIDTH / 2, y: getRandom(100, 400)},{height: topObstacleHeight, width: Constants.TOP_PIPE_WIDTH}),
    Obstacle1: Obstacle(world,'top',{x: width/2, y: height - 200},{height: 200, width: 200}),

    Obstacle2: Obstacle(world,'bottom',{x: width/2, y: height - 200},{height: 200, width: 200}),
  };
};