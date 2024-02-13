import {View, Text, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import {Avatar, Title} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {COLORS} from '../constants/theme';
import userIcon from '../assets/user.png';

const DrawerList = [
  //   {icon: 'home-outline', label: 'Home', navigateTo: 'Tabs'},
  {icon: 'user-circle-o', label: 'Profile', navigateTo: 'Profile'},
];

let color = COLORS.black;
let size = 30;

const DrawerLayout = ({icon, label, navigateTo}) => {
  const navigation = useNavigation();
  return (
    <DrawerItem
      icon={({color, size}) => <Icon name={icon} color={color} size={size} />}
      label={label}
      onPress={() => {
        navigation.navigate(navigateTo);
      }}
    />
  );
};

const DrawerItems = props => {
  return DrawerList.map((el, i) => {
    return (
      <DrawerLayout
        key={i}
        icon={el.icon}
        label={el.label}
        navigateTo={el.navigateTo}
      />
    );
  });
};

const DrawerContent = props => {
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        {/* <DrawerItemList {...props} /> */}
        <View style={{flex: 1}}>
          <TouchableOpacity activeOpacity={0.8}>
            <View className="p-2">
              <View className="flex flex-row mt-15">
                <Avatar.Image
                  source={userIcon}
                  size={50}
                  style={{marginTop: 5}}
                />
                <View className="ml-10 flex flex-col">
                  <Title>Name</Title>
                  <Text>something@gmail.com</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <View>
            <DrawerItems />
          </View>
        </View>
      </DrawerContentScrollView>
      <View className="mb-15">
        <DrawerItem
          icon={({color, size}) => (
            <Icon name="sign-out" color={color} size={size} />
          )}
          label="Sign Out"
        />
      </View>
    </View>
  );
};

export default DrawerContent;
