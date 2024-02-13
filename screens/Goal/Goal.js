import React from 'react';
import {View, Text} from 'react-native';
import CustomHeader from '../../components/Header';

export default function GoalHome({navigation}) {
  return (
    <View>
      <CustomHeader navigation={navigation} />
      <Text>Goal</Text>
    </View>
  );
}
