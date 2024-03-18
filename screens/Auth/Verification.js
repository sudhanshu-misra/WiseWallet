import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import HeadBack from '../../components/BackHeader';
import OTPInput from '../../components/OTPInput';
import ButtonComp from '../../components/ButtonComp';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import host from '../../constants/config';
import ErrorModal from '../../components/Modal/ErrorModal';

const Verification = props => {
  const [code, setCode] = useState('');
  const [modalState, setModalState] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const email = props.route.params.email;
  const signUpData = props.route.params.signUpData;
  const bearerToken = props.route.params.token;

  const handleLogIn = async () => {
    let config = {
      headers: {
        Authorization: `Bearer ${bearerToken}`,
      },
    };
    console.log('Submitted OTP:', code);
    console.log('Email:', email);
    console.log('Bearer Token:', config);
    try {
      console.log('here2', host.apiUrl);
      const res = await axios.post(
        `${host.apiUrl}/api/user/verify-login`,
        {
          email: email,
          otp: code,
        },
        config,
      );
      // console.log('here1', res?.response?.data);
      console.log('here2', res?.data);
      const token = res?.data?.token;
      console.log(token);
      await AsyncStorage.setItem('token', token);
      props.navigation.navigate('DrawerNav');
    } catch (err) {
      console.log('here3', err);
    }
  };

  const handleSignUp = async () => {
    const config = {
      headers: {
        Authorization: `Bearer ${bearerToken}`,
      },
    };
    console.log('Submitted OTP:', code);
    console.log('Bearer Token:', config);
    console.log('Url:', `${host.apiUrl}/api/user/verify-signup`);
    console.log('Data:', signUpData);
    try {
      const res = await axios.post(
        `${host.apiUrl}/api/user/verify-signup`,
        {
          name: signUpData.name,
          mobileNo: signUpData.mobileNumber,
          email: signUpData.email,
          otp: code,
        },
        config,
      );
      console.log('here', res.data);
      const token = res.data.token;
      await AsyncStorage.setItem('token', token);
      props.navigation.navigate('DrawerNav');
    } catch (error) {
      console.log('here4', error);
      setModalState(true);
      setModalMessage(error.response.data.message);
    }
  };

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <HeadBack title="Verification" navigation={props.navigation} />
      <ErrorModal
        modalState={modalState}
        hideModal={() => setModalState(false)}
        modalMessage={modalMessage}
      />
      <View className="flex items-center my-4">
        <Text className="text-black text-4xl font-semibold ">
          Enter your verification code
        </Text>
        <OTPInput code={setCode} />
        {/* <Text>{code}</Text> */}
      </View>

      <View className="mt-10 mx-5">
        <TouchableOpacity
          onPress={() => {
            if (email) {
              handleLogIn();
            } else {
              handleSignUp();
            }
          }}>
          <ButtonComp title={'Confirm'} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Verification;
