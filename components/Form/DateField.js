import React, {useState} from 'react';
import {Pressable, Text, View} from 'react-native';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import {TextInput} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';

const DateField = ({selectedDate, dateLabel, error}) => {
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);

  let selectableDate = '';
  if (dateLabel === 'Start Date' || dateLabel === 'End Date') {
    selectableDate = date;
  }

  const toggleDatepicker = () => {
    setShowPicker(!showPicker);
  };
 

  const formatDate = rawDate => {
    let date = new Date(rawDate);
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    month = month < 10 ? `0${month}` : month;
    day = day < 10 ? `0${day}` : day;

    return `${year}-${month}-${day}`;
  };

  
  const onChange = (event, recentDate) => {
    const currentDate = recentDate || date;
    if (event.type == 'set') {
      toggleDatepicker();
      setDate(currentDate);
    }
  };

  selectedDate(formatDate(date)); 

  return (
    <View className="mt-2">
      <Text className="text-lg  antialiased  mx-5">{dateLabel}</Text>
      {showPicker && (
        <RNDateTimePicker
          mode="date"
          display="spinner"
          value={date}
          onChange={onChange}
          minimumDate={selectableDate !== '' ? selectableDate : null}
        />
      )}

        <View className="flex flex-row border-2 rounded-md border-gray-600 mx-4  items-center">
        <TextInput
          value={formatDate(date)}
          editable={false}
          className={`py-1.5 px-3 text-base  text-slate-600 
             ${ error && 'border-red-600'}
          `}></TextInput>
           <Pressable onPress={toggleDatepicker} className=" absolute right-1 ">
          <Icon className="text-slate-400" name="date-range" size={28}></Icon>
          </Pressable>
          </View>

     { error && <Text className="text-red-700 ml-5">{error}</Text>}
    </View>
  );
};

export default DateField;
