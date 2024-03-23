import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import CustomHeader from '../../components/Header';

const MarketHome = ({navigation}) => {
  return (
    <ScrollView>
      <View>
        <CustomHeader navigation={navigation} />
        <Text>MarketHome</Text>
      </View>
    </ScrollView>
  );
};

export default MarketHome;
