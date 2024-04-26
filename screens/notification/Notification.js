import {View, Text, ScrollView} from 'react-native';
import React, {useEffect,useState} from 'react';
import HeadBack from '../../components/BackHeader';
import {COLORS} from '../../constants/theme';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import host from '../../constants/host.js';

const Notification = ({navigation}) => {

  const [notification,setNotification] = useState([]);

  useEffect(() => {
    getNotificationData();
  }, []);

  const getNotificationData = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      let config = {
        headers: {Authorization: `Bearer ${token}`},
      };

      const response = await axios.get(
        `${host.apiUrl}/api/notification/get-notifications`,
        config,
      );

       if(response.data){
          setNotification(response.data.notifications)
          // console.log(response.data.notifications)
       }

    } catch (err) {
      console.log(err);
    }
  };

  const formatDate=(createdAt)=>{
    const date = new Date(createdAt);
    const readableString = date.toLocaleString(); 

        return readableString;

  }

  return (
    <View className="h-full">
      <HeadBack navigation={navigation} title="Notifications" />
      <View className="m-2 p-2">
        <Text className="m-1 text-3xl " style={{color: COLORS.success}}>
          What's New {`->`}
        </Text>
        <Text className="text-base p-2" style={{color: COLORS.black}}>
          Marketplace and wallet notifications will be displayed here{' '}
        </Text>
      </View>
      <ScrollView className="mb-8">
        {notification && (
          <View className="w-full px-5">
            {notification.reverse().map((data, index) => {
              return (
                <View
                  key={index}
                  className="border-2 border-white h-max my-2 p-3 rounded-tl-3xl rounded-br-3xl"
                  style={{
                    border: COLORS.white,
                    backgroundColor: COLORS.success,
                  }}>
                  <View className="flex flex-row justify-between ">
                    <Text className="text-base" style={{color: COLORS.white}}>
                     
                    </Text>
                    <Text className="text-base" style={{color: COLORS.white}}>
                     {formatDate(data.createdAt)}
                    </Text>
                  </View>
                  <Text
                    className="text-base mt-2"
                    style={{color: COLORS.white}}>
                    {data.message}
                  </Text>
                </View>
              );
            })}
          </View>
        )}
        {!notification && (
          <View className="w-full flex justify-center items-center px-5 ">
            <View
              className="border-2 h-max my-2 p-6 rounded-2xl"
              style={{border: COLORS.black, backgroundColor: 'black'}}>
              <Text className="text-lg" style={{color: COLORS.white}}>
                We don't have any updates for you yet
              </Text>
            </View>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default Notification;
