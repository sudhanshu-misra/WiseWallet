import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import HeadBack from '../../components/BackHeader';
import {globalStyles} from '../../constants/globalStyles';
import ButtonComp from '../../components/ButtonComp';

const Signup = props => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');

  const handleSignUp = () => {
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Mobile Number:', mobileNumber);
    props.navigation.navigate('Verification');
  };
  const handleGoogleSignUp = () => {};
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}>
      <HeadBack title="Sign Up" navigation={props.navigation} />
      <View className="m-4 mt-[8vh]">
        <View className="flex flex-col gap-4">
          <TextInput
            className="border-[1px] border-gray-300 p-3 rounded-xl"
            placeholder="Name"
            value={name}
            onChangeText={e => setName(e)}
          />
          <TextInput
            className="border-[1px] border-gray-300 p-3 rounded-xl"
            placeholder="Email"
            value={email}
            onChangeText={e => setEmail(e)}
          />
          <TextInput
            className="border-[1px] border-gray-300 p-3 rounded-xl"
            keyboardType="numeric"
            placeholder="Mobile Number"
            value={mobileNumber}
            onChangeText={e => setMobileNumber(e)}
          />
        </View>
        <View className="mt-8">
          <TouchableOpacity onPress={() => handleSignUp()} className="mb-2">
            <ButtonComp title={'Sign Up'} />
          </TouchableOpacity>
          <Text className="text-gray text-center mb-2">or with</Text>
          <TouchableOpacity
            onPress={() => handleGoogleSignUp()}
            className="mb-2">
            <Text className="border-[1px] text-center w-full border-gray-300 p-3 rounded-xl font-bold text-black text-sm">
              Sign up with Google
            </Text>
          </TouchableOpacity>
          <Text className="text-center">
            Already have an account?{' '}
            <Text
              className="text-[#497320] font-bold"
              onPress={() => props.navigation.navigate('Login')}>
              Login
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Signup;
