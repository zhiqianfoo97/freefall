import React from 'react';
import {Image} from 'react-native';
import {array, object, string} from 'prop-types';
import Matter from 'matter-js';

const snake = require('../../Image/snake.png');

const Snake = props => {
  const width = props.size[0];
  const height = props.size[1];
  const x = props.body.position.x - width / 2;
  const y = props.body.position.y - height / 2;
  return (
    <Image
      style={{
        position: 'absolute',
        left: x,
        top: y,
        width: width,
        height: height,
        //backgroundColor: "green",
      }}
      resizeMode="stretch"
      source={snake}
    />
  );
};

export default (world, color, pos, size) => {
  const initialPlane = Matter.Bodies.rectangle(
    pos.x,
    pos.y,
    size.width,
    size.height,
    {friction: 0, frictionAir : 0, inertia: Infinity, inverseInertia:0, label:'snake'},
  );
  Matter.World.add(world, [initialPlane]);

  return {
    body: initialPlane,
    size: [size.width, size.height],
    color: color,
    renderer: <Snake />,
  };
};

Snake.propTypes = {
  size: array,
  body: object,
  color: string,
};