import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import HeadBack from '../../components/BackHeader';
import {COLORS} from '../../constants/theme';
import UserProfile from './UserProfile';
import ButtonComp from '../../components/ButtonComp';

const user = {
  userImg:
    'https://wallpapers-clan.com/wp-content/uploads/2023/05/cool-anime-pfp-02.jpg',
  username: 'ashish',
  email: 'asd@gmail.com',
  mobileNumber: '1011213131',
};

const Profile = ({navigation}) => {
  
  const handleSubmit = () => {
        navigation.navigate('EditProfile');
  };

  return (
    <View className="h-full">
      <View className="h-40" style={{backgroundColor: COLORS.primary}}>
        <HeadBack navigation={navigation} profile={true} title="Profile" />
        <View className="flex items-center">
          {user.userImg ? (
            <Image
              source={{uri: user.userImg}}
              style={styles.image}
              resizeMode="contain"
            />
          ) : (
            <Image
              source={require('../../assets/user.png')}
              style={styles.image}
            />
          )}
        </View>
      </View>
      <View className="h-max m-8">
        <UserProfile user={user}></UserProfile>
      </View>
      <View className=" m-8 mt-10">
        <TouchableOpacity onPress={handleSubmit}>
          <ButtonComp title={'Edit Profile'} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    margin: 'auto',
    width: 120,
    height: 120,
    borderRadius: 100,
    borderWidth: 3,
    borderColor: '#ddd',
  },
});

export default Profile;
