import React from 'react';
import {Image} from 'react-native';
import piggy from '../../assets/piggy-bank.png';

const GoalPiggyIcon = () => {
  return (
    <Image
      source={piggy}
      style={{
        tintColor:'grey',
        width: 35,
        height: 40,
        resizeMode: 'contain',
      }}></Image>
  );
};

export default GoalPiggyIcon ;
