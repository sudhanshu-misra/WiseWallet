import React from 'react';
import {View, Text} from 'react-native';
import CustomHeader from '../../components/Header';

export default function WalletHome({navigation}) {
  return (
    <View>
      <CustomHeader navigation={navigation} />
      <Text>Wallet</Text>
    </View>
  );
}
