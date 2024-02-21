import {View, Text} from 'react-native';
import React, {useState} from 'react';
import HeadBack from '../../components/BackHeader';
import OTPInput from '../../components/OTPInput';

const Verification = props => {
  const [code, setCode] = useState('');
  const [isPinReady, setIsPinReady] = useState(false);
  const handleOTPSubmit = otp => {
    // Implement your logic to verify the OTP here
    console.log('Submitted OTP:', otp);
    // You can make an API call or perform any other action here
  };

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <HeadBack title="Verification" navigation={props.navigation} />
      <View className="mx-2 my-4">
        <Text className="text-black text-4xl font-semibold">
          Enter your verification code
        </Text>
        <OTPInput code={setCode} />
        <Text>{code}</Text>
      </View>
    </View>
  );
};

export default Verification;
