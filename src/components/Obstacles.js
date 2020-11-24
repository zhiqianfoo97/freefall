import React, { useState } from 'react';
import {View, Image} from 'react-native';
import {array, object, string} from 'prop-types';
import Matter from 'matter-js';
// rock = 0.6, apple = 0.1, cloud = 0.3
const sourceBG = [require("../../Image/rock-raw.png"), require("../../Image/cloud.png"), require("../../Image/apple.png")]


const Obstacle = props => {
  const width = props.size[0];
  const height = props.size[1];
  const x = props.body.position.x - width / 2;
  const y = props.body.position.y - height / 2;
  const bg = sourceBG[props.source];


  return (
    <View
      style={[
        {
          position: 'absolute',
          left: x,
          top: y,
          width: width,
          //borderRadius: 20,
          height: height,
          //backgroundColor:"blue"
        },
      ]}
    >
      <Image source={bg} style={{width:width, height:height}}></Image>
    </View>
  );
};

export default (world, type, pos, size) => {
  let obstacleType = type;
  let actualBG = ""
  let initialObstacle = ""

  switch(obstacleType){
    case "rock":
      initialObstacle = Matter.Bodies.rectangle(
        pos.x,
        pos.y,
        50,
        50,
        {isStatic: true, friction: 1, label:'rock', isSensor:true},
      );
      actualBG = 0;
      break;
    
    case "cloud":
      initialObstacle = Matter.Bodies.rectangle(
        pos.x,
        pos.y,
        50,
        50,
        {isStatic: true, friction: 1, label:'cloud', isSensor:true},
      );
      actualBG = 1;
      break;

    case "apple":
      initialObstacle = Matter.Bodies.rectangle(
        pos.x,
        pos.y,
        50,
        50,
        {isStatic: true, friction: 1, label:'apple', isSensor: true},
      );
      actualBG = 2;
      break;


  }
  // const initialObstacle = Matter.Bodies.rectangle(
  //   pos.x,
  //   pos.y,
  //   size.width,
  //   size.height,
  //   {isStatic: true, friction: 1},
  // );
  Matter.World.add(world, [initialObstacle]);

  return {
    body: initialObstacle,
    size: [size.width, size.height],
    type: type,
    scored: false,
    source: actualBG,
    renderer: <Obstacle />,
  };
};

Obstacle.propTypes = {
  size: array,
  body: object,
  color: string,
};