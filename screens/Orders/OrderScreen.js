import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import CustomHeader from '../../components/Header';

const OrderScreen = ({navigation}) => {
  return (
    <ScrollView>
      <View>
        <CustomHeader navigation={navigation} />
        <Text>OrderScreen</Text>
      </View>
    </ScrollView>
  );
};

export default OrderScreen;
