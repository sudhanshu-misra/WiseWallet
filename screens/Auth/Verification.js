import {View, Text,TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import HeadBack from '../../components/BackHeader';
import OTPInput from '../../components/OTPInput';
import ButtonComp from '../../components/ButtonComp';

const Verification = props => {
  const [code, setCode] = useState('');
  const [isPinReady, setIsPinReady] = useState(false);
  const handleOTPSubmit = otp => {
    // Implement your logic to verify the OTP here
    console.log('Submitted OTP:', otp);
    // You can make an API call or perform any other action here

    //if Otp is correct then 
     props.navigation.navigate('DrawerNav')
  };

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <HeadBack title="Verification" navigation={props.navigation} />
      
      <View className="flex items-center my-4">
        <Text className="text-black text-4xl font-semibold ">
          Enter your verification code
        </Text>
        <OTPInput code={setCode} />
        <Text>{code}</Text>
      </View>

      <View className="mt-10 mx-5">
          <TouchableOpacity onPress={handleOTPSubmit} >
            <ButtonComp title={'Confirm'} />
          </TouchableOpacity>
      </View>

    </View>
 
  );
};

export default Verification;
