import React, {useState} from 'react';
import {View, Text,TouchableOpacity} from 'react-native';
import {Formik} from 'formik';
import InputData from '../../../../components/Form/InputData';
import { Button } from 'react-native-paper';
import {globalStyles} from '../../../../constants/globalStyles';
import IconPicker from '../../../../components/Form/Icon/IconPicker';
import {walletIcon} from '../../../../components/Form/Icon/IconData';

import AsyncStorage from '@react-native-async-storage/async-storage';
import host from "../../../../constants/host.js"
import axios from 'axios';

export const UpiWalletForm = ({closeModal}) => {
  const [iconError, setIconError] = useState('');

  const validate = values => {
    const errors = {};
    const numeric = parseFloat(values.amount);
    if (isNaN(numeric)) {
      errors.amount = 'Invalid Amount';
    }
    return errors;
  };
  let icon = '';
  const iconData = role => {
    icon = role;
  };

  const formSubmitHandler = async(values) => {
    if (icon != '') {
      const data = {
        walletCategory: icon,
        amount: parseFloat(values.amount),
        type:"upi"
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
              `${host.apiUrl}/api/wallet/create-wallet`,
                data,
              config
            )
          //  console.log("this",response.data);
            //response is done //
    
          }
          catch(err){
            console.log(err);
          }

      closeModal();
      console.log(data);
    } else {
      setIconError('select a category');
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
            getIcon={iconData}
            iconError={iconError}
            iconData={walletIcon}
            title={'Wallet'}
            label={'Categories'}></IconPicker>

          <InputData
            label="Balance"
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
              <Text className="text-base text-white">Add wallet</Text>
            </Button>
          </TouchableOpacity>
        </View>
      )}
    </Formik>
  );
};
