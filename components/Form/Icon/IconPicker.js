import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { Picker } from '@react-native-picker/picker';
import {COLORS} from '../../../constants/theme';

const IconPicker = ({getIcon,iconError,iconData}) => {

    const [role,setRole] = useState('');
       const iconPickHandler=(itemValue)=>{
                getIcon(itemValue);
                setRole(itemValue);
                } 
  return (
    <View className="mt-2 h-20">
    <Text className="text-lg  antialiased  mx-5">
      Select Category
    </Text>
    <Picker
      selectedValue={role}
      style={{
        flex:1,
        backgroundColor: "#EBEBEB",
        borderRadius: 30,
        color:'#696969',
        marginHorizontal:17,
        paddingVertical:1,
        fontWeight:'bold'
      }}
      dropdownIconColor={COLORS.primary}
      onValueChange={iconPickHandler}
    >
      <Picker.Item label="Select Category" value=""/>
      {iconData.map((icon,index)=> <Picker.Item key={index} label={icon.data} value={icon.data}/>)}
    </Picker>
    {  iconError!='' && role=='' && <Text className="text-red-700 ml-5">{iconError}</Text> } 
  </View>
  )
}

export default IconPicker