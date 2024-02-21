import React from 'react';
import { View, Text ,TextInput} from 'react-native';

const InputData = ({label,errors,touched,onChangeText,onBlur,value,placeholder,keyboardType}) => {
  return (
    <View className="mt-2">
      <View>
      <Text className="ml-5 text-lg">{label}</Text>
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        onBlur={onBlur}
        keyboardType={keyboardType}
        className={`border-2 rounded-md border-gray-600 mx-4 py-1 px-3 text-base  
              ${touched && errors && "border-red-600"}`}
      />
      </View>  
    {touched && errors && <Text className="text-red-700 ml-5">{errors}</Text> } 
    </View>
  );
};

export default InputData;