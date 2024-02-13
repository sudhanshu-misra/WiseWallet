import {View, Text} from 'react-native';
import React from 'react';
import HeadBack from '../../components/BackHeader';

const Profile = ({navigation}) => {
  return (
    <View>
      <HeadBack navigation={navigation} />
      <Text className="font-bold">Profile</Text>
    </View>
  );
};

export default Profile;
