import React from 'react';
import {View, Image, Text} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {COLORS} from '../constants/theme';
import BottomTab from './BottomTab';
import DrawerContent from './DrawerContent';

export default function DrawerNav() {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      drawerContent={props => <DrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
      }}>
      <Drawer.Screen name="Home" component={BottomTab} />
    </Drawer.Navigator>
  );
}
