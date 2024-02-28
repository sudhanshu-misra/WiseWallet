import {View, TouchableOpacity, Text} from 'react-native';
import React from 'react';
import {COLORS} from '../constants/theme';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function HeadBack(props) {
  return (
    <View className="p-4 flex flex-column ">
      <TouchableOpacity
        className="w-[35%]"
        onPress={() => props.navigation.goBack()}>
        <View>
          <Icon name="arrow-back-ios" size={30} color={COLORS.black} />
        </View>
      </TouchableOpacity>
      <View>
        <Text style={{color:COLORS.primary}} className="text-center text-2xl font-bold">
          {props.title}
        </Text>
      </View>
    </View>
  );
}
