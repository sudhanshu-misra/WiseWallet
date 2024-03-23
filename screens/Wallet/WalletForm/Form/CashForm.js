import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Formik} from 'formik';
import InputData from '../../../../components/Form/InputData';
import {Button} from 'react-native-paper';
import {globalStyles} from '../../../../constants/globalStyles';

import AsyncStorage from '@react-native-async-storage/async-storage';
import host from "../../../../constants/host.js"
import axios from 'axios';

export const CashForm = ({closeModal}) => {

  const validate = values => {
    const errors = {};
    const numeric = parseFloat(values.amount);
    if (isNaN(numeric)) {
      errors.amount = 'Invalid Amount';
    }
    return errors;
  };
  

  const formSubmitHandler = async(values) => {
        const data = {
          amount: parseFloat(values.amount),
          type:"cash"
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
           //console.log("this",response.data);
            //response is done //
    
          }
          catch(err){
            console.log(err);
          }
        
        closeModal();
       
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

          <InputData
            label="Balance"
            errors={errors.amount}
            touched={touched.amount}
            onChangeText={handleChange('amount')}
            onBlur={handleBlur('amount')}
            value={values.amount}
            placeholder="&#8377; 0.0"
            keyboardType="numeric"></InputData>
         
          <TouchableOpacity  onPress={handleSubmit}>
          <Button
            style={globalStyles.BtnView}
            className="mx-10 p-1 mt-4"
            disabled={!isValid}
           >
            <Text className="text-base text-white">Add cash</Text>
          </Button>
          </TouchableOpacity>
        </View>
      )}
    </Formik>
  );
};
