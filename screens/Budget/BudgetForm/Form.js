import React, { useState} from 'react';
import {View, Text,TouchableOpacity} from 'react-native';
import {Formik} from 'formik';
import InputData from '../../../components/Form/InputData';
import {Button} from 'react-native-paper';
import {globalStyles} from '../../../constants/globalStyles';
import IconPicker from '../../../components/Form/Icon/IconPicker';
import DateField from '../../../components/Form/DateField';
import {expenseIcon} from '../../../components/Form/Icon/IconData';

import AsyncStorage from '@react-native-async-storage/async-storage';
import host from "../../../constants/host.js"
import axios from 'axios';



let endDate = '';
let startDate = '';

let budget = '';

export const Form = ({closeModal}) => {
  const [dateError, setdateError] = useState('');
  const [budgetError, setBudgetError] = useState('');

  const validate = values => {
    const errors = {};
    const numeric = parseFloat(values.amount);
    if (isNaN(numeric)) {
      errors.amount = 'Invalid Amount';
    }
    return errors;
  };

 
  const budgetData = budgetName => {
    budget = budgetName;
  };

  const getStartDate = selectedDate => {
    startDate = selectedDate;
  };

  const getEndDate = selectedDate => {
    endDate = selectedDate;
  };

  const formSubmitHandler = async(values) => {

      if (budget != '') {

        if (startDate < endDate) {
          const data = {
            budgetName: budget,
            amount: parseFloat(values.amount),
            startDate: startDate,
            endDate: endDate,
          };

          //send data to backend 
           
      const token = await AsyncStorage.getItem('token');
      try {
        let config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      
     const response=  await axios.post(
          `${host.apiUrl}/api/budget/create-budget`,
            data,
          config
        )
       
        //response is done //

      }
      catch(err){
        console.log(err);
      }
  
          closeModal();
          endDate = '';
          startDate = '';
          budget = '';
        } else {
          setdateError('The end date cannot be earlier than the start date');
        }
      } else {
        setBudgetError('Enter Budget Name');
      }
    
  };

  return (
    <Formik
      initialValues={{
        amount: '',
      }}
      onSubmit={formSubmitHandler}
      validate={validate}>
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
        isValid,
      }) => (
        <View>
          <IconPicker
            getIcon={budgetData}
            iconError={budgetError}
            iconData={expenseIcon}
            title={'Budget name'}
            label={'Select budget'}></IconPicker>

          <InputData
            label="Amount"
            errors={errors.amount}
            touched={touched.amount}
            onChangeText={handleChange('amount')}
            onBlur={handleBlur('amount')}
            value={values.amount}
            placeholder="&#8377; 0.0"
            keyboardType="numeric"></InputData>

          <DateField
            selectedDate={getStartDate}
            dateLabel={'Start Date'}
            error={dateError}></DateField>

          <DateField
            selectedDate={getEndDate}
            dateLabel={'End Date'}
            error={dateError}></DateField>

          {/* <IconPicker
            getIcon={iconData}
            iconError={iconError}
            iconData={accountIcon}
            title={'Account'}
            label={'Select account'}></IconPicker> */}

          {/* open close button (Repeat for every month) */}

          <TouchableOpacity  onPress={handleSubmit}>
          <Button
            style={globalStyles.BtnView}
            className="mx-10 p-1 mt-4"
            disabled={!isValid}
           >
            <Text className="text-base text-white">Add budget</Text>
          </Button>
          </TouchableOpacity>
        </View>
      )}
    </Formik>
  );
};
