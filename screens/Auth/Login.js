import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import HeadBack from '../../components/BackHeader';
import ButtonComp from '../../components/ButtonComp';

const Login = ({navigation}) => {
  const handleLogIn = () => {
    navigation.navigate('DrawerNav');
  };
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <HeadBack title="Login" navigation={navigation} />
      <View className="m-4 mt-[8vh]">
        <View className="mt-8">
          <TouchableOpacity onPress={() => handleLogIn()}>
            <ButtonComp title={'Log In'} />
          </TouchableOpacity>
          <Text className="text-center mt-4 text-gray">
            Don't have an account?{' '}
            <Text
              onPress={() => navigation.navigate('Signup')}
              className="text-[#497320]">
              Sign Up
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Login;
