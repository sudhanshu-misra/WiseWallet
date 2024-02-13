import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {COLORS} from '../constants/theme';
// import {Header, IconButton, Drawer} from 'react-native-paper';
// import {DrawerActions, useNavigation} from '@react-navigation/native';
export default function CustomHeader({navigation}) {
  const currentDate = new Date();
  // const navigation = useNavigation();
  const options = {
    weekday: 'short', // Short weekday name (e.g., Thu)
    month: 'short', // Short month name (e.g., Nov)
    day: 'numeric', // Day of the month (e.g., 19)
  };

  const formattedDate = currentDate.toLocaleDateString('en-US', options);

  return (
    <View className="flex flex-row justify-between items-center p-2">
      <View>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Icon name="menu" size={30} color={COLORS.black} />
        </TouchableOpacity>
      </View>
      <View>
        <Text className="text-black text-lg">{formattedDate}</Text>
      </View>
      <View>
        <Icon name="notifications-none" size={30} color={COLORS.black} />
      </View>
    </View>
  );
}
