import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { Picker } from '@react-native-picker/picker';
import {COLORS} from '../../../constants/theme';

const IconPicker = ({getIcon,iconError,iconData,title,label}) => {

    const [role,setRole] = useState('');
       const iconPickHandler=(itemValue)=>{
                getIcon(itemValue);
                setRole(itemValue);
                } 
  return (
    <View className="mt-2">
    <Text className="text-lg  antialiased  mx-5">
      {title}
    </Text>
    <View className="border-2 rounded-md border-gray-600 mx-4 overflow-hidden">
    <Picker
      selectedValue={role}
      style={{
        backgroundColor: "white",
        borderBlockColor:"black",
        color:'#696969',
        fontWeight:'bold',
        margin: -7,
        height:56
      }}
      dropdownIconColor={COLORS.primary}
      onValueChange={iconPickHandler}
    >
      <Picker.Item label={label} value="" />
      {iconData.map((icon,index)=> <Picker.Item key={index} label={icon} value={icon}  />)}
    </Picker>
    </View>
    {  iconError!='' && role=='' && <Text className="text-red-700 ml-5">{iconError}</Text> } 
  </View>
  )
}

export default IconPicker