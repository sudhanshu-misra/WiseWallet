import React from 'react';
import {View, Text} from 'react-native';
import CustomHeader from '../../components/Header';
import {BottomNavigation} from 'react-native-paper';
import BottomTab from '../../navigation/BottomTab';

export default function BudgetHome({navigation}) {
  return (
    <View style={{flex: 1}}>
      <CustomHeader navigation={navigation} />
      {/* <BottomTab /> */}
      <Text>Budget</Text>
    </View>
  );
}
