import {View, Text, Image} from 'react-native';
import React, {useEffect} from 'react';
import logo from '../assets/WealthWiseLogoGreen.png';
const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Onboarding');
    }, 2000);
  }, []);
  return (
    <View style={{flex: 1}}>
      <View className="flex justify-center items-center h-[100%] w-[100%]">
        <Image source={logo} width={60} height={60} />
        <Text className="font-bold text-lg">Wealth Wise</Text>
      </View>
    </View>
  );
};

export default Splash;
