import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import ButtonComp from '../../components/ButtonComp';

const Onboarding = ({navigation}) => {
  return (
    <View className="m-8">
      <TouchableOpacity onPress={() => navigation.navigate('DrawerNav')}>
        <ButtonComp title={'Enter'} />
      </TouchableOpacity>
    </View>
  );
};

export default Onboarding;
