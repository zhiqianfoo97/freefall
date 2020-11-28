import {Dimensions} from 'react-native';
const {height, width} = Dimensions.get('window');

const Constants = {
    TOP_PIPE_WIDTH: 250,
    BOTTOM_PIPE_WIDTH: 100, 
    HEIGHT: height, 
    WIDTH: width, 
    SNAKE_VELOCITY: 3, //snake velocity always positive
    OBJECT_VELOCITY: -10,  // object velocity always negative
    SNAKE_WIDTH: 25,
};

export default Constants;