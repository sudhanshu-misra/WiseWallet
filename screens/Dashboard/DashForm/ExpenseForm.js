import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {Formik} from 'formik';
import InputData from '../../../components/Form/InputData';
import {Button} from 'react-native-paper';
import {globalStyles} from '../../../constants/globalStyles';
import IconPicker from '../../../components/Form/Icon/IconPicker';
import DateField from '../../../components/Form/DateField';
import {expenseIcon} from '../../../components/Form/Icon/IconData';


export const ExpenseForm = ({closeModal}) => {
  const [iconError, setIconError] = useState('');

  const validate = values => {
    const errors = {};
    const numeric = parseFloat(values.amount);
    if (isNaN(numeric)) {
      errors.amount = 'Invalid Amount';
    }
    if (!values.transactionName) {
      errors.transactionName = 'Enter Expense Name';
    }
    return errors;
  };
  let icon = '';
  const iconData = role => {
    icon = role;
  };
  let date = '';
  const getDate = selectedDate => {
    date = selectedDate;
  };

  const formSubmitHandler = values => {
    if (icon != '') {
      const data = {
        transactionName: values.transactionName,
        TransactionDate: date,
        icon: icon,
        amount: parseFloat(values.amount),
      };

      closeModal();
      console.log(data);
    } else {
      setIconError('select a category');
    }
  };

  return (
    <Formik
      initialValues={{
        transactionName: '',
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
            label="Transaction name"
            errors={errors.transactionName}
            touched={touched.transactionName}
            onChangeText={handleChange('transactionName')}
            onBlur={handleBlur('transactionName')}
            value={values.transactionName}
            placeholder="Description"
            keyboardType="default"></InputData>

          <DateField
            selectedDate={getDate}
            dateLabel={'Transaction Date'}></DateField>

          <IconPicker
            getIcon={iconData}
            iconError={iconError}
            iconData={expenseIcon}
            title={'Select Category'}
            label={'Categories'}></IconPicker>

          <InputData
            label="Amount"
            errors={errors.amount}
            touched={touched.amount}
            onChangeText={handleChange('amount')}
            onBlur={handleBlur('amount')}
            value={values.amount}
            placeholder="0.0"
            keyboardType="numeric"></InputData>

          <Button
            style={globalStyles.BtnView}
            className="mx-10 p-1 mt-4"
            disabled={!isValid}
            onPress={handleSubmit}>
            <Text className="text-base text-white">Add Transaction</Text>
          </Button>
        </View>
      )}
    </Formik>
  );
};
