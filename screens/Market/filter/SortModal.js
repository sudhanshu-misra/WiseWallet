import {View, Text, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {RadioButton} from 'react-native-paper';

const SortModal = ({hideModal, sortData}) => {
  const [sort, setSort] = useState('');

  sortData(sort);
  return (
    <View>
      <View className="flex m-4 flex-row justify-center">
        <Text className={`text-xl text-center text-gray-600`}>Sort By</Text>
        <Text className="absolute right-4">
          <Icon name="close" size={25} onPress={hideModal}></Icon>
        </Text>
      </View>

      <View className=" border-black w-3/4 m-auto mt-3 ">
        <View className ="flex-1 flex-row justify-between">
        <Text className="text-lg text-black">Price -- Low to High</Text>
          <RadioButton
            value="asc"
            status={sort === 'asc' ? 'checked' : 'unchecked'}
            onPress={() => setSort('asc')}
          />
        </View>

        <View className ="flex-1 flex-row justify-between">
        <Text className="text-lg text-black">Price -- High to Low</Text>
          <RadioButton
            value="desc"
            status={sort === 'desc' ? 'checked' : 'unchecked'}
            onPress={() => setSort('desc')}
          />
        </View>

        <View className ="flex-1 flex-row justify-between">
        <Text className="text-lg text-black">Newest First</Text>
          <RadioButton
            value="new"
            status={sort === 'new' ? 'checked' : 'unchecked'}
            onPress={() => setSort('new')}
          />
        </View>
      </View>

      <View className="mt-10"></View>
    </View>
  );
};

export default SortModal;

const styles = StyleSheet.create({
  modalContent: {
    height: 'auto',
    width: '100%',
    backgroundColor: 'white',
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    position: 'absolute',
    bottom: 0,
  },
});
