import React, {useState} from 'react';
import {View, Text,TouchableOpacity} from 'react-native';
import {Formik} from 'formik';
import InputData from '../../../components/Form/InputData';
import {Button} from 'react-native-paper';
import {globalStyles} from '../../../constants/globalStyles';
import IconPicker from '../../../components/Form/Icon/IconPicker';
import DateField from '../../../components/Form/DateField';
import {accountIcon, incomeIcon} from '../../../components/Form/Icon/IconData';


import AsyncStorage from '@react-native-async-storage/async-storage';
import host from "../../../constants/host.js"
import axios from 'axios';

export const IncomeForm = ({closeModal}) => {
  const [iconError, setIconError] = useState('');
  const [accountError, setAccountError] = useState('');

  const validate = values => {
    const errors = {};
    const numeric = parseFloat(values.amount);
    if (isNaN(numeric)) {
      errors.amount = 'Invalid Amount';
    }
    if (!values.incomeName) {
      errors.incomeName = 'Enter Income Name';
    }
    return errors;
  };
  let date = '';
  let icon = '';
  const iconData = role => {
    icon = role;
  };

  const getDate = selectedDate => {
    date = selectedDate;
  };

  let account = '';
  const accountData = role => {
    account = role;
  };

  const formSubmitHandler = async(values) => {
    if (icon != '') {
      if (account != '') {
        const data = {
          name: values.incomeName,
          date: date,
          amount: parseFloat(values.amount),
          category: icon,
          account: account,
          type:"Income"
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
             `${host.apiUrl}/api/transaction/create-transaction`,
               data,
             config
           )
          
          //  response is done //
            console.log("cre",response.data)
         }
         catch(err){
           console.log(err);
         }
     

        closeModal();
        console.log(data);
      } else {
        setAccountError('select an account');
      }
    } else {
      setIconError('select a category');
    }
  };

  return (
    <Formik
      initialValues={{
        incomeName: '',
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
          <InputData
            label="Income name"
            errors={errors.incomeName}
            touched={touched.incomeName}
            onChangeText={handleChange('incomeName')}
            onBlur={handleBlur('incomeName')}
            value={values.incomeName}
            placeholder="Description"
            keyboardType="default"></InputData>

          <DateField selectedDate={getDate} dateLabel={'Date'}></DateField>

          <IconPicker
            getIcon={iconData}
            iconError={iconError}
            iconData={incomeIcon}
            title={'Select Category'}
            label={'Categories'}></IconPicker>

          <IconPicker
            getIcon={accountData}
            iconError={accountError}
            iconData={accountIcon}
            title={'Account'}
            label={'Select account'}></IconPicker>

          <InputData
            label="Amount"
            errors={errors.amount}
            touched={touched.amount}
            onChangeText={handleChange('amount')}
            onBlur={handleBlur('amount')}
            value={values.amount}
            placeholder="&#8377; 0.0"
            keyboardType="numeric"></InputData>

          <TouchableOpacity onPress={handleSubmit}>
            <Button
              style={globalStyles.BtnView}
              className="mx-10 p-1 mt-4"
              disabled={!isValid}>
              <Text className="text-base text-white">Add transaction</Text>
            </Button>
          </TouchableOpacity>

        </View>
      )}
    </Formik>
  );
};
