import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import HeadBack from '../../components/BackHeader';
import ButtonComp from '../../components/ButtonComp';
import {Formik} from 'formik';
import * as yup from 'yup';

const Signup = props => {
  const validationSchema = yup.object().shape({
    name: yup
      .string()
      .min(3, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Name is required'),
    email: yup
      .string()
      .email('Invalid email format')
      .required('Email is required'),
    mobileNumber: yup
      .string()
      .length(10, 'Mobile number must be 10 digits')
      .required('mobile number is required'),
  });

  const handleSignUp = values => {
    //signUpData
    const signUpData = {
      name: values.name,
      email: values.email,
      mobileNumber: values.mobileNumber,
    };

    console.log(signUpData);

    props.navigation.navigate('Verification');
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}>
      <HeadBack title="Sign Up" navigation={props.navigation} />
      <View className="m-4 mt-[4vh] ">
        <Formik
          initialValues={{email: '', mobileNumber: '', name: ''}}
          validationSchema={validationSchema}
          onSubmit={handleSignUp}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <View className="flex flex-col gap-4 ">
              <View>
                <TextInput
                  placeholder="Name"
                  onChangeText={handleChange('name')}
                  onBlur={handleBlur('name')}
                  value={values.name}
                  className={`border-[1px] border-gray-300 p-3 rounded-xl ${
                    errors.name && touched.name && ` border-red-500`
                  }`}
                />
                {errors.name && touched.name && (
                  <Text className="text-red-500 mt-1 mx-2">{errors.name}</Text>
                )}
              </View>
              <View>
                <TextInput
                  placeholder="Email"
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                  className={`border-[1px] border-gray-300 p-3 rounded-xl ${
                    errors.email && touched.email && `border-red-500`
                  }`}
                />
                {errors.email && touched.email && (
                  <Text className="text-red-500 mt-1 mx-2">{errors.email}</Text>
                )}
              </View>
              <View>
                <TextInput
                  placeholder="Mobile Number"
                  onChangeText={handleChange('mobileNumber')}
                  onBlur={handleBlur('mobileNumber')}
                  value={values.mobileNumber}
                  keyboardType="numeric"
                  className={`border-[1px] border-gray-300 p-3 rounded-xl ${
                    errors.mobileNumber &&
                    touched.mobileNumber &&
                    `border-red-500`
                  }`}
                />
                {errors.mobileNumber && touched.mobileNumber && (
                  <Text className="text-red-500 mt-1 mx-2">
                    {errors.mobileNumber}
                  </Text>
                )}
              </View>

              <TouchableOpacity onPress={handleSubmit}>
                <ButtonComp title={'Sign Up'} />
              </TouchableOpacity>
            </View>
          )}
        </Formik>
      </View>

      <View className="mt-3">
        <Text className="text-center text-base">
          Already have an account?{' '}
          <Text
            className="text-[#497320] font-bold text-base"
            onPress={() => props.navigation.navigate('Login')}>
            Login
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default Signup;
