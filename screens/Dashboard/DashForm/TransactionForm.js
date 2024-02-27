import {View, Text, ScrollView} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {ExpenseForm} from './ExpenseForm';
import {IncomeForm} from './IncomeForm';
import { COLORS } from '../../../constants/theme';

const TransactionForm = ({hideModal,onSubmit}) => {
  const [activeForm, SetActiveForm] = useState('expense');

  const incomeFormHandler = () => {
    if (activeForm === 'expense') {
      SetActiveForm('income');
    }
  };
  const expenseFormHandler = () => {
    if (activeForm === 'income') {
      SetActiveForm('expense');
    }
  };

  return (
    <ScrollView>
      <View className="flex m-4 flex-row justify-center">
        <Text className={`text-black  text-lg text-center`}>
          Add new transaction{' '}
        </Text>
        <Text className="absolute right-4">
          {' '}
          <Icon name="close" size={25} onPress={hideModal}></Icon>
        </Text>
      </View>
      <View className="flex flex-row justify-evenly">
        <Text
          className="text-lg"
          onPress={incomeFormHandler}
          style={
            activeForm === 'income' && {
              color: COLORS.primary,
              fontWeight: 'bold',
            }
          }>
          Income
        </Text>
        <Text
          className="text-lg"
          onPress={expenseFormHandler}
          style={
            activeForm === 'expense' && {
              color: COLORS.primary,
              fontWeight: 'bold',
            }
          }>
          Expense
        </Text>
      </View>

      <View className="mt-2">
        {activeForm === 'expense' && <ExpenseForm closeModal={onSubmit}></ExpenseForm>}
        {activeForm === 'income' && <IncomeForm closeModal={onSubmit}></IncomeForm>}
      </View>
      
      <View className="mt-10"></View>
    </ScrollView>
  );
};

export default TransactionForm;
