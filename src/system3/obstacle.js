import Matter from 'matter-js';
import Constants from '../utils/constants';
import {getRandom} from '../utils/random';
import Obstacle from '../components/Obstacles';


const checkCollision = (type, entitiesX, snakeX) => {
  let val = 0;
  if (type === 'right'){
     val = snakeX - entitiesX;
    
  }else{
     val = entitiesX - snakeX;
    
  }

  return (val < 50 && val > 0)

}

const OBJECT_VELOCITY = -15;


const UpdateObstacle = (entities, {time, dispatch}) => {
  let onScreenCounter = 0;
  let exisitingEntities = [];

  let snakeX = entities['Snake'].body.position.x;
  let snakeX2 = snakeX + 25;

  for (let i = 1; i <= 10; i++) {
    if (entities['Obstacle' + i].body.position.y > 100) {


      if (entities['Obstacle' + i].body.position.y <= 150 && entities['Obstacle' + i].body.position.y >= 100 && (checkCollision('right',entities['Obstacle' + i].body.position.x, snakeX2 ) || checkCollision('left', entities['Obstacle' + i].body.position.x + 40, snakeX)) ){
        let obstacleType = entities['Obstacle' + i].type;

        switch (obstacleType){
          case 'rock':
            dispatch({type: 'gameOver'});
            break;
          case 'cloud':
            dispatch({type: 'cloud'});
            break;
          case 'apple':
            dispatch({type: 'apple'});
            break;
        }
        Matter.Body.setPosition(entities['Obstacle'+i].body, {x:0, y:-50});

      }
      else{

        if(entities['Obstacle' + i].body.position.y <= 125){
          Matter.Body.setPosition(entities['Obstacle'+i].body, {x:0, y:-50});
        }else{
          onScreenCounter += 1;
          Matter.Body.translate(entities['Obstacle' + i].body, {x: 0, y: Constants.OBJECT_VELOCITY});
          exisitingEntities.push(i);
        }
        
      }

      
    }
  }

  let toSpawn = 3 - onScreenCounter;
  //console.log(exisitingEntities.length);
  if (toSpawn > 0){
    for (let i = 0; i < toSpawn; i++){
      let whichToSpawn = 0;
      while(true){
        whichToSpawn = Math.floor(Math.random()*10)+1;
        let temp = exisitingEntities.findIndex( (temp2) => temp2 === whichToSpawn );
        if ( temp < 0){
          break;
        }
      }
      Matter.Body.setPosition(entities['Obstacle' + whichToSpawn].body, {
        x: getRandom(0, Constants.WIDTH),
        y: Constants.HEIGHT + getRandom(0, 200),
      });
    }
  }

  return entities;
};

export default UpdateObstacle;


// const UpdateObstacle = (entities, {time, dispatch}) => {
//     for (let i = 1; i <= 2; i++) {
//       if (
//         entities['Obstacle' + i].type === 'top' &&
//         entities['Obstacle' + i].body.position.x <=
//           -1 * (Constants.TOP_PIPE_WIDTH / 2)
//       ) {
//         entities['Obstacle' + i].scored = false;
//         Matter.Body.setPosition(entities['Obstacle' + i].body, {
//           x: 300 * 2 - Constants.TOP_PIPE_WIDTH / 2,
//           y: getRandom(100, 300),
//         });
//       } else if (
//         entities['Obstacle' + i].type === 'bottom' &&
//         entities['Obstacle' + i].body.position.x <=
//           -1 * (Constants.BOTTOM_PIPE_WIDTH / 2)
//       ) {
//         entities['Obstacle' + i].scored = false;
//         Matter.Body.setPosition(entities['Obstacle' + i].body, {
//           x: 300 * 2 - Constants.BOTTOM_PIPE_WIDTH / 2,
//           y: getRandom(300, 500),
//         });
//       } else {
//         Matter.Body.translate(entities['Obstacle' + i].body, {x: 0, y: -3});
//       }
//     }
//     return entities;
//   };
  
//   export default UpdateObstacle;