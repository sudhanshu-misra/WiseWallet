import {View, Text, TouchableOpacity} from 'react-native';
import React, {useEffect, useState, useContext} from 'react';
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import {Avatar, Drawer, Title} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {COLORS} from '../constants/theme';
import userIcon from '../assets/user.png';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import host from '../constants/host';
import GlobalContext from '../helpers/GlobalContext';

const DrawerList = [
  {icon: 'user-circle-o', label: 'Profile', navigateTo: 'Profile'},
  {icon: 'money', label: 'Wallet', navigateTo: 'BottomTab'},
  {icon: 'shopping-bag', label: 'Marketplace', navigateTo: 'MarketBottomTab'},
];
const MarketList = [
  {icon: 'user-circle-o', label: 'Profile', navigateTo: 'Profile'},
  {icon: 'money', label: 'Wallet', navigateTo: 'BottomTab'},
];

let color = COLORS.black;
let size = 30;

const DrawerLayout = ({icon, label, navigateTo, setIsMarket, isMarket}) => {
  const navigation = useNavigation();

  return (
    <DrawerItem
      icon={({color, size}) => <Icon name={icon} color={color} size={size} />}
      label={label}
      onPress={() => {
        console.log('isMarket', isMarket);
        if (label === 'Marketplace' && isMarket === false) {
          setIsMarket(true);
          navigation.navigate(navigateTo);
        } else if (label === 'Wallet' && isMarket === true) {
          setIsMarket(false);
          navigation.navigate(navigateTo);
        } else if (label == 'Profile') {
          navigation.navigate(navigateTo);
        }
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
        setIsMarket={props.setIsMarket}
        isMarket={props.isMarket}
      />
    );
  });
};

const MarketItems = props => {
  return MarketList.map((el, i) => {
    return (
      <DrawerLayout
        key={i}
        icon={el.icon}
        label={el.label}
        navigateTo={el.navigateTo}
        setIsMarket={props.setIsMarket}
      />
    );
  });
};

const DrawerContent = props => {
  const navigation = useNavigation();

  const {isMarket, setIsMarket, setIsAuthenticated} = useContext(GlobalContext);

  const [profileData, setProfileData] = useState({});

  const getProfile = async () => {
    const token = await AsyncStorage.getItem('token');

    try {
      let config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.get(
        `${host.apiUrl}/api/user/profile`,
        config,
      );
      console.log(response.data);
      if (response.data.user) {
        console.log('user found');
        setProfileData(response.data.user);
      } else {
        console.log('user not found');
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        {/* <DrawerItemList {...props} /> */}
        <View style={{flex: 1}}>
          <TouchableOpacity activeOpacity={0.8}>
            <View className="p-2">
              <View className="flex flex-row mt-15">
                <Avatar.Image
                  source={
                    profileData.profileImage
                      ? {uri: profileData.profileImage}
                      : userIcon
                  }
                  size={50}
                  style={{marginTop: 5}}
                />
                <View className="ml-10 flex flex-col">
                  <Title>{profileData?.name || 'Name'}</Title>
                  <Text>{profileData?.email || 'something@gmail.com'}</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <View>
            <DrawerItems setIsMarket={setIsMarket} isMarket={isMarket} />
            {/* {isMarket ? (
              <MarketItems setIsMarket={setIsMarket} />
            ) : (
              <WalletItems setIsMarket={setIsMarket} />
            )} */}
          </View>
        </View>
      </DrawerContentScrollView>
      <View className="mb-15">
        <DrawerItem
          icon={({color, size}) => (
            <Icon name="sign-out" color={color} size={size} />
          )}
          onPress={() => {
            AsyncStorage.removeItem('token');
            setIsAuthenticated(false);
            navigation.navigate('Onboarding');
          }}
          label="Sign Out"
        />
      </View>
    </View>
  );
};

export default DrawerContent;
