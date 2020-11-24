import Matter from 'matter-js';
import {Dimensions} from 'react-native';
import Constants from '../utils/constants';

const UpdateSnake = (entities, {touches, time}) => {
  const engine = entities.physics.engine;
  touches
    .filter(t => t.type === 'start' || t.type === 'end')
    .forEach(t => {
      
      if (t.type === 'start'){
        if (t.event.pageX >= Constants.WIDTH/2){
          Matter.Body.setVelocity(entities.Snake.body, 
            {
            x: 3,
            y: 0,
          });
        }else{
          Matter.Body.setVelocity(entities.Snake.body, 
            {
            x: -3,
            y: 0,
          });
        }
        
      }else{
        Matter.Body.setVelocity(entities.Snake.body, {
          x: 0,
          y: 0,
        });
      }
      //Matter.Body.setInertia(entities.Plane.body, Infinity);
      
    });
  Matter.Engine.update(engine, time.delta);
  return entities;
};

export default UpdateSnake;


// Matter.Body.applyForce(entities.Plane.body,
//   entities.Plane.body.position,
//   {x: 1, y:0});