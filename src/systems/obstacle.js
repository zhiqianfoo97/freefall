import Matter from 'matter-js';
import Constants from '../utils/constants';
import {getRandom} from '../utils/random';
//import {width} from '../utils/styleSheet';

const UpdateObstacle = (entities, {time, dispatch}) => {
  for (let i = 1; i <= 2; i++) {
    if (
      entities['Obstacle' + i].type === 'top' &&
      entities['Obstacle' + i].body.position.y <= -50
    ) {
      entities['Obstacle' + i].scored = false;
      Matter.Body.setPosition(entities['Obstacle' + i].body, {
        x: 300,
        y: 600,
      });
    } else if (
      entities['Obstacle' + i].type === 'bottom' &&
      entities['Obstacle' + i].body.position.y <= -50
    ) {
      entities['Obstacle' + i].scored = false;
      Matter.Body.setPosition(entities['Obstacle' + i].body, {
        x: 150,
        y: 600,
      });
    } else {
      Matter.Body.translate(entities['Obstacle' + i].body, {x: 0, y: -3});
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