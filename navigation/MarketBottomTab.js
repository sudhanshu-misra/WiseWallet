import React from 'react';
import {Image, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MarketHome from '../screens/Market/MarketHome';
import SellScreen from '../screens/Sell/SellScreen';
import OrdersScreen from '../screens/Orders/OrderScreen';
import CartScreen from '../screens/Cart/CartScreen';
import {COLORS} from '../constants/theme';

const Tab = createBottomTabNavigator();

export default function MarketBottomTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: COLORS.primary,
          padding: 10,
          height: '10%',
          borderTopStartRadius: 14,
          borderTopEndRadius: 14,
        },
      }}>
      <Tab.Screen
        name="Market"
        component={MarketHome}
        options={{
          tabBarLabelActive: {
            color: COLORS.white,
          },
          tabBarLabel: ({focused, color}) => (
            <Text
              style={{
                fontSize: 14,
                color: focused ? COLORS.white : COLORS.warning,
              }}
              className="text-sm mb-1">
              Market
            </Text>
          ),
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../assets/buyMarketTab.png')}
              resizeMode="contain"
              style={{
                tintColor: focused ? COLORS.white : COLORS.warning,
                width: 30,
                height: 30,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Sell"
        component={SellScreen}
        options={{
          tabBarLabel: ({focused, color}) => (
            <Text
              style={{
                fontSize: 14,
                color: focused ? COLORS.white : COLORS.warning,
              }}
              className="text-sm mb-1">
              Sell
            </Text>
          ),
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../assets/sellMarketTab.png')}
              resizeMode="contain"
              style={{
                tintColor: focused ? COLORS.white : COLORS.warning,
                width: 30,
                height: 30,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Orders"
        component={OrdersScreen}
        options={{
          tabBarLabel: ({focused, color}) => (
            <Text
              style={{
                fontSize: 14,
                color: focused ? COLORS.white : COLORS.warning,
              }}
              className="text-sm mb-1">
              Orders
            </Text>
          ),
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../assets/ordersMarketTab.png')}
              resizeMode="contain"
              style={{
                tintColor: focused ? COLORS.white : COLORS.warning,
                width: 30,
                height: 30,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarLabel: ({focused, color}) => (
            <Text
              style={{
                fontSize: 14,
                color: focused ? COLORS.white : COLORS.warning,
              }}
              className="text-sm mb-1">
         Wishlist
            </Text>
          ),
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../assets/wishlist.png')}
              resizeMode="contain"
              style={{
                tintColor: focused ? COLORS.white : COLORS.warning,
                width: 30,
                height: 30,
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
