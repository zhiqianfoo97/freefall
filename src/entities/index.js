import Snake from '../components/Snake';
import Matter from 'matter-js';
import Floor from '../components/Floor';
import Ceiling from '../components/Ceiling';
import Obstacle from '../components/Obstacles';
import {getRandom, topObstacleHeight, bottomObstacleHeight} from '../utils/random';
import Constants from '../utils/constants';

Matter.Common.isElement = () => false; //-- Overriding this function because the original references HTMLElement
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
    Snake: Snake(
      world,
      'pink',
      {x: Constants.WIDTH/2, y: 100},
      {height: boxSize, width: Constants.SNAKE_WIDTH},
    ),
    //Floor: Floor(world,'white',{x: width / 2, y: height - 50},{height: 100, width: width}),
    LeftCeiling: Ceiling(world,'white',{x: -25 , y: 0},{height: Constants.HEIGHT, width: 50}),
    RightCeiling: Ceiling(world,'red',{x: Constants.WIDTH + 25 , y: 0},{height: Constants.HEIGHT, width: 50}),
    //Obstacle1: Obstacle(world,'top',{x: width * 2 - Constants.TOP_PIPE_WIDTH / 2, y: getRandom(100, 400)},{height: topObstacleHeight, width: Constants.TOP_PIPE_WIDTH}),
    Obstacle1: Obstacle(world,'rock',{x: getRandom(0, Constants.WIDTH), y: Constants.HEIGHT + getRandom(0, 200)},{height: 50, width: 50}),
    Obstacle2: Obstacle(world,'rock',{x: getRandom(0, Constants.WIDTH), y: Constants.HEIGHT + getRandom(0, 200)},{height: 50, width: 50}),
    Obstacle3: Obstacle(world,'rock',{x: getRandom(0, Constants.WIDTH), y: Constants.HEIGHT + getRandom(0, 200)},{height: 50, width: 50}),
    
    Obstacle4: Obstacle(world,'rock',{x: getRandom(0, Constants.WIDTH), y: -100},{height: 50, width: 50}),
    Obstacle5: Obstacle(world,'rock',{x: getRandom(0, Constants.WIDTH), y: -100},{height: 50, width: 50}),
    Obstacle6: Obstacle(world,'rock',{x: getRandom(0, Constants.WIDTH), y: -100},{height: 50, width: 50}),
    Obstacle7: Obstacle(world,'cloud',{x: getRandom(0, Constants.WIDTH), y: -100},{height: 50, width: 50}),
    Obstacle8: Obstacle(world,'cloud',{x: getRandom(0, Constants.WIDTH), y: -100},{height: 50, width: 50}),
    Obstacle9: Obstacle(world,'cloud',{x: getRandom(0, Constants.WIDTH), y: -100},{height: 50, width: 50}),
    Obstacle10: Obstacle(world,'apple',{x: getRandom(0, Constants.WIDTH), y: -100},{height: 50, width: 50}),
  };
};