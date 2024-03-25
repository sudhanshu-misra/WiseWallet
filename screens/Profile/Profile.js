import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React,{useState,useEffect,useContext} from 'react';
import HeadBack from '../../components/BackHeader';
import {COLORS} from '../../constants/theme';
import UserProfile from './UserProfile';
import ButtonComp from '../../components/ButtonComp';
import AsyncStorage from '@react-native-async-storage/async-storage';
import host from "../../constants/host.js"
import axios from 'axios';

//context api
import GlobalContext from '../../helpers/GlobalContext.js';


const Profile = ({navigation}) => {
  
//  const [profileData, setProfileData] = useState();

const {profileData}=useContext(GlobalContext);

  const handleSubmit = () => {
        navigation.navigate('EditProfile',{user:profileData});
  };
           
  // useEffect(()=>{
  //         getProfile();
  //  },[])

  // const getProfile = async () => {
  //   const token = await AsyncStorage.getItem('token');
  //   try {
  //     let config = {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     };
  //     const response = await axios.get(
  //       `${host.apiUrl}/api/user/profile`,
  //       config,
  //     );
  //     console.log(response.data);
  //     if (response.data.user) {
  //       console.log('user found');
  //       setProfileData(response.data.user);
  //     } else {
  //       console.log('user not found');
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  return (
    <View className="h-full">
      <View className="h-40" style={{backgroundColor: COLORS.primary}}>
        <HeadBack navigation={navigation} profile={true} title="Profile" />
        <View className="flex items-center">
          {profileData?.profileImage? (
            <Image
              source={{uri: profileData?.profileImage}}
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
        <UserProfile user={profileData}></UserProfile>
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
