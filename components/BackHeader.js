import {View, TouchableOpacity, Text} from 'react-native';
import React from 'react';
import {COLORS} from '../constants/theme';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function HeadBack(props) {
  return (
    <View className="flex flex-row items-center">
      <TouchableOpacity
        className="p-2 w-[42%]"
        onPress={() => props.navigation.goBack()}>
        <View>
          <Icon name="arrow-left" size={36} color={COLORS.black} />
        </View>
      </TouchableOpacity>
      <View>
        <Text className="text-center text-black text-xl font-bold">
          {props.title}
        </Text>
      </View>
    </View>
  );
}
