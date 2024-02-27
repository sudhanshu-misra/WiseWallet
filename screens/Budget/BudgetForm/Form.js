import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {Formik} from 'formik';
import InputData from '../../../components/Form/InputData';
import {Button} from 'react-native-paper';
import {globalStyles} from '../../../constants/globalStyles';
import IconPicker from '../../../components/Form/Icon/IconPicker';
import DateField from '../../../components/Form/DateField';
import {expenseIcon,accountIcon} from '../../../components/Form/Icon/IconData';

let endDate = '';
let startDate = '';
let icon = '';
let budget = '';

export const Form = ({closeModal}) => {
  const [iconError, setIconError] = useState('');
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

  const iconData = role => {
    icon = role;
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

  const formSubmitHandler = values => {

    if (icon != '') {

      if (budget != '') {

        if (startDate < endDate) {
          const data = {
            BudgetName: budget,
            amount: parseFloat(values.amount),
            startDate: startDate,
            EndDate: endDate,
            Account: icon,
          };

          closeModal();
          console.log(data);
          endDate = '';
          startDate = '';
          icon = '';
          budget = '';
        } else {
          setdateError('The end date cannot be earlier than the start date');
        }
      } else {
        setBudgetError('Enter Budget Name');
      }
    } else {
      setIconError('select an account');
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
            placeholder="0.0"
            keyboardType="numeric"></InputData>

          <DateField
            selectedDate={getStartDate}
            dateLabel={'Start Date'}
            error={dateError}></DateField>

          <DateField
            selectedDate={getEndDate}
            dateLabel={'End Date'}
            error={dateError}></DateField>

          <IconPicker
            getIcon={iconData}
            iconError={iconError}
            iconData={accountIcon}
            title={'Account'}
            label={'Select account'}></IconPicker>

          {/* open close button (Repeat for every month) */}

          <Button
            style={globalStyles.BtnView}
            className="mx-10 p-1 mt-5"
            disabled={!isValid}
            onPress={handleSubmit}>
            <Text className="text-base text-white">Add Budget</Text>
          </Button>
        </View>
      )}
    </Formik>
  );
};
