import React, {useState} from 'react';
import {View, Text,TouchableOpacity} from 'react-native';
import {Formik} from 'formik';
import InputData from '../../../components/Form/InputData';
import {Button} from 'react-native-paper';
import {globalStyles} from '../../../constants/globalStyles';
import IconPicker from '../../../components/Form/Icon/IconPicker';
import DateField from '../../../components/Form/DateField';
import {accountIcon, incomeIcon} from '../../../components/Form/Icon/IconData';

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

  const formSubmitHandler = values => {
    if (icon != '') {
      if (account != '') {
        const data = {
          incomeName: values.incomeName,
          incomeDate: date,
          amount: parseFloat(values.amount),
          category: icon,
          account: account,
        };
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
            placeholder="0.0"
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
