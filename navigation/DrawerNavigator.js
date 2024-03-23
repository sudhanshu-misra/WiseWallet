import React, {useContext} from 'react';
import {View, Image, Text} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {COLORS} from '../constants/theme';
import BottomTab from './BottomTab';
import MarketBottomTab from './MarketBottomTab';
import DrawerContent from './DrawerContent';
import GlobalContext from '../helpers/GlobalContext';

export default function DrawerNav() {
  const Drawer = createDrawerNavigator();

  const {isMarket, setIsMarket} = useContext(GlobalContext);

  return (
    <Drawer.Navigator
      drawerContent={props => <DrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
      }}>
      <Drawer.Screen
        name="Home"
        component={isMarket ? MarketBottomTab : BottomTab}
      />
    </Drawer.Navigator>
  );
}
