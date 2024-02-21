import React, { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import { TextInput } from 'react-native-gesture-handler';

const DateField = ({selectedDate,dateLabel}) => {
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);

  const toggleDatepicker = () => {
    setShowPicker(!showPicker);
  };

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
   if(event.type=='set'){
    toggleDatepicker();
    setDate(currentDate);
   }
  };

  const formatDate = (rawDate) => {
    let date = new Date(rawDate);
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    month = month < 10 ? `0${month}` : month;
    day = day < 10 ? `0${day}` : day;

    return `${year}-${month}-${day}`;
  };

  let dateValue = formatDate(date);
   selectedDate(dateValue);

  return (
    <View className="mt-2">
      <Text className="text-lg  antialiased  mx-5">{dateLabel}</Text>
      {showPicker && (
        <RNDateTimePicker
          mode="date"
          display="spinner"
          value={date}
          onChange={onChange}
        />
      )}
      <Pressable onPress={toggleDatepicker}>
        <TextInput
          value={dateValue}
          editable={false}
          className='border-2 rounded-md border-gray-600 mx-4 py-1 px-3 text-base  text-slate-600'
        >
        </TextInput>
      </Pressable>
    </View>
  );
};

export default DateField;
