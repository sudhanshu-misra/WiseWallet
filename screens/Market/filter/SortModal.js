import {View, Text, StyleSheet} from 'react-native';
import React, {useContext, useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {RadioButton} from 'react-native-paper';
import GlobalContext from '../../../helpers/GlobalContext';

const SortModal = ({hideModal, sortData}) => {
  const {sortType, setSortType} = useContext(GlobalContext);

  sortData(sortType);
  return (
    <View>
      <View className="flex m-4 flex-row justify-center">
        <Text className={`text-xl text-center text-gray-600`}>Sort By</Text>
        <Text className="absolute right-4">
          <Icon name="close" size={25} onPress={hideModal}></Icon>
        </Text>
      </View>

      <View className=" border-black w-3/4 m-auto mt-3 ">
        <View className="flex-1 flex-row justify-between">
          <Text className="text-lg text-black">Price -- Low to High</Text>
          <RadioButton
            value="priceLowToHigh"
            status={sortType === 'priceLowToHigh' ? 'checked' : 'unchecked'}
            onPress={() => setSortType('priceLowToHigh')}
          />
        </View>

        <View className="flex-1 flex-row justify-between">
          <Text className="text-lg text-black">Price -- High to Low</Text>
          <RadioButton
            value="priceHighToLow"
            status={sortType === 'priceHighToLow' ? 'checked' : 'unchecked'}
            onPress={() => setSortType('priceHighToLow')}
          />
        </View>

        <View className="flex-1 flex-row justify-between">
          <Text className="text-lg text-black">Newest First</Text>
          <RadioButton
            value="newest"
            status={sortType === 'newest' ? 'checked' : 'unchecked'}
            onPress={() => setSortType('newest')}
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
