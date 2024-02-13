import React from 'react';
import {View, Image, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import BudgetHome from '../screens/Budget/Budget';
import GoalHome from '../screens/Goal/Goal';
import {COLORS} from '../constants/theme';
import DashboardHome from '../screens/Dashboard/Dashboard';
import WalletHome from '../screens/Wallet/Wallet';
import CustomHeader from '../components/Header';

const Tab = createBottomTabNavigator();

export default function BottomTab() {
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
        name="Budget"
        component={BudgetHome}
        options={{
          // header: props => <CustomHeader {...props} />,
          headerShown: false,
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
              Budget
            </Text>
          ),
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../assets/indian-rupee.png')}
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
        name="Dashboard"
        component={DashboardHome}
        options={{
          headerShown: false,
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
              Dashboard
            </Text>
          ),
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../assets/statistics.png')}
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
        name="Goal"
        component={GoalHome}
        options={{
          headerShown: false,
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
              Goal
            </Text>
          ),
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../assets/piggy-bank.png')}
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
        name="Wallet"
        component={WalletHome}
        options={{
          headerShown: false,
          tabBarLabelActive: {
            color: COLORS.secondary,
          },
          tabBarLabel: ({focused, color}) => (
            <Text
              style={{
                fontSize: 14,
                color: focused ? COLORS.white : COLORS.warning,
              }}
              className="text-sm mb-1">
              Wallet
            </Text>
          ),
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../assets/wallet.png')}
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
