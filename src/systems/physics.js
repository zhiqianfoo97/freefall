import Matter from 'matter-js';


// id 4-9 = rock, 10-12 = cloud, 13 = apple
const Physics = (entities, {time, dispatch}) => {
  let engine = entities.physics.engine;
  Matter.Engine.update(engine, time.delta);
  // Matter.Events.on(engine, 'collisionActive', (event) => {
  //   let pair = event.pairs;

  //   console.log("Collision pair A = ", pair[0].activeContacts[0].vertex.body.label);
  //   console.log("Collision pair B = ", pair[0].activeContacts[1].vertex.body.label);
  //   //console.log("collision pair = ", pair[0]);

  //   if (pair[0].activeContacts[0].vertex.body.label === 'rock' || pair[0].activeContacts[1].vertex.body.label === 'rock'){
  //     dispatch({ type: "gameOver"});   
  //   }

  //   if (pair[0].activeContacts[0].vertex.body.label === 'cloud' || pair[0].activeContacts[1].vertex.body.label === 'cloud'){
  //     dispatch({ type: "cloud"});   
  //   }
    
  //   if (pair[0].activeContacts[0].vertex.body.label === 'apple' || pair[0].activeContacts[1].vertex.body.label === 'apple'){
  //     dispatch({ type: "apple"});   
  //   }
          
  // });
  return entities;
  
};

export default Physics;