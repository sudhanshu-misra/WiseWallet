import {View, Text, Image} from 'react-native';
import React, {useEffect} from 'react';
import logo from '../assets/WealthWiseLogoNoBgWhite.png';
import {COLORS} from '../constants/theme';
const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      console.log('splash timeout');
      // navigation.navigate('Onboarding');
    }, 2000);
  }, []);
  return (
    <View style={{flex: 1, backgroundColor: COLORS.primary}}>
      <View className="p-[10%] flex items-center justify-center h-[100%]">
        <Image
          source={logo}
          style={{
            width: 240,
            height: 240,
            resizeMode: 'contain',
            alignSelf: 'center',
          }}
        />
        <Text className="font-bold text-3xl text-white">Wealth Wise</Text>
      </View>
    </View>
  );
};

export default Splash;
