import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Form } from './Form';

const BudgetForm = ({hideModal,onSubmit}) => {

  return (
    <ScrollView>
      <View className="flex m-4 flex-row justify-center">
        <Text className={`text-black  text-lg text-center`}>
          Add new Budget{' '}
        </Text>
        <Text className="absolute right-4">
          {' '}
          <Icon name="close" size={25} onPress={hideModal}></Icon>
        </Text>
      </View>
     
      <View>
       <Form closeModal={onSubmit}></Form>
      </View>
      <View className="mt-10"></View>
    </ScrollView>
  );
};

export default BudgetForm;