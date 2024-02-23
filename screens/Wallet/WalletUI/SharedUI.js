import {View, Text} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {COLORS} from '../../../constants/theme';
import WalletIcons from './WalletIcons';

const SharedUI = ({name, icon , onClick}) => {
  return (
    <View className=" mt-5 w-max">
      <View className="mx-7 flex flex-row justify-between">
        <Text className="text-xl text-black">{name}</Text>
        <Text className="text-lg" style={{color: `${COLORS.neutral}`}}
         onPress={()=>onClick()}
        >
          <Icon name="plus" size={16}>
            {' '}
          </Icon>{' '}
          Add new{' '}
        </Text>
      </View>
      <View className="w-max h-auto p-1 m-4 border-[1.5px] rounded-[5px] border-slate-400 flex justify-center items-center">
        <WalletIcons icon={icon}></WalletIcons>
        <Text className="text-lg text-center px-10 text-slate-400">
          Your {name} details will be displayed here
        </Text>
      </View>
    </View>
  );
};

export default SharedUI;
