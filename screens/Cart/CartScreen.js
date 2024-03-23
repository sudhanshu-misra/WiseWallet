import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import CustomHeader from '../../components/Header';

const CartScreen = ({navigation}) => {
  return (
    <ScrollView>
      <View>
        <CustomHeader navigation={navigation} />
        <Text>CartScreen</Text>
      </View>
    </ScrollView>
  );
};

export default CartScreen;
