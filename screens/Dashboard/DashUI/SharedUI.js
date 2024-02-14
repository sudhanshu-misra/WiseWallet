import {View, Text} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {COLORS} from '../../../constants/theme';
import DashIcons from './DashIcons';

const SharedUI = ({name, icon , onClick}) => {
  return (
    <View className=" mt-5 w-max">
      <View className="mx-7 flex flex-row justify-between">
        <Text className="text-xl text-black">{name}</Text>
        <Text className="text-lg" style={{color: `${COLORS.neutral}`}}
         onPress={()=>onClick()}
        >
          <Icon name="plus" size={17}>
            {' '}
          </Icon>{' '}
          Add new{' '}
        </Text>
      </View>
      <View className="w-max h-auto p-4 m-5 border-[2.5px] rounded-[20px] border-slate-400 flex justify-center items-center">
        <DashIcons icon={icon}></DashIcons>
        <Text className="text-lg text-center px-10 text-slate-400">
          Your {name} details will be displayed here
        </Text>
      </View>
    </View>
  );
};

export default SharedUI;
