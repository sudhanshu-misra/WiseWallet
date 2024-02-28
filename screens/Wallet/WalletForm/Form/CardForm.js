import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Formik} from 'formik';
import InputData from '../../../../components/Form/InputData';
import {Button} from 'react-native-paper';
import {globalStyles} from '../../../../constants/globalStyles';
import DateField from '../../../../components/Form/DateField';

let regex = /^[0-9]{16}$/;

export const CardForm = ({closeModal}) => {

  const validate = values => {
    const errors = {};
    const numeric = parseFloat(values.amount);
    if (isNaN(numeric)) {
      errors.amount = 'Invalid Amount';
    }
    if (!values.bankName) {
      errors.bankName = 'Enter bank name';
    }
    if (!values.cardNumber) {
      errors.cardNumber= 'Enter your card number';
    }
    if(!regex.test(values.cardNumber)){
      errors.cardNumber= 'Enter a valid card number';
     }

    return errors;
  };

  let expirydate = '';
  const getexpiryDate = selectedDate => {
    expirydate = selectedDate;
  };
  
  const formSubmitHandler = values => {
        const data = {
          cardName:card , 
          bankName: values.bankName,
          expiryDate: expirydate,
          cardAmount: parseFloat(values.amount),
          cardNumber:cardNumber
        };

        closeModal();
        console.log(data);
  };

  return (
    <Formik
      initialValues={{
        bankName: '',
        amount: '',
        cardNumber:''
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
            label="Bank name"
            errors={errors.bankName}
            touched={touched.bankName}
            onChangeText={handleChange('bankName')}
            onBlur={handleBlur('bankName')}
            value={values.bankName}
            placeholder="bank name"
            keyboardType="default"></InputData>

           <InputData
            label="Card number"
            errors={errors.cardNumber}
            touched={touched.cardNumber}
            onChangeText={handleChange('cardNumber')}
            onBlur={handleBlur('cardNumber')}
            value={values.cardNumber}
            placeholder="0000-0000-0000-0000"
            keyboardType="numeric"></InputData>

          <DateField
            selectedDate={getexpiryDate}
            dateLabel={'Expire date'}></DateField>

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
              <Text className="text-base text-white">Add card</Text>
            </Button>
          </TouchableOpacity>
        </View>
      )}
    </Formik>
  );
};
