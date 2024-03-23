import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import CustomHeader from '../../components/Header';

const SellScreen = ({navigation}) => {
  return (
    <ScrollView>
      <View>
        <CustomHeader navigation={navigation} />
        <Text>SellScreen</Text>
      </View>
    </ScrollView>
  );
};

export default SellScreen;
