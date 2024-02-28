import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Formik} from 'formik';
import InputData from '../../../../components/Form/InputData';
import {Button} from 'react-native-paper';
import {globalStyles} from '../../../../constants/globalStyles';

export const CashForm = ({closeModal}) => {

  const validate = values => {
    const errors = {};
    const numeric = parseFloat(values.amount);
    if (isNaN(numeric)) {
      errors.amount = 'Invalid Amount';
    }
    return errors;
  };
  

  const formSubmitHandler = values => {
        const data = {
          cashAmount: parseFloat(values.amount)
        };

        closeModal();
        console.log(data);
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
