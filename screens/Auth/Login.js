import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import HeadBack from '../../components/BackHeader';
import ButtonComp from '../../components/ButtonComp';
import {Formik} from 'formik';
import * as yup from 'yup';
import host from '../../constants/host';
import axios from 'axios';

const Login = ({navigation}) => {
  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .email('Invalid email format')
      .required('Email is required'),
  });

  const handleLogIn = async values => {
    const email = values.email;
    console.log(email);
    try {
      const res = await axios.post(`${host.apiUrl}/api/user/request-login`, {
        email: email,
      });
      console.log('here1', res.data);
      const token = res.data.token;
      navigation.navigate('Verification', {
        email: email,
        token: token,
      });
    } catch (err) {
      console.log('here2', err.response.data);
    }
  };

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <HeadBack title="Login" navigation={navigation} />

      <View className="m-4 mt-[4vh] ">
        <Formik
          initialValues={{email: ''}}
          validationSchema={validationSchema}
          onSubmit={handleLogIn}>
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

              <TouchableOpacity onPress={handleSubmit}>
                <ButtonComp title={'Login'} />
              </TouchableOpacity>
            </View>
          )}
        </Formik>
      </View>

      <View className="mt-3">
        <Text className="text-center text-base">
          Don't have an account?{' '}
          <Text
            className="text-[#497320] font-bold text-base"
            onPress={() => navigation.navigate('Signup')}>
            Sign Up
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default Login;
